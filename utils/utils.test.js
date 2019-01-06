const expect  = require('expect');
const utils = require('./utils')

describe('utils',() =>{
    describe('#add', () =>{
        it('should add two number',() =>{
            var res = utils.add(5,10);
           expect(res).toBe(15);
           })
    })
})



it('should get square',() =>{
    var res = utils.square(5);
    expect(res).toNotBe(24);
})

it('should check object exist', () =>{
 var res = utils.object;
 expect(res).toInclude({firstName:"Vishesh"});
})

it('should contain name', () =>{
    var user = {location:"noida"};
    var name = "Vishesh Mishra";
    var res = utils.setUser(name, user);
    expect(res).toInclude({firstName:"Vishesh"});
})

it('should check for async add ' ,(done) => {
  utils.asyncAdd(4,5,(sum) =>{
      console.log(`sum `,sum);
    expect(sum).toBe(9);
    done();
  });
 
})

it('should get square async', (done) =>{
    utils.asyncSquare(5,(square) =>{
        console.log(square);
        expect(square).toBe(25).toBeA('number');
        done();
    })
},1000)