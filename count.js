
function CountDigit(iNo)
{
    let i=0;
    while(iNo!=0)
    {
        i++;
        iNo=Math.round(iNo/10);
    }
    return i;
}

function FirstNumber(iNo)
{
    let iCnt = CountDigit(iNo)-1;
    while(iCnt>=1)
    {
        iNo = Math.round(iNo/10);
        iCnt--;
    }
    return iNo;
}

console.log(FirstNumber(123))