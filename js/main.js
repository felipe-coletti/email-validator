import { isValidEmail } from './email.js'

const form = document.getElementById('form')
const input = document.getElementById('input')
const result = document.getElementById('result')

const setValidationState = (state, message) => {
    input.classList.remove('success', 'error')
    result.classList.remove('success', 'error')

    input.classList.add(state)
    result.classList.add(state)

    result.textContent = message
    result.hidden = false
}

input.addEventListener('focus', () => {
    result.hidden = true
})

form.addEventListener('submit', event => {
    event.preventDefault()

    const email = input.value.trim()

    if (!email) {
        setValidationState('error', 'Digite um endereço de e-mail')
    } else if (isValidEmail(email)) {
        setValidationState('success', 'E-mail válido')
    } else {
        setValidationState('error', 'Digite um endereço de e-mail válido')
    }
})