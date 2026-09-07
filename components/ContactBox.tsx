import Link from "next/link";
import { Button } from "./ui/button";

function ContactBox({ title }: { title: string }) {
  return (
    <section className="w-full flex text-light-text py-10 bg-black/75 flex-col justify-center text-center">
      <h3 className="text-4xl  font-bold">{title}</h3>
      <p className="text-xl font-semibold mt-5 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <Link href="/contact">
          <Button className="text-xl" size="lg">
            Kontakt oss
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ContactBox;
