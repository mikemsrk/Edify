var ids = {};

if(process.env.NODE_ENV == "production"){
 ids.github = {
   clientID: '13aeb27bf031b456a0e2',
   clientSecret: 'deba9ae2ab059c9ec1b90cfabb5c2e607e3fc39c',
   callbackURL: 'https://edify29.herokuapp.com/auth/github/callback'
  };
}else{
  ids.github = {
    clientID: '554f86f258a7ffe20b96',
    clientSecret: '22626a4b4dbeed3f80ba8664fb3f86dbd88b3d5f',
    callbackURL: "http://localhost:8000/auth/github/callback"
  };
}

module.exports = ids;