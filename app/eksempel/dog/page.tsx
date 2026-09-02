import fetchDog from "@/actions/test";
import { DogFact } from "@/types/DogFacts";

async function Dog() {
  const dogFacts = await fetchDog();

  return <div className="min-h-screen">{dogFacts.data[0].attributes.body}</div>;
}

export default Dog;
