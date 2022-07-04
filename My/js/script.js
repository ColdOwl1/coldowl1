let navButton = document.querySelectorAll('.anim-hover');
let navList = document.querySelector('.navigation__list');
let navItem = document.querySelectorAll('.navigation__item');
let animItems = document.querySelectorAll('.animation');
let buttonPriceSite = document.querySelector('.price-site-button');
let priceSiteBlock = document.querySelector('.price-site-block');
let buttonPriceDesign = document.querySelector('.price-design-button');
let priceDesignBlock = document.querySelector('.price-design-block');
let priseInner = document.querySelector('.price__inner-block');
let header = document.querySelector(".header");

let serviceTitle = document.querySelector('.services-title');
let aboutTitle = document.querySelector('.about-title');
let priceTitle = document.querySelector('.price-title');
let contactTitle = document.querySelector('.contact-title');

let servicesButton = document.querySelector('.services-button');
let aboutButton = document.querySelector('.about-button');
let priceButton = document.querySelector('.price-button');
let contactButton = document.querySelector('.contact-button');

let animationItems = document.querySelectorAll('.animation');

let burgerButtonSurvice = document.querySelectorAll('.burger-survice');
let burgerButtonAbout = document.querySelectorAll('.burger-about');
let burgerButtonPrice = document.querySelectorAll('.burger-price');
let burgerButtonContact = document.querySelectorAll('.burger-contact');



let burgerButton = document.querySelector('.burger__button');
burgerButton.onclick = burger => {
	let burgerMenu = document.querySelector('.burger__inner');
	if (burgerMenu.classList.contains('burger_active')) {
		burgerMenu.classList.remove('burger_active');
	} else {
		burgerMenu.classList.add('burger_active');
	}
}




burgerButtonSurvice.onclick = f => {
	serviceTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
};
burgerButtonAbout.onclick = f => {
	aboutTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
};
burgerButtonPrice.onclick = f => {
	priceTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
};
burgerButtonContact.onclick = f => {
	contactTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
};







servicesButton.onclick = f => {
	serviceTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
};
aboutButton.onclick = f => {
	aboutTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
	;
}
priceButton.onclick = f => {
	priceTitle.scrollIntoView(top);
	window.scrollBy(0, -170);
	;
}
contactButton.onclick = f => {
	contactTitle.scrollIntoView(top);
	window.scrollBy(0, -250);
	;
}








navList.onmouseover = function navHover(event) {
	let target = event.target;
	navItem.forEach(element => {
		if (target != element) {
			return
		} else {
			target.classList.add('active');
		}
	});
}
navList.onmouseout = function navOut(event) {
	let target = event.target;
	navItem.forEach(element => {
		if (target != element) {
			return
		} else {
			target.classList.remove('active');
		}
	});
}
if (animItems.length > 0) {
	window.addEventListener('scroll', scrollAnim);
	function scrollAnim() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let heightItem = animItem.offsetHeight;
			let topItem = offset(animItem).top;
			let animStart = 4;
			let animationPoint = window.innerHeight - heightItem / animStart;
			if (heightItem > window.innerHeight) {
				animationPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((window.pageYOffset > topItem - animationPoint) && window.pageYOffset < (topItem + heightItem)) {
				animItem.classList.add('active');
			} else {
				animItem.classList.remove('active');
			}
		}
	}
	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}
buttonPriceSite.onclick = function priceSiteClick(event) {
	if (priceSiteBlock.classList.contains('active')) {
		priceSiteBlock.classList.remove('active')
	}
	else {
		priceSiteBlock.classList.add('active');
	}

}
buttonPriceDesign.onclick = function priceSiteClick(event) {
	if (priceDesignBlock.classList.contains('active')) {
		priceDesignBlock.classList.remove('active')
	}
	else {
		priceDesignBlock.classList.add('active');
	}

}
scrollAnim();