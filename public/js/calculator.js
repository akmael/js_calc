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
  num = parseFloat(num);
  this.current = parseFloat(this.current);
  this.current += num;
  console.log(this.current)
  result();
}
function subtract(num){
  num = parseFloat(num);
  this.current = parseFloat(this.current);
  this.current -= num;



}
function multiply(num){
  num = parseFloat(num);
  this.current = parseFloat(this.current);
  this.current *= num;

  result();


}
function divide(num){
  num = parseFloat(num);
  this.current = parseFloat(this.current);
  this.current /= num;
  result();


}
function result(){

  return this.current;


}
function reset(num){
  this.current = 0;
}

function addToMemory(num){
  this.memory = num;

  console.log('commited to memory');
  console.log(this.memory);
}

function subtractFromMemory(num){
  this.memory -= num;
}

function getMemory(){

  return this.memory;
  console.log(this.memory);
}
