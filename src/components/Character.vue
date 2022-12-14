<script>

export default {
    props: ["result"]
}

</script>

<template>

    <div class="card">
        <img :src="result.image" :alt="result.name">
        <h1>{{result.name}}</h1>
        <div class="sub">{{result.species}}</div>
        <div class="sub">{{result.status}}</div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.card {
    background-color: $bg_primary;
    width: calc(100% / 5 - 20px);
    padding: 15px;
    margin: 10px;
    img{
        width: 100%;
        object-fit: cover;
    }

    h1{
        margin-top: 10px;
        font-size: 1.5rem;
    }
    
}

.sub{
    color: $text_color;
}
</style>