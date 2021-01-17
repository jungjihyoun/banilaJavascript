//1. class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //method

    speak(){
        console.log(`$(this.name): 'hello!'`);
    }
 }

const ellie = new Person('ellie',20);

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    } 
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('steve','job',-1);
console.log(user1.age);  //-> 0이 출력됨

// 3. Fields (public , private) 최신문법
class Experiment{
    //생성자를 쓰지 않고 가능
    publicField = 2;
    //#기호 붙이면 클래스 내부에서만 접근,변경,읽기 가능
    #privateField = 0;
}

// 4. Static properties and methods
class Article{
    //static은 object마다 지정되는 것이 아니라
    //class에 자체 지정되어 있다
    //object에 상관없이 공통적으로 사용한다면
    //static을 사용하는 것이 메모리 사용줄어든다
    //typescript에서 중요!!
    static publisher = "CODING";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();  

// 5. Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`); 
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{
    draw(){
        super.draw(); //->부모의 함수도 호출
        console.log('new rectangle');
    }
}

class Triangle extends Shape{  getArea(){
    return (this.width * this.height /2);
}}

const new_rectangle = new Rectangle(2,3,'yellow');
new_rectangle.draw();

// 6. class checking : instanceOf
//왼쪽의 object가 오른쪽의 class의 자식인지 아닌지
console.log(Rectangle instanceof shape);
console.log(Triangle instanceof Object);