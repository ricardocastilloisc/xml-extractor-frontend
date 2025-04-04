// ----------------------------------------------------------------------------
// 🚀 Servicio API para enviar archivos ZIP al backend FastAPI
// 🚀 API service to send ZIP files to FastAPI backend
// ----------------------------------------------------------------------------

import axios from 'axios'

// 📦 Hook personalizado que retorna funciones para interactuar con la API
// 📦 Custom hook that returns functions to interact with the API
export const useApiService = () => {
  // 🌐 Obtiene las variables de entorno configuradas en Nuxt (.env o .env.production)
  // 🌐 Access Nuxt runtime config (from .env or .env.production)
  const config = useRuntimeConfig()

  // 📤 Función para subir el archivo ZIP al backend
  // 📤 Function to upload ZIP file to the backend
  const uploadZip = async (file) => {
    const formData = new FormData()
    formData.append('file', file) // ✅ Adjunta el archivo como 'file'

    try {
      // 🔁 Realiza una petición POST al endpoint usando Axios
      // 🔁 Sends a POST request to the endpoint using Axios
      const { data } = await axios.post(config.public.apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // 📎 Necesario para enviar archivos
        }
      })

      // 📦 Devuelve los datos procesados desde el backend
      // 📦 Returns the processed data from the backend
      return data
    } catch (error) {
      // ❌ Lanza un error legible si la API falla
      // ❌ Throws a readable error if the API fails
      throw new Error(error.response?.data?.error || 'Error al procesar el archivo / Failed to process file')
    }
  }

  // 📤 Expone la función de subida como parte del servicio
  // 📤 Expose the upload function as part of the service
  return { uploadZip }
}
