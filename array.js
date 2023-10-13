let num=parseInt(prompt("Enter array size"));
let arr=new Array(num)
for(let i=0;i<arr.length;i++)
{
  arr[i]=parseInt(prompt("Enter number"));
}
for(let j=0;j<arr.length;j++)
{
    document.write(arr[j]+" ");
}