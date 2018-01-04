## Instruções

* Instalação das dependências: npm install

* Executar o projeto: npm run start

## Considerações

* A API do Dribbble foi atualizada para a versão V2 em 26/12/2017 e alguns endpoints foram removidos, conforme a página de Changes http://developer.dribbble.com/changes.

* Dentre os endpoints removidos, estava o que lista os Shots independente de usuário, portanto, para esse projeto utilizei a API V1 que será mantida até 26/03/2018.

* O processo de OAuth atual cria um Client Access Token válido apenas na API V2, sendo assim, utilizei um Client Access Token válido na API V1 que encontrei na internet:

  * Opção 1: 6ed972085fecb7078ef53a3056562c05de38514ebd7d095b6a84f6dba7743031
  * Opção 2: f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4

* Mesmo na API V1, não encontrei no endpoint de listagem de Shots, uma opção para filtrar os resultados, então utilizei a opção de categorias (Animated, Debuts e Playoffs).
