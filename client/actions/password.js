"use server";

export async function createPassword(data) {
  return generateApiUrl("password", "/create");
}
