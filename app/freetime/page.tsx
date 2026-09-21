import { getAllActivities } from "@/actions/freetimeActivity";
import CompanyInfoBox from "@/components/CompanyInfoBox";
import MainContainer from "@/components/MainContainer";

async function FreeTimePage() {
  const activities = await getAllActivities();
  return (
    <MainContainer>
      <h1 className="flex justify-center text-6xl font-bold mt-10">
        Tilbudet fritidsaktivitetene
      </h1>
      {activities.map((activity) => (
        <CompanyInfoBox
          key={activity.id}
          bilde={activity.imgUrl || ""}
          title={activity.name}
          description={activity.description}
        />
      ))}
    </MainContainer>
  );
}

export default FreeTimePage;
