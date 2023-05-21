// theme logic
let theme_body = document.querySelector('.theme-body');
let theme_btn = document.querySelector('.theme-btn');
let container = document.querySelector('.container');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input')

theme_body.addEventListener('click', (event)=>{
    event.preventDefault()
    theme_btn.classList.toggle('slide-right')
    container.classList.toggle('dark-theme-container')
    form.classList.toggle('dark-theme-form')
    inputs.forEach((input)=>{
          input.classList.toggle('dark-theme-input')
    })



})