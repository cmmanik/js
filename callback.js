/*
    Working with call back function 

*/
var obj = {
    firstName:   'Manik',
    lastName: 'Roy',
    gender: 'male',
    email:  'mkmanik6523u@gmail.com',
    age:    '18',
    city:   'Dinajpur'
};


function dowhatEverYouwant(person, cbf) {
    cbf(person);
}

dowhatEverYouwant(obj,function(person) {
    var namelength = person.firstName;
    if(person.gender == 'male'){
        if(person.age >= '18') {
            console.log('Hello Mr', person.firstName, 'Your request submitted, please check you email for confirm');
        } else {
           console.log('Your request reject, You are under -18');
        }
    } else {
        if(person.age >= '18') {
            console.log('Hello Ms', person.firstName, 'Your request submitted, please check you email for confirm');
        } else {
           console.log('Your request reject, You are under -18');
        }
    }
});

dowhatEverYouwant(obj,function(person) {
    for(var i in person) {
        console.log('This object keys are ',i);
    }
});


/*
    'Map', funciton implimintention
    
*/


var myarry = [103,108,199,185,851,256,95,21,98,559,69,72,87];
function myMap(val, clbk){
    var newArry = [];

    for(var i= 0; i<val.length; i++){
        newArry.push(clbk(val[i]));
    }
    return newArry;
}

var newarr1 = myMap(myarry, function(val){
    return val+2;
})

var newarr2 = myMap(myarry, function(val){
    return val/2;
})
var newarr3 = myMap(myarry, function(val){
    return val-2;
})
console.log('add 2 arrey every element',newarr1);
console.log('divided 2 arrey every element',newarr2);
console.log('mimus 2 arrey every element',newarr1);