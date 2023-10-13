/*
num1= user kadun array chi size ghya 
2: twedya no cha array banva let arr=new array
3 twedhe no input ghya 
4 
*/

let num=parseInt(prompt("Enter array size"));
let arr=new Array(num);
let brr=new Array(num);
for(let i=0;i<arr.length;i++)
{
  arr[i]=parseInt(prompt("Enter number"));
}

let iCnt=arr.length-1 // 4
for(let j=0;j<arr.length;j++)
{
    brr[j]=arr[iCnt];
    iCnt--;
}


document.write("The array")

for(let x of arr)
{
    document.write(x+" ")
}


document.write("The reverse array")

for(let y of brr)
{
    document.write(y+" " )
}