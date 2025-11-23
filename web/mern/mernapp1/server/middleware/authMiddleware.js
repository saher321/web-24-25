import jwt from 'jsonwebtoken';
export const authMiddleware = async (req, res, next) => {
  const userToken = req.headers.authorization;
  if (!userToken) return res.send({status: false, message:"You must login to continue"});

  try {
    const token = userToken.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.send({status: false, message: "Token is not valid"});
      }

      req.user = user;
      next();
    });
  } catch (error) {
    console.log("Error: ", error)
  }
}