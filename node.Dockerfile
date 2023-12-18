# Use a imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração (package.json e package-lock.json, se existirem)
COPY package*.json ./

# Execute npm install para instalar as dependências
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Comando padrão para iniciar o aplicativo
CMD ["npm", "start"]
