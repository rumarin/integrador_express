module.exports = function auth(req,res,next){
  let {admin, name} = res.locals.user;
  let message = admin ? `bienvenido ${name}, eres admin`: "no eres admin"
  console.log(message);
  next();
};