// calculates all of the price including weight for shipment and exchnage from USD to EGP
function calculate (price, weight, customsRate){
	price = parseInt(price, 10);
	var exchangeRate = 7.0;

	var shipment = Math.floor(weight * 2) * 9.0 + 12.0;
	var customs = customsRate * price;

	console.log(price, shipment, customs, exchangeRate);
	console.log((price + shipment + customs) );

	return Math.ceil((price + shipment + customs) * exchangeRate);
}

//getting values from the form to calculate it before display
function calc () {
	jQuery('#final').text(
        calculate($("#price").val(), $("#weight").val(), $('input[name=itemtype]:checked').val())
        );}

//calculate as soon as the page loads with current numbers
$(calc);

//Updates the price with new calculated value each time an input changes
$('input').on('load input change', calc);