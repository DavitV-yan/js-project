const arr = [2, 14, 5, 23, 54, 65];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
  return a - b;
}

  // arr.forEach(function(value, index, array){
  //     console.log(`${index} index : ${value} value in ${array} array`);
  // });

// for (const value of arr) {
//   console.log(value);
// }

// const str = prompt("test", "");
// let products = str.split(", ");

// console.log(products);
// products.sort();
// console.log(products.join("; "));
