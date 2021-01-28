var a = 20;

function changeValue(x) {
    console.log(" Passed value " +x);
    x = 30;
    return x;
}

var newValue = changeValue(a);

console.log(" New value "+newValue);
console.log(" Old value " +a);



function changeAgeImpure(person) {
    console.log("Passed value "+JSON.stringify(person));

    person.age = 33;
    return person;
}

var abhi = {
    "name": "Abhinandan",
    "age":28

}

var ChangedAbhi = changeAgeImpure(abhi);
console.log("OLD value in Impure "+JSON.stringify(abhi));
console.log("New Value in Impure " + JSON.stringify(ChangedAbhi));

/**
 *-----------------------------------------------------------------------------------------------------  */

function changeAgePure(person) {

    var newPerson = JSON.parse(JSON.stringify(person));
    newPerson.age = 33;
    return newPerson;
}

var aj = {
    "name": "Abhinandan",
    "age":28

}

var ChangedAbhi = changeAgePure(aj);
console.log("OLD value in Pure "+JSON.stringify(aj));
console.log("New Value in Pure " + JSON.stringify(ChangedAbhi));



changeAgePure.bind(aj);
console.log(aj);

let url = 'http://localhost/js/about.html';
let jsWindow = window.open(url,'about');
 
