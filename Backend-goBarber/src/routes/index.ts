import { Router } from "express";
import appointmentsRouter from "./appointments.routes";
import usersRoutes from "./users.routes";
import sessionsRouter from "./sessions.routes";

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRouter);
/*routes.use('/appointments', appointmentsList);*/




export default routes;
