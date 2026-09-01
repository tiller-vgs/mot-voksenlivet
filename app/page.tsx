import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p className="text-9xl">Hallo Eivind</p>
      <p className="text-white font-bold ">Har du vondt i hodet?</p>
      <Link href="/eksempel/sofiia">
        <Button>Klikk her</Button>
      </Link>
      <Textarea placeholder="Skriv noe her" />
    </div>
  );
}
