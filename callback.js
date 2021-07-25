function learnJs(param, callback) {
  console.log(`I learn ${param}`);
  callback();
}

function call(){
  console.log("Hello apyer");
}

learnJs('JavaScript', call);