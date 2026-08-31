import Card from "@/components/Card";

function SofiiaPage() {
  const favoriteStudents = [
    "Eivind",
    "Sofiia",
    "Jonas",
    "Marius",
    "Knut",
    "Bent",
  ];

  return (
    <div className="min-h-screen bg-slate-800">
      <p className="text-white text-2xl">Hei Sofiia</p>
      <h1 className="text-center mt-20">Mine favorittelever</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {favoriteStudents.map((student) => (
          <Card student={student} key={student} />
        ))}
      </div>
    </div>
  );
}

export default SofiiaPage;
