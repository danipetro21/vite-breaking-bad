<script>
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'
import { store } from './store.js'
import axios from 'axios';

export default {
  components: {
    AppHeader,
    CharacterList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getAPI() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.characterList = res.data.results
        })
        .catch(err => {
          console.log("errori", err);
        });
    }

  },
  mounted() {
    this.getAPI();
  }
}

</script>

<template>
  <AppHeader :msg="store.titolo" />

  <main>

    <CharacterList/>
    
  </main>

</template>

<style lang="scss">

@use './style/general.scss';

</style>
