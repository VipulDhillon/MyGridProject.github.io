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
    }
];

var userNamePrompt = prompt("what's your username");
var passwordPrompt = prompt("what's yous password");

function singIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry wrong username and password!")
        }
}

singIn(userNamePrompt, passwordPrompt);