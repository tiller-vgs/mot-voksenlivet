import { getAllActivities } from "@/actions/freetimeActivity";
import ActivityInfoBox from "@/components/ActivityInfoBox";
import MainContainer from "@/components/MainContainer";

async function FreeTimePage() {
  const activities = await getAllActivities();
  return (
    <MainContainer>
      <h1 className="flex justify-center text-6xl font-bold mt-10">
        Fritidsaktiviteter
      </h1>
      {activities.map((activity) => (
        <ActivityInfoBox
          key={activity.id}
          bilde={activity.imgUrl || ""}
          navn={activity.name}
          description={activity.description}
          imgUrl={activity.imgUrl}
          URL={activity.URL}
        />
      ))}
    </MainContainer>
  );
}

export default FreeTimePage;
