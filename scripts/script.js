
const expandButton = document.querySelector('header button') //de knop wordt bekend gemaakt
expandButton.addEventListener('click', expand) //wanneer er op de knop geklikt wordt, wordt de functie 'expand' uitgevoerd

function expand () { //dat is dus deze functie
  document.body.classList.toggle('expand') //de class 'expand' wordt toegevoegd aan de body van html

}
