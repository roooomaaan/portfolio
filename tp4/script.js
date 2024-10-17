function test_age() {
  let age = prompt("Quel est votre âge ?")

  if (age < 10) {
    document.write("Vous être mineur")
    document.body.style.backgroundColor = "red"
  } else {
    document.write("Vous êtes majeur")
    document.body.style.backgroundColor = "green"
  }
}

function calcul_moyenne() {
  var n1 = prompt("Nombre 1")
  var n2 = prompt("Nombre 2")
  var n3 = prompt("Nombre 3")

  var somme = Number(n1) + Number(n2) + Number(n3)

  document.write("Somme: " + somme + "<br>")
  var moyenne = somme / 3
  document.write("Moyenne: " + moyenne + "<br>")

  if (moyenne > 20 || moyenne < 0) {
    document.write("<hr>Moyenne invalide")
    document.body.style.backgroundColor = "red"
    return
  }

  if (moyenne < 10) {
    document.write("Refusé <hr>Redoublant")
    document.body.style.backgroundColor = "red"
  } else {
    document.write("Accepté <hr>")
    document.body.style.backgroundColor = "green"
    if (moyenne > 14) {
      document.write("Mention bien")
    } else {
      document.write("Mention passable")
    }
  }

}

function test_couleur() {
  let color = prompt("Donnez une couleur")

  if (color == "rouge" || color == "red") {
    document.body.style.backgroundColor = "red"
  }
  else if (color == "vert" || color == "green") {
    document.body.style.backgroundColor = "green"
  }
  else if (color == "bleu" || color == "blue") {
    document.body.style.backgroundColor = "blue"
  }
  else if (color == "rose" || color == "pink") {
    document.body.style.backgroundColor = "pink"
  } else {
    alert("Couleur non comprise")
  }
}

function simple_affichage() {
  let nom = prompt("Quel est votre nom ?")
  let prenom = prompt("Quel est votre prenom ?")

  document.write("Bonjour, " + nom + " " + prenom + "!")
}