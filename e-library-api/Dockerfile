# ใช้ Node.js image
FROM node:16

# ตั้งค่า working directory
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดไปยัง container
COPY . .

# คอมไพล์ TypeScript
RUN npm run build

# เปิดพอร์ตที่ NestJS จะใช้งาน
EXPOSE 3000

# รันแอปพลิเคชัน
CMD ["npm", "run", "start:prod"]
