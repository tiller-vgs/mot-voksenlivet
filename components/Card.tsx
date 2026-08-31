function Card({ student }: { student: string }) {
  return (
    <div className="border-2 border-white rounded-lg p-4 w-fit m-4 hover:bg-slate-600">
      <p className="text-white text-xl text-center ">{student}</p>
    </div>
  );
}

export default Card;
