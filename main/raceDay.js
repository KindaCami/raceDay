// Indicate if a runner is registered early or not
let earlyRegistration = false;
// Variable for a runner age 
let runnerAge = 20;
// validation of the inputs
if (typeof runnerAge !== 'number' || typeof earlyRegistration !== 'boolean') {
  console.log('Invalid input values. Please check the runner age and registration status.');
}
// Number is assigned randomly to people adult and early registered
let raceNumber = Math.floor(Math.random() * 1000);
if (runnerAge > 18 && earlyRegistration) {
  raceNumber += 1000;
}
if (runnerAge > 18) { // Adults (>18)
    if (earlyRegistration) {
      console.log(`Runner number ${raceNumber}, you will race at 9:30 am.`);
    } else {
      console.log(`Runner number ${raceNumber}, you will race at 11:00 am.`);
    }
  } else if (runnerAge < 18) { // Youngers (<18)
    console.log(`Hello young runner! Your runner number is: ${raceNumber}, you will race at 12:30 pm.`);
  } else {
    console.log(`Runner ${raceNumber}! Please approach the registration desk.`);
  }
  // You can put different values for the variables to test the code
  // earlyRegistration = true; // Change to true or false to test early registration