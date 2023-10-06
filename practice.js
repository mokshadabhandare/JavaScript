//Eng = 78, Marathi = 85, Hindi = 95 Find the percentage of Student

function Calculate(Eng,Marathi,Hindi)
{
    let percentage;
    percentage=((Eng+Marathi+Hindi)/300)*100;
    return percentage;
}

let percentage=Calculate(78,85,95);
document.write(percentage);