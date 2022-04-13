<template>
  <q-layout view="lHh Lpr lFf row">
    <q-header bordered class="header">
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
    </q-header>

    <!-- Itens dentro da minha sidebar-->
    <q-drawer
        v-model="drawer"
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
    const leftDrawerOpen = ref(false)

    return {
      model: 'PT, BR',
      leftDrawerOpen
    }
  }
})
</script>

<style scoped>
  /* Retirando a Margem */
  p, span {
    margin: 0 0 0 0px;
  }

  /* Título e Subtítulo do Header */
  .header_subtitulo, .header_titulo {
    font-family: 'Roboto';
    font-style: normal;
    color: #725C5C;
  }

  /* Header */
  .header {
    background: #FDF1EB;
    min-height: 60px;
  }

  /* Componente de select do Quasar */
  .selector {
    border: 1px solid #CCCCCC;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
  }

  /* Texto utilizado na área de Avatar do Header */
  .texto-generico {
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: right;
    color: #333333;
  }

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
