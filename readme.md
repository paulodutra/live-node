# Live Node 

## Sobre
- Projeto criado durante uma live sobre node para iniciantes;
- O arquivo **index.js** possui implementações sem o uso de framework;
- Já o **app.js** utiliza o express para algumas implementações simples tais como a criação de
algumas rotas e retorno de resultados em json, como também a utilização do sistema de template engine **EJS** ;
- A camada de visualização carregadas pelo EJS ficam por padrão no diretório chamado **views** .

## Lembretes

- Na maioria dos casos não é necessário o ; (ponto e virgula ao final da instrução) **exceto** em alguns casos de minificação;
- O uso do framework express acontece sob demanda, diferente de outros frameworks fullstack que é efetuado "download" de todo o mesmo.
- Para instalar dependências ao projeto: **npm i nome-da-dependencia --save** ou **npm install nome-da-dependencia --save**  o parametro --save serve para salvar a depedência no arquivo package.json.
