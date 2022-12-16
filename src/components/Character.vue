<script>

export default {
    props: ["result"]
}

</script>

<template>

    <div class="card"
        :class="result.status === 'Dead' ? 'c-dead' : result.status === 'Alive' ? 'c-alive' : 'c-unknown'">
        <img :src="result.image" :alt="result.name">
        <h1>{{ result.name }}</h1>
        <div class="sub">{{ result.species }}</div>
        <div :class="result.status === 'Dead' ? 'dead' : result.status === 'Alive' ? 'alive' : 'unknown'"
            class="box-status">{{ result.status }}</div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    background-color: $bg_primary;
    width: calc(100% / 4 - 20px);
    padding: 15px;
    margin: 10px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        object-fit: cover;
    }

    h1 {
        margin: 20px 0;
        font-size: 1.5rem;
    }

}

.c-dead {
    border: 7px solid red;
}

.c-alive {
    border: 7px solid green;
}

.c-unknown {
    border: 7px solid gold;

}


.box-status {
    padding: 10px;
    // border-radius: 10px;
    color: white;
    width: calc(100% + 30px);
    align-self: center;
}

.unknown {
    background-color: gold;
}

.alive {
    background-color: green;
}

.dead {
    background-color: red;
}

.sub {
    color: $text_color;
    font-size: 1.5rem;
    margin: 10px 0;
}
</style>