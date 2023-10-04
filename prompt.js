/*let no= "121";
let no2= "512";

let ans= Number(no)+ Number(no2);
document.write(ans);


let no=true;
document.write(typeof(no)+"<br>");

no= String(no);
document.write(typeof(no));



let no=1;
document.write(typeof(no)+"<br>");

no=Boolean(no);

document.write(typeof(no)+"<br>");
document.write(no);


let num=10 ;
num +=5;

document.write("num +");
*/

let no=parseInt(prompt("Enter the number"));

if(no%2==0)
{
    document.write(no+"<br>","Number is even");
}
else
{
    document.write(no+"<br>","Number is odd");
}