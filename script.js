
var currentValue='';
let signPresent=0;
function appendToDisplay(value) {
    
    if((value==="+" || value==="-" || value==="*" || value==="/") && signPresent===0){
        var display = document.getElementById('display');
        // console.log(signPresent + "h");
        // console.log("kk");
    display.value += value;
    // currentValue+=value; 
       currentValue='';
       signPresent=1;
       console.log(signPresent +'2');
    }
    else{

        if( !(value==="+" || value==="-" || value==="*" || value==="/") ){
        var display = document.getElementById('display');
    display.value += value;
    currentValue+=value;
        signPresent=0;
    }
}
    

}

function appendToDecimal(value){
    if(currentValue.length==0){
        var display = document.getElementById('display');
        display.value += '0';
        display.value += value;
        currentValue+=value;
    }
    if (!currentValue.includes('.')) {
        var display = document.getElementById('display');
        display.value += value;
        currentValue+=value;
      }
}

function clearDisplay() {
    display.value = "";
    currentValue='';
    signPresent=0;
}


function calculateResult() {
    var value = document.getElementById('display').value;
    var result = customEval(value);
    document.getElementById('display').value = result;
}


function customEval(value) {

  

  
    var operators = value.match(/[+\-*/]/g);
    var operands = value.split(/[+\-*/]/).map(function (item) {
        console.log(item);
        return parseFloat(item);
    });
    var oper=[];
    for (var element of operands) {
        if (typeof element === 'number' && !isNaN(element)) {
          oper.push(element);
        }
      }
    console.log(oper.length);
    console.log(operators);
    console.log(operators.length);
    console.log(operands);
    console.log(operands.length);

    if(value[0]=="-" || value[0]=="+"){
        console.log("jfj");
        if(value[0]=="+"){
            operators.splice(0,1);
        }
        else{
            operators.splice(0,1);
            oper[0]=(-1*oper[0]);
        }
    }
    console.log(oper);
    console.log(operators);
 
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === "*") {
            oper[i] = oper[i] * oper[i + 1];
            oper.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        } else if (operators[i] === "/") {
            oper[i] = oper[i] / oper[i + 1];
            oper.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }
    var answer = oper[0];
    for (var i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            answer += oper[i + 1];
        } else if (operators[i] === "-") {
            answer -= oper[i + 1];
        }
    }

    
    if (isNaN(answer) || !isFinite(answer)) {
      clearAll();
      document.getElementById("display").innerHTML = "NaN";
     } 
  


    return answer;
}


function clearAll() {
    // document.getElementById("display").innerHTML = "";
    signPresent=0;
}