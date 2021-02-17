var drinkQuant = new Array; //will store the quantities of drinks ordered
var extraQuant = new Array; //will store the quantities of extras ordered
var drinkPrice = [1000, 1350, 2350, 400, 6000, 500]; //array holding the drink prices in order
var receipt; //will be used to store the receipt string as its built and then used
var validctrl; //control variable for validation
var count;//control variable for loop
var id = ["yamazaki", "dalmore1", "dalmore2", "suntory", "macallan", "hirsch", "apple", "cherry", "chef", "cheese", "pecans", "pistachios", "extraother"]; //an array holding the ids for all the boxes that need validating
var sundae;


function orderConfirm(){ //brings up a popup to confirm the order, also acts as the receipt
	if(validation() == true){
		receiptFilter();
		var orderConfirm = window.confirm(receipt);
			if (orderConfirm == true){ //when ok is pressed another popup will inform their has been placed then will reset the form
				resetAll();
			} else { //when cancel is pressed it will simply give them a popup telling them their order has been canceled
				window.alert("Your order has been cancelled")
				return false;
			};
	} else {
		return false;
	};
};

function receiptFilter(){ //loops through two arrays to filter out the quantities that have a value of 0 and builds the receipt
	drinkQuant[0] = document.getElementById("yamazaki").value;
	drinkQuant[1] = document.getElementById("dalmore1").value;
	drinkQuant[2] = document.getElementById("dalmore2").value;
	drinkQuant[3] = document.getElementById("suntory").value;
	drinkQuant[4] = document.getElementById("macallan").value;
	drinkQuant[5] = document.getElementById("hirsch").value;
	
	extraQuant[0] = document.getElementById("apple").value;
	extraQuant[1] = document.getElementById("cherry").value;
	extraQuant[2] = document.getElementById("chef").value;
	extraQuant[3] = document.getElementById("cheese").value;
	extraQuant[4] = document.getElementById("pecans").value;
	extraQuant[5] = document.getElementById("pistachios").value;
	extraQuant[6] = document.getElementById("extraother").value;
	
	var drinkTotal = [drinkQuant[0] * drinkPrice[0], drinkQuant[1] * drinkPrice[1], drinkQuant[2] * drinkPrice[2], drinkQuant[3] * drinkPrice[3], drinkQuant[4] * drinkPrice[4], drinkQuant[5] * drinkPrice[5]];
	//drinkTotal variable is an array storing the prices for whatever quantities are ordered
	//needs to be built by a loop in future iteration
	
	var totalPrice = drinkTotal[0] + drinkTotal[1] + drinkTotal[2] + drinkTotal[3] + drinkTotal[4] + drinkTotal[5];
	//total price of the order
	//needs to be built by a loop in future iteration	
		
	receipt = "You ordered: \n";
	
	for (var count=0; count < drinkQuant.length; count++){ //the first loop used for the drink's filter
		if (drinkQuant[count] != 0){
			switch (count){
				case 0:
					receipt = receipt + "Yamazaki 50 Year Single Malt: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
					break;
				case 1:
					receipt = receipt + "Dalmore 50 Crystal Decanter: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
					break;
				case 2:
					receipt = receipt + "Dalmore 62 Single Highland Malt: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
					break;
				case 3:
					receipt = receipt + "Suntory Hibiki 30 Year Blended: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
					break;
				case 4:
					receipt = receipt + "Macallan 1926 Single Malt: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
					break;
				case 5:
					receipt = receipt + "A.H. Hirsch Reserve 16 Year Straight Bourbon: " + drinkQuant[count] + " - $" + drinkTotal[count] + "\n";
			}
		}
	}
	
	receipt = receipt + "\nExtras: \n";

	for (var count=0; count < extraQuant.length; count++){ //the second loop used for the extra's filter
		if (extraQuant[count] != 0){			
			switch (count){
				case 0:
					receipt = receipt + "Apple Pie: " + extraQuant[count] + "\n";
					break;
				case 1:
					receipt = receipt + "Cherry Pie: " + extraQuant[count] + "\n";
					break;
				case 2:
					receipt = receipt + "Chef's Special: " + extraQuant[count] + "\n";
					break;
				case 3:
					receipt = receipt + "Cheesecake: " + extraQuant[count] + "\n";
					break;
				case 4:
					receipt = receipt + "Pecans: " + extraQuant[count] + "\n";
					break;
				case 5:
					receipt = receipt + "Pistachios: " + extraQuant[count] + "\n";
					break;
				case 6:
					receipt = receipt + "Special Request: " + extraQuant[count] + "\n";
			}
		}
	}
	
	if (sundae == true){//if the sundae is ordered
		receipt = receipt + "And your order of complimentary sundae \n";
	};
	
	receipt = receipt + "\nYour total is $" + totalPrice + ". \n \n Click \"OK\" to confirm your order. Click \"Cancel\" to cancel your order."	
};

