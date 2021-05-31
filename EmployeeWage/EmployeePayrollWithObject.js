/**
 * Constant values
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;
 const MAX_HRS_IN_MONTH = 160;
 const MAX_NUM_OF_WORKING_DAYS = 20;
 
 /**
  * To get working hors of an employee
  * @param {gives an employee present or not} empCheck
  * @returns {employee working hors if present}
  */
 function getWorkingHours(empCheck) {
   switch (empCheck) {
     case IS_PART_TIME:
       return PART_TIME_HOURS;
     case IS_FULL_TIME:
       return FULL_TIME_HOURS;
     default:
       return 0;
   }
 }
 
 /**
  * Calculates every day wage for employee
  * @returns wage for the day or for the month
  */
 function calculateDailyWage(empHrs) {
   return empHrs * WAGE_PER_HOUR;
 }
 
 /**
  * 10 Object creation
  */
 let day = 0;
 let totalEmployeeHrs = 0;
 let empDailyHrsAndWageArr = new Array();
 while (totalEmployeeHrs <= 160 && day < MAX_NUM_OF_WORKING_DAYS) {
   day++;
   let empCheck = Math.floor((Math.random() * 10) % 3);
   let empHrs = getWorkingHours(empCheck);
   totalEmployeeHrs += empHrs;
   empDailyHrsAndWageArr.push({
     dayNum: day,
     dailyHrs: empHrs,
     dailyWage: calculateDailyWage(empHrs),
     toString() {
       return (
         "\n Day " +
         this.dayNum +
         " => working hours " +
         this.dailyHrs +
         " and wage earned " +
         this.dailyWage
       );
     },
   });
 }
 
 let empWage = calculateDailyWage(totalEmployeeHrs);
 
 console.log(
   "total days: " +
     day +
     " and total hrs: " +
      totalEmployeeHrs +
     ", Emp wage: " +
     empWage
 );
 console.log(
   "Showing daily hrs worked and wage earned: " + empDailyHrsAndWageArr
 );
 
 /**
  * 11A to 11D: using object functions along with the arrow functions
  */
 
 //calculating total wage
 let totalWages = empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
   .reduce(
     (totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage),
     0
   );
 
 //calculating total hrs worked
 let totalHours = empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
   .reduce(
     (totalHours, dailyHrsAndWage) => (totalHours += dailyHrsAndWage.dailyHrs),
     0
   );
 
 console.log("total hrs: " + totalHours + " total wages: " + totalWages);
 
 //showing full part non working days with wages
 process.stdout.write("UC 11B: Logging full work days ");
 //showing full working days
 empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 8)
   .forEach((dailyHrsAndWage) =>
     process.stdout.write(dailyHrsAndWage.toString())
   );
 
 //showing part working days
 let partWorkingDaysStrArr = empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 4)
   .map((dailyHrsAndWage) => dailyHrsAndWage.toString());
 
 console.log("\nPart working days string: " + partWorkingDaysStrArr);
 
 //showing non working days
 let nonWorkingDaysNums = empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 0)
   .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);
 
 console.log("Non working days: " + nonWorkingDaysNums);
 
 //Finding the first occurrence when Full Time Wage was earned
 let firstFullWageEarnedDay = empDailyHrsAndWageArr.find(
   (dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 8
 );
 console.log("first full salary earned on: " + firstFullWageEarnedDay);
 
 //Check if Every Element of Full Time Wage is truly holding Full time wage
 let isEveryElementHasFullTimeWage = empDailyHrsAndWageArr.every(
   (dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 8
 );
 
 console.log(
   "Check every element truly holds full wage: " + isEveryElementHasFullTimeWage
 );
 
 //Check if there is any Part Time Wage
 let isAnyPartTimeThere = empDailyHrsAndWageArr.some(
   (dailyHrsAndWage) => dailyHrsAndWage.dailyHrs == 4
 );
 
 console.log(
   "Check is there any part time wages are there: " + isAnyPartTimeThere
 );
 
 //Find the number of days the Employee Worked
 let numOfDaysEmpWorked = empDailyHrsAndWageArr
   .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHrs > 0)
   .reduce((numOfDaysEmpWorked, dailyHrsAndWage) => {
     if (dailyHrsAndWage > 0) numOfDaysEmpWorked += 1;
   }); //need to check
 
 console.log("numkber of working days123: " + numOfDaysEmpWorked);
