const data = [
	{
		imageSrc: '/assets/img/favorit01.jpg',
		imageAlt: 'Grilled Burger',
		title: 'Grilled Burger',
		price: 65,
		discount: '30%',
		buttonAction: '#'
	},
	{
		imageSrc: '/assets/img/favorit02.jpg',
		imageAlt: 'The Firehouse',
		title: 'The Firehouse',
		price: 70,
		discount: undefined,
		buttonAction: '#'
	},
	{
		imageSrc: '/assets/img/favorit03.jpg',
		imageAlt: 'Grilled Burger',
		title: 'Grilled Burger',
		price: 90,
		discount: undefined,
		buttonAction: '#'
	},
	{
		imageSrc: '/assets/img/favorit04.jpg',
		imageAlt: 'Super Vegan',
		title: 'Super Vegan',
		price: 70,
		discount: undefined,
		buttonAction: '#'
	}
]

const createElement = (tag, options) => {
	return Object.assign(document.createElement(tag), options)
}

const recommendedParent = document.querySelector('#recommended-items')

for (const item of data) {
	const itemWrapper = createElement('article', {
		className: 'Recommended-item'
	})

	const discountBadge = createElement('div', {
		innerText: `-${item.discount}`,
		className: 'Recommended-item__discount-badge'
	})

	const img = createElement('img', {
		src: item.imageSrc,
		alt: item.imageAlt,
		className: 'Recommended-item__image'
	})

	const title = createElement('h4', {
		innerText: item.title,
		className: 'Recommended-item__h4'
	})

	const price = createElement('p', {
		innerText: `${item.price}kr.`,
		className: 'Recommended-item__p'
	})

	const buttonIcon = createElement('img', {
		src: '/assets/img/burger_ikon@2x.png',
		className: 'Recommended-item__button-icon'
	})

	const button = createElement('a', {
		href: item.buttonAction,
		innerText: 'Favorit',
		className: 'Recommended-item__button'
	})

	item.discount && itemWrapper.appendChild(discountBadge)
	itemWrapper.appendChild(img)
	itemWrapper.appendChild(title)
	itemWrapper.appendChild(price)
	button.insertBefore(buttonIcon, button.firstChild)
	itemWrapper.appendChild(button)
	recommendedParent.appendChild(itemWrapper)
}
