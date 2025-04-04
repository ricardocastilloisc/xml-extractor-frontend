# Imagen base con Node.js 18
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de npm y las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Copia las variables de entorno para producción
COPY .env.production .env

# Construye el proyecto
RUN npm run build

# Expone el puerto usado por Nuxt
EXPOSE 3000

# Comando para ejecutar la app en modo producción
CMD ["npm", "run", "preview"]
