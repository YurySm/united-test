function hoverImg(selector) {
	const img = document.querySelector(selector),
		  wrapper = img.parentNode;

	img.addEventListener('mousemove', (e) => {
		img.style.transition = '';
		let x = e.clientX,
			y = e.clientY
			imgW = img.getBoundingClientRect().width,
			imgH = img.getBoundingClientRect().height,
			wrapperW = wrapper.getBoundingClientRect().width,
			wrapperH = wrapper.getBoundingClientRect().height,
			newPosX = -((x*20/wrapperW)*(imgW-wrapperW) / 50 - 50);
			newPosY = - ((y/wrapperH)*(imgH-wrapperH) / 2);
		
		img.style.transform = `translate(${newPosX}px, ${newPosY}px)`;
	});
	img.addEventListener('mouseout', (e) => {
			img.style.transform = `translate(0px, 0px)`;

			img.style.transition = 'transform 0.4s linear';
	});
}

let idHover = requestAnimationFrame(() => hoverImg('.manufacturer_item_img img'));