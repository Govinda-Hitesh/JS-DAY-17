//clousers 



let f;

const g = function(){
    const a = 23;

    f = function(){
        console.log(a*2);
    };
};

const h = function(){
    const b = 25;

    f = function(){
        console.log(b*2);
    };
};

g();
f();
// console.dir(f);

h();
f();
console.dir(f);


//setTimeout and SetInternal

// setTimeout((fruit1, fruit2)=> {
//     console.log(fruit1, fruit2 );
// },5000, 'banana','orange');

const fruits = ['banana', 'orange'];
const timer = setTimeout((fruit1, fruit2)=> {
    console.log(fruit1, fruit2 );
},5000, ...fruits);
console.log('waiting for the time to finish');

if(fruits.includes('banana')){
    clearTimeout(timer);
}

setInterval(()=>{
    console.log('hi');
}, 2000);

const boardingPassengers = (n,wait) => {
    const peoplePerGroup = n/3;

    setTimeout(() => {
        console.log(`boarding ${n} number of passengers`);
        console.log(`boarding ${n} number of passengers`);
        console.log('boarding in secs', wait);
        
    }, wait*1000);
}

boardingPassengers(180,2);


