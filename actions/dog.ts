"use server";
import { DogFact } from "@/types/DogFacts";

export default async function fetchDog() {
  const data = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
  const dogFacts: DogFact = await data.json();
  return dogFacts;
}
