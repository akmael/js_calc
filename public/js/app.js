$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';
  var num ='';

  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('#mem-plus').on('click', memAdd);
  $('#mem-minus').on('click', memSub);
  $('#mem-recall').on('click', memDisplay);
  $('#mem-clear').on('click', memClear);
  $('#decimal').on('click', updateDisplay);


  function updateDisplay(){
     num += $(this).text();
    $display.text(num);

  }
  function divide(){
      calculator.current = num;
      num = '' ;


      lastOperation = '/';


  }

  function multiply(){
    calculator.current = num;
    num = '';


    lastOperation='*';

  }

  function subtract(){

    calculator.current = num;
    num = '';


     lastOperation = '-';
  }

  function equal(){

    if (lastOperation == '+'){
        calculator.add(num);
        $display.text(calculator.current);
    }
    else if (lastOperation == '-') {
        calculator.subtract(num);
        $display.text(calculator.current);
    }
    else if (lastOperation == '/') {
        calculator.divide(num);
        $display.text(calculator.current);

    }
    else if(lastOperation == '*'){
         calculator.multiply(num);
         $display.text(calculator.current);

    }
    num = '';

  }

  function plus(){

    calculator.current = num;
    num = '';


    lastOperation = '+';
    console.log(calculator.current);
    console.log(lastOperation);


  }

  function clear(){
    num= '';
    $display.text(num);

  }

  function memAdd(){
     calculator.addToMemory();

  }

  function memSub(){
     calculator.subtractFromMemory;

  }

  function memClear(){
    calculator.clearMemory;

  }

  function memDisplay(){
    getMemory();
   console.log(calculator.memory);
    var mem = calculator.memory;
    $display.text(mem);

  }



});
