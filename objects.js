const options = {
  name: 'test',
  width: 1024,
  height: 2048,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function(){
    console.log("Testo");
  }
  
};

options.makeTest();

const {border, bg} = options.colors;

console.log(bg);


console.log(Object.keys(options).length);

for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Options ${key} has a sub option ${i} and value ${options[key][i]}`);
    }
  } else {
    console.log(`Options ${key} has a value ${options[key]}`);
  }
}
