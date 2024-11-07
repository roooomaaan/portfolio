function getInput1() {
  return Number(document.getElementById("input1").value)
}

function getInput2() {
  return Number(document.getElementById("input2").value)
}

function setResult(val) {
  document.getElementById("result").value = val
}

function getResult() {
  return Number(document.getElementById("result").value)
}

function add() {
  setResult(getInput1() + getInput2())
}

function sub() {
  setResult(getInput1() - getInput2())
}

function mul() {
  setResult(getInput1() * getInput2())
}

function div() {
  setResult(getInput1() / getInput2())
}

function even() {
  let isEven = (getResult() % 2) === 0
  document.getElementById("text").innerText = isEven ? "Le resultat est pair" : "Le résultat est impair"
}

function swap() {
  let save = getInput2()
  document.getElementById("input2").value = getInput1()
  document.getElementById("input1").value = save
}