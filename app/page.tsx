import BenefitBox from "@/components/BenefitBox";
import ContactBox from "@/components/ContactBox";
import MainContainer from "@/components/MainContainer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainContainer>
      <section className="flex flex-col mt-10 md:flex-row">
        <div className="flex flex-col gap-5 text-center justify-center w-1/2">
          <h1 className="text-6xl font-bold">Lorem ipsum</h1>
          <p className="text-2xl text-muted-foreground font-semibold">
            Dolor sit amet
          </p>
        </div>
        <div className="flex justify-center w-1/2">
          <img
            className="rounded-lg border-8 border-primary/75"
            src="/path/to/image.jpg"
            alt="Description"
          />
        </div>
      </section>
      :
      <section className="flex flex-col justify-around mt-10 md:flex-row">
        <BenefitBox
          title={"For foreldre og elever:"}
          benefits={["Hei", "Hei2"]}
        />
        <BenefitBox
          title={"For bedrifter og organisasjoner:"}
          benefits={["oinwdojw", "ounoidw", "oimwoi"]}
        />
      </section>
      <ContactBox title={"Interessert? Kontakt oss"} />
    </MainContainer>
  );
}
