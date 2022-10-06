console.log("hello javascript!!")
const array=[5,10,15,20,25];
array.push(30)
console.log(array);     
console.log(array.push(35));
console.log(array);
console.log(array);
console.log(array.unshift(5));
console.log(array);
// one function which disturb the array i ndexing is unshift, in which if we take one example that primarily the index of 5 is 0, but after the use of unshift it is one because we push one element from the starting point of an array.
//  this is called the modifying the value of the element of an array , or reassigning the array values
//  you always need an index in order to reassign the value of array 
array[2]='abc';
console.log(array);
//  however we aremoving the element of an array from the end than the indexing does not change.
console.log(array.pop());
// mutating means to modify the existing the structure of an array 
//  pop is a functin that's why we wrtie like pop() ,it is predifined function .
console.log(array.shift());
console.log(array);
array.forEach(function(ele,i){
    console.log(ele)
})
// console.log(char includes("abc"));
// console.log(char.index Of(5));
const days=['monday','tuesday','wed','thu'];
console.log(days.sort());
// two function are used to check whether element is included or not, are include and indexof
// indexof always returns the number if element is not there  it will show -1.
console.log(days.indexOf('sat'));
// if wnat to extract the data from an array in form of value that we should use pop, shift 
// but if we want to an array from the existing one  than we can use the slice function. 
//  with help of slice it not consider the end number 
//  slice (1,3) than the result is index of an array [1,2] only
console.log(days.slice(-2));
// in slice there is no change in your original array only you extract the data from the array
//  but in splice it remove the data from an original array and display the data in new array .it gona modify the existing array.
const arr=[1,2,3,4,5];
const char=['a','b','c','d'];
console.log(arr.concat(char));
console.log(arr.map(Math.sqrt));
const new_Arr=arr.map(function(ele){
    return ele+2;
})
console.log(new_Arr);
// map is also used to modify the array
let calenderMonths=[[1,'jan'],[2,'feb'],[3,'mar']]
// console.log(calenderMonths[calenderMonths.length-2]);
// console.log(calenderMonths[2][1]);
console.log(calenderMonths.splice(1,0));
console.log(calenderMonths);
//  .splice(index,number of elements to be removed,what to replace with )
// for (let i = 0; i < calenderMonths.length; i++) {
//     for (let j = 0; j < calenderMonths.length[0][1]; j++) {
//         console.log(calenderMonths[j]);
        
        
//     }
//     console.log(calenderMonths[i]);
    
// }
for (let i of calenderMonths){
    for(let j of i){
        console.log(j)
    }
    console.log(i)
}
let cars=['honda','tata','mahindra','ola']
console.log(cars.slice(1,3));
console.log(cars.splice(1,2));
console.log(cars);