import * as jwt from "jsonwebtoken";

export function validateUser(token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
}
