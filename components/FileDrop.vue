<template>
  <!-- 📦 Contenedor principal del área de carga -->
  <!-- Wrapper for the drag & drop upload area -->
  <div class="my-4">

    <!-- 📥 Área interactiva para arrastrar o hacer clic -->
    <!-- Interactive drop/click area for ZIP upload -->
    <div class="border border-2 border-secondary p-5 text-center rounded position-relative bg-white" @dragover.prevent
      @drop.prevent="onDrop" @click="openFilePicker" style="cursor: pointer">

      <!-- 🔍 Input file oculto que se dispara manualmente -->
      <!-- Hidden input file, triggered by click -->
      <input ref="fileInput" type="file" accept=".zip" class="d-none" @change="onFileChange" />

      <!-- ✅ Cuando hay un archivo seleccionado -->
      <!-- ✅ If a file has been selected -->
      <div v-if="selectedFile">
        <!-- 🗂️ Icono de archivo comprimido -->
        <i class="fas fa-file-archive fa-2x text-secondary"></i>

        <!-- 📄 Muestra el nombre del archivo -->
        <p class="mt-2">{{ selectedFile.name }}</p>

        <!-- 🗑️ Botón para eliminar el archivo seleccionado -->
        <button @click.stop="clearFile" class="btn btn-outline-danger btn-sm mt-2">
          <i class="fas fa-trash"></i> Eliminar / Remove
        </button>
      </div>

      <!-- 📭 Si aún no se ha cargado un archivo -->
      <!-- 📭 When no file has been selected yet -->
      <div v-else>
        <i class="fas fa-upload fa-2x text-muted"></i> <!-- ⬆️ Icono de carga -->
        <p class="mt-3 text-muted">
          Arrastra aquí tu archivo ZIP o haz clic /
          Drag ZIP file here or click
        </p>
      </div>

    </div>
  </div>
</template>


<script setup>
// 📦 Importaciones esenciales / Core imports
import { ref, defineEmits, defineProps } from 'vue'
import Swal from 'sweetalert2' // 🎉 Librería para mostrar alertas elegantes

// 📡 Emite eventos hacia el componente padre
// Emits events to the parent component
const emit = defineEmits(['file-selected', 'clear-file'])

// 📥 Propiedad que representa el archivo seleccionado
// Prop that holds the currently selected file
const props = defineProps({
  selectedFile: {
  type: Object,
  default: null
}
})

// 🔗 Referencia al input file oculto (para simular clic)
// Reference to the hidden file input (triggered programmatically)
const fileInput = ref(null)

/**
 * 🖱️ openFilePicker()
 * Simula un clic sobre el input file oculto
 * Simulates a click on the hidden file input
 */
const openFilePicker = () => fileInput.value?.click()

/**
 * 📂 onFileChange(e)
 * Maneja el cambio del input file (cuando se selecciona manualmente)
 * Handles the file input change event (manual selection)
 */
const onFileChange = (e) => {
  const file = e.target.files[0]
  validateFile(file) // Verifica si es un .zip válido
}

/**
 * 🧲 onDrop(e)
 * Maneja el archivo arrastrado al área
 * Handles drag-and-drop file into drop zone
 */
const onDrop = (e) => {
  const file = e.dataTransfer.files[0]
  validateFile(file)
}

/**
 * 🛡️ validateFile(file)
 * Verifica que el archivo sea un ZIP válido.
 * Si no lo es, muestra una alerta con SweetAlert.
 * Validates the uploaded file is a valid .zip and alerts if not.
 */
const validateFile = (file) => {
  if (!file || file.type !== 'application/x-zip-compressed' && !file.name.endsWith('.zip')) {
    Swal.fire('Archivo inválido', 'Solo se permiten archivos .zip', 'error') // ❌ Alerta elegante
    return
  }
  emit('file-selected', file) // ✅ Envía el archivo válido al componente padre
}

/**
 * 🧹 clearFile()
 * Limpia el input y emite evento para eliminar archivo
 * Resets the file input and notifies the parent to clear state
 */
const clearFile = () => {
  fileInput.value.value = null
  emit('clear-file')
}

</script>