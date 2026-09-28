"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function LoginPage() {
  const [brukernavn, setBrukernavn] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Brukernavn:", brukernavn);
    console.log("Passord:", password);

    // Her kan du senere koble til prisma-database
  };

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold pt-5">Logg inn Admin</h1>

        <p className="text-xl pt-5 pl-1 text-gray-600">
          Logg inn med admin-brukeren din
        </p>

        <form onSubmit={handleLogin} className="pt-8">
          <div className="mb-5">
            <label
              htmlFor="brukernavn"
              className="block text-lg font-medium mb-2"
            >
              Brukernavn
            </label>

            <input
              id="brukernavn"
              type="text"
              value={brukernavn}
              onChange={(e) => setBrukernavn(e.target.value)}
              placeholder="Brukernavn"
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                text-lg
                outline-none
                focus:ring-2
                color: secondary
                
              "
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Passord
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Skriv inn passord"
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                text-lg
                outline-none
                focus:ring-2
                focus:color: secondary
              "
            />
          </div>

          <Button type="submit" className="flex justify-center">
            Logg inn
          </Button>
        </form>
      </div>
    </main>
  );
}
