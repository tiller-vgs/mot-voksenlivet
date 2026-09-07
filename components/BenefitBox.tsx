function BenefitBox({
  title,
  benefits,
}: {
  title: string;
  benefits: string[];
}) {
  return (
    <article className="flex flex-col min-w-xl min-h-64 text-light-text m-20 p-10 rounded-xl bg-success">
      <h2 className="text-4xl pb-3 font-bold">{title}</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index} className="list-disc ml-15 text-xl">
            {benefit}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default BenefitBox;
