wD// JavaScript Document
alert("js is attached");

function roomBooking(){
	var totalCost = 0;
	alert("room booking");
	var checkInDate=document.getElementById("CheckInDate").value;
	alert(checkInDate);
	var numberOfNights = document.getElementById("numberOfNights").value;
	alert(numberOfNights);
	var pricePerNight=this.dataset.price;
	var roomType=this.value;
	alert(roomType+pricePerNight);
	totalCost+=Number(numberOfNights+pricePerNight);
	extraOptions=[];
	var addExtras=document.getElementsByClassName()
}


var tiles = document.getElementById("card);
for(var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener("click", roomBooking)
}