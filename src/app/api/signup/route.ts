import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // ✅ parse JSON

    const { fullName, email, password, roles } = body;

    const externalRes = await fetch('https://carrental-150p.onrender.com/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password : password,
        roles : roles,
      }),
    });

    if (!externalRes.ok) {
      console.log(externalRes, "externalRes")
      return NextResponse.json({ error: 'Signup failed' }, { status: 400 });
    }

    const data = await externalRes.json();
    const token = data.token;

    if (!token) {
      return NextResponse.json({ error: 'No token returned' }, { status: 500 });
    }

    const res = NextResponse.json({ message: "User registered successfully" });

    res.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
