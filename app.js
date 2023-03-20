const modal = document.querySelector('.modal-wrapper')
const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')



openBtn.addEventListener('click', () => {
    triggerModal(modal)
})
closeBtn.addEventListener('click', () => {
    triggerModal(modal)
})


window.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.modal-wrapper')) {
        triggerModal(modal)
    }
})


function triggerModal (modal) {
    modal.classList.toggle('active')
}