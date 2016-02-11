var Calculator = {

  current: 0,
  memory: 0,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  result: result,
  reset: reset,
  addToMemory: addToMemory,
  subtractFromMemory: subtractFromMemory,
  displayMemory : getMemory,
}

function add(num){
  num = parseInt(num);
  this.current = parseInt(this.current);
  this.current += num;
  console.log(this.current)
  result();
}
function subtract(num){
  num = parseInt(num);
  this.current = parseInt(this.current);
  this.current -= num;



}
function multiply(num){
  num = parseInt(num);
  this.current = parseInt(this.current);
  this.current *= num;

  result();
  console.log(this.current);

}
function divide(num){
  num = parseInt(num);
  this.current = parseInt(this.current);
  this.current /= num;
  result();
  console.log(this.current);

}
function result(){

  return this.current;

}
function reset(num){
  this.current = 0;
}

function addToMemory(num){
  this.memory += num;
  console.log('commited to memory')
}

function subtractFromMemory(num){
  this.current -= num;
}

function clearMemory(){
  this.memory = 0;
}

function getMemory(){

  return this.memory;
  console.log(this.memory);
}
