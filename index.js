/*****************************************************************
Part 1: Temperature Analysis

Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
       Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]

Task 2) Create a new array containing temperatures less than 20 degrees Celsius.
       Output 2) [19, 18, 19, 19]

******************************************************************/
function temperatureAnalysis1() { // Function to find temp >= 25 
    const temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
        const filtered = temperatures.filter(temp => temp >= 25); // Filtering temp that are >=25
        return filtered; // Returing new array
}
console.log(temperatureAnalysis1()); // Calling function  

function temperatureAnalysis2() { // Function to find temp < 20 
    const temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
        const filtered = temperatures.filter(temp => temp < 20); // Filtering temp that are < 20
        return filtered;
}
console.log(temperatureAnalysis2()); // Calling function 



/*****************************************************************
Part 2: Temperature Transformation

Task 3) Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
       Output 3) [
       71.6, 77, 66.2, 75.2,
       82.4, 86, 69.8, 68,
       80.6, 84.2, 73.4, 78.8,
       75.2, 71.6, 64.4, 66.2, 
       69.8, 82.4, 86, 80.6, 
       78.8, 77, 71.6, 73.4, 
       66.2, 68, 82.4, 84.2,
       80.6, 78.8 
]

Task 4) Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
       Output 4) [
  'Mild', 'Warm', 'Cool', 'Mild',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Warm', 'Warm', 'Mild', 'Warm',
  'Mild', 'Mild', 'Cool', 'Cool',
  'Mild', 'Warm', 'Warm', 'Warm',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Cool', 'Mild', 'Warm', 'Warm',
  'Warm', 'Warm'
]
******************************************************************/
function temperatureTransformation1() { // Function to convert C to F
    let temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
    const temperature = temperatures.map(temp => (temp * 9/5) + 32); /* we used .map here to 
    return new array but with the same length and also because we are using math */
    return temperature; // return new array 
}
console.log(temperatureTransformation1()); // Calling function 


function temperatureTransformation2() { // Function to Convert numbers to strings using if and .map
    let temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
    let temperature = temperatures.map(temp => { // Same as before used if statments and .map to iterate through the array
        if (temp >= 25) {
            return "Warm"
        } else if (temp >= 20 && temp <= 24) {
            return "Mild"
        } else 
        return "Cool"
    });
    return temperature; // returing new array 
}
console.log(temperatureTransformation2()); // callling funtion 



/*****************************************************************
Part 3: Summary Statistics

Task 5) Calculate and return the highest temperature of the month.
       Output 5) 30

Task 6) Calculate and return the lowest temperature of the month.
       Output 6) 18

******************************************************************/
function summaryStatistics1() {
    let temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
    const highest = temperatures.reduce((acc, InputValue) => Math.max(acc, InputValue)); /* uSED Math.max 
    to find the max value */ 
    return highest; // return highest 
}
console.log(summaryStatistics1());



function summaryStatistics2() {
    let temperatures = [22, 25, 19, 24, 28, 30, 21, // Array of temp in C
        20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 
        30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
        const lowest = temperatures.reduce((acc, InputValue) => Math.min(acc, InputValue)); /* Used Math.min
        to find the lowest value */ 
        return lowest; // return lowest 
}
console.log(summaryStatistics2());