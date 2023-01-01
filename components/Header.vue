<template>
    <header>
        <img src="@/static/logo.svg" width="80px" class="logo" />
        <v-spacer></v-spacer>
        <button>Sign In</button>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
    height: 18vh;
    padding: 10px 5%;
    background: rgb(167,226,165);
    background: -moz-linear-gradient(90deg, rgba(167,226,165,1) 0%, rgba(91,169,89,1) 23%, rgba(77,126,62,1) 58%, rgba(38,84,47,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(167,226,165,1) 0%, rgba(91,169,89,1) 23%, rgba(77,126,62,1) 58%, rgba(38,84,47,1) 100%);
    background: linear-gradient(90deg, rgba(167,226,165,1) 0%, rgba(91,169,89,1) 23%, rgba(77,126,62,1) 58%, rgba(38,84,47,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a7e2a5",endColorstr="#26542f",GradientType=1);
}
.logo {
    vertical-align: middle;
    height: 100%;
}
</style>
