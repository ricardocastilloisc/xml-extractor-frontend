<!--
Autor / Author: Ricardo Orlando Castillo Olivera
Proyecto / Project: XML Extractor Frontend
Descripción / Description:
Interfaz web desarrollada en Nuxt 3 + Bootstrap que permite cargar un archivo ZIP con XMLs,
procesarlos en un backend FastAPI y visualizar el JSON resultante en una vista amigable.

Frontend web built with Nuxt 3 + Bootstrap that lets users upload a ZIP with XML files,
process them using a FastAPI backend, and visualize the resulting JSON in a user-friendly layout.
-->

<template>
  <!-- Layout principal con header, enlaces, y contenido principal -->
  <div class="bg-light min-vh-100">
    <!-- Encabezado / Header -->
    <header class="bg-dark text-white py-3 shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Enlaces a GitHub y LinkedIn -->
        <div class="d-flex gap-3">
          <a href="https://github.com/ricardocastilloisc/xml-extractor-api" target="_blank" class="text-white text-decoration-none">
            <i class="fab fa-github"></i> Backend
          </a>
          <a href="https://github.com/ricardocastilloisc/xml-extractor-frontend" target="_blank" class="text-white text-decoration-none">
            <i class="fab fa-github"></i> Frontend
          </a>
          <a href="http://linkedin.com/in/ricardo-orlando-castillo-olivera-4b4b45162" target="_blank" class="text-white text-decoration-none">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <!-- Autor del proyecto -->
        <small class="fst-italic">Hecho por el Ing. Ricardo Orlando Castillo Olivera</small>
      </div>
    </header>

    <!-- Contenido dinámico de Nuxt / Nuxt page container -->
    <main class="container py-5">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// 🧪 Modo desarrollo: mensaje en consola cuando estamos en local
if (process.env.NODE_ENV === 'development') {
  console.log('Desarrollando con Nuxt en local...')
}
</script>

<style>
/* 🎨 Importaciones de estilo externo */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
/* Color de fondo general */
body {
  background-color: #f8f9fa;
}

/* Estilo para botón de cierre fuera del modal fullscreen */
.fullscreen-modal .btn-close {
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 1055;
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
