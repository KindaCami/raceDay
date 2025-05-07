# Race Day Registration System

A simple JavaScript program designed to manage runner registration for an event, assigning race numbers and start times based on age and registration period.

## Description

This project simulates a race registration system, categorizing runners by age (adults and youth) and by the time of their registration (early or late). It assigns a unique race number and a specific start time based on these conditions.

## Implemented Features

* Classifies runners as Adults (>18 years old) or Youth (<18 years old).
* Distinguishes between Early and Late registration for adults.
* Assigns race numbers:
* Adults with early registration: Number >= 1000.
* All other runners: Number < 1000.
* Assigns start times:
* Adults with early registration: 9:30 AM.
* Late registration for adults: 11:00 AM.
* Youth runners: 12:30 PM.
* Special handling for runners exactly 18 years old.

## Race Rules in Place

### Race Numbers
* **Adults (18+) with Early Registration:** Receive a race number equal to or greater than 1000.
* **All Other Runners:** Receive a race number less than 1000 (this includes late registration for adults, youth runners, and, for now, runners 18 years old).

### Start Times
* **Adults (18+) with Early Registration:** Run at 9:30 AM.
* **Adults (18+) with Late Registration:** Run at 11:00 AM.
* **Young Runners (under 18):** Run at 12:30 PM (regardless of when you register).
* **Runners Exactly 18 Years Old:** Currently, you are directed to go to the registration desk for assistance. This logic will be refined in future versions.

## How to Use / Configuration

1. **Runtime Environment:** Make sure you have an environment to run JavaScript (e.g., [Node.js](https://nodejs.org/) installed on your system or the console of a modern web browser).
2.  **Runner Data:**
* The script is designed to process runner data. In its current form, variables such as `runnerAge` and `earlyRegistration` can be modified directly in the script to test individual scenarios.
* To handle multiple runners, the ideal structure is an array of objects, where each object represents a runner and contains its properties (e.g., `name`, `age`, `earlyRegistration`).

```javascript
// Example of how data could be structured for multiple runners:
const allContestants = [
{ name: 'Ana', age: 25, earlyRegistration: true },
{ name: 'Luis', age: 30, earlyRegistration: false },
{ name: 'Carla', age: 17, earlyRegistration: true },
{ name: 'David', age: 18, earlyRegistration: false }
// ... more runners
];
```

3. **Script Execution:**
* If you're using Node.js, save the code to a file (for example, `raceDay.js`) and run it from your terminal with the command:
```bash
node raceDay.js
```
* If you're using a browser, you can include the script in an HTML file and open it, or paste the code into the developer console.

4. **Output:**
* The program will display the assigned race number and start time for each processed runner in the console, or a message telling them to go to the registration desk.

## Code Example (Structure for Multiple Runners)

```javascript
function assignRace(contestant) {
const runnerAge = contestant.age;
const earlyRegistration = contestant.earlyRegistration;
const runnerName = contestant.name || 'Contestant'; 

// Data validation (example) 
if (typeof runnerAge !== 'number' || runnerAge <= 0 || typeof earlyRegistration !== 'boolean') { 
console.log(`Invalid data for ${runnerName}.`); 
return; 
} 

let raceNumber = Math.floor(Math.random() * 1000); 
if (runnerAge > 18 && earlyRegistration) { 
raceNumber += 1000; 
} 

console.log(`\n--- Processing ${runnerName} (Age: ${runnerAge}, Early Registration: ${earlyRegistration}) ---`); 

if (runnerAge > 18) {
if (earlyRegistration) {
console.log(`Runner number ${raceNumber}, you will run at 9:30 am.`);
} else {
console.log(`Runner number ${raceNumber}, you will run at 11:00 am.`);
}
} else if (runnerAge < 18) {
console.log(`Hello young runner! Your race number is: ${raceNumber}, you will run at 12:30 pm.`);
} else { // Exactly 18 years old
console.log(`Runner ${raceNumber}! Please come to the registration desk.`);
}
}

const allContestants = [
{ name: 'Ana', age: 25, EarlyRegister: true },
{ name: 'Luis', age: 30, EarlyRegister: false },
{ name: 'Carla', age: 17, EarlyRegister: true }
];

for (const contestant of allContestants) {
assignRace(contestant);
}

