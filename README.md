WebSite institucional (responsivo) para um escritório de contabilidade feito em React.js.

Aplicamos as filosofias culturais, práticas e ferramentas DevOps, com contêineres Docker, CI/CD, Netlify e os padrões Semantic Versioning, Conventional Commits e Git Flow.

Veja o resultado:

https://kabcontabilidade.netlify.app

# Instruções técnicas de uso

1. Clonar

2. Executar o comando **`npm run docker-build`** para construir uma imagem Docker com nome **contabilidade-website** a partir de um Dockerfile presente no diretório raiz do projeto

3. Executar o comando **`npm run docker-run`** no raiz do projeto para executar um container Docker a partir da imagem chamada **contabilidade-website** e mapear a porta 3000 do host para a porta 3000 do container
