// 1. O header deve ter cor de fundo #2E948A

let header = document.getElementsByTagName('header');

//console.log(header[0]); // "0" é a posição

header[0].style.backgroundColor = '#2E948A';

//ou
//document.getElementsByTagName('header')[0].style.backgroundColor = '#2E948A';

//---------------------------------------------------------

// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a');

//console.log(linkCursos);

linkCursos.setAttribute('href', 'cursos.html');


//----------------------------------------------------------
//Home
//1. No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

document.querySelector('#introducao').style.justifyContent ='center';
//ou "space-around"

//-------------------------------------------------------------

//2. Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

document.querySelector('.titulo.depoimento h3').innerHTML = "O que falam sobre nós"; //são duas classes diferentes titulo e depoimento

//---------------------------------------------------------------

//3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".



let titulo = document.querySelectorAll('.titulo h3')[1].innerHTML = 'Mais conteúdo pra você'

//console.log(titulo);

//--------------------------------------------------------------

//4. Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let titulos = document.querySelectorAll(".titulo"); 

titulos.forEach((titulo) => {
    titulo.style.textTransform = 'uppercase'
});

//--------------------------------------------------------------

//5. o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

let linkPosts = document.getElementById('todos_posts');

linkPosts.setAttribute('href', 'blog.html');

//----------------------------------------------------------------

//6. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

let novaDivCurso = document.createElement('div');

novaDivCurso.innerHTML = `
<img src="/imagens/independencia_financeira.png"
width="180px" alt="Independência Financeira"/>
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar
agora</a>`

let novoCurso = document.getElementById('investimentos_poupando_independencia');

novoCurso.appendChild(novaDivCurso);

novaDivCurso.setAttribute('id', 'independencia');

//----------------------------------------------------------------


//Contato

//1. O formulário não está funcionando, o atributo action deve mandar para url
//sucesso.html