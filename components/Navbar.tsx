import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-secondary text-background">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul className="flex space-x-8 text-2xl font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
