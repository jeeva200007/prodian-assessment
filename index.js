const toggle = document.querySelector(".toggle")
const elements = document.querySelectorAll('.link-elements')

console.log(elements)
toggle.addEventListener('click', ()=> {
    elements.forEach(element => {
        if(element.classList.contains('active')){
            element.classList.remove('active')
        } else {
            element.classList.add('active')
        }
        
    });
    
})