var Budget = 100;
var Product = 60;

var ResultP = document.getElementById("ResultParagraph");

if (Budget >= Product) {
    ResultP.innerHTML = "U heeft genoeg geld! Budget: " + Budget + " Productprijs: " + Product; 
    ResultP.style.color = "green";
}
else {
    ResultP.innerHTML = "Helaas, te weinig geldt Budget: " + Budget + " Productprijs: " + Product;
    ResultP.style.color = "red";
}