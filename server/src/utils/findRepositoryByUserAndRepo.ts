import prisma from "../client/prismaClient";
import Repository from "../interface/Repository";

const findRepositoryByUserAndRepo = async (user_id: string, url: string) => {
  try {
    const repository: Repository | null = await prisma.respository.findFirst({
      where: {
        user_id: user_id,
        repo_url: url,
      },
    });
    return repository;
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
};

export default findRepositoryByUserAndRepo;
