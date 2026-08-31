import React from "react";

async function Elev({ params }: { params: Promise<{ elev: string }> }) {
  // TYPESCRIPT / JAVASCRIPT
  const data = await params;

  // TSX / JSX (html med javascript når vi skriver {})
  return <div>{data.elev}</div>;
}

export default Elev;
