import { getAllCompanies } from "@/actions/company";
import CompanyInfoBox from "@/components/CompanyInfoBox";
import MainContainer from "@/components/MainContainer";

async function BedriftPage() {
  const companies = await getAllCompanies();

  return (
    <MainContainer>
      <h1 className="flex justify-center text-6xl font-bold mt-10">
        Bedrifter vi har samarbeidet med
      </h1>
      {companies.map((company) => (
        <CompanyInfoBox
          key={company.id}
          bilde={company.imgUrl || ""}
          title={company.name}
          description={company.description}
        />
      ))}
    </MainContainer>
  );
}

export default BedriftPage;
