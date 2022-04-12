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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    // Nossa Lista do BD
    const posts = ref([])

    const colunas = [
      // Name e Field precisa receber o nome exato da nossa API
      { name: 'id', field: 'id', label: 'ID', align: 'left', sortable: true },
      { name: 'title', field: 'title', label: 'Título', align: 'center', sortable: true },
      { name: 'author', field: 'author', label: 'Autor', align: 'right', sortable: true }
    ]

    return {
      posts,
      colunas
    }
  }
})
</script>
