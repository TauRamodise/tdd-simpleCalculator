
  describe("addition()", function(){
  it('should add two numbers, should equal  0', function(){
      let plus = add(0, 0);
        expect(plus).toBe(0);
    });
    it('should add two negative numbers, should equal  -2', function(){
      let plus = add(-1, -1);
        expect(plus).toBe(-2);
    });
    it('should add two numbers, should equal  9', function(){
      let plus = add(4, 5);
        expect(plus).toBe(9);
    });
    it('should add two numbers, should equal  0', function(){
      let plus = add(1, 2, 3, 4);
        expect(plus).toBe(10);
    });
  });
  
  describe('multiply()', function(){
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
  