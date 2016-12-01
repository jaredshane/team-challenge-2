var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

var btn = document.getElementById('btn');

function addBorder(div) {
	div.className = "border";
}

function removeBorder(div) {
	div.className = "";
}

function btnEvent() {
  var userInput = document.getElementById('userInput').value;
  document.getElementById('userInput').value = "";
  console.log(userInput);
  if (div1.classList.contains("border")) {
    div1.style.backgroundColor = userInput;
  } else if (div2.classList.contains("border")) {
      div2.style.backgroundColor = userInput;
    } else {
        div3.style.backgroundColor = userInput;
      }
}

div1.addEventListener('click', function () {
	addBorder(div1);
	removeBorder(div2);
	removeBorder(div3);
	document.getElementById('form').style.visibility = "visible";
});

div2.addEventListener('click', function () {
	addBorder(div2);
	removeBorder(div1);
	removeBorder(div3);
	document.getElementById('form').style.visibility = "visible";
});

div3.addEventListener('click', function () {
	addBorder(div3);
	removeBorder(div2);
	removeBorder(div1);
	document.getElementById('form').style.visibility = "visible";
});
