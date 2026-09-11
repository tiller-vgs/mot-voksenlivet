import { Button } from "./ui/button";

function ResourcesBox({
  bilde,
  description,
}: {
  bilde?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        className="rounded-lg border-8 border-primary/75"
        src={bilde}
        alt={"Bilde for " + description}
      />
      <p className="text-lg font-medium">{description}</p>
      <Button className="text-xl" size="lg">
        Last ned
      </Button>
    </div>
  );
}

export default ResourcesBox;
