// indexing is used to assign the perticular element which used to gives the sequence in which position. the manner they are assigned in particular reference in array .
//array is always keeping up the  reference because it is non-primitive and liner datatype.
const numbers = [5, 10, 15, 20, 25];
console.log(numbers.reverse());
// your function confermation is nothing but the callbacks
// every browser have different algorithem to compare the values
// aorting is the arranging of an elements according to your needs
// slice is not changing the existing array but splice change the arrar
//  array and other are the basic functionality which provided by the js but somewhere you have to use your own functionality then it is called as prototype .
// string is series of characters which we have to assign in any variable.
// why we use {} in objrcts AND  the functions because whaterver the data in it is keyvalue parameters.
const x = {
  name: "dhruv patel",
  age: 26,
  isheprepareingcoding: true,
};
console.log(x["name"]);
// in array there are multipple elements in it , and all the elements have specific indexing
// but in objects is combination of the keywords, which does not have any indexing .
// object is predefined class in javascript , otherthan object predifined classes are array, ques.
console.log(Object.values(x));
//  overwrite the values
x.isheprepareingcoding = false;

console.log(Object.values(x));
// keywords array of objects
const y = {
  Students: [
    {
      Student_name: "Dhruv Patel",
      id: 2076,
    },
    {
      Student_name: "xyzw",
      id: 2077,
    },
  ],
  result: {
    maths: 85,
    science: 80,
  },
};
console.log(y.Students[1].Student_name);
console.log(y.result.maths);
