# Використовуємо базовий образ Node.js
FROM node:14

# Папка, де буде знаходитись додаток у контейнері
WORKDIR /usr/src/app

# Копіюємо package.json та package-lock.json та встановлюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо всі файли додатку в контейнер
COPY . .

# Запускаємо додаток при старті контейнера
CMD ["npm", "start"]
