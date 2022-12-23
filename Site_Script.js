function menuAtive(){
    const toggle = document.querySelector('.menu')
    const barra_lateral = document.querySelector('.barra_lateral')

    barra_lateral.classList.toggle('active')
    toggle.classList.toggle('active')
}
