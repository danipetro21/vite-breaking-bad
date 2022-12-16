<script>
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'
import { store } from './store.js'
import axios from 'axios';
import AppSearch from './components/AppSearch.vue'
import AppLoader from './components/AppLoader.vue';


export default {
  components: {
    AppHeader,
    CharacterList,
    AppSearch,
    AppLoader
  },
  data() {
    return {
      store,
      loading: false,
    }
  },
  methods: {
    getAPI() {
      let myUrl = store.apiURL

      if (store.searchSelect !== 'statusD' || store.searchText !== "") {
        myUrl += `?${store.apiNameParameter1}=${store.searchSelect}&${store.apiNameParameter2}=${store.searchText}`
      }

      this.loading = true;
      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results
        })
        .catch(err => {
          console.log("errori", err);
        }).finally(() => {
          this.loading = false;
        });
    }

  },
  mounted() {
    this.getAPI();
  }
}

</script>

<template>

  <AppLoader v-if="loading" />
  <AppHeader :msg="store.titolo" />
  <AppSearch @search="getAPI" />
  <main>

    <CharacterList />

  </main>

</template>

<style lang="scss">
@use './style/general.scss';
</style>
