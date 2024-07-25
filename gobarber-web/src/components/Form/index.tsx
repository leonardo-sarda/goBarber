import { Form as UnformForm } from '@unform/web';
import { ComponentPropsWithRef, FC } from 'react';

type FormProps = ComponentPropsWithRef<typeof UnformForm>;

const Form = UnformForm as FC<Partial<FormProps>>;

export { Form };
