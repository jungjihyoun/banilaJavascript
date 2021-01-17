//########### async / await ##############
//promise를 계속 chaining 하면 복잡하다
//clear style of using promise !!

// 1. async
// function fetchUser(){
//     return new Promise((resolve, reject) =>{
//         //do network request in 10secs...
//         resolve('jihyoun');
//     });
// }

async function fetchUser(){
     //do network request in 10secs...
     return 'jihyoun';
}


const User = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async가 붙은 함수 안에서만 쓸 수 있다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

//callback 지옥..
function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana90.then(banana => `${apple} + &{banana}`);
    });
}
pickFruits().then(console.log);


async function pickFruits(){
    //프로미스를 만들어서
    //병렬적으로 , 한 번에 출력할 수 있게 한다. 
    //서로 상관 없는 기능이기 때문에
    const applePromise = getApple();
    const bananaPromis = getBanana();
    const apple = await applePromise;
    const banana = awaitbananaPromis;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3 . useful Promise APIs   [Promise.all]
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    //다 받아진 배열이 전달받아져서
    //join을 이용하여 배열을 string으로 묶는다
    .then(fruits => fruits.join('+')
    );
}
function pickAllFruits().then(console.log);

//가장 먼저 전달되는 것 하나만!
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}