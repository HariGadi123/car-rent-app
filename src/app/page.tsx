// app/page.tsx
import { getAuthToken } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const token = await getAuthToken(); // ✅ async

  if (token) {
    redirect("/home");
  } else {
    redirect("/login");
  }
}
