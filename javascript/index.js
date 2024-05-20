// var name = "Jack";
// var age = "23";
// var message = "Hi, my name is " + name + " and I am " + age + " years old!";
// //alert(message)
// console.log(message)


//
// var firstName = " John";
// var lastName = "DoeJingleSmith";
// var dateOfBirth = " 10-09-69";
// var age = 57;
// var profileImgUrl = "http://coolpix.com/johndoe.png";

// var loginWelcomeMessage = "Welcome," + firstName + ". Happy " + age + "th birthday!";
//console.log(loginWelcomeMessage)

//
// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500

//COMPARISM OPERATORS
// == equal to(checking if the value is the same)
//<= less than or equal to
// >= greater than or equal to
// === (checking if value and type is the same)
// != not equal to
// var val1 = 23;
// var val2 = "23";

// if (val1 !== val2) {
//     console.log("this are not the same!")

// }

// else {
//     console.log("they are not the same")
// }

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes
//     console.log("we should see this")
//     console.log("Account Balance: " + myAccountBalance)
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//     console.log("transaction successful")
//     myAccountBalance -= nikeSBShoes - coupon;
//     console.log("Account Balance: " + myAccountBalance)


// } else {
//     console.log("Insufficient Balance")
// }



//LOGICAL OPERATOR
// || or operator

// if (1 === 3 || "joe" === "joe") {
//     console.log("one of this true")
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var disabledHandicap = true;

// if (cat1 > cat2 && cat1 > cat3 && !disabledHandicap) {
//     console.log("Cat 1 is the cutest!");
// } else if (cat2 > cat1 && cat2 > cat3 && !disabledHandicap) {
//     console.log("Cat 2 is the cutest!")
// } else if (cat3 > cat1 && cat3 > cat2 || disabledHandicap) {
//     console.log("Cat 3 is the cutest")
// }





//ARRAYS
// var students = ["Timmy", "Jannesa", "Arun"]

// var naughtyList = []
// naughtyList.push(students[0])
// var index = naughtyList.indexOf("Timmy")
// if (index > -1) {
//     naughtyList = naughtyList.splice(index, 1)
// }
// console.log(index)


//LOOPS
// var total = 10;

// for (var x = 0; x < total; x++) {
//     console.log(x)
//     //iterate until told not to
// }

// var students = ["Bola", "Eme", "Hart", "Emma", "Mary"]

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index])
// }


//FUNCTIONS
// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var length2 = 12
// var width2 = 14;
// var area2 = length2 * width2
// console.log(area1)
// console.log(area2)


// function area(length, width) {
//     return length * width;
// }

// var area1 = area(10, 15)
// console.log(area1)

// var bankBalance = 500;
// function makeTransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale
//         console.log("Purchase successful")

//     } else {
//         console.log("Insufficient funds")
//     }
// }
// console.log(bankBalance)
// makeTransaction(79.00)

// console.log(bankBalance)
// makeTransaction(90.00)

// console.log(bankBalance)
// makeTransaction(490.00)


// var transaction = function (priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale
//         console.log("Purchase successful")

//     } else {
//         console.log("Insufficient funds")
//     }
// }

// transaction(50)

// var printCustomerName = function (first, last) {
//     console.log("First Name: " + first + " Last Name: " + last)
// }

// printCustomerName("John", "Doe")

// var applyForCreditCard = function (creditScore, soul) {

// }



// var total = 10;

// for (var x = 0; x < total; x++) {
//     console.log(x)
//     //iterate until told not to
// }


var students = []

// different way to create an object

function Student(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age;
    this.greeting = function () {
        return "Hi, I'm " + this.firstName + "and I'm " + this.age + " years old.";
    }
}

students.push(new Student("Jane", "Boe", 10));
students.push(new Student("Mar", "Bunt", 5))
students.push(new Student("June", "Bra", 8))

var student = students[0];
//for in loop
for (var key in student) {
    console.log(student[key])
}

// var s1 = new student("Jane", "Doe", 8);
// console.log(s1);
// console.log(s1.greeting())

// var student0 = {
//     firstName: "Jayne",
//     lastName: " manny",
//     age: "5",
//     greeting:function(){

//     }
// }



// // creating an empty object

// var student1 = new Object();
// student1.firstName = "Mary";
// student1.lastName = "Doe";
// student1.age = 9;


// var student2 = {};
// student2.firstName = "Vola"
// student2.lastName = "Ade"
// student2.age = 10


// var students = []
// students.push(student0)
// students.push(student1)
// students.push(student2)

// for (var index = 0; index < students.length; index++) {
//     var student = students[index]
//     console.log(student.greeting())
// }
