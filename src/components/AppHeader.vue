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

        <select name="selectCat" id="cat">
            <option value="" disabled selected>Select Category</option>
            <option value="volvo">PROVA</option> 
            <option value="volvo">PROVA</option> 
            <option value="volvo">PROVA</option> 
            <option value="volvo">PROVA</option> 

        </select>

    </header>

</template>

<style lang="scss" scoped>

.container{
    text-align: left;
}
select{
    background-color: aliceblue;
    color: black;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 20px;
}

h1 {
    margin-bottom: 20px;
    font-weight: 700;
}
</style>