function resetclick(){ // asks for confirmation of reset
	var resetConfirm = window.confirm("Are you sure you want to reset fields")
	if (resetConfirm == true){ //when ok is pressed runs resetAll
		resetAll();
	}
};

function resetAll(){ //resetAll function resets all of the forms on the page
	document.getElementById("firstname").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("phonenum").value = "";
	document.getElementById("method").value = "chooseOne";
	document.getElementById("yamazaki").value = "0";
	document.getElementById("dalmore1").value = "0";
	document.getElementById("dalmore2").value = "0";
	document.getElementById("suntory").value = "0";
	document.getElementById("macallan").value = "0";
	document.getElementById("hirsch").value = "0";
	document.getElementById("apple").value = "0";
	document.getElementById("cherry").value = "0";
	document.getElementById("chef").value = "0";
	document.getElementById("cheese").value = "0";
	document.getElementById("pecans").value = "0";
	document.getElementById("pistachios").value = "0";
	document.getElementById("extraother").value = "0";
	document.getElementById('van').checked = false;
    document.getElementById('cho').checked = false;
    document.getElementById('str').checked = false;
	document.getElementById('top').value = "chooseOne";
	document.getElementById('sml').checked = false;
    document.getElementById('spr').checked = false;
    document.getElementById('all').checked = false;
};

function validation(){//main validation function
	validctrl = true;
	count = 0;
	while (validctrl == true && count < id.length){
		numberCheck(id[count]);
		count += 1;
	};
	if (document.getElementById('top').value != ""){
		sundae = true;
	};
	if (document.getElementById('van').checked == true || document.getElementById('cho').checked == true || document.getElementById('str').checked == true){
		sundae = true;
	};
	if (sundae == true){
		validice();
		validradio();
		validtop();
	};
	return validctrl;	
};

function radiosuntrue(){//used to set sundae control variable to true onclick for radio buttons
	sundae = true;
};

function validice(){// validation for checkboxes
	if (document.getElementById('van').checked == false && document.getElementById('cho').checked == false && document.getElementById('str').checked == false){
		window.alert('Please select an ice cream');
		document.getElementById('van').focus();
		validctrl = false;
	};
};

function validradio(){
	if (document.getElementById('sml').checked == false && document.getElementById('spr').checked == false && document.getElementById('all').checked == false){
		window.alert('Please select a size');
		document.getElementById('sml').focus();
		validctrl = false;
	};
};

function validtop(){
	if (document.getElementById('top').value == ""){
		window.alert("Please select one or more toppings");
		document.getElementById('top').focus();
		validctrl = false;
	};
};

function numberCheck(id){//validates numeric element
	isNaNChecker(id);
	isInteger(id);
	isPositive(id);
};

function isNaNChecker(id) { //checks the element to see if the value is numeric
	var numberCheck = document.getElementById(id);
    if (isNaN(numberCheck.value)) {
        window.alert("Please enter a numeric value.");
        document.getElementById(id).style.backgroundColor = 'yellow';
		validctrl = false;
    }
};

function isInteger(id) { //checks the element to see if the value is an integer
	var numberCheck = document.getElementById(id);
	if (numberCheck.value % 1 !== 0){
		window.alert("Please enter a whole number.");
        document.getElementById(id).style.backgroundColor = "yellow";
		validctrl = false;
	}
};

function isPositive(id) { // checks the element to see if the value is positive
    var numberCheck = document.getElementById(id);
    if (numberCheck.value < 0) {
        window.alert("Please enter a positive number.");
        document.getElementById(id).style.backgroundColor = "yellow";
		validctrl = false;
    }
};

function resetc(id){//resets the color to white
	id.style.backgroundColor = "white";
};

function chbx(obj) {//Gives the checkboxes radio button functionality
	var box = obj;
   	if(document.getElementById(box.id).checked == true) {
      	document.getElementById('van').checked = false;
      	document.getElementById('cho').checked = false;
      	document.getElementById('str').checked = false;
      	document.getElementById(box.id).checked = true;
	} else {
		document.getElementById('van').checked = false;
		document.getElementById('cho').checked = false;
      	document.getElementById('str').checked = false;
	}
};