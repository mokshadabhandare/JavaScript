let str=prompt("Enter string");

document.write(str.toUpperCase());
document.write(str.toLowerCase());
document.write(str.length);

document.write(str.charAt(0)); //POSITION OF ALPHABETS ON THAT INDEX
document.write(str.charCodeAt(1)); //ASCII VALUE
document.write(str.at(-1));

document.write(str.indexOf(M));

document.write(str.includes(M));//searching this in string


let str2=str.trim();