const expect = require('expect');
const rewire  = require('rewire');

var app = rewire('./app');

describe('App',() =>{
    var db = {
        saveUser:expect.createSpy()
    }
    
    app.__set__('db',db);
    it('should called spy', () =>{
        var spy = expect.createSpy();
        spy({name:"Vishesh",email:"visheshmishra16@gmail.com"});
        expect(spy).toHaveBeenCalledWith({name:"Vishesh",email:"visheshmishra16@gmail.com"});
    })

    it('should call saveuser from user object', () =>{
         var email = "visheshmishra16@gmail.com";
         var password = "123456";

         app.handleSignUp(email,password);
         expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
})