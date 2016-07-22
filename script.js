// Given a year as a number (ex: 2016), print the number of Friday-the-thirteens in that year. 
// Read about how to construct dates closely to get ideas on how to implement this: 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date> #date #loop #medium #math
// --SUPER BONUS-- How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?



var d = new Date(2016, 0)


var counter = 0;

for (var i = 0; i < 12; i++) {
	
	d.setMonth(i);

	for (var j = 1; j < daysInMonth(i, 2016); j++ ) {
		d.setDate(j);
		
		console.log(d.toString());

		var dayOf = d.getDay();
		var dateOf = d.getDate();
		// console.log(dayOf)		
		if(dayOf == 5 && dateOf == 13) {
			counter++;
		
		}
	}
	
}

console.log("final count is " + counter)

function daysInMonth(month, year) {
	var m = new Date(year, month + 1, 0)
	return m.getDate()
}


