"use server";

import { prismaConnect } from "@/db/prismaGenerate";

interface Transaction {
  amountUSD: number;
  sessionID: string;
  Tokens: number;
  Status: string;
  description?: string | null;
  userEmail: string;
}

const prisma = prismaConnect;

export const createTransactions = async (transaction: Transaction) => {
  const newUser = await prisma.transaction.create({
    data: {
      amountUSD: transaction.amountUSD,
      Tokens: transaction.Tokens,
      sessionID: transaction.sessionID,
      Status: transaction.Status,
      description: transaction.description,
      userEmail: transaction.userEmail,
    },
  });

  return newUser;
};

export const updateTransaction = async (sessionID: string, status: string) => {
  const updatedTransaction = await prisma.transaction.update({
    where: {
      sessionID: sessionID,
    },
    data: {
      Status: status,
    },
  });

  return updatedTransaction;
};

export const getTransactions = async (email: string) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      userEmail: email,
    },
  });

  return transactions;
};

export const getTransaction = async (sessionID: string) => {
  const transaction = await prisma.transaction.findUnique({
    where: {
      sessionID: sessionID,
    },
  });

  return transaction;
};

export const updateToken = async (email: string, token: number) => {
  const getUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if(!getUser) return null;
  
  const updatedToken = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      totalToken: getUser.totalToken + token,
    },
  });

  return updatedToken;
};
