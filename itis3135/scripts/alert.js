function test1()
{
    alert("Hey my script is running");
}
function askName()
{
    var name = prompt("What is your name?");
    var feeling = prompt("How are you doing?");
    const d1 = new Date();
    alert("Today is "+ d1.getMonth() +d1.getDate() + d1.getFullYear() +",and the time is:" + d1.Date.now() + " The Totally-Not-Doing-Illegal-Things LLC welcomes you, " + name +"! We're glad you are doing " + feeling +"!")
}