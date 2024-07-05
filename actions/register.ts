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
  const validatedFields = RegisterSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
  });

  // await timer(2000);

  if (!validatedFields.success)
    return {
      error: 'Invalid name, email or password',
      success: '',
    };

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  const existingUser = await getUserByEmail(validatedFields.data.email);

  if (existingUser) {
    return {
      error: `User with email ${validatedFields.data.email} already exists`,
      success: '',
    };
  }

  await db.user.create({
    data: {
      email: validatedFields.data.email,
      name: validatedFields.data.name,
      password: hashedPassword,
    },
  });

  return {
    error: '',
    success: 'Account successfully created!',
  };
};
