import { prisma } from '../lib/prisma'
import { Connection } from '@prisma/client/edge';
import { unstable_noStore as noStore } from "next/cache";

export const fetchAllConnections = async () => {
  noStore();

  const connections: Connection[] = await prisma.connection.findMany()
  return connections
}