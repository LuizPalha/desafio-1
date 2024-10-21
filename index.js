let nome = "Luizito";
let experienciaXp = 9999;
let categoria = "";

console.log("Digite o nome do seu Heroi");
console.log("________________");
console.log("Neste momento o programa esta recebendo (get) o nome.");
console.log("Digite o nivel de experiencia XP que ele se encontra");
console.log("____________");
console.log("Neste momento o programa esta recebendo (get) o nivel de experiencia.");

if (experienciaXp < 1000) {
  categoria = "ferro";
} else if (experienciaXp >= 1001 && experienciaXp <= 2000) {
  categoria = "Bronze";
} else if (experienciaXp >= 2001 && experienciaXp <= 5000) {
  categoria = "Prata";
} else if (experienciaXp >= 5001 && experienciaXp <= 7000) {
  categoria = "Ouro";
} else if (experienciaXp >= 7001 && experienciaXp <= 8000) {
  categoria = "Platina";
} else if (experienciaXp >= 8001 && experienciaXp <= 9000) {
  categoria = "Ascendente";
} else if (experienciaXp >= 9001 && experienciaXp <= 10000) {
  categoria = "Imortal";
} else if (experienciaXp > 10000) {
  categoria = "***** Radiante *****";
}

console.log("**** Processando ****");
if (categoria === "***** Radiante *****") {
  console.log("O heroi de nome " + nome + " esta no nivel: " + categoria);
  console.log("VOCE ZEROU O JOGO!!!");
} else {
  console.log("O heroi de nome " + nome + " esta no nivel: " + categoria);
}
