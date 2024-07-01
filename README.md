WebSite institucional para um escritório de contabilidade feito em React.js.

Usei a filosofia Docker e adotei os padrões Semantic Versioning, Conventional Commits e Git Flow. Ao conferir o repositório, nota-se a aplicação de tais padrões.

Veja o resultado: https://kabcontabilidade.netlify.app

Tempo gasto: um dia.

Ponto de melhoria: layout em geral e responsividade (mobile) da seção Contato.

Skills: React.js · Git Flow · Docker · Semantic Web · Responsive Web Design.

# Instruções técnicas de uso

1. Clonar;

2. Executar o comando **`npm run docker-build`** para construir uma imagem Docker com nome **contabilidade-website** a partir de um Dockerfile presente no diretório raiz do projeto;

3. Executar o comando **`npm run docker-run`** no raiz do projeto para executar um container Docker a partir da imagem chamada **contabilidade-website** e mapear a porta 3000 do host para a porta 3000 do container.
