<script>
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'
import { store } from './store.js'
import axios from 'axios';
import AppSearch from './components/AppSearch.vue'
import AppLoader from './components/AppLoader.vue';
import LoadMore from './components/LoadMore.vue';


export default {
  components: {
    AppHeader,
    CharacterList,
    AppSearch,
    AppLoader,
    LoadMore
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


        myUrl += `/?${store.apiNameParameter3}=${store.page}`;
      

      if (store.searchSelect == 'statusD') {
        myUrl += `&${store.apiNameParameter2}=${store.searchText}`;
      } else if (store.searchSelect !== 'statusD' || store.searchText !== "") {
        myUrl += `&${store.apiNameParameter1}=${store.searchSelect}&${store.apiNameParameter2}=${store.searchText}`;
      }



      this.loading = true;
      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results;
          store.pages = res.data.info.pages;
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

  <LoadMore @change="getAPI" />

</template>

<style lang="scss">
@use './style/general.scss';
</style>
