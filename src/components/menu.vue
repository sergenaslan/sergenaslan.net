<template>
    <div class="menu">
        <router-link  to="/" tag="a" exact> Ana Sayfa </router-link>
        <router-link to="/awardsPage" tag="a" exact>Ödüller</router-link>
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
    min-height: 20px;
    margin-top: 13px;
    margin-bottom: 35px;
    border:1px dashed blue;
}
.menu a{
    font-family: 'Playfair Display', serif;
    padding: 5px 10px;
    letter-spacing: 1px;
  /*   border:1px solid red; */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
/* .menu a:nth-of-type(1),
.menu a:nth-of-type(3){
    animation: old 1s ease-in-out;
}
.menu a:nth-of-type(2),
.menu a:nth-of-type(4){
    animation: event 1s ease-in-out;
} */
@keyframes old {
  from {
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)
    }
  to {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
    }
}
@keyframes event {
  from {
        clip-path:polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)
    }
  to {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
    }
}
@media(max-width: 1200px){ 


}
@media(max-width: 850px){ 


} 
@media(max-width: 576px){  
    .menu{
        position: absolute;
        z-index: 9;
        display: flex;
        flex-direction: column;
         justify-content: center;
        width: 90%;
        background: black;
        height: 100vh;
    }
    .menu a{
        width: 100%;
        margin-bottom: 30px;
        height: 50px;
        border:1px solid red;
        text-align: center;
        font-size: 24px;
    }

}
</style>
