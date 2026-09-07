import Link from "next/link";
import { Button } from "./ui/button";
import pageLinks from "@/lib/PageLinks.json";

function Navbar() {
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
