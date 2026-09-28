"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export async function getAllCompanies() {
  const companies = await db.company.findMany();
  return companies;
}

// export async function createCompany(name: string) {
//   // Check if admin

//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session?.user) {
//     throw new Error("Not authenticated");
//   }

//   try {
//     const company = await db.company.create({
//       data: {
//         name,
//         description: "This is a default description for the company.",
//       },
//     });
//   } catch (error) {
//     throw new Error("Error creating company: " + error);
//   }

//   return "Success!";
// }
