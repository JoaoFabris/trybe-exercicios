//exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ', info.personagem)
  //exercicio 2
 {  
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
  
}  
info.recorrente = 'Sim';

info['recorrente'] = 'Sim';

console.log(info);

//exercicio 3

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorado do personagem pricipal nos quadrinhos do Pato Donald",
    recorrente: "sim",

}; 
    for (let key in info) {
   console.log(key);
}

// exercicio 4

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorado do personagem pricipal nos quadrinhos do Pato Donald",
    recorrente: "sim",
};

for(let key in info) {
    console.log(info[key])
}

//exercicio 5 duvida
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorado do personagem pricipal nos quadrinhos do Pato Donald",
    recorrente: "sim",
}
let info1 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota:'O último MacPatinhas',
    recorrente: "sim"

};
for (let properties in info) {
    
 if (properties === 'recorrente' && info[properties] === 'sim' && info1[properties] === 'sim') {
    console.log("Ambas recorrente")

}   else {
    console.log(info[properties] + ' e ' + info1[properties]);
}   
}

//exercicio 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome +' se chama "' + leitor.livrosFavoritos[0].titulo + '"')
  //exercicio 7 e 8
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos.push(
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
    },
     ); 
      console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");
