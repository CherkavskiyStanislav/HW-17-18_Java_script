console.log('You can ignore single and double quotes like this: \\ \'\\\' \\\" \\\"');

alert('Please enter your data');
let userName = prompt("Enter your name?", 'Name');
alert(`Your name is: ${userName}`);
let userSurName = prompt("Enter your surname?", 'Surname');
alert(`Your full name is: ${userName} ${userSurName}`);
let userAge = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${userSurName}, your age is: ${userAge}`);
let access = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${userSurName}, your age is: ${userAge}, admin status: ${access}`);

console.log(Boolean(alert('5'))); // false (typeof alert undefind тому undefind = false)
console.log(true > false); // true (значення true = 1, а 1>0)
console.log(true > 5); // false (значення true = 1, а 1<5)
console.log(true < '5'); // true (перетворює тип даних string '5' на number тому 1<5)
console.log(true > null); // true (значення true = 1, а 1>0)
console.log(typeof alert()); 
console.log(typeof '');
