# На каком образе будет работать наш Docker container
FROM node:12.13-alpine

# Рабочая дирректория
WORKDIR /app

# Копируем в нее наши файлы конфигурации
COPY packege*.json ./

# Устанавливаем все зависимости проекта в контейнере
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

COPY ./dist ./dist

# Используем конфигурацию для разработки
CMD ["npm", "run", "start:dev"]