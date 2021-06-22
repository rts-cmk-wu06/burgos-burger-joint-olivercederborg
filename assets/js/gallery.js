const bigImage = document.querySelector('#gallery-big-image')
const thumbnailWrapper = document.querySelector('#gallery-thumbnails')

const setGalleryImage = (e) => {
	if (e.target.nodeName == 'IMG') {
		let imageSrc = e.target.getAttribute('src')
		let imageAlt = e.target.getAttribute('alt')
		bigImage.setAttribute('src', imageSrc)
		bigImage.setAttribute('alt', imageAlt)
	}
}

thumbnailWrapper.addEventListener('click', setGalleryImage)
