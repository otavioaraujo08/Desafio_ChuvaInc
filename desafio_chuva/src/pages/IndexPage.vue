<template>
  <q-page padding>
    <q-table
      title="Treats"
      :rows="posts"
      :columns="colunas"
      row-key="name"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
// Importando o Axios para receber os valores da API
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    // Nossa Lista do BD
    const posts = ref([])
    // Importando a Função List do Nosso postsService
    const { list } = postsService()

    // Declarando os Valores referentes a nossa tabela
    const colunas = [
      // Name e Field precisa receber o nome exato da nossa API
      { name: 'id', field: 'id', label: 'ID', align: 'left', sortable: true },
      { name: 'title', field: 'title', label: 'Título', align: 'center', sortable: true },
      { name: 'author', field: 'author', label: 'Autor', align: 'right', sortable: true }
    ]

    onMounted(() => {
      getPosts()
    })

    // Função respponsável por chamar os valores do BD
    // Async -> Função Assincrona
    // Await -> Função será pausada até que a promise seja resolvida
    const getPosts = async () => {
      try {
        // Os dados irão receber os valores da função list
        const data = await list()
        posts.value = data
      } catch (error) {
        console.log(error)
      }
    }

    return {
      posts,
      colunas
    }
  }
})
</script>
