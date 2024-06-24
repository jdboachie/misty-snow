'use server'

import { prisma } from '../lib/prisma'
import { Connection, Query } from '@prisma/client/edge';
import { unstable_noStore as noStore } from "next/cache";

export const fetchAllConnections = async () => {
  noStore();

  const connections: Connection[] = await prisma.connection.findMany()
  return connections
}

export const fetchAllQueries = async () => {
  noStore();

  const queries: Query[] = await prisma.query.findMany()
  return queries
}