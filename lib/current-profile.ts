import { auth } from "@clerk/nextjs";
import prismadb from "./prismaDb";



export const currentProfile = async () => {
  const { userId } = auth();

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