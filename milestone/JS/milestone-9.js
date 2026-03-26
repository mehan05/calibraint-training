// JS date object
let date = new Date();
// console.log(date);

// date(year, month, say, hour, minute, sec, ms)
let date1 = new Date(2026, 2, 16, 16, 45, 30, 0); // here months are 0 based indexed
// console.log(date1);

// passing millisecond in date
let date2 = new Date(1000);
// console.log(date2); // this will print 1 sec from 1970 epoch time

// console.log(new Date("2026/06/12")); 
// console.log(new Date("2026-06-12"));
// opt:
// 2026-06-12T00:00:00.000Z
// 2026-06-11T18:30:00.000Z
// here the opt changed because the / is not part of iso stardard so it just returns a localtime string, where as - is part of iso standard, so it convert it to UTC

let date3 = new Date();
console.log(date3.toString()); // prints localtime
console.log(date3.toUTCString()); // prints  UTC time

// basic date methods
console.log("-----------------Local-time-----------------");
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date3.getDate());
console.log(date3.getDay()); // weeks also 0 indexed
console.log(date3.getHours());
console.log(date3.getMinutes());
console.log(date3.getSeconds());
console.log(date3.getMilliseconds());

console.log("-----------------UTC-Time-----------------");

console.log(date3.getUTCFullYear());
console.log(date3.getUTCMonth());
console.log(date3.getUTCDate());
console.log(date3.getUTCDay());
console.log(date3.getUTCHours());
console.log(date3.getUTCMinutes());
console.log(date3.getUTCSeconds());
console.log(date3.getUTCMilliseconds());


console.log("-------------------------Date Formatting-------------------");
let date4 = new Date();
console.log(date4.toString()); 
console.log(date4.toDateString());
console.log(date4.toTimeString());
console.log("t",(date.toLocaleString()));
console.log("with time zone", date4.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}));

console.log(date4.toISOString()); // both ISO and UTC string return UTC time, but UTCString returns in human redable format, ISO is machine readable
console.log(date4.toUTCString()); 
console.log(`${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}`);

console.log(Date.now()); // returns the  current time in milliseconds
//this is used for db operations , loginTIme, session time


console.log("---------------------------Date-Comparision----------------------")

let date12 = new Date();
let date13 = new Date();
console.log(date12.getTime()==date13.getTime());
console.log(date12==date13);
console.log(new Date("2026-02-16")==new Date("2026-02-16T00:00:00")); //false because we are comparing objects
console.log(new Date("2026-02-16")< new Date("2026-02-17")); //true
let a = new Date("2026-02-16"); // it gives time in UTC
let b = new Date(2026,2,17); // it gives time in IST
console.log(a.getTime()==b.getTime()); //false
console.log(new Date()>0) // internally it checks as new Date().valueOf() >0
// the valueOf() method returns a n=time in millisecond

let date14  = new Date("2026-02-16");
console.log(date14 == date14.getTime()) // it gives ans as true because the date object converts into number number == number
console.log(date14 === date14.getTime()) // it gives ans as false because it checks type object id not equal to number

console.log(new Date().getDate());
console.log(new Date().toDateString())
// Never compate strings or objects, Compare timestamps

console.log("--------------------UTC<->IST conversions--------------------");

// utc = local + offset
// local = utc - offset


// Ahead of UTC  → negative offset
// Local = 17:30
// UTC   = 12:00

// 12:00 = 17:30 + offset
// offset = -5:30

// Behind UTC → positive offset

// offset is the time difference between the local time and UTC

// automatic conversion
console.log(new Date("2026-02-16T00:00:00Z").toString()) // UTC to local
console.log(new Date("2026-02-16T17:30:00").toISOString()) // local to UTC, use can also uue toUTCString for better redability

// manual conversion
function localToUTC(localString){
    let date = new Date(localString);
    return new Date(date.getTime() + date.getTimezoneOffset()*60000);
}

function UTCtoLocal(utcString){
    let date = new Date(utcString);
    return new Date(date.getTime() - date.getTimezoneOffset()*60000);
}


console.log("t1",new Date("2026-02-16"))
console.log("t2",new Date(2026,2,16));


// EPOCH TIME
// epoch time is time from 1 jan 1970 to till now in milliseconds,
//the date object is internally a epoch number so
console.log(new Date().getTime()==Date.now())
 console.log(new Date("2026-02-16").getTime())

 // because of epoch time you can 
 // comapre dates, sort dates, subract dates, mesaure durations

let dateDifference = Date.now() - new Date("2026-02-10").getTime();
console.log((dateDifference/1000/60/60/24));

const a1 = new Date("2026-02-16T15:30:00+05:30");
console.log(a1.toISOString());

// Date conversion with various time zones, including daylight saving

// same clock time != same Moment
let date5 = new Date("2026-02-16T10:00:00"); //IST
let date6 = new Date("2026-02-16T10:00:00Z"); // UTC
console.log(date5.getTime()==date6.getTime()) // false, because the IST is internally converted into UTC and  it becomes 4:30UTC, so eventhough the IST and UTC have same time 10:00:00 , intrnally IST converted into UTC , so they are not equal

// Same clock time == same moment
let  date7 = new Date("2026-02-16T15:30:00");
let date8  = new Date("2026-02-16T10:00:00Z");
console.log(date7.getTime() === date8.getTime());
console.log(new Date("2026-02-16T10:00:00Z"));
console.log(new Date("2026-02-16T10:00:00")) // here without z at end , js consider it as local time to convert it to UTC internally it adds the -5:30 offseet to 10:00 so the asnwer becomes 4:40


// conversion  from 24hr to 12hr
 function convert24To12Hr(time){
    let [hr,min] = time.split(":");
    
    let period = hr>=12 ? "PM" : "AM";
    hr = hr%12;

    if(hr==0) hr =12;

    return `${hr}:${min.toString().padStart(2,"0")} ${period}`;
    
 }

console.log(convert24To12Hr("16:12"));

function convert12To24Hr(time_){
    let [time,period] = time_.split(" ");
    let [hr,min] = time.split(":");

    if( period === "AM" && hr==12){
        hr = 0;
    }
    else{ 
       if (h!=12) h+=12;
    }

    return `${hr.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}`

}

console.log(convert12To24Hr("1:30 PM"))
