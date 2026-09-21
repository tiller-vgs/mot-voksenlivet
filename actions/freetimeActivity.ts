"use server";

import { db } from "@/lib/db";

export async function getAllActivities() {
  const activities = await db.activity.findMany();
  return activities;
}
