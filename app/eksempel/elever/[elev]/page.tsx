import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

async function Elev({ params }: { params: Promise<{ elev: string }> }) {
  // TYPESCRIPT / JAVASCRIPT
  const data = await params;

  // TSX / JSX (html med javascript når vi skriver {})
  return (
    <div>
      <Link href={`/eksempel/elever/${data.elev}`}>
        <Button>{data.elev}</Button>
      </Link>
    </div>
  );
}

export default Elev;
