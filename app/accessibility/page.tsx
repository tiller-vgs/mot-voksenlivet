import ContactBox from "@/components/ContactBox";

function AccessibilityPage() {
  return (
    <div>
      <section className="pl-2 mb-7">
        <h1 className="text-4xl font-bold pt-5">Tilgjengelighetserklæring</h1>
        <p className="text-xl pt-5 pl-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="text-4xl font-bold pt-5">Lorem ipsum</h2>
        <p className="text-xl pt-5 pl-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3 className="text-4xl font-bold pt-5">Lorem ipsum</h3>
        <ol className="list-decimal ml-6">
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
        </ol>
      </section>
      <ContactBox title="Kontakt og tilbakemelding" />
    </div>
  );
}

export default AccessibilityPage;
