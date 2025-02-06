function calculer() {
  let ttotal = 0

  document.querySelectorAll("#clone").forEach((el) => {
    console.log(el)
    const prix = Number(el.querySelector("#prix").value)
    const quantity = Number(el.querySelector("#quantite").value)
    const total = el.querySelector("#total")

    total.value = prix * quantity
    ttotal += Number(total.value)
  })

  const discount = Number(document.getElementById("discount").value) || 0
  const tax = Number(document.getElementById("tax").value) || 0
  const shipping = Number(document.getElementById("shipping").value) || 0

  const tDiscount = ttotal * (discount / 100)
  const tTax = ttotal * (tax / 100)
  const res = ttotal - tDiscount + tTax + shipping

  console.log(ttotal - tDiscount + tax + shipping)
  document.getElementById("ttotal").innerHTML = `Total: ${res}€`
}

function add() {
  const copy = document.getElementById("clone").cloneNode(true)
  document
    .getElementById("table")
    .firstChild.nextSibling.insertBefore(copy, null)
}

function reset() {
  const inputs = document.getElementsByClassName("input-field")
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = ""
  }
}
