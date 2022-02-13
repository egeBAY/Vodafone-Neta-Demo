var myNodeList = document.getElementsByTagName("LI")
var i;

for(i=0; i<myNodeList.length; i++){
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');
    span.className='close'
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}

// Close butonuna tıklama
var close = document.getElementsByClassName('close')
var i;
console.log(close)

for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none'
    }
}

var list = document.querySelector('ul')
list.addEventListener('click', function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked')
    }
},false)


function newElement(){
    var li = document.createElement('li')
    var inputValue = document.getElementById('item').value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue == ''){
        alert('Bu alan boş bırakılamaz' )
    }
    else{
        document.getElementById('list').appendChild(li)
    }
    document.getElementById('item').value=''

    var span =document.createElement('SPAN');
    span.className='close'
    li.id = inputValue
    var txt = document.createTextNode('\u00D7')
    span.appendChild(txt)
    li.appendChild(span)

    for(i=0; i<close.length; i++){
        close[i].onclick=function(i){
            var div = this.parentElement;
            div.style.display='none'
            
            var oldTxt = document.getElementById(div.id).innerText 
            oldTxt = oldTxt.slice(0,-1)
            var socket = io.connect('http://localhost:8080/');
            console.log(oldTxt)
            socket.emit('old_data', { name: oldTxt })
            
        }
    }
}