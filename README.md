
# 📦 XML Extractor Frontend

**Autor / Author:** Ricardo Orlando Castillo Olivera  
**Repositorio backend (FastAPI):** https://github.com/ricardocastilloisc/xml-extractor-api  
**Repositorio frontend (Nuxt 3 + Bootstrap):** https://github.com/ricardocastilloisc/xml-extractor-frontend  

---

## 📘 Descripción / Description

Esta es una aplicación frontend desarrollada con **Nuxt 3** y **Bootstrap 5**, que permite a los usuarios subir un archivo `.zip` que contenga múltiples archivos `.xml`.

📂 **Importante:** el `.zip` debe contener una **carpeta** (con cualquier nombre) que contenga los archivos XML.  
Ejemplo: `archivo.zip → carpeta → archivos.xml`.

El sistema los envía a un backend en **FastAPI**, donde se procesan y se extraen los datos de cada XML como un objeto **JSON dinámico**.  
El resultado se visualiza directamente en pantalla, con opciones para copiar, descargar o ver en pantalla completa.

---

This is a frontend app built with **Nuxt 3** and **Bootstrap 5**, allowing users to upload a `.zip` file containing multiple `.xml` files.

📂 **Important:** the `.zip` must contain a **folder** (with any name) that includes the XML files.  
Example: `file.zip → folder → xml files`.

The system sends them to a **FastAPI** backend, where each XML is processed and returned as a **dynamic JSON object**.  
The result is displayed on screen with options to copy, download, or view it in fullscreen.

---

## 🚀 Tecnologías / Technologies

- Nuxt 3 (Vue 3)
- Bootstrap 5
- Axios
- SweetAlert2

---

## 🧪 ¿Cómo usar la app? / How to use the app?

1. ✅ **Arrastra un archivo `.zip` o haz clic en el área designada.**  
   ✅ **Drag a `.zip` file or click on the designated area.**

2. ✅ **Solo se acepta un archivo ZIP a la vez.**  
   ✅ **Only one ZIP file is accepted at a time.**

3. ✅ **Presiona el botón "Procesar / Process".**  
   ✅ **Click the "Procesar / Process" button.**

4. ✅ **Verás el resultado como JSON en un área de texto:**  
   ✅ **The JSON result will appear in a text area:**  
   - Puedes copiarlo 📋 / You can copy it 📋  
   - Descargarlo como `.json` ⬇️ / Download it as a `.json` file ⬇️  
   - Verlo en pantalla completa 🖥️ / View it in fullscreen mode 🖥️

---

## ⚙️ Variables de entorno / Environment variables

El archivo `.env` define la URL de la API a consultar.  
The `.env` file defines the API endpoint URL to be used.

```env
API_URL=http://localhost:8000/procesar-zip/
```

Para producción, el archivo `.env.production` se ve así:  
For production, the `.env.production` file looks like this:

```env
API_URL=https://xml-extractor-api.fly.dev/procesar-zip/
```

Nuxt detecta automáticamente el entorno para usar la variable adecuada.  
Nuxt automatically detects the environment to use the appropriate variable.

---

## 🧱 Instalación y ejecución local / Local Setup

```bash
git clone git@github.com:ricardocastilloisc/xml-extractor-frontend.git
cd xml-extractor-frontend
npm install
npm run dev
```

---

## ☁️ Despliegue en Fly.io / Deploy on Fly.io

Este proyecto puede ser desplegado en [Fly.io](https://fly.io/).  
This project can be deployed on [Fly.io](https://fly.io/).

Solo necesitas ejecutar:  
You just need to run:

```bash
fly launch
```

Asegúrate de tener configurado tu `.env.production` antes de desplegar.  
Make sure your `.env.production` file is properly configured before deploying.

---

## 🧑‍💻 Hecho por / Made by

**Ricardo Orlando Castillo Olivera**  
[LinkedIn](http://linkedin.com/in/ricardo-orlando-castillo-olivera-4b4b45162)
