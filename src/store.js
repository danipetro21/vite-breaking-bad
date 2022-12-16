import { reactive } from "vue";

export const store = reactive ({
    characterList: [],
    pages: 0,
    apiURL: "https://rickandmortyapi.com/api/character",
    titolo: "Rick And Morty API",
    searchSelect: 'statusD',
    searchText: '',
    page : '1',
    apiNameParameter1: 'status',
    apiNameParameter2: 'name',
    apiNameParameter3: 'page'

})