module.exports = function(Orders) {

  //Impedir que um usuário crie pedidos para outro
  Orders.beforeRemote('create', function(ctx, modelInstance, next) {
    ctx.args.data.userId = ctx.req.accessToken.userId;
    next();
  });
  
};