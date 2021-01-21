//Json
//JavaScript Object Notation

// 1. Object to Json
// stringfiy(obj)   object를 받아와서 string으로 변환
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);    //배열처럼 보이게 ""와 함께 표시


// *함수는 object의 데이터가 아니기 때문에 json에서 제외된다
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: ()=>{     
        console.log(`${this.name} can jump`);
    },
};

console.log(rabbit);

json = JSON.stringify(rabbit,['name','color']);   //* 원하는 속성만 가능
console.log(json);

//*콜백함수를 이용하여 json 상세하게 다룰 수 있다!
json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jihyoun' : value;
}); 






// 2. Json to Object
//parse(json)
//obj에는 (json>obj) 함수가 포함되지 않는다
//obj.jump(); => X

console.clear();
json = JSON.stringify(rabbit);

//콜백함수를 사용하면 ... key,value 값으로 리턴 가능
const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value):value;
});

console.log(obj);    
console.log(obj.birthDate.getDate());









