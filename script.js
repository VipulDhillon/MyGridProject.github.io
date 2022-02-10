
/* 4+3;
if (4+3 === 7) {
    alert("You are smart! as you have opened best website");
}

function sayhello() {
    console.log("hello")
}

sayhello();

var saybye = function() {
    console.log("bye")
}

saybye();

function multiply(a, b) {
    return a*b;
}
multiply(3,4);*/

/*var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);*/
var database = [
    {
        username: "vipul",
        password: "vipul1"
    },
    {
        username: "dishant",
        password: "dishant1"
    },
    {
        username: "vishwa",
        password: "vishwa1"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool"
    }
];

function isUserValid(username, password) {
    for (var i=0; i< database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        } /*else {
                alert("Sorry, wrong username and password");
            }*/ 
    }
    return false;
}

function singIn(username, password) {
    if (isUserValid(username, password)) {
            console.log(newsFeed);
    }
    else {
        alert("Sorry wrong username and password!");
    }
}

var userNamePrompt = prompt("what's your username");
var passwordPrompt = prompt("what's your password");


singIn(userNamePrompt, passwordPrompt);
/*var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
}
while(counterTwo > 0);*/
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy",
];
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    console.log(todos);
    todos.pop(); 
}
var button = document.getElementsByTagName("button")[0]

button.addEventListener("mouseleave", function() {
    console.log("CLICK!!!!");
})