let now = new Date(); 

let date = now.getDate();  // extract the date

let month = now.getMonth(); // 9 
                // 0    1       2       3      4    5       6       7   8       9   10     11
let monthArray = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]

let Year = now.getFullYear(); // extract the year

let fullDate = date+"-"+monthArray[month]+"-"+Year; // monthArray[9] 

console.log(fullDate);