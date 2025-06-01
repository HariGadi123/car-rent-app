// app/signup/page.tsx
import { redirect } from "next/navigation";
import { getAuthToken } from "../../../lib/auth";

export default async function SignupPage() {
  const token = await getAuthToken();
  if (token) {
    redirect("/home");
  }

  return (
    <form action="/api/signup" method="POST">
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="username" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
