/*
01
No index.html deste diretório (exercicio-02):
- Declarar uma marcação HTML;
- Modificar a linguagem para português do Brasil;
- Remover as meta tags desnecessárias;
- Modificar o title para "Exercício 02";
- E linkar este arquivo, app.js, antes do fechamento da tag body.
*/
// Feito
// ✔️ CERTO
// ---------------------------------------------



/*
02
Iniciar seu servidor local e abrir o console do browser.
*/
// Feito
// ✔️ CERTO
// ---------------------------------------------



/*
03
Exibir a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.

Utilizar os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.
*/
//console.log('Grandes poderes trazem grandes responsabilidades.');
// ✔️ CERTO
// ---------------------------------------------



/*
04
Comentar o console.log acima, e:
- Armazenar a palavra 'Tom' em uma constante "tom";
- Armazenar a palavra 'Hanks' em uma constante "firstTom";
- Armazenar a palavra 'Cruise' em uma constante "secondTom";
- Declarar uma constante "myFavoriteTom" que
  recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exibir a "myFavoriteTom" no console do browser.
*/
const tom = 'Tom';
const firstTom = 'Hanks';
const secondTom = 'Cruise';
const myFavoriteTom = `${tom} ${secondTom}`;
//console.log(myFavoriteTom);
// ✔️ CERTO
// ---------------------------------------------


/*
05 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/
const programmingLanguage = 'JavaScript';
const js = programmingLanguage[0] + programmingLanguage[4];
//console.log(js);


/*
06 - Comente o console.log acima, e,

- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/
const mozilla = 'Mozilla Developer Network';
const mdn = mozilla[0] + mozilla[8] + mozilla[18];
//console.log(mdn);

/*
07 - Comente o console.log acima, e,
- Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;
*/
//console.log(programmingLanguage.length);



/*
08 - Comente o console.log acima, e,
- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/
let randomWord = 'Araponga';
//console.log(randomWord[randomWord.length-1]);

/*
09
- Comentar o console.log acima, e,
- Exibir no console, a string que "summerMessage" (abaixo) armazena com todas as letras minúsculas;
- Não modificar a string da "summerMessage";
- Não digitar a nova string manualmente.
*/
const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA';
//console.log(summerMessage.toLowerCase());

/*
10
- Comentar o console.log acima, e,
- Exibir no console a string que "winterMessage" (abaixo) armazena com todas as letras maiúsculas;
- Não modificar a string da"winterMessage";
- Não digitar a nova string manualmente.
*/
const winterMessage = 'o inverno está chegando';
//console.log(winterMessage.toUpperCase());



/*
11
- Comentar o console.log acima, e,
- Exibir no console o index do caractere "v" da "winterMessage";
*/
//console.log(winterMessage.indexOf("v"))



/*
12
- Comentar o console.log acima, e,
- Exibir no console o index da última ocorrência do caractere "n" da "winterMessage".
*/
//console.log(winterMessage.lastIndexOf("n"));



/*
13
- Comentar o console.log acima, e,
- Após a const "harryPotterAuthor" (abaixo), exibir no console a parte "J.K." da string "harryPotterAuthor";
- Não digitar a string "J.K." manualmente;
*/
const harryPotterAuthor = 'J.K. Rowling';
//console.log(harryPotterAuthor.slice(0,3));



/*
14
- Comentar o console.log acima, e,
- Após a const "bestMovie" (abaixo), declarar uma constante "realBestMovie";
- Atribuir à "realBestMovie" a mesma string de "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exibir "realBestMovie" no console.
*/
const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!';
const realBestMovie = bestMovie.replace("La la land","Moonlight");
//console.log(realBestMovie)




/*
15
- Comentar o console.log acima, e,
- Abaixo deste comentário, armazenar o resto de 10 dividido por 3 em uma constante "reminder";
- Exibir reminder no console.
- O resultado deve ser 1;
*/
const reminder = 10 % 3;
//console.log(reminder)



/*
- Comentar o console.log acima, e,
- Abaixo da let "episodes", incrementar o valor dela em 1;
- Após o incremento, exibir let "episodes" no console;
- O valor exibido no console deve ser 7.
*/
let episodes = 6;
episodes++;
//console.log(episodes)



/*
17
- Comentar o console.log acima, e,
- Decrementar let "episodes" em 1;
- Após o decremento, exibir a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/
episodes--;
//console.log(episodes)



/*
18
- Comentar o console.log acima, e,
- Utilizar o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/
episodes+= 4;
//console.log(episodes);



/*
19
- Comentar o console.log acima, e,
- Abaixo deste comentário, armazenar a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Inserir a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exibir "allEpisodes" no console.
*/
const allEpisodes = `O nº de episódios é: ${episodes}`
console.log(allEpisodes);



/*
20
- Comentar o console.log acima, e,
- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/
const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.'
console.log(bookMessage)



/*
21
- Comentar o console.log acima, (e a const bookMessage caso não tenha descoberto a resolução), e,
- Após a const "characterName" (abaixo), declarar a let "newName";
- A let "newName" deve armazenar uma string ES5 com o mesmo valor que "characterName" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digitar a nova string manualmente.
- Não modificar a string da const "characterName";
- Exibir a "newName" no console;
*/

const characterName = 'walter white';
let newName = characterName
  .split(' ')
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(' ');

// console.log(newName)

/*
22
- Comentar o console.log acima, e,
- Atribuir uma template string à "newName" ;
- A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
- Não digitar a nova string manualmente.
- Não modificar a string da const "characterName";
- Exibir "newName" no console;
*/
newName = `${characterName}`
newName = newName
  .split(' ')
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(' ');
console.log(newName)
