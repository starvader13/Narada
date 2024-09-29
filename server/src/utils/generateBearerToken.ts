import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateBearerToken = (email: string) => {
  let token: string;

  if (SECRET_KEY == undefined) {
    throw new Error("SECRET KEY DOES NOT EXIST");
  }

  try {
    token = jwt.sign({ email: email }, SECRET_KEY, { expiresIn: "1d" });
    return "Bearer " + token;
  } catch (err) {
    console.error("Failed to create a jwt token.");
    return null;
  }
};

export default generateBearerToken;
