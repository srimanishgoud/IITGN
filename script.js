var x;
// x=5;
console.log(x)
var company=new Object();
company.name="Facebook";
company.ceo=new Object();
company.ceo.firstName="Mark";
company.ceo.favColor="blue";
console.log(company);
console.log("Company CEO name is: "+company.ceo.firstName);
console.log(company["name"]);
var stockPropName="stock of company";
company[stockPropName]=110;
console.log("Stock price is: "+company[stockPropName]);
// Better way: Object literal
var facebook={
    name:"Facebook",
    ceo:{
        firstName:"Mark",
        favColor:"blue"
    },
    "stock of company":110
};
console.log(facebook);

// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x,y){
    return x*y;
}
console.log(multiply(5,3));
multiply.version="v.1.0.0";
console.log(multiply.version);
console.log(multiply.toString());

// Function factory
function makeMultiplier(multiplier){
    var myFunc=function(x){
        return multiplier*x;
    };
    return myFunc;
}   
var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll=makeMultiplier(2);
console.log(doubleAll(100));


function doOperationOn(x,operation){
    return operation(x);
}
var result=doOperationOn(5,multiplyBy3);
console.log(result);

// primitive datatypes(bool, null, undefined, number, string, symbol) are passed by value and objects are passed by reference

//Function constructors
function Circle(radius){
    this.radius=radius;
    this.getArea=
        function(){
            return Math.PI*Math.pow(this.radius,2);
        };
}

var myCircle=new Circle(10);
console.log(myCircle.getArea());

// function Circle(radius){
//     this.radius=radius;
// }

// Circle.prototype.getArea=
//         function(){
//             return Math.PI*Math.pow(this.radius,2);
//         };

// var myCircle=new Circle(10);
// console.log(myCircle.getArea());

// Object literals and "this"
var literalCircle={
    radius:10,
    getArea:function(){
        var self=this;
        console.log(this);
        var increaseRadius=function(){
            self.radius=20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());   

var array=new Array();
array[0]="Manish";
array[1]=2;
array[2]=function(name){
    console.log("Hello "+name);
};
array[3]={course:"HTML, CSS & JS"};
console.log(array);

var names=["Manish","John","James"];
console.log(names);

names[100]="Jim";
for(var i=0;i<names.length;i++){
    console.log("Hello "+names[i]);
}

var names2=["Manish","John","James"];
var myObj={
    name:"Manish",
    course:"HTML/CSS/JS",
    platform:"Coursera"
};
for(var prop in myObj){
    console.log(prop+": "+myObj[prop]);
}
