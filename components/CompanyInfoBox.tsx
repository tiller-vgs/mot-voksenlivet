import Link from "next/link";
import { Button } from "./ui/button";

function CompanyInfoBox({
  bilde,
  title,
  description,
}: {
  bilde: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-row  w-2/3 mt-10 m-auto min-h-64 text-light-text p-10 rounded-xl bg-primary/75">
      <div className="flex justify-center w-1/3">
        <img
          src={bilde}
          alt={"LOGO for " + title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center text-center w-2/3">
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
        <p className="mt-2">{description}</p>
        <Link href={"company/" + title} className="mt-4 text-light-text">
          <Button variant="secondary" className="w-25">
            Les mer
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default CompanyInfoBox;
