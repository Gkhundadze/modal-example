const modal = document.querySelector('.modal-wrapper')
const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')



openBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
})
closeBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
})