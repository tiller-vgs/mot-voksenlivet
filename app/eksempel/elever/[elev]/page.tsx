import { getStands } from "@/actions/test";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

async function Elev({ params }: { params: Promise<{ elev: string }> }) {
  // TYPESCRIPT / JAVASCRIPT
  const data = await params;

  const stands = await getStands();

  // TSX / JSX (html med javascript når vi skriver {})
  return (
    <div>
      <Link href={`/eksempel/elever/${data.elev}`}>
        <Button>{data.elev}</Button>
      </Link>
      {stands.map((stand) => (
        <div key={stand.id}>
          <h2>{stand.title}</h2>
          <p>{stand.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Elev;
