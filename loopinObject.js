
//looping in object

/*
let user={
    name:"Moksh",
    age:22,
    mobile:"7057171160",
    email:"moksh@10gmail.com",
};

for(let key in user)
{
    console.log(key);
    
    console.log(user[key]);
    
}

*/



function makeUser(name,age,mobile,email)
{
    return {
        name : name,
        age : age,
        mobile :mobile,
        email : email,
    };
}

let user1 = makeUser("Moksh",23,"9874563210","moksh@gmail.com");

let user2 = makeUser("Nitin",23,"9168348200","nitin@gmail.com");

for(let x in user1)
{
    console.log(x+":"+user1[x]);
}
console.log("=============================");
for(let x in user2)
{
    console.log(x+":"+user2[x]);
}