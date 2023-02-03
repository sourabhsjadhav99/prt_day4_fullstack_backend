const secret = process.env.SECRET_KEY;
var jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res
        .status(403)
        .json({ status: "Failed", message: "Not authenticated user" });
    }else{
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
              return res.status(403).json({
                status: "failed",
                message: "Invalid token",
              });
            }
            req.user = user
            next()
          })
    }
  

  }
  module.exports=authenticateToken