var writePopup = document.querySelector(".modal-write-us");
var addedPopup = document.querySelector(".modal-added");
var overlay = document.querySelector(".overlay");

var buy = document.querySelectorAll(".buy");
var addedClose = addedPopup.querySelector(".modal-close");
var continueShoping = addedPopup.querySelector(".button-continue");
var toOrder = addedPopup.querySelector(".order-btn");


if (writePopup) {
	var writeBtn = document.querySelector(".write-us-btn");
	var writeUsClose = writePopup.querySelector(".modal-close");
	var writeForm = writePopup.querySelector(".write-us-form");
	var yourName = writePopup.querySelector("[name=name]");
	var yourEmail = writePopup.querySelector("[name=email");

	writeBtn.addEventListener ("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.add("modal-show");
		overlay.classList.add("overlay-show");
		yourName.focus();
	});

	writeUsClose.addEventListener ("click", function(evt) {
		evt.preventDefault();
		writePopup.classList.remove("modal-show");
		writePopup.classList.remove("modal-error");
		overlay.classList.remove("overlay-show");
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
				overlay.classList.remove("overlay-show");
			}	
		}
	});
}

for (i = 0; i < buy.length; i++)
	buy[i].addEventListener ("click", function(evt) {
		evt.preventDefault();
		addedPopup.classList.add("modal-show");
		overlay.classList.add("overlay-show");
		toOrder.focus();
	});

addedClose.addEventListener ("click", function(evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
});

continueShoping.addEventListener ("click", function(evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("overlay-show");
});

window.addEventListener ("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(addedPopup.classList.contains("modal-show")) {
			addedPopup.classList.remove("modal-show");
			overlay.classList.remove("overlay-show");
		}	
	}
});