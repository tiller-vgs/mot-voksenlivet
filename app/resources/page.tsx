import ResourcesBox from "@/components/ResourcesBox";

function ResourcesPage() {
  return (
    <div>
      <section className="w-1/2 p-3">
        <h1 className="text-5xl font-bold">Ressurser</h1>
        <p className="text-2xl pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="flex flex-col justify-around mt-10 md:flex-row">
        <ResourcesBox bilde="/path/to/image1.jpg" description="CV mal" />
        <ResourcesBox bilde="/path/to/image2.jpg" description="Dokumenter" />
        <ResourcesBox bilde="/path/to/image3.jpg" description="Veiledning" />
      </section>
    </div>
  );
}

export default ResourcesPage;
