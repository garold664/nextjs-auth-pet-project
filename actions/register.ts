import timer from '@/lib/timer';
import { LoginSchema, RegisterSchema } from '@/schemas';
import { z } from 'zod';

export const register = async (
  _prevState: { error: string; success: string },
  formData: FormData
  // values: z.infer<typeof LoginSchema>
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const validatedFields = RegisterSchema.safeParse({ email, password, name });

  await timer(2000);

  // console.log(validatedFields);
  if (!validatedFields.success)
    return {
      error: 'Invalid name, email or password',
      success: '',
    };
  return {
    error: '',
    success: 'Account successfully created!',
  };
};
