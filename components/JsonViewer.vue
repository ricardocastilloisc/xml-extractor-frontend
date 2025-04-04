<template>
  <!-- 📦 Sección contenedora del resultado JSON -->
  <!-- Main wrapper for the displayed JSON result -->
  <div class="mt-5">

    <!-- 🏷️ Etiqueta del campo de resultado -->
    <!-- Label for the JSON output field -->
    <label class="form-label fw-bold">Resultado JSON / JSON Result:</label>

    <!-- 📐 Área del text area con botones sobrepuestos -->
    <!-- JSON display area with overlayed buttons -->
    <div class="position-relative">

      <!-- 🧾 Área de texto que contiene el JSON formateado -->
      <!-- Readonly text area that shows the formatted JSON -->
      <textarea
        readonly
        class="form-control bg-dark text-success font-monospace"
        style="height: 400px"
        :value="formattedJson">
      </textarea>

      <!-- 🧰 Botones de acciones (copiar, descargar, expandir) -->
      <!-- Action buttons (copy, download, expand) -->
      <div class="position-absolute top-0 end-0 m-2 d-flex gap-2">
        <!-- 📋 Copiar contenido del text area -->
        <button @click="copy" class="btn btn-sm btn-primary">
          <i class="fas fa-copy"></i>
        </button>

        <!-- 💾 Descargar contenido como archivo .json -->
        <button @click="download" class="btn btn-sm btn-success">
          <i class="fas fa-download"></i>
        </button>

        <!-- ⛶ Ver JSON en pantalla completa -->
        <button @click="expand = true" class="btn btn-sm btn-secondary">
          <i class="fas fa-expand"></i>
        </button>
      </div>
    </div>

    <!-- 🧩 Modal fullscreen (teleportado al body para evitar desbordes) -->
    <!-- Fullscreen modal teleported to body to prevent overflow issues -->
    <teleport to="body">
      <div
        v-if="expand"
        class="fullscreen-modal position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center z-50"
      >
        <!-- ❌ Botón de cierre con ícono (fuera del modal blanco) -->
        <!-- Close button with FA icon (outside the white modal box) -->
        <button
          @click="expand = false"
          class="position-absolute bg-danger border-0 text-white rounded-circle"
          style="top: 1rem; right: 1rem; width: 2.5rem; height: 2.5rem; z-index: 1060;"
        >
          <i class="fas fa-times"></i>
        </button>

        <!-- 📑 Modal con el contenido JSON formateado -->
        <!-- Fullscreen modal containing the formatted JSON -->
        <div class="bg-white text-dark rounded shadow p-4 position-relative w-75 h-75 overflow-auto">
          <pre class="small">{{ formattedJson }}</pre>
        </div>
      </div>
    </teleport>

  </div>
</template>


<script setup>
// 🚀 Importaciones principales de Vue
// 🚀 Main imports from Vue
import { ref, computed } from 'vue'

// 🧊 Librería de alertas visuales (SweetAlert2)
// 🧊 Library for visual alerts (SweetAlert2)
import Swal from 'sweetalert2'

// 📦 Definición de props: se espera un objeto o arreglo llamado jsonData
// 📦 Define component props: expects a prop named jsonData (object or array)
const props = defineProps({
  jsonData: { type: [Object, Array], required: true }
})

// ⛶ Controla el estado de expansión del modal fullscreen
// ⛶ Controls whether the fullscreen modal is open or not
const expand = ref(false)

// 🧾 Computed que convierte el JSON en texto legible con formato (identado)
// 🧾 Computed that formats the JSON nicely for display
const formattedJson = computed(() => JSON.stringify(props.jsonData, null, 2))

// 📋 Función para copiar el JSON formateado al portapapeles
// 📋 Copies the formatted JSON to clipboard
const copy = () => {
  navigator.clipboard.writeText(formattedJson.value)
  Swal.fire('Copiado', 'Contenido copiado al portapapeles', 'success') // ✅ Alerta exitosa
}

// 💾 Función para descargar el JSON como archivo .json
// 💾 Downloads the formatted JSON as a .json file
const download = () => {
  const blob = new Blob([formattedJson.value], { type: 'application/json' }) // Crea archivo
  const url = URL.createObjectURL(blob) // Crea URL temporal
  const a = document.createElement('a') // Crea etiqueta <a>
  a.href = url
  a.download = 'result.json' // Nombre del archivo a descargar
  a.click() // Dispara la descarga
  URL.revokeObjectURL(url) // Limpia la URL temporal
}

</script>

<style scoped></style>