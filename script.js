let root = 7
let answer = 0

document.getElementById('button').addEventListener('click', square)

function square () {
  root = document.getElementById('insert').value
  answer = root * root
  alert(answer)
}
