import { NextApiRequest } from "next";
import { getAuth } from "@clerk/nextjs/server";
import prismadb from "./prismaDb";



export const currentProfilePages = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return null;
  }

  const profile = await prismadb.profile.findUnique({
    where: {
      userId
    }
  });

  return profile;
}