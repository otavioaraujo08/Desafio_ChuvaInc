<template>
    <div>
    <q-card
       v-if="component === 1"
       style="max-width: 98%;"
       flat bordered>
          <q-item class="titulo">
            <q-item-section>
              <q-item-label
                style="
                  font-family: 'Roboto';
                  color: #4E4E4E;
                  font-size: 20px;
                  font-weight: 500;">
                Discussões
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-card-section class="footer_subtitulo text-center">
              <p>Compartilhe suas ideias ou dúvidas com os autores</p>
          </q-card-section>
          <q-card-section class="text-center">
              <img class="q-mr-lg" src="../../public/icons/icone1.png">
              <img class="q-ml-lg q-mr-lg" src="../../public/icons/icone2.png">
              <img class="q-ml-lg" src="../../public/icons/icone3.png">
          </q-card-section>
          <q-card-section class="relative-position container flex flex-center">
              <p class="footer_texto_complementar">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
          </q-card-section>
          <div class="relative-position container flex flex-center q-mb-md">
            <q-btn class="botoes" icon="add" @click="MudarAba()">Criar Tópico</q-btn>
          </div>
       </q-card>

       <q-card
       v-else-if="component === 2"
       style="max-width: 98%;"
       flat bordered>
          <q-item class="titulo">
            <q-item-section>
              <q-item-label
                style="
                  font-family: 'Roboto';
                  color: #4E4E4E;
                  font-size: 20px;
                  font-weight: 500;">
                Discussões
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-section class="footer_form_subtitulo text-center">
              <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
          </q-card-section>
          <q-card-section class="text-left" style="min-height: 350px;">
                <h7 class="text-left">Assunto</h7>
                <q-input
                  outlined
                  label="Defina um tópico sucinto para notificar os autores..."
                  lazy-rules
                  class="col-lg-6 col-xs-12 q-mb-md"
                />

                <h7 class="text-left">Conteúdo</h7>
                <div class="col-lg-6 col-xs-12">
                    <q-editor
                      v-model="texto"
                      min-height="5rem"
                      toolbar-bg="blue-grey-2"
                      :toolbar="[
                        ['bold', 'italic'],
                        [{
                          options: center,
                        }]
                      ]"
                    />
                </div>

                <div class="col-12 q-gutter-sm q-mt-md">
                    <q-btn
                      label="Enviar"
                      style="background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%); border-radius: 0px 0px 4px 0p; color: #FFFFFF;"
                      class="float-right"
                      type="submit"
                      @click="MudarAba()"
                    />
                </div>
          </q-card-section>
       </q-card>

       <q-card
       v-else-if="component === 3"
       style="max-width: 98%;"
       flat bordered>
          <q-item class="titulo">
            <q-item-section>
              <q-item-label
                style="
                  font-family: 'Roboto';
                  color: #4E4E4E;
                  font-size: 20px;
                  font-weight: 500;">
                Discussões
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-card-section class="footer_subtitulo text-center">
              <p>Seu tópico foi enviado com sucesso! :D</p>
          </q-card-section>
          <q-card-section class="footer_form_subtitulo relative-position container flex flex-center">
              <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
          </q-card-section>
          <q-card-section class="footer_subtitulo text-center" style="color: #F48F44;">
              <p><u>Descubra outros trabalhos!</u></p>
          </q-card-section>
          <div class="relative-position container flex flex-center q-mt-lg q-mb-lg">
            <q-btn class="botoes" @click="MudarAba()">criar novo tópico</q-btn>
          </div>
          <q-card-section class="footer_subtitulo text-center" style="color: #F48F44;">
              <img src="../../public/aguardando.png" />
          </q-card-section>
       </q-card>
    </div>
</template>

<script>
// Nosso Formulário
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GestorFunc',

  data () {
    return {
      component: 1,
      texto: ''
    }
  },

  methods: {
    MudarAba () {
      if (this.component === 1) {
        this.component = 2
      } else if (this.component === 2) {
        this.component = 3
      } else {
        this.component = 1
      }
    }
  }
})
</script>

<style scoped>
.titulo {
  background: #FDF1EB;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 3px 3px 0px 0px;
  font-size: 13px;
}

/* Subtítulo Principal do Footer */
.footer_subtitulo {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ED7839;
  font-family: 'Roboto';
  font-style: normal;
}

.botoes {
  background: #ED7839;
  border-radius: 4px;
  color: #FFFFFF;
}

/* footer para formulário */
.footer_form_subtitulo {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #5C5C5C;
}

h7 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ED7839;
}
</style>
