<script>

//importo lo store contente il link per il DB
import { store } from '../store.js'

export default {
    name: "AppSelect",
    data() {
        return {
            store
        }
    },
    methods: {
        resetSearch() {
            store.searchSelect = 'statusD';
            store.searchText = '';
            store.page = 1;
            this.$emit('search');
        }
    }
}

</script>


<template>

    <div class="form">

        <select class="searchClass" name="selectCat" id="cat" v-model="store.searchSelect">

            <option value="statusD" disabled selected>Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>

        </select>

        <input type="text" class="searchClass search-bar" id="search-character" v-model="store.searchText"
            placeholder="Search by NAME">

        <button type="submit" class="btn src" @click.prevent="$emit('search')">
            SEARCH
        </button>
        <button type="submit" class="btn rst" @click.prevent="resetSearch()">RESET</button>
    </div>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.form {
    width: 100%;
    text-align: left;
}

.searchClass{
    padding: 15px;
    border-radius: 15px;
    border: none;
}
select {
    background-color: aliceblue;
    color: black;
    margin-bottom: 20px;

}

.search-bar {
    background-color: $bg_secondary;
    margin-left: 10px;
}

.btn {
    margin: 0 10px;
}



.src {
    background-color: rgb(26, 155, 26);
}

.rst {
    background-color: rgb(207, 31, 31);
}
</style>