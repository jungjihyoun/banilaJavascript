
//################## promise ################

//1.Producer
const promise = new Promise ((resolve, reject) => {
    console.log('doing something...');
    setTimeout(()=>{
        resolve('ellie');
        reject(new Error('no network'));
    },2000);
});
 

//2.consumer : then, catch , finally
promise
  .then(value => {
    console.log(value);
})
   .catch(error => {
    console.log(error);
})
    .finally(()=>{
        console.log('finally');
});

//3. promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    });
})


// 4 . Error Handling
const getHen = () => new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('hen'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) =>{
    setTimeout(() => reject(new Error(`error: ${hen} => egg`)),1000);
});

const cook = egg => new Promise((resolve, reject)=>{
    setTimeout(() => resolve(`${egg} => cook!!`),1000);
});

getHen()
.then(getEgg)
.catch(error => {   //getEgg의 에러 처리
    return 'baaaaang';
})
.then(cook)
.then(console.log)

