<template>
  <q-page padding>
    <q-table
      title="Artigos"
      :rows="posts"
      :columns="colunas"
      row-key="name"
    >
      <template v-slot:top>
        Artigos
        <q-space/>
        <q-btn color="primary" label="Adicionar Artigo" :to="{ name: 'formPost' }"/>
      </template>
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
import { useQuasar } from 'quasar'
// Importando o Axios para receber os valores da API
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    // Nossa Lista do BD
    const posts = ref([])
    // Importando as funções que vou utilizar do Nosso postsService
    const { list, remove } = postsService()
    // Componentes do Quasar
    const $q = useQuasar()

    // Declarando os Valores referentes a nossa tabela
    const colunas = [
      // Name e Field precisa receber o nome exato da nossa API
      { name: 'id', field: 'id', label: 'ID', align: 'left', sortable: true },
      { name: 'title', field: 'title', label: 'Título', align: 'center', sortable: true },
      { name: 'author', field: 'author', label: 'Autor', align: 'center', sortable: true },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]

    // Quando for inicializado, executar a função
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
        $q.notify({ message: 'Apagado com sucesso !', icon: 'check', color: 'positive' })
        await getPosts()
      } catch (error) {
        $q.notify({ message: 'Não foi possível Apagar !', icon: 'close', color: 'negative' })
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
