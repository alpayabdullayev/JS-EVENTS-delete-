// let div = document.createElement('div')
// let body = document.querySelector("body")
// div.classList.add("click")
// body.append(div)

// div.addEventListener('click',function(){
//     console.log("dive yazildi");
// })

// let input = document.getElementById('text')

// input.addEventListener('keypress',function(){
//     console.log("keyboard ");
// })


// let form = document.getElementById('text').addEventListener('submit',(event) =>{
//     event.preventDefault()
//     console.log("gonderildi");
// })

//bubbling and Event Capturing

// let main = document.getElementById('main')
// let middle = document.getElementById('middle')
// let last = document.getElementById('last')

// main.addEventListener('click',(event) =>{
//     console.log('Main');
//     event.stopPropagation()
// },true)
// middle.addEventListener('click',(event) =>{
//     console.log('Middle');
//     event.stopPropagation()
// },true)
// last.addEventListener('click',(event) =>{
//     console.log('Last');
//     event.stopPropagation()
// },true)









let add=document.getElementById('add')
let ul = document.getElementById('list')
let id=1

add.addEventListener('click',(event)=>{
    event.preventDefault()
    let input= document.querySelector('input')
    let inputValue = input.value

   

    console.log(input);
    let li = document.createElement('li');
    li.innerHTML = `${id}. ${inputValue} <i id='salam' class="fa-solid fa-trash-can"></i>`;
    
    let zibil = li.querySelector('.fa-trash-can');
    zibil.addEventListener('click', () => { 
        ul.removeChild(li);
    });

    ul.appendChild(li);
    input.value = ' '
    id++

    
    
})

let deleteAll = document.getElementById('deleteAll').addEventListener('click',()=>{
    ul.innerHTML = ''
})