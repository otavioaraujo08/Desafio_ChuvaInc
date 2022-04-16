<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      class="q-col-gutter-sm"
    >
      <h7 class="text-left">Assunto</h7>
      <q-input
        outlined
        v-model="form.title"
        label="Defina um tópico sucinto para notificar os autores..."
        lazy-rules
        class="col-lg-6 col-xs-12"
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório !']"
      />

      <h7 class="text-left">Conteúdo</h7>
      <div class="col-lg-6 col-xs-12">
          <q-editor
            v-model="form.content"
            min-height="5rem"
            toolbar-bg="blue-grey-2"
            :toolbar="[
              ['bold', 'italic'],
              [{
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: center,
              }]
            ]"
          />
      </div>

      <div class="col-12 q-gutter-sm">
          <q-btn
            label="Enviar"
            style="background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%); border-radius: 0px 0px 4px 0p; color: #FFFFFF;"
            class="float-right"
            type="submit"
          />

          <q-btn
            label="Cancelar"
            color="white"
            class="float-right"
            text-color="red"
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
      content: ''
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

<style scoped>

h7 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ED7839;
}

</style>
