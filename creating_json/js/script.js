const objs = [
  {
    nome: "Arthur",
    idade: 14,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Progamador",
      empresa: "empresa X",
    },
    hobbies: ["Progamar", "Academia", "Estudar"],
  },
  {
    nome: "Matheus",
    idade: 34,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
  },
];

console.log(objs);
// JSON
// converter objeto para json

const jsonData = JSON.stringify(objs);
console.log(jsonData);

// converter json para objeto

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
