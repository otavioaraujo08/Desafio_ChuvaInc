<template>
  <q-layout view="lHh Lpr lFf row">
    <!-- Itens dentro da minha sidebar-->
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="230"
        :breakpoint="400"
      >
        <div style="margin-top: 310px">
          <q-list padding>
            <q-item class="topico" clickable v-ripple>
              <q-item-section class="subtitulos">
                Apresentação
              </q-item-section>
            </q-item>

            <q-item class="topico" clickable v-ripple>
              <q-item-section class="subtitulos">
                Comitês
              </q-item-section>
            </q-item>

            <q-item class="topico" clickable v-ripple>
              <q-item-section class="subtitulos">
                Autores
              </q-item-section>
            </q-item>

            <q-item class="topico" clickable v-ripple>
              <q-item-section class="subtitulos">
                Eixos temáticos
              </q-item-section>
            </q-item>

            <q-item class="topico_esoclhido" clickable v-ripple>
              <q-item-section class="subtitulos_escolhido">
                Trabalhos
              </q-item-section>
            </q-item>

            <q-item class="topico" clickable v-ripple>
              <q-item-section class="subtitulos">
                Contato
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Topo da minha Sidebar -->
        <q-img
          class="absolute-top"
          src="../../public/Logo.png"
          style="margin-top:50px"/>

        <div
          class="absolute-top"
          style="
            background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
            min-height: 75px;"
        >
          <p class="titulo">SLACA 2019</p>
        </div>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(true)

    return {
      model: 'PT, BR',
      leftDrawerOpen
    }
  }
})
</script>

<style scoped>
  /* Título da Sidebar */
  .titulo {
    margin: 12px 0px 7px 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

  /* Borda na Sidebar */
  .topico, .topico_esoclhido {
    border-bottom: 1px solid #E7E7E7;
  }

  /* Caso seja o tópico esclhido */
  .topico_esoclhido {
    background: #FDF1EB;
    border-left: 5px solid #FAA34D;
  }

  /* Style dos itens da sidebar */
  .subtitulos, .subtitulos_escolhido {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    color: #725C5C;
    margin-left: 10px;
  }
</style>
