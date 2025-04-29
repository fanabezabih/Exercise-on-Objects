//1. Creating a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees and  a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. 


function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}
const employees = [
    new Employee('Abel', 'developer', 60000),
    new Employee('Bamlak', 'manager', 80000),
    new Employee('Meley', 'developer', 50000),
    new Employee('Semhal', 'designer', 45000),
    new Employee('Tsion', 'developer', 70000)];

employees.forEach(employee => {
    if (employee.position === 'developer') {
        employee.salary *= 1.10;
    };
});
console.log(employees);







//2.Given an array of product objects  write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order.


const products = [
    { name: 'Phone', price: 1200, inStock: true },
    { name: 'Mouse', price: 20, inStock: false },
    { name: 'Keyboard', price: 50, inStock: true },
    { name: 'Tv', price: 300, inStock: true },
    { name: 'Printer', price: 150, inStock: false }
];
const availableProducts = products
    .filter(product => product.inStock) 
    .sort((a, b) => a.price - b.price); 
console.log(availableProducts);



//3.Creating an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name.





function averageScoreStudent(grades){
    for(student in grades){
        const scores=grades[student];
        const average=scores.reduce((sum,score)=>sum+score,0)/scores.length;
        if(average>70){
          console.log("pass")
        }
        else{
          console.log("Fail")
        }
        console.log(`${student}: ${average}`);
    }
}
const grades={
    Fana:[85,75,65],
    Hewan:[95,75,85],
    Tirsit:[67,85,45],
    Fiona:[33,45,40]
};
averageScoreStudent(grades)


//4.A function constructor called User that takes username, email, and isActive (boolean) and creating an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.


function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}
const users = [
    new User('user1', 'user1@example.com', true),
    new User('user2', 'user2@example.com', false),
    new User('user3', 'user3@example.com', true),
    new User('user4', 'user4@example.com', false),
    new User('user5', 'user5@example.com', true)
];

const activeUsers = users.filter(user => user.isActive).map(user => user.username);
console.log('Active Users:', activeUsers);



//5.Having an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance".

const destinations = [
    { name: 'Paris', distance: 3000, budgetRequired: 1500 },
    { name: 'London', distance: 4500, budgetRequired: 2000 },
    { name: 'Berlin', distance: 1200, budgetRequired: 800 },
    { name: 'Tokyo', distance: 8000, budgetRequired: 2500 },
    { name: 'New York', distance: 5000, budgetRequired: 1800 }
];
function filterDestinations(maxDistance, budget) {
    return destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= budget
    );
}
const affordableDestinations = filterDestinations(5000, 2000);
console.log(affordableDestinations);










