//UC1
function attendenceCheck(){
    var check = Math.floor(Math.random() * 10) % 2

    if (check) {
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME =2;
const PART_TIME = 4;
const FULL_TIME = 8;
const WAGE_PER_HR   = 20;


//UC2
var attendenceCount = 0
var workingHour = function workingHours(){
    let empHrs =0;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck) {
        case IS_PART_TIME:
            attendenceCount++
            return empHrs = PART_TIME;
        case IS_FULL_TIME:
            attendenceCount++
            return empHrs = FULL_TIME;
        default:
            return empHrs = 0;
    }
}
var workHours = workingHour();

//UC3
var empWage =workHours*WAGE_PER_HR;
console.log("Employee Hour: "+workHours);
console.log("Wage: "+empWage)

//UC4
var totalWorkingHour = 0
var dailyHourArray = new Array()
var dailyWageArray = new Array()
var dailyHourMap = new Map()
var dailyWageMap = new Map()

const NUMBER_OF_WORKING_DAYS = 20
for(let day =0; day < NUMBER_OF_WORKING_DAYS; day++){

    let dailyHour = workingHour()
    let dailySalary = WAGE_PER_HR*dailyHour
    //UC5
    dailyHourArray.push(dailyHour)
    //UC6
    dailyWageArray.push(dailySalary)

    //U8: daily wage and hour maps
    dailyHourMap.set(day,dailyHour)
    dailyWageMap.set(day,dailySalary)

    totalWorkingHour += dailyHour
}

//const totalWage = totalWorkingHour*WAGE_PER_HR
//UC7: array reduce
const sum = (accumulator, element) => { return accumulator + element;}
const totalWage = dailyWageArray.reduce(sum, 0);

//UC8: calculating total wage using  map
const totalWageUsingMap = Array.from(dailyWageMap.values()).reduce(sum,0)

console.log("Number of days attended: "+attendenceCount)
console.log("Total working hours: "+totalWorkingHour)
console.log("Total wage: "+totalWage)
console.log("Total wage using map: "+totalWageUsingMap)
console.log("Daily working hours: "+dailyHourArray)
console.log("Daily salary : "+dailyWageArray)
console.log()
console.log("Daily hour map:")
for( let[key,value] of dailyHourMap){
    console.log(key+":"+value)
}
console.log()
console.log("Daily wage map:")
for( let[key,value] of dailyWageMap){
    console.log(key+":"+value)
}
console.log()

//UC9A: calculate total working hours using map
const totalWorkingHourUsingMap = Array.from(dailyHourMap.values()).reduce(sum,0);
console.log("Total working hours using its map: "+totalWorkingHourUsingMap)

//UC9B: show full-working days, part-working days and no-working days
let nonWorkingDays = new Array()
let fullWorkingDays = new Array()
let partWorkingDays = new Array()
dailyHourMap.forEach((value,key,map)=>{
    if(value == 8)
        fullWorkingDays.push(key)
    else if(value == 4)
        partWorkingDays.push(key)
    else
        nonWorkingDays.push(key)
})
//UC10: show full working days, part and non working days
console.log("Full working days: "+fullWorkingDays)
console.log("Part working days: "+partWorkingDays)
console.log("Non working days: "+nonWorkingDays)


