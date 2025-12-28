'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  cookies().delete('session'); // or auth cookie name you use
  redirect('/signup');
}
