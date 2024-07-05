'use server';
import timer from '@/lib/timer';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth';
import { z } from 'zod';
import { AuthError } from 'next-auth';

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

  const { email, password } = validatedFields.data;
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
      // TODO: implement callbackUrl
      // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error);
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid email or password',
            success: '',
          };
        default:
          return {
            error: 'Something went wrong',
            success: '',
          };
      }

      throw error;
    }
  }
  // return {
  //   error: '',
  //   success: 'Email successfully sent',
  // };
};
