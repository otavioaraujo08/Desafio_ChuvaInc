<template>
  <div class="comentarios">
      <q-card
        flat
        bordered
        style="max-width: 98%;"
        class="my-card q-mt-md"
      >
        <q-card-section>
          <div class="footer_subtitulo">Assunto da pergunta aparece aqui</div>
          <div class="autor q-mt-sm">Carlos Henrique Santos</div>
          <div class="comentario q-mt-md">
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
          </div>
        </q-card-section>

        <q-card-section class="footer_comentarios">
          <img src="../../public/icons/icone4.png" class="q-mr-md">
          <img src="../../public/icons/icone5.png" class="q-mr-md" style="width: 35px;">
          <span class="q-mr-md infos">1 like</span>
          <span class=" infos">1 resposta</span>
        </q-card-section>
      </q-card>

      <!-- Tópico não expandido -->
      <q-card
        v-if="escolhido == 1"
        flat
        bordered
        style="max-width: 98%; cursor: pointer;"
        class="my-card q-mt-md"
        @click="mudarValor()"
      >
        <q-card-section>
          <div class="footer_subtitulo">Assunto da pergunta aparece aqui.</div>
          <div class="autor q-mt-sm">Carlos Henrique Santos</div>
          <div class="comentario q-mt-md">
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?
          </div>
        </q-card-section>

        <q-card-section class="footer_comentarios">
          <img src="../../public/icons/icone4.png" class="q-mr-md">
          <img src="../../public/icons/icone5.png" class="q-mr-md" style="width: 35px;">
          <span class="q-mr-md infos">4 like</span>
          <span class=" infos">4 resposta</span>
        </q-card-section>
      </q-card>

      <!-- Tópico expandido -->
      <q-card
        v-else
        flat
        bordered
        style="max-width: 98%; cursor: pointer;"
        class="my-card q-mt-md"
        @click="mudarValor()"
      >
        <!-- 1° Tópico -->
        <q-card-section>
          <div class="footer_subtitulo">Assunto da pergunta aparece aqui</div>
          <div class="autor q-mt-sm">Carlos Henrique Santos</div>
          <div class="comentario q-mt-md">
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?
          </div>
        </q-card-section>

        <q-card-section class="footer_comentarios">
          <img src="../../public/icons/icone4.png" class="q-mr-md">
          <img src="../../public/icons/icone5.png" class="q-mr-md" style="width: 35px;">
          <span class="q-mr-md infos">4 like</span>
          <span class=" infos">4 resposta</span>
        </q-card-section>

        <!-- 2° Tópico -->
        <q-card-section class="comentarios">
          <div class="autor q-mt-sm row justify-between">
            <p>Adriano da Silva</p>
            <p class="funcao">Autor <img class="q-ml-md" src="../../public/icons/icone6.png"></p>
          </div>
          <div class="comentario q-mb-md">
            Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
          </div>
        </q-card-section>

        <!-- 3° Tópico -->
        <q-card-section>
          <div class="autor q-mt-sm">Carlos Henrique Santos</div>
          <div class="comentario q-mt-md">
            Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.
          </div>
          <div class="comentario q-mt-lg q-mb-md">
            Obrigada pela resposta, muito interessante o seu trabalho!
          </div>
        </q-card-section>

        <!-- 4° Tópico -->
        <q-card-section class="comentarios">
          <div class="autor q-mt-sm row justify-between">
            <p>Carmila Ferreira Andrade</p>
            <p class="funcao">Coautor <img class="q-ml-md" src="../../public/icons/icone6.png"></p>
          </div>
          <div class="comentario">
            Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
          </div>
          <div class="comentario q-mt-sm q-mb-md">
            Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
          </div>
        </q-card-section>

        <!-- 5° Tópico -->
        <q-card-section class="comentarios">
          <div class="autor q-mt-sm row justify-between">
            <p>Ana Carolina</p>
            <p class="funcao">Coautor <img class="q-ml-md" src="../../public/icons/icone6.png"></p>
          </div>
          <div class="comentario q-mb-md">
           Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
export default {
  name: 'ComentariosUser',

  data () {
    return {
      escolhido: 1
    }
  },

  methods: {
    // Função para Alterar valor de "escolher"
    mudarValor () {
      if (this.escolhido === 1) {
        this.escolhido = 2
      } else {
        this.escolhido = 1
      }
    }
  }
}
</script>

<style>
/* Subtítulo Principal do Footer */
.footer_subtitulo {
  font-family: 'Roboto';
  font-style: normal;
  color: #ED7839;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.footer_comentarios {
  display: flex;
  align-items: center;
}

.autor, .comentario {
  font-family: 'Quicksand';
  font-style: normal;

}

.autor {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #5C5C5C;
}

.comentario {
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #4D4D4D;
  align-content: center;
}

.infos {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  color: #757575;
}

.comentarios {
  background: #F8F8F8;
  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  border-radius: 0px;
}

.funcao {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  color: #ED7839;
}
</style>
