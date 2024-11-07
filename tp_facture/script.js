function calculer() {
  document.getElementById("result1").value =
    Number(document.getElementById("prix1").value)
    * Number(document.getElementById("quantite1").value)

    document.getElementById("result2").value =
    Number(document.getElementById("prix2").value)
    * Number(document.getElementById("quantite2").value)

    document.getElementById("result3").value =
    Number(document.getElementById("prix3").value)
    * Number(document.getElementById("quantite3").value)

    document.getElementById("total").value =
      Number(document.getElementById("result1").value)
      + Number(document.getElementById("result2").value)
      + Number(document.getElementById("result3").value)
}

function reset() {
  document.getElementById("article1").value = ""
  document.getElementById("article2").value = ""
  document.getElementById("article3").value = ""

  document.getElementById("prix1").value = ""
  document.getElementById("prix2").value = ""
  document.getElementById("prix3").value = ""

  document.getElementById("quantite1").value = ""
  document.getElementById("quantite2").value = ""
  document.getElementById("quantite3").value = ""

  document.getElementById("result1").value = ""
  document.getElementById("result2").value = ""
  document.getElementById("result3").value = ""

  document.getElementById("total").value = ""
}