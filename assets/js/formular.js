const formElement = document.querySelector('#contact-form')
const nameField = document.querySelector('#name-field')
const emailField = document.querySelector('#email-field')
const messageField = document.querySelector('#message-field')
const nameError = document.querySelector('#name-error')
const emailError = document.querySelector('#email-error')
const messageError = document.querySelector('#message-error')

window.addEventListener('load', () => {
	formElement.onsubmit = validate
})

const validate = () => {
	let numOfErrors = 0
	let navnErrorMessage = ''
	let emailErrorMessage = ''
	let messageErrorMessage = ''

	if (nameField.value === '') {
		numOfErrors += 1
		navnErrorMessage = 'Skriv dit navn.'
	} else {
		let regexpLetters = /^[a-zA-Z ]+$/
		if (!regexpLetters.test(nameField.value)) {
			numOfErrors += 1
			navnErrorMessage = 'Navn må kun indeholde bogstaver og mellemrum.'
		}
	}

	if (emailField.value === '') {
		numOfErrors += 1
		emailErrorMessage = 'Skriv din mail.'
	} else {
		let regexpMail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
		if (!regexpMail.test(emailField.value)) {
			numOfErrors += 1
			emailErrorMessage = 'Din mail er ikke gyldig.'
		}
	}

	if (messageField.value === '') {
		numOfErrors += 1
		messageErrorMessage = 'Skriv venligst en besked.'
	} else if (messageField.value.length < 10) {
		numOfErrors += 1
		messageErrorMessage = 'Beskeden skal være på 10 tegn eller mere.'
	}

	if (numOfErrors === 0) {
		return true
	} else {
		nameError.textContent = navnErrorMessage
		emailError.textContent = emailErrorMessage
		messageError.textContent = messageErrorMessage
		return false
	}
}
