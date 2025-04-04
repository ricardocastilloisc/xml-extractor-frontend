# Imagen base oficial de Node
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./
COPY .npmrc .npmrc

# Instalar las dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Copiar variables de entorno de producción
COPY .env.production .env

# Construir la aplicación Nuxt para producción
RUN npm run build

# Exponer el puerto que Nuxt usará por defecto
EXPOSE 3000

# Comando para iniciar la app en producción
CMD ["npm", "run", "preview"]
