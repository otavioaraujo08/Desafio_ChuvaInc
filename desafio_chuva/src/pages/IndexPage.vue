<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <header bordered class="header">
        <q-toolbar class="justify-around">
          <div>
            <span
              class="header_subtitulo"
              style="font-size: 14px;"
            >
              Anais do Simpósio Latino Americano de Ciências de Alimentos
            </span>
            <p
              class="header_titulo"
              style="font-size: 22px;"
            >
              Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
            </p>
            <span
              class="header_subtitulo"
              style="
                font-size: 14px;"
            >
              ISSN: 1234-5678
            </span>
          </div>
          <div>
            <q-select
              class="seletor"
              v-model="model"
              prefix=""
              square
              outlined
            >
              <template v-slot:prepend>
                <q-icon name="language" />
              </template>
            </q-select>
          </div>
          <div>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label class="texto-generico" style="font-size: 20px;">Bem vindo!</q-item-label>
                <q-item-label class="texto-generico" style="font-size: 15px">alguem12@galoascience.com</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-avatar size="48px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                  <q-badge floating color="negative">2</q-badge>
                </q-avatar>
              </q-item-section>
            </q-item>
          </div>
      </q-toolbar>
    </header>

    <!-- Informações do Topo da Tela -->
    <nav class="row justify-between flex-center">
      <div class="col-8">
        <h5
          style="margin-left: 20px; ">
          Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
        </h5>
      </div>

      <div class="col-auto q-mr-md q-mt-md">
        <q-btn class="botoes">
          <img src="../../public/icons/download.png" class="q-mr-md">Download
        </q-btn>
        <q-btn class="botoes q-mr-sm q-ml-sm" icon="star"/>
        <q-btn class="botoes">
          <img src="../../public/icons/doi.png">
        </q-btn>
        <q-space/>
        <p
          class="text-center"
          style="
            margin-top: 10px;
            color: #ED7839;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 25px;"
        >
          Como citar esse trabalho ?</p>
      </div>
    </nav>

    <!-- Informações do Meio da Tela -->
    <body class="row justify-between flex-center">
      <div class="col-9 q-pa-md" >
        <q-video
          style="width: 100%"
          :ratio="16/9"
          src="https://www.youtube.com/embed/WPPPFqsECz0"
        />
      </div>
      <div class="col-auto">
        <q-card class="my-card" flat bordered >
          <q-item style="background: #FDF1EB;">
            <q-item-section >
              <q-item-label
                style="
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 25px;
                color: #4E4E4E;">
                Detalhes
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section>
            <q-card-section class="scroll" style="max-width: 260px; max-height: 400px;">
              <span class="informacoes">Tipo de Apresentação: <b>Pôster</b></span><br>
              <span class="informacoes">Eixo temático: <b>Alimentação e saúde (AS)</b></span><br>
              <span class="informacoes">Palavras-chaves: <b> Alimentos funcionais, alimentação escolar.</b></span><br><br>
              <span class="informacoes"><b>Autores: </b></span><br>
              <span class="autores">Galileo Galilei¹</span><br>
              <span class="autores">Berta Lange de Morretes²</span><br>
              <span class="autores">Isaac Newton³</span><br>
              <span class="autores">Cesar Lattes¹</span><br>
              <span class="autores">Stephen Hawking⁴</span><br>
              <br>
              <div class="universidades">
                <span>¹Universidade Estadual de Campinas</span><br>
                <span>²Universidade de São Paulo</span><br>
                <span>³Instituto Nacional de Pesquisas Espaciais</span><br>
                <span>⁴Universidade Federal do Rio de Janeiro</span><br>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </body>
    <!-- Informações Sobre o Artigo -->
    <article class="q-ml-md">
       <q-card style="max-width: 98%;" flat bordered>
          <q-item class="titulo">
            <q-item-section>
              <q-item-label
                style="
                  font-family: 'Roboto';
                  color: #4E4E4E;
                  font-size: 20px;
                  font-weight: 500;">
                Resumo
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section
              v-if="escolher === false"
              style="
              font-family: 'Quicksand';
              font-weight: 400;
              font-size: 14px;
              line-height: 23px;
              letter-spacing: 0.02em;
              color: #5C5C5C;
              align-self: stretch;
              cursor: pointer;"
              @click="mudarValor()"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.</p>

              <p>Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.</p>

              <p>Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.</p>

              <p>Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </q-card-section>
            <q-card-section
              v-else
              style="
              font-family: 'Quicksand';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0.09em;
              color: #5C5C5C;
              align-self: stretch;"
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis.
             Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam
             aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus
             condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque,
             ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin
             ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...
             <button class="ver_mais" style="color: #EF8952; font-size: 16px;" @click="mudarValor()">ver mais</button>
            </q-card-section>
          </q-card-section>
        </q-card>
    </article>

    <!-- Informações sobre Discussões e Comentários -->
    <footer class="q-ml-md q-mt-md">
      <GestorFuncao/>

      <Comentarios/>

      <LogoEmpresa class="q-mt-lg q-mf-lg"/>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
