import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (name: string, email: string, password: string) => {
  try {
    await prisma.user.create({
      data: {
        user_id: generateRandomUserId(email),
        name: name,
        email: email,
        password: password,
      },
    });
    await prisma.$disconnect();
  } catch (err) {
    console.error(err);
    throw new Error("Required");
  }
};

const generateRandomUserId = (email: string) => {
  return crypto.randomUUID() + "-" + email;
};

export default createUser;
