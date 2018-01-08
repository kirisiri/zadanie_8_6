alert('Hello, I will compute a result of (a * a) - (2 * a * b) + (b * b) for you');
var a = prompt('Enter the first number');
var b = prompt('Enter the second number');
var value = (a*a)-(2*a*b)+(b*b); 
console.log('The result for a: ' + a + ' b: ' + b + ' is equal to: ' + value);
alert('Your score equals: ' + value);

if ( value > 0 ) {
	alert ('Wynik jest dodatni')
} else if ( value == 0 ) {
	alert ('Wynik jest zerowy')
} else if ( value < 0 ) {
	alert ('Wynik jest ujemny')
} else 
	alert ('Wprowadzono niepoprwane dane.')
