import { PrismaClient } from "@prisma/client";
import User from "../interface/User";

const prisma = new PrismaClient();

const findUser = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user != null) {
    return <User>user;
  }

  return null;
};

export default findUser;
