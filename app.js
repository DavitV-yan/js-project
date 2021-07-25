const num = {
  one: 1,
  two: 2
}

const newNum = {
  three: 3,
  ...num
};

console.log(newNum);