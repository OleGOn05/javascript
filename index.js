//task1

function findMiddleCharacter() {
    let input = prompt("Please enter a word:");

    if (input === null) {
        alert("Canceled.");
        return;
    } 
    
    else if (input.trim() === "") {
        alert("Invalid value");
        return;
    }

    input = input.trim();

    let middleIndex = Math.floor(input.length / 2);

    if (input.length % 2 === 0) {
        alert(input[middleIndex - 1] + input[middleIndex]);
    } 
    
    else {
        alert(input[middleIndex]);
    }
}

findMiddleCharacter();

//task2

const users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    }
];

function getUniqueSkills(users) {
    var skills = [];
    for (var i = 0; i < users.length; i++) {
        for (var j = 0; j < users[i].skills.length; j++) {
            if (skills.indexOf(users[i].skills[j]) === -1) {
                skills.push(users[i].skills[j]);
            }
        }
    }
    return skills;
}

function getTotalBalance(users) {
    var totalBalance = 0;
    for (var i = 0; i < users.length; i++) {
        if (users[i].friends.length === 2 && users[i].age < 30) {
            totalBalance += users[i].balance;
        }
    }
    return totalBalance;
}

console.log("Unique skills:", getUniqueSkills(users));
console.log("Total balance of specific users:", getTotalBalance(users));

//task 3

//Spread розгортає елементи масиву або об'єкта в індивідуальні елементи

//Example:
//const arr1 = [1, 2, 3];
//const arr2 = [...arr1, 4, 5, 6];
//console.log(arr2); 
// Output: [1, 2, 3, 4, 5, 6]

//Rest оператор збирає множинні елементи в один масив

//Example:
//const [first, ...rest] = [1, 2, 3, 4];
//console.log(first); // Output: 1
//console.log(rest);  // Output: [2, 3, 4]