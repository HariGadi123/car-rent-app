// app/api/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get('name');
  const username = formData.get('username');
  const password = formData.get('password');

  const externalRes = await fetch('https://carrental-150p.onrender.com/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, username, password }),
  });

  if (!externalRes.ok) {
    return NextResponse.json({ error: 'Signup failed' }, { status: 400 });
  }

  const data = await externalRes.json();
  const token = data.token;

  if (!token) {
    return NextResponse.json({ error: 'No token returned' }, { status: 500 });
  }

  const res = NextResponse.redirect('/home');
  res.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return res;
}
