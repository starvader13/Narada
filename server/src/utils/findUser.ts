import { PrismaClient } from "@prisma/client";
import User from "../interface/User";

const prisma = new PrismaClient();

const findUser = async (email: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        archived: false,
      },
    });
    await prisma.$disconnect();
    return user ? (user as User) : null;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
};

export default findUser;
