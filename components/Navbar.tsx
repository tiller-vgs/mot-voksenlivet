"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import pageLinks from "@/lib/PageLinks.json";
import { authClient } from "@/lib/auth-client";

function Navbar() {
  const session = authClient.useSession();

  // if (session.isPending) {
  //   return <div>Loading...</div>;
  // }

  return (
    <nav className="flex items-center justify-between p-4 bg-secondary text-light-text">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul className="flex space-x-8 text-2xl font-bold">
          {Object.entries(pageLinks).map(([key, value]) => (
            <li key={key}>
              <Button className="text-light-text text-2xl" variant="link">
                <Link href={value}>{key}</Link>
              </Button>
            </li>
          ))}
          {session.data && (
            <li>
              <Button
                onClick={() => {
                  authClient.signOut();
                }}
                className="text-light-text text-2xl"
                variant="link"
              >
                Logg ut
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
