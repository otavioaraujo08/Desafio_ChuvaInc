<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="row q-col-gutter-sm"
    >
      <q-input
        outlined
        v-model="form.title"
        label="Título"
        lazy-rules
        class="col-lg-6 col-xs-12"
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório !']"
      />

      <q-input
        outlined
        v-model="form.author"
        label="Autor"
        lazy-rules
        class="col-lg-6 col-xs-12"
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório !']"
      />

      <div class="col-lg-6 col-xs-12">
          <q-editor
            v-model="form.content"
            min-height="5rem"
            />
      </div>

      <div class="col-12 q-gutter-sm">
          <q-btn
            label="Salvar"
            color="primary"
            class="float-right"
            icon="save"
            type="submit"
            />
          <q-btn
            label="Cancelar"
            color="white"
            class="float-right"
            text-color="red"
            icon="close"
            :to="{ name: 'home' }"
            />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
// Importando Nossas Funções da API
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'FormPost',

  setup () {
    // Componentes do Quasar
    const $q = useQuasar()

    // Requisitando nossas funções
    const { post, getById, update } = postsService()

    // Redirecionamento de Rotas
    const router = useRouter()
    const route = useRoute()

    // Nossos dados que pretendemos preencher
    const form = ref({
      title: '',
      content: '',
      author: ''
    })

    // Função para verificar se é um id a ser adicionado ou atualizado
    onMounted(async () => {
      if (route.params.id) {
        getPost(route.params.id)
      }
    })

    // Nossa função para receber os dados do BD
    const getPost = async (id) => {
      try {
        const response = await getById(id)
        // Enviando os valores do meu BD para o Form
        form.value = response
      } catch (error) {
        console.log(error)
      }
    }

    // Nossa Função de Salvar
    const onSubmit = async () => {
      try {
        if (form.value.id) {
          await update(form.value)
        } else {
          await post(form.value)
        }
        $q.notify({ message: 'Salvo com sucesso !', icon: 'check', color: 'positive' })
        router.push({ name: 'home' })
      } catch (error) {
        $q.notify({ message: 'Não foi possível Salvar !', icon: 'close', color: 'negative' })
      }
    }

    return {
      form,
      onSubmit
    }
  }
})
</script>
