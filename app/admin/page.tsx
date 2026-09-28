import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  //   async function handleCreateCompany() {
  //     const response = await createCompany("New Company");
  //     toast.add({
  //       title: "Success",
  //       description: response,
  //     });
  //   }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>WOW! Du er admin!</p>
    </div>
  );
}

export default AdminPage;
