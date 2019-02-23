var writePopup = document.querySelector(".modal-write-us");
var addedPopup = document.querySelector(".modal-added");
var overlay = document.querySelector(".overlay");
var services = document.querySelector(".services");
var map = document.querySelector(".modal-map");

var buy = document.querySelectorAll(".buy");
var addedClose = addedPopup.querySelector(".modal-close");
var continueShoping = addedPopup.querySelector(".button-continue");
var toOrder = addedPopup.querySelector(".order-btn");

if (map) {
	var mapBtn = document.querySelector(".map");
	var mapClose = map.querySelector(".modal-close");

	mapBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		map.classList.add("modal-show");
		overlay.classList.add("show");
	});

	mapClose.addEventListener ("click", function(evt) {
		evt.preventDefault();
		map.classList.remove("modal-show");
		overlay.classList.remove("show");
	});

	window.addEventListener ("keydown", function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();
			if(map.classList.contains("modal-show")) {
				map.classList.remove("modal-show");				
				overlay.classList.remove("show");
			}	
		}
	});
}

if (writePopup) {
	var writeBtn = document.querySelector(".write-us-btn");
	var writeUsClose = writePopup.querySelector(".modal-close");
	var writeForm = writePopup.querySelector(".write-us-form");
	var yourName = writePopup.querySelector("[name=name]");
	var yourEmail = writePopup.querySelector("[name=email");

	writeBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.add("modal-show");
		overlay.classList.add("show");
		yourName.focus();
	});

	writeUsClose.addEventListener ("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.remove("modal-show");
		writePopup.classList.remove("modal-error");
		overlay.classList.remove("show");
	});

	writeForm.addEventListener ("submit", function(evt) {
		if (!yourName.value || !yourEmail.value) {
			evt.preventDefault();
			writePopup.classList.remove("modal-error");
			writePopup.offsetWidth = writePopup.offsetWidth;
			writePopup.classList.add("modal-error");
		}
	});

	window.addEventListener ("keydown", function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();
			if(addedPopup.classList.contains("modal-show") || writePopup.classList.contains("modal-show")) {
				writePopup.classList.remove("modal-show");
				addedPopup.classList.remove("modal-show");
				writePopup.classList.remove("modal-error");
				overlay.classList.remove("show");
			}	
		}
	});
}

if (services) {
	var deliveryBtn = services.querySelector(".delivery-btn");
	var warrantyBtn = services.querySelector(".warranty-btn");
	var creditBtn = services.querySelector(".credit-btn");

	var delivery = document.querySelector(".delivery");
	var warranty = document.querySelector(".warranty");
	var credit = document.querySelector(".credit");

	deliveryBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		warrantyBtn.classList.remove("service-btn-active");
		creditBtn.classList.remove("service-btn-active");
		warranty.classList.remove("show");
		credit.classList.remove("show");
		deliveryBtn.classList.add("service-btn-active");
		delivery.classList.add("show");
		
	});

	warrantyBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		deliveryBtn.classList.remove("service-btn-active");
		creditBtn.classList.remove("service-btn-active");
		delivery.classList.remove("show");
		credit.classList.remove("show");
		warrantyBtn.classList.add("service-btn-active");
		warranty.classList.add("show");
	});

	creditBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		deliveryBtn.classList.remove("service-btn-active");
		warrantyBtn.classList.remove("service-btn-active");
		warranty.classList.remove("show");
		delivery.classList.remove("show");
		creditBtn.classList.add("service-btn-active");
		credit.classList.add("show");
	});

	if (deliveryBtn.classList.contains("service-btn-active")) {
		delivery.classList.add("show");
	}

	if (warrantyBtn.classList.contains("service-btn-active")) {
		warranty.classList.add("show");
	}

	if (creditBtn.classList.contains("service-btn-active")) {
		credit.classList.add("show");
	}
}

for (i = 0; i < buy.length; i++)
	buy[i].addEventListener ("click", function(evt) {
		evt.preventDefault();
		addedPopup.classList.add("modal-show");
		overlay.classList.add("show");
		toOrder.focus();
	});

addedClose.addEventListener ("click", function(evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("show");
});

continueShoping.addEventListener ("click", function(evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("show");
});

window.addEventListener ("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(addedPopup.classList.contains("modal-show")) {
			addedPopup.classList.remove("modal-show");
			overlay.classList.remove("show");
		}	
	}
});