console.log("demo-js OK.");
let x=10;
let y=20;
let z=x+y;

console.log(z);
z=z+'AAA!';
console.log(z);
z=100;
z=z+ +'23';
console.log(z);

function square(x){
	if(x%2==0) {
		return x;

}
else{
	return x*x;
}}

for(let i=1;i<=10;i++){ 
	console.log(square(x));
}
function fuctorial(x){
	if(x>1){
		return x*factorial(x-1);
	}
	return 1;
}
console.log("factorial:", factorial(50));

let data=[];
for(let i=1;i<=10;i++){ 
data.push(factorial(i));}
console.log(data);

let person1={
	name:'Alex',
	age:15,
	car:{model:'audi',year:2020},
	friends:['Ann','Sophi','Serg']
};

let person2={
	name:'Mary',
	age:17,
	car:{model:'BMW',year:2020},
	friends:['Ann','Sophi','Serg']
};

let persons=[person1, person2];
console.log(persons);