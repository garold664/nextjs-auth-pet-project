import { LoginSchema } from '@/schemas';
import { z } from 'zod';

export const login = async (
  _prevState: { error: string; success: string },
  formData: FormData
  // values: z.infer<typeof LoginSchema>
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const validatedFields = LoginSchema.safeParse({ email, password });

  console.log(validatedFields);
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
