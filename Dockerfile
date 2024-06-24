# Use uma imagem base com Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /contabilidade-website

# Copie os arquivos necessários para o container
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto para o container
COPY . .

# Build do projeto React
RUN npm run build

# Comando padrão para iniciar o servidor React
CMD ["npm", "start"]
