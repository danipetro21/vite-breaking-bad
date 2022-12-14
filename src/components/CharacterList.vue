<script>
import { store } from '../store.js'
import Character from './Character.vue';

export default {
    name: "CharacterList",
    components: {
        Character
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>

    <div class="container">
        <div class="found_c">Found 62 Character</div>

        <div class="box_card">

            <Character v-for="character in store.characterList" :result="character" />

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container {
    background-color: $white;
    margin: 0 auto;
    max-width: 1400px;
    padding: 30px;
}

.box_card {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;


}

.found_c {
    background-color: $bg_secondary;
    padding: 20px;
    text-align: left;
}
</style>