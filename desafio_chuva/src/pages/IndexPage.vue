<template>
  <q-page padding>
    <q-table
      title="Treats"
      :rows="posts"
      :columns="colunas"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="delete" color="negative" size="md" dense @click="handlerDeletePost(props.row.id)" />
        </q-td>
      </template>
    </q-table>
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
    // Importando as funções que vou utilizar do Nosso postsService
    const { list, remove } = postsService()

    // Declarando os Valores referentes a nossa tabela
    const colunas = [
      // Name e Field precisa receber o nome exato da nossa API
      { name: 'id', field: 'id', label: 'ID', align: 'left', sortable: true },
      { name: 'title', field: 'title', label: 'Título', align: 'center', sortable: true },
      { name: 'author', field: 'author', label: 'Autor', align: 'center', sortable: true },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
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

    const handlerDeletePost = async (id) => {
      try {
        await remove(id)
        alert('Apagado com sucesso !')
        await getPosts()
      } catch (error) {
        alert(error)
      }
    }

    return {
      posts,
      colunas,
      handlerDeletePost
    }
  }
})
</script>
