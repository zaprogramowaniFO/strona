
let name = 'Adam';
// name = prompt('Jak masz na imię?');
// alert(`Witaj ${name}`);
// document.write(`Cześć ${name}`);

// let isTrue;
// isTrue = confirm('Czy masz 18 lat?');
// alert(isTrue);

// let day = '4';
// console.log(day);
// console.log(typeof(day));

// if(day === 4){
//     document.write('Dziś jest czwartek!');
// } else {
//     document.write('Dziś jest jakiś dzień!');
// }

// let x = 5;

// x = 1;
// x += 1;

// if(x>2){
//     console.log('X jest większe od 2!');
// } else if(x==2) {
//     console.log('X jest równe 2!');
// } else {
//     console.log('X jest mniejsze od 2!');
// }

let age = 18;
let drivingLicense = false;

if(age >= 18 && drivingLicense){
    console.log('Możesz prowadzić!');
} else if (age >= 18 && !drivingLicense) {
    console.log('Możesz prowadzić ale musisz mieć prawko!');
} else {
    console.log('Jesteś za młody aby zrobić prawko!');
}