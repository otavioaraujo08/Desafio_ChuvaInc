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
  </div>
</template>

<script>
export default {
  name: 'ComentariosUser'
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
}

.infos {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  color: #757575;
}
</style>
