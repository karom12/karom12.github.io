function test1()
{
    alert("Hey my script is running");
}
function askName()
{
    var name = prompt("What is your name?");
    var feeling = prompt("How are you doing?");
    const d1 = new Date();
    alert("Today is "+ d1 + ". The Totally-Not-Doing-Illegal-Things LLC welcomes you, " + name +"! We're glad you are doing " + feeling +"!");
}
function weSell()
{
    alert("We totally don't sell anything illegal");

}
function weAreReal()
{
    alert("We totally arent laundering money");

}
function twoWords()
{
    var a = prompt("Pick a color");
    var b = prompt("Pick a animal");
    alert(a + " " + b);

}
function verballyHurt()
{
    let rude = prompt("Pick a rude word");
    let rude2 = prompt("Pick another rude word");
    let rude3 = prompt("Pick any place");
    alert("You "+ rude +", you are a " + rude2 +". Meet me by " + rude3 +".");
}
function finances()
{
   var taxes = 100
   var profit = 99999999
   var total = profit - taxes;
   alert("We pay " + taxes + " in taxes, and make a profit of " + profit +". and after taxes " + total + ". We are totally not shady")
}