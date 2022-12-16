<script>
import { store } from '../store.js'

export default {
    name: 'LoadMore',
    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <div class="pagination">

        <div class="page" v-for="pag in store.pages">
            <input type="radio" :id="pag" :value="pag" v-model="store.page">
            <label :for="pag">{{ pag }}</label>
        </div>

    </div>

</template>


<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.pagination {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;

    input {
        visibility: hidden;
    }

    label {
        cursor: pointer;
        font-size: 15px;
        background-color: $bg_secondary;
        padding: 12px;

    }
}

.page {
    width: calc(100% / 20 - 5px);
    margin-bottom: 20px;

}
</style>