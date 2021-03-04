let colors = ['red', 'blue', 'yellow', 'green']
let childs = document.querySelectorAll('.color')
let btn = document.querySelector('button')
let parent = document.querySelector('.parent')
let p = document.querySelector('p')

for (let i = 0; i < childs.length; i++) {
    childs[i].style.background = colors[i];
    childs[i].addEventListener('click', function(){
        p.style.color = colors[i]
    })
}

btn.addEventListener('click', function() {
    if(btn.innerText == 'open'){
        btn.innerText = 'close'
        parent.style.transform = 'translateY(0)'
        p.style.transform = 'translateX(0)'
    }else{
        btn.innerText = 'open'
        parent.style.transform = 'translateY(-100%)'
        p.style.transform = 'translateX(100%)'
    }
    
})


// btn.addEventListener('click', function() {
//     if(btn.innerText == 'close')
    
//     parent.style.transform = 'translateY(-100%)'
//     btn.innerText = 'open'
// })