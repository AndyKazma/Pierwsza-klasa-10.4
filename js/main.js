function Telefon(marka, cena, kolor) {
    this.marka = marka; 
    this.cena = cena;
    this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor " + this.kolor + ", a cena to " + this.cena + " pln.");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 2150, "czarny");
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var OnePlusOne = new Telefon("OnePlus", 1250, "niebieski");

document.getElementById("demo").innerHTML =
"My phone is " + iPhone6S.marka;

iPhone6S.printInfo();

window.alert("My phone is " + iPhone6S.marka);