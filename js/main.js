var btn = document.querySelector(".add")
var remove = document.querySelector(".radio-container")

function dragStart(e){
    this.style.opacity="0.4"
    dragSrcEl = this
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', this.innerHTML)
}

function dragEnter(e){
    this.classList.add('over')
}

function dragLeave(e){
    e.stopPropagation()
    this.classList.remove('over')
}

function dragOver(e){
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    return false
}

function dragDrop(e){
    if(dragSrcEl != this){
        dragSrcEl.innerHTML = this.innerHTML
        this.innerHTML = e.dataTransfer.getData('text/html')
    }
    return false
}

function dragEnd(e){
    var listItems = document.querySelectorAll(
        ".radio-container")
        listItems.forEach.call(listItems, function(item){
            item.classList.remove('over')
        })
        this.style.opacity = '1'
}

function addEventsDragandDrop(el){
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragend', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);    
}

var listItems = document.querySelectorAll(
    ".radio-container")
    listItems.forEach.call(listItems, function(item){
        addEventsDragandDrop(item)
    })

function addNewItem() {
    var newItem = document.querySelector
    (".input").value
    if(newItem != ''){
        document.querySelector('.input').value=''
        var label = document.createElement('label')
        var attr = document.createAttribute('draggable')
        var drop = document.querySelector('.addnew')
        var input = document.createElement('input')
        var attr1 = document.createAttribute('type')
        var attr2 = document.createAttribute('name')
        var attr3 = document.createAttribute('id')
        var attr4 = document.createAttribute('type')
        var attr5 = document.createAttribute('placeholder')
        var attr6 = document.createAttribute('readonly')

        var child1 = document.createElement('input');
        var child2 = document.createElement('span')
        var child3 = document.createElement('input')

        child2.className = 'checkmark'
        label.className = 'radio-container'
        attr.value = 'true'
        attr1.value = 'radio'
        attr2.value = 'radio'
        attr3.value = 'radio'
        attr4.value = 'text'
        attr5.value = newItem
        
        child1.setAttributeNode(attr1)
        child1.setAttributeNode(attr2)
        child1.setAttributeNode(attr3)
        child3.setAttributeNode(attr4)
        child3.setAttributeNode(attr5)
        child3.setAttributeNode(attr6)
        label.setAttributeNode(attr)
        label.appendChild(child1)
        label.appendChild(child2)
        label.appendChild(child3)
        drop.appendChild(label)
        addEventsDragandDrop(label)

        const count = document.querySelector('#number')
        const radiocount = document.querySelectorAll('.radio-container')
        
        for(i=0; i<radiocount.length-1; i++){
            count.innerHTML = radiocount.length-1
            console.log(i)
        }

    }
}    

btn.addEventListener('click', addNewItem)

const sun = document.querySelector(".sun")

let showMenu = 'false'

sun.addEventListener('click', show)



    function show(){
        
        if(!showMenu){
            const bg = document.querySelector('.bg')
            const card_body = document.querySelector('.card-body')
            const card_footer = document.querySelector('.card-footer')
            const input = document.querySelectorAll("input[type='text']")
            const plus = document.querySelector(".add")
            const checkmark = document.querySelectorAll(".checkmark")

            sun.classList.remove('on')
            sun.classList.add('off')
            showMenu = true
            bg.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')"
            document.body.style.backgroundColor = "hsl(235, 21%, 11%)"
            card_footer.style.backgroundColor = "hsl(235, 24%, 19%)"
            card_body.style.backgroundColor = "hsl(235, 24%, 19%)"
            plus.style.color = "hsl(0, 0%, 98%)"
            

            for(i=0; i<input.length; i++){
                input[i].style.backgroundColor = "hsl(235, 24%, 19%)"
                input[i].style.color = "hsl(0, 0%, 98%)"
            }

            for(i=0; i<checkmark.length; i++){
                checkmark[i].style.backgroundColor = "hsl(235, 24%, 19%)"
            }
        }else{
            const bg = document.querySelector('.bg')
            const card_body = document.querySelector('.card-body')
            const card_footer = document.querySelector('.card-footer')
            const input = document.querySelectorAll("input[type='text']")
            const plus = document.querySelector(".add")
            const checkmark = document.querySelectorAll(".checkmark")

            sun.classList.remove('off')
            sun.classList.add('on')
            showMenu = false
            bg.style.backgroundImage = "url('../images/bg-desktop-light.jpg')"
            document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
            card_footer.style.backgroundColor = "hsl(0, 0%, 98%)"
            card_body.style.backgroundColor = "hsl(0, 0%, 98%)"
            plus.style.color = "hsl(235, 24%, 19%)"
            
            for(i=0; i<input.length; i++){
                input[i].style.backgroundColor = "hsl(0, 0%, 98%)"
                input[i].style.color = "hsl(235, 24%, 19%)"
            }

            for(i=0; i<checkmark.length; i++){
                checkmark[i].style.backgroundColor = "hsl(0, 0%, 98%)"
            }
        }
    }


const rdnbtn = document.querySelectorAll('#radio')

function display(){
    for(i=0; i<rdnbtn.length; i++){
        if(rdnbtn[i].checked){
            // console.log(document.getElementById(rdnbtn[i].id).parentElement)
            // document.querySelector("#"+rdnbtn[i].id).parentElement.classList.add('all')    
            console.log(document.querySelector('#'+rdnbtn[i].id).nextSibling.innerHTML)
        }
    }
}