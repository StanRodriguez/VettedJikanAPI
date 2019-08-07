// reverse a string
// input: string, lowercase
// output: string reversed
debugger;
// * TODO
// 1. create the function with a name that takes a parameter
const pens = function(string) {
  // 2. make space
  let newPens = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // 3. take the last letter
    //  i am going to put it in the first space
    console.log(i);

    // 4 I am going to be doing this until
    newPens = newPens + string[i];
    //   newPens+= string[i-1];
    //  there are not more pens to take
  }
  //5. return the space
  return newPens;
};
console.log(pens("hello"));
