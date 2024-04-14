"use server";

import { NEXT_AUTH_CONFIG } from "@/db/authConfig";
import { getServerSession } from "next-auth";

export default async function getUserData() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const authenticated = session?.user?.name ? true : false;
  var user = session?.user?.name?.split(" ");
  user?.length >= 1
    ? (user = user[0]?.charAt(0).toUpperCase() + user[0]?.slice(1))
    : (user = "Guest");

  return { authenticated, session, user };
}

