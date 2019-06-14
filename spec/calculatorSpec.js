
  describe("addition", function(){
  it('should add two numbers, should equal  0', function(){
      let add = addition(0, 0);
        expect(add).toBe(0);
    });
    it('should add two negative numbers, should equal  -2', function(){
      let add = addition(-1, -1);
        expect(add).toBe(-2);
    });
    it('should add two numbers, should equal  9', function(){
      let add = addition(4, 5);
        expect(add).toBe(9);
    });
    it('should add two numbers, should equal  0', function(){
      let add = addition(1, 2, 3, 4);
        expect(add).toBe(10);
    });
  });
  
  describe('multiply', function(){
    it('should multiply two numbers', function(){
      let sum = multiply(1,1);
        expect(sum).toBe(1)
    })
    it('should multiply two negative numbers', function(){
      let sum = multiply(-1,-1);
        expect(sum).toBe(1)
    })
    it('should multiply two numbers', function(){
      let sum = multiply(1,2);
        expect(sum).toBe(2)
    })
    it('should multiply two numbers', function(){
      let sum = multiply(1,2,3,4);
        expect(sum).toBe(24)
    })
  })
  