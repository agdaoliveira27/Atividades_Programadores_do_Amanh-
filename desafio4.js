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

function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}`);
}

// Testando a função
mostrarInteresses(usuarios[0]); // Carlos
mostrarInteresses(usuarios[1]); // Beatriz
