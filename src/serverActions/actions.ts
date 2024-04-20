"use server";
import { prismaConnect } from "@/db/prismaGenerate";

import { NEXT_AUTH_CONFIG } from "@/db/authConfig";
import { getServerSession } from "next-auth";
import Email from "next-auth/providers/email";

const prisma = prismaConnect;
export interface User {
  id?: number;
  name: string;
  email: string;
  mobile?: string;
  dateOfBirth?: Date;
  address?: string;
  city?: string;
  state?: string;
  country?: string;

  password: string;
  createdAt?: Date;
  totalToken?: number;
}
export default async function getUserData() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const authenticated = session?.user?.name ? true : false;
  var user = session?.user?.name?.split(" ");
  user?.length >= 1
    ? (user = user[0]?.charAt(0).toUpperCase() + user[0]?.slice(1))
    : (user = "Guest");

  return { authenticated, session, user };
}

export async function getFullUserData(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

export async function updateUser(email: string, data: any) {
  const updatedUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      ...data,
    },
  });

  return updatedUser;
}

export async function getAllUsersName() {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      id: true,
      createdAt: true,
    },
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
}

