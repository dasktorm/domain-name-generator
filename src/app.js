function generateDomainNames(pronouns, adjectives, nouns) {
  let domainNames = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let domainName = pronouns[i] + adjectives[j] + nouns[k] + ".com";
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
}

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

let generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace

  let domainNames = generateDomainNames(pronouns, adjectives, nouns);
  console.log(domainNames);
});
