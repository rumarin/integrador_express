module.exports = function(req, res, next){
  console.log("middleware");
  res.locals.user = {
    name: "jose",
    id:1,
    admin: true
  };
  next();
};