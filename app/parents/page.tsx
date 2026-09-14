function page() {
  return (
    <div className="p-3">
      <h1 className="text-4xl font-bold pt-5">For foreldre</h1>
      <section className="pl-2 mt-5 bg-primary/75 border rounded-2xl">
        <p className="text-xl text-light-text pt-5 pl-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <iframe
          className="pt-5 mb-5 display-flex justify-center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Aq5WXmQQooo?si=-rB3jB1bZQyIdX0j"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}

export default page;
