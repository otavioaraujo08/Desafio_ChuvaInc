<template>
    <div>
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
            <h7>Compartilhe suas ideias ou dúvidas com os autores</h7>
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
    </div>
</template>

<script>
    export default defineComponent({
        name: 'CompartilhaIdeias'
    })
</script>

<style>
.titulo {
  background: #FDF1EB;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 3px 3px 0px 0px;
  font-size: 13px;
}
</style>