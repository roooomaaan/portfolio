function calculer() {
  for (let index = 1; index <= 3; index++) {
    document.getElementById(`result${index}`).value =
      Number(document.getElementById(`prix${index}`).value) *
      Number(document.getElementById(`quantite${index}`).value)
  }

  document.getElementById("total").value =
    Number(document.getElementById("result1").value) +
    Number(document.getElementById("result2").value) +
    Number(document.getElementById("result3").value)
}

function add() {
  const copy = document.getElementById("clone").cloneNode(true)
  document
    .getElementById("table")
    .firstChild.nextSibling.insertBefore(copy, null)
}

function reset() {
  for (let index = 1; index <= 3; index++) {
    document.getElementById(`article${index}`).value = ""
    document.getElementById(`prix${index}`).value = ""
    document.getElementById(`quantite${index}`).value = ""
    document.getElementById(`result${index}`).value = ""
  }

  document.getElementById("total").value = ""
}
