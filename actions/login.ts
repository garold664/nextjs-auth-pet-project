'use server';
import timer from '@/lib/timer';
import { LoginSchema } from '@/schemas';
import { z } from 'zod';

export const login = async (
  _prevState: { error: string; success: string },
  formData: FormData
  // values: z.infer<typeof LoginSchema>
) => {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // await timer(2000);

  // console.log(validatedFields);
  if (!validatedFields.success)
    return {
      error: 'Invalid email or password',
      success: '',
    };
  return {
    error: '',
    success: 'Email successfully sent',
  };
};
