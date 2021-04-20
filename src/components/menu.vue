<template>
    <div class="menu">
        <router-link  to="/" tag="a" exact> Ana Sayfa </router-link>
        <router-link to="/awards" tag="a" exact>Ödüller</router-link>
        <router-link to="/portfolio" tag="a" exact>Portfolio</router-link>
        <router-link to="/whoAmI" tag="a" exact>Who Am I ?</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods : {

    }
}
</script>
<style scoped>
.menu{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 13px;
    margin-bottom: 35px;
    /* border:1px solid red; */
}
.menu a{
    font-family: 'Playfair Display', serif;
    /* border:1px solid blue; */
    padding: 5px 10px;
    letter-spacing: 1px;
}
@media(max-width: 1200px){ 


}
@media(max-width: 850px){ 


} 
@media(max-width: 576px){  


}
</style>
