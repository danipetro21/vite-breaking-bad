<script>

export default {
    name: "AppHeader",
    props: ["msg"]
}

</script>

<template>

    <header class="container">

        <h1 class="text-center my-5">
            {{ msg }}
        </h1>

       

    </header>

</template>

<style lang="scss" scoped>

.container{
    text-align: left;
}


h1 {
    margin-bottom: 20px;
    font-weight: 700;
}
</style>
