import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createRepository = async (url: string, user_id: string) => {
  try {
    const db = await prisma.respository.create({
      data: {
        user_id: user_id,
        repo_url: url,
      },
    });
  } catch (err) {
    throw new Error("Failed to insert data in repository");
  }
};

export default createRepository;
