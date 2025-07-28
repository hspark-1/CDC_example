# server/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
# ✅ devDependencies까지 설치
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]