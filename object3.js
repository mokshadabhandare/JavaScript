//Reusability of function
function makeUser(name,age)
{
    return {
        name:name,
        age:age,
    };
}

let user=makeUser("John",30);


//property extend test "in"


let user={
    name:"Moksh",
    age:22,
    city:"Pune",
};

console.log("age" in user);