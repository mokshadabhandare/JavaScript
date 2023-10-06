let no=parseInt(prompt("Enter Number"));

function sum(no)
{
    let sum=0;
    for(let i=1;i<=no;i++)
    {
         sum=sum+i;
    }
    return sum;
}

let add=sum(no);
document.write(add);