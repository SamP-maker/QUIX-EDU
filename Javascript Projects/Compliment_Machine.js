let compliments = [
  "You're doing better than you think.",
  "Your energy is magnetic.",
  "You make difficult things look easy.",
  "You have a mind built for greatness.",
  "People feel safer around your presence.",
  "You're lowkey inspiring—don’t deny it.",
  "You’ve got that main character vibe.",
  "Your growth is loud, even in silence.",
  "You carry resilience like it’s armor.",
  "Even your setbacks are setting you up.",
  "Your vibe? Undeniably strong.",
  "You don't chase, you attract.",
  "You've survived 100% of your worst days—undefeated.",
  "You think deep and it shows in your decisions.",
  "You make consistency look cool."
];





let createNewCompliments = (string) =>{
    compliments.push(string)
}



let generateCompliment = () =>{
const randomIndex = Math.floor(Math.random() * compliments.length);
const randomCompliment = compliments[randomIndex];

let text = document.getElementById("compliment")
text.innerText = randomCompliment
}







