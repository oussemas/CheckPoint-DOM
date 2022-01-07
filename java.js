var shopinButton = document.getElementById('shop')
console.log (shopinButton  )
var paragraphe = document.getElementById('parahraph1')
var editButton = Array.from(document.getElementsByClassName('ed'))
console.log(editButton)
var plu = Array.from(document.getElementsByClassName('plus'))
var qts = Array.from(document.getElementsByClassName('qt'))
var moins = Array.from(document.getElementsByClassName('moin'))
var q = Array.from(document.getElementsByClassName('qnnt'))
var pr = Array.from(document.getElementsByClassName('prix'))
var rechc = Array.from(document.getElementById('rech'))
let list = document.getElementById('myUL')
let addbtns = document.getElementById('addBtn')
let text =document.getElementById('text')

var tab=[]
for (let i=0; i<editButton.length; i++){
    tab.push(true)
    editButton[i].addEventListener('click',function(){
        qts.innerHTML=1
        if(tab[i]){
            
            // console.log(editButton[i])
            paragraphe.innerHTML++
            tab[i]=false
            editButton[i].innerHTML="done"
            editButton[i].style.background="red"
            q[i].style.display="flex"
            qts[i].innerHTML=1
            sum()

        }
        else{
            paragraphe.innerHTML--
            tab[i]=true
            editButton[i].innerHTML="edit"
            editButton[i].style.background="none"
            q[i].style.display=" none"
            qts[i].innerHTML=0
            sum()
        }
 

    })




}
for (let i=0; i<plu.length; i++){
    plu[i].addEventListener('click',function(){ 
        qts[i].innerHTML++
        sum()
    })
    moins[i].addEventListener('click',function(){ 
       if(qts[i].innerHTML>1){
        qts[i].innerHTML--
        sum()
       }
        
    })


}


function sum(){
    let qte = Array.from(document.getElementsByClassName('qt'))
    let price = Array.from(document.getElementsByClassName('prix'))
    let s = 0;

    for (let i = 0; i < price.length; i++) {
        s+=price[i].innerHTML * qte[i].innerHTML
    }
    return document.getElementById('somme').value = s
}
var tabtt=[]

var hearts = Array.from(document.getElementsByClassName('heart'))
for (let i=0; i<hearts.length;i++){
    
    tabtt.push(true)
    
    hearts[i] .addEventListener('click', function(){
        if(tabtt[i]){
            hearts[i] .style.color="red"
            tabtt[i]=false
        }
        else{
            hearts[i] .style.color="black"
            tabtt[i]=true
        }
    })
 }



 

function addtodo (){
    let text= document.createTextNode(input.value)
    let li= document.createElement("li")
    li.appendChild(text)
        if (input.value) {
            list.appendChild(li)
        }else{alert('Please enter a todo text')}
        input.value=''
        let removeBtn = document.createElement('button')
        removeBtn.innerText="X"
        li.appendChild(removeBtn)
        removeBtn.addEventListener('click', function(){
            removeBtn.parentElement.remove()



            
        } )
        removeBtn.setAttribute('class', 'removeBtn')
        li.addEventListener('mouseover', function(){
            li.style.backgroundColor='rgb(173, 173, 173)'
        })
        li.addEventListener('mouseout', function(){
            li.style.backgroundColor='lightgray'
        })
        li.addEventListener('click', function(){
            if(li.style.textDecoration==='line-through'){
                li.style.textDecoration='none'
            }
            else{
                li.style.textDecoration='line-through'
            }
        })
     }
    
     addBtn.addEventListener('click', addTodo)
   
    
    
            
        
    

