const btnMenu = document.getElementById('open')
const btnClose = document.getElementById('close')
const btnBody = document.getElementById('body')

btnMenu.addEventListener('click',() => {
    btnMenu.classList.toggle('hidden')
    btnClose.classList.toggle('hidden')
    btnBody.classList.toggle('hidden')
})

btnClose.addEventListener('click', () => {
    btnMenu.classList.toggle('hidden')
    btnClose.classList.toggle('hidden')
    btnBody.classList.toggle('hidden')
})