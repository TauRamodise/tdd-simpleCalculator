
// First write a test function. it can be called test_function or something similar.
//  It needs to make sure that the add function works. 
// (of course we haven’t written add yet. We’ll write our tests first).
// 1. write a test to demonstrate that add(0,0) will return 0. 
// Run the test. It should fail. Now make the test pass by creating an add function.
// 2. write a test to demonstrate that add(-1,-1) should return -2 then edit add to 
// make your test pass
// 3. write a test to demonstrate that add(4,5) should return 9 then edit add to 
// make the test pass
// 

// ADD TWO NUMBERS

function addition() {
   add = 0;

   for (let i = 0; i < arguments.length; i++) {
      add += arguments[i];
   }
   return add;
}

// // MULTIPLY NUMBERS 

function multiply() {
   sum = 1;

   for (let i=0; i<arguments.length; i++){
      sum *= arguments[i];
   }
 return sum;
}