// Nossos componentes
import Comentarios from '../components/ComentariosUser.vue'
import GestorFuncao from './GestorFunc.vue'
import LogoEmpresa from '../components/LogoEmpr.vue'
// Importando o Axios para receber os valores da API
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'IndexPage',

  components: {
    Comentarios,
    GestorFuncao,
    LogoEmpresa
  },

  setup () {
    // Nossa Lista do BD
    const posts = ref([])
    // Importando as funções que vou utilizar do Nosso postsService
    const { list, remove } = postsService()
    // Componentes do Quasar
    const $q = useQuasar()
    // Rotas
    const router = useRouter()

    let lista = ref([])

    // Declarando os Valores referentes a nossa tabela
    const colunas = [
      // Name e Field precisa receber o nome exato da nossa API
      { name: 'id', field: 'id', label: 'ID', align: 'left', sortable: true },
      { name: 'title', field: 'title', label: 'Título', align: 'center', sortable: true },
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
        lista = data
      } catch (error) {
        console.log(error)
      }
    }

    // Função para apagar post
    const handlerDeletePost = async (id) => {
      try {
        await remove(id)
        $q.notify({ message: 'Apagado com sucesso !', icon: 'check', color: 'positive' })
        await getPosts()
      } catch (error) {
        $q.notify({ message: 'Não foi possível Apagar !', icon: 'close', color: 'negative' })
      }
    }

    // Função para editar post
    const handlerEditPost = async (id) => {
      router.push({ name: 'formPost', params: { id } })
    }

    return {
      lista,
      model: 'PT, BR',
      posts,
      colunas,
      handlerDeletePost,
      handlerEditPost
    }
  },

  data () {
    return {
      component: 1,
      escolher: true
    }
  },

  methods: {
    // Função para Alterar valor de "escolher"
    mudarValor () {
      if (this.escolher === true) {
        this.escolher = false
      } else {
        this.escolher = true
      }
    }
  }
})
</script>

<style scoped>
nav {
  display: flex;
}

/* Retirando a Margem */
p, span {
  margin: 0 0 0 0px;
}

/* Font-family e Style Igual */
h5, .botoes, .card-titulo, .footer_subtitulo, .header_subtitulo, .header_titulo {
     font-family: 'Roboto';
     font-style: normal;
  }

/* Font-size*/
h5, .card-titulo {
     font-size: 20px;
  }

h5, .footer_subtitulo {
    color: #ED7839;
}

  /* Título e Subtítulo do Header */
.header_subtitulo, .header_titulo {
  color: #725C5C;
}

.informacoes, .universidades, .autores, .footer_form_subtitulo {
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #5C5C5C;
}

.selector, .texto-generico, .footer_texto_complementar, .footer_form_subtitulo {
  font-weight: 400;
}

.selector, .footer_texto_complementar, .footer_form_subtitulo {
  font-family: 'Quicksand';
  font-style: normal;
}

.footer_form_subtitulo, .footer_texto_complementar {
  font-size: 16px;
}

.selector, .texto-generico {
  color: #333333;
  line-height: 18px;
}

/* Título do Nosso Texto */
h5 {
   font-weight: 900;
   line-height: 25px;
   /* or 125% */
   letter-spacing: 0.05em;
}

/* Header */
.header {
  background: #FDF1EB;
  width: 100%;
  min-width: auto;
}

/* Componente de select do Quasar */
.selector {
  border: 1px solid #CCCCCC;
  font-size: 14px;
}

/* Texto utilizado na área de Avatar do Header */
.texto-generico {
  font-style: normal;
  text-align: right;
}

.botoes {
  background: #ED7839;
  border-radius: 4px;
  color: #FFFFFF;
}

.card-titulo {
  font-weight: 500;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #4E4E4E;
}

.informacoes, .autores {
  font-size: 15px;
}

.universidades {
  color: #B7ACAC;
  font-size: 13px;
}

.titulo {
  background: #FDF1EB;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 3px 3px 0px 0px;
  font-size: 13px;
}

/* Botão para Função de Alterar valor de "escolher" */
.ver_mais {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

/* Subtítulo Principal do Footer */
.footer_subtitulo {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

/* Texto complementar do footer */
.footer_texto_complementar {
  width: 60%;
  line-height: 19px;
  text-align: center;
  color: #595959;
}

/* footer para formulário */
.footer_form_subtitulo {
  line-height: 18px;
}

@media (max-width: 1200px) {
  .header {
    font-size: 2px;
  }
}
</style>
