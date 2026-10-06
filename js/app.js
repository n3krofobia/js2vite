/*
console.log('Katalog warsztatów uruchomiony');
console.log('Pierwsza strona');
console.log('Tu sie w konsoli pisze jakby co');
console.log(typeof 'tekst');
console.log(typeof 12);
console.log(typeof true);
console.log(typeof NaN);
console.log(NaN + 5);
console.log(typeof typeof Number);

let enrolled = 4;
let title = (enrolled === 10) ? 'Kurs tak' : 'nie';
const seats = 12;
console.log(title, seats, enrolled);
enrolled = 5;
console.log(title, seats, enrolled);
/*seats = 13;*/
/* Assignment to constant variarble 

const string1 = 'kupka';
let string2 = 'gowno';
const liczba1 = 2137;
let liczba2 = 420;
const bool1 = true;
let bool2 = false;


console.log(string1, string2);
console.log(string1 + string2);
console.log(string1- string2);
console.log(string1 * string2);
console.log(string1 / string2);
console.log(liczba1 + liczba2);
console.log(bool1 + bool2);
console.log(bool1 * bool2);
console.log(bool1 / bool2);
bool2 = true;
console.log(bool1 / bool2);

console.log(`${title} ilosc miejsc: ${seats} ilosc wolnych miejsc: ${seats - enrolled}`);
console.log('${title} ilosc miejsc: ${seats} ilosc wolnych miejsc: ${seats - enrolled}');
console.log("${title} ilosc miejsc: ${seats} ilosc wolnych miejsc: ${seats - enrolled}");

if (enrolled > 10)
{
    console.log(`${enrolled} miejsc zajetych. Proszę już siadać`);
}
else if (enrolled < 2)
{
    console.log(`${enrolled} miejsc zajetych. Jeszcze mozna sie wstrzymac`);
}
else {
    console.log(`Jest mega essa siedz se jak chcesz`);
}

switch (enrolled) {
    case 0:
        {
            console.log()
        }
}
*/

let seats = 30;
let takenSeats = 3;

console.log(`Wszystkie miejsca : ${seats}`);
console.log(`Zajęte miejsca: ${takenSeats}`);

switch(takenSeats)
{
    case 1:
    case 2:
    case 3:
        {
            console.log(`Mega spoko luzik masz jeszcze dużo miejsc do wyboru bo aż ${seats - takenSeats}`);
            break;
        }
    
    case 27:
    case 28:
    case 29:
        {
            console.log('Mordeczko koncza sie miejsca zepnij dupke');
            break;
        }

    case 0:
        {
            console.log(`Do wyboru do koloru wszystkie miejsca są wolne`);
            break;
        }

    case 30:
        {
            console.log(`Wszystkie miejsca zajete sory`);
            break;
        }

    default: {
        console.log(`No tak spoko jest`);
    }



}


