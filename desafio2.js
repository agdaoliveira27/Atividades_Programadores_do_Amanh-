//Código fonte
const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

const novoUsuario = {
  nome: "Ana",
  idade: 25,
  email: "ana@exemplo.com",
  cidade: "Manaus",
  interesses: ["Natureza", "Tecnologia", "Fotografia"]
};

const usuariosDoNorte = [...usuarios, novoUsuario];

console.log(usuariosDoNorte);
