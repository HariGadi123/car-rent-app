import { getAuthToken } from "../../../lib/auth";
import { redirect } from "next/navigation";

export default function HomePage() {
  const token = getAuthToken();

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome to Home</h1>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
