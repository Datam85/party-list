var partyList = ["datam", "angela", "kay", "sofy", "jesika"];
var name = prompt("What is your name ?").toLowerCase()
var isInList = partyList.includes(name);
if(isInList === true) {
    alert("Welcome")
}
else{
    alert("Sorry mybe next time")
}