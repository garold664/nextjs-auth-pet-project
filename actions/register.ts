'use server';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import timer from '@/lib/timer';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
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

  // await timer(2000);

  if (!validatedFields.success)
    return {
      error: 'Invalid name, email or password',
      success: '',
    };

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: `User with email ${email} already exists`,
      success: '',
    };
  }

  await db.user.create({
    data: {
      email: email,
      name: name,
      password: hashedPassword,
    },
  });

  return {
    error: '',
    success: 'Account successfully created!',
  };
};
