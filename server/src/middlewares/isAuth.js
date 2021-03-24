import { verify } from "jsonwebtoken";
import { BadRequest } from "../utils/errors/ApiError";

export default function isAuth(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new BadRequest("Authorization token not provided");
  }

  const bearerToken = authToken.split(" ")[1];

  if (!bearerToken) {
    throw new BadRequest("Bearer token not found");
  }

  try {
    const { id } = verify(bearerToken, "secretkey");
    req.user = {
      id,
    };
    return next();
  } catch (error) {
    throw new BadRequest("Token invalid");
  }
}
