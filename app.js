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

// for(i=0; i<close.length; i++){

//     close[i].addEventListener('click',function(ev){

//         if(ev.target.tagName == 'LI'){
//             var div = this.parentElement;
//             div.style.display = 'none'
        
//             var inputTxt = document.getElementById('item').value
//             var socket = io.connect('http://localhost:8080/');
//             socket.emit('old_data', { name: inputTxt })
//         }
//     })

//     // close[i].onclick = function(){
//     //     var div = this.parentElement;
//     //     div.style.display = 'none'
        
//     //     // var inputTxt = document.getElementById('item').value
//     //     // var socket = io.connect('http://localhost:8080/');
//     //     // socket.emit('old_data', { name: inputTxt })
//     // }
// }

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
    var txt = document.createTextNode('\u00D7')
    span.appendChild(txt)
    li.appendChild(span)

    for(i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display='none'

            var oldTxt = document.getElementById(e.target.id).value
            console.log(oldTxt)
            var socket = io.connect('http://localhost:8080/');
            socket.emit('old_data', { name: oldTxt })
            
        }
    }
}