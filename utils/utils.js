module.exports.add = (a,b) =>{
 return a+b;
}

module.exports.square = (a) =>{
    return a*a;
}

module.exports.object = {
    firstName:"Vishesh",
    lastName:"Mishra",
    profile:"SE",
    technology:"NodeJS"
},

module.exports.setUser = (name,user) =>{
    var nameEdited = name.split(' ');
    user.firstName = nameEdited[0];
    user.lastName = nameEdited[1];
    return user;
}

module.exports.asyncAdd = (a,b,sum) =>{
    setTimeout(() =>{
         sum(a+b);
    },1000)
    
}

module.exports.asyncSquare = (a, square) => {
    setTimeout(() =>{
        square(a*a);
    },1000)
}