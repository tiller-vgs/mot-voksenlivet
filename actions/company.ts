"use server";

import { db } from "@/lib/db";

export async function getAllCompanies() {
  const companies = await db.company.findMany();
  return companies;
}
