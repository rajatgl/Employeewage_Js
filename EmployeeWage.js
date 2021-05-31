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
    dailyHourArray.push(dailyHour)
    dailyWageArray.push(dailySalary)
    dailyHourMap.set(day,dailyHour)
    totalWorkingHour += dailyHour
}

var totalWage = totalWorkingHour*WAGE_PER_HR

console.log("Number of days attended: "+attendenceCount)
console.log("Total working hours: "+totalWorkingHour)
console.log("Total wage: "+totalWage)
console.log("Daily working hours: "+dailyHourArray)
console.log("Daily salary : "+dailyWageArray)
console.log("Daily hour map:")
for( let[key,value] of dailyHourMap){
    console.log(key+":"+value+"\t")
}
//console.log("Daily wage map: "+dailyWageMap)
//console.log("Daily hours map: "+dailyHourMap)



