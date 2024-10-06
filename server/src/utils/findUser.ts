import prisma from "../client/prismaClient";
import User from "../interface/User";

const findUser = async (email: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user ? (user as User) : null;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export default findUser;
