# React Native Template GFX
Template básico para criação de projeto com React Native para o grupo de desenvolvimento de mobile [GFX Consultoria](http://www.gfxconsultoria.com).
  
  ### Criando projeto:  
  ```sh
    react-native init <projectName> --template gfx  
 ```
 Obs: Substitua \<projectName\> pelo nome do seu projeto
 
 ### A Template adiciona alguns diretórios e arquivos  
           └── src  
               ├── pages  
               |    ├── Main  
               |         ├── index.js  
               |         └── styles.js  
               |
               ├── server
               |      └── index.js  
               |
               ├── routes.js
               └── index.js
               
Foi modificado o arquivo index.js da raiz do projeto, que antes apontava para o arquivo App.js, agora aponta para a pasta <b>./src</b>. 
Você pode inicar o projeto modificando o arquivo da no caminho <b>./src/pages/Main/index.js</b> é la onde está o código inical do projeto.
  Foi adicionado no template um arquivo de rotas, onde já vem estabelecida uma rota e também um arquivo styles.js que é onde fica toda a estilização da tela.
  
  ### Dependências
   As dependências instaladas no projetos são:  
   - [x] react-native-gesture-handler
   - [x] react-navigation
   - [x] styled-components
   - [x] axios


 ### LICENSE
  [MIT](http://licence.com)
  
#### Lucas Nascimento  
