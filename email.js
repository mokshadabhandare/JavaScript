let str=prompt("Enter email");

let chkEmail=str.includes("@gmail.com")
if(chkEmail==true)
{
    document.write("Valid email");
}
else{
    document.write("Invalid email");
}