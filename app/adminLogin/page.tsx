"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signIn.email(
      {
        email: email,
        password: password,
        // name: "Admin",
      },
      {
        onError: (error) => {
          toast.add({
            title: error.error.error,
            description: "Login failed: " + error.error.message,
          });
        },
        onSuccess: (data) => {
          toast.add({
            title: "Success",
            description: "Login successful!",
          });
          router.replace("/admin");
        },
      },
    );
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
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              E-post
            </label>

            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-post"
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
