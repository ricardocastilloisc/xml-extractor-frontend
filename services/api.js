import axios from 'axios'

export const useApiService = () => {
  const config = useRuntimeConfig()

  const uploadZip = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const { data } = await axios.post(config.public.apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Error al procesar el archivo')
    }
  }

  return { uploadZip }
}
