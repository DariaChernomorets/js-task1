let name = prompt("What is your name?");

if (name == null || name ==="") {
    alert("User didn't enter the name. Please try again!");
}
else {
    alert("Hello, " + name + "! " + "How are you?")
}