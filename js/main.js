var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var list = document.querySelector("#todo");
list.addEventListener('click', function(e) {
    var text = e.target
    document.getElementById("onProgress").appendChild(text);

}, false);

var list = document.querySelector("#onProgress");
list.addEventListener('click', function(e) {
    var text = e.target
    document.getElementById("Completed").appendChild(text);

}, false);

function newElement() {
  var x = ""
  radiobtn1 = document.getElementById("easy");
  radiobtn2 = document.getElementById("med");
  radiobtn3 = document.getElementById("hard");
  if (radiobtn1.checked) { x = radiobtn1.value}
  else if (radiobtn3.checked) { x = radiobtn3.value}
  else if (radiobtn2.checked) { x = radiobtn2.value}
  else{
    alert("En az bir tane zorluk secmelisiniz!");
    return
  }

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue + " -- " + x);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Alan bos birakilamaz!");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById("myInput").value = "";



}
