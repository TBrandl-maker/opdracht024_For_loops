/* Iedereen kent ze nog wel: de tafel tabellen van de basischool. We gaan nu een script schrijven dat de tafel tabellen voor je print in de console. 
Schrijf een loop die "iterate" van 0 tot 10. 
Gebruik voor het eerste voorbeeld de tafel van 9. 
Console.log elke keer de uitkomst van de tafel van 9 naar de console. 

Resultaat: 
1 x 9 = 9 
2 x 9 = 18 
3 x 9 = 27 
etc.....

Bonus: gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naar de console. 
Het resultaat bestaat uit 100 regels code in je console.  */

for (let i = 1; i <= 10; i++) {
    console.log(i + ' x 9 = ' + i * 9);
}

//bonus
for (let x = 1; x <= 10; x++) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + ' x ' + x + ' = ' + i * x);
    }
}