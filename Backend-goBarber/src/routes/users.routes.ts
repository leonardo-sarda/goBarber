import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";

import CreateUsersService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";
import ListUsersService from "../repositories/UsersRepository";

import User from "../models/User";
import { getCustomRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.get("/", async (request, response) => {
  try {
    const listUsers = new ListUsersService(); // Instancie o serviço
    const users = await listUsers.execute(); // Busque todos os usuários
    return response.json(users); // Retorne os usuários
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUsersService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    const updateAvatar = new UpdateUserAvatarService();

    const user = await updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
);

export default usersRoutes;
