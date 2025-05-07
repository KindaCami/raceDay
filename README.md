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
