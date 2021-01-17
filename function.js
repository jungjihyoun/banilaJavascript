//########## function 정리 ###########
//js에서 function은 object
//함수명은 verb, 한 함수는 한 가지만

 // ##### Default parameters 
 function showMessage(message, from = 'unknown'){
     console.log(`${message} by ${from}`);
 }
 showMessage('Hi!');

 // ##### Rest parameters
 function printAll(...args){
    //  for(let i = 0 ; i <args.length; i++){
    //      console.log(arg[i]);
    //  }

     for(const arg of args){
         console.log(arg);
     }
 }
 printAll('dream','coding','ellie');

 //  ##### scope!!!
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  -> error
}
printMessage();


//  ##### Early return, early exit
//bad case 가독성이 좋지 않음
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

//good   조건이 맞지 않을 때는 빨리 함수를 종료
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrade logic...
}


// a. First-case Function 
// function은 변수에 할당 가능
// 파라미터 가능
// 리턴값으로 리턴 가능

// b. function expression
// b/ function declaration can be called earlier than it is defined (=hoiseted)
// a/ function expression is created when the reaches it...
const print = function (){   //-> annoymous function
    console.log('print');
};

//Arrow function
//always annonymous
const simplePrint = function(){
    console.log(`simplePrint`);
};
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply  = (a,b) =>{
    //more...
    return a*b;
};

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();




