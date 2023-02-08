let firstSalery = prompt("Enter first month salery", '1');
let secondSalery = prompt("Enter second month salery", '2');
const sum = Number(firstSalery) + Number(secondSalery);
alert(`Your salery for 2 month: ${sum}$`);
let bonus = 1;
const total = sum + bonus;
alert(`You have a extra bonus! Your totaly salery is: ${sum}$ It's increase for ${bonus}$ and now it is: ${total}$`);
// alert(`Will you work next? ${total >= 2000}`);
alert((total <= 2000) && 'I\'m out' || total >= 2000 && 'I\'m redy to work');