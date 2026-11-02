import jwt from "jsonwebtoken";

function createJwt(user: any) {
  const secret = process.env.JWT_SECRET;
  if (secret === undefined) {
    throw new Error("Secret key is not founded!!");
  }

  const payload = {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
  };

  const accessToken = jwt.sign(payload, secret, {
    expiresIn: "15m",
    algorithm: "HS256",
  });

  return accessToken;
}

export default createJwt;
