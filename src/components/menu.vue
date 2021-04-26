<template>
    <div>
        <div class="menuIcon"  @click="mobileMenu" :class="{mobileMenuActive : mobileMenuStatus}">
            <span></span>
        </div>
        <div class="menu" :class="{mobileMenuActive : mobileMenuStatus,  mobileLink : mobileLink}" >
            <div class="contentOne" @click="mobileMenu">
                <router-link  to="/" tag="a" exact> Ana Sayfa </router-link>
                <router-link to="/awardsPage" tag="a" exact>Ödüller</router-link>
            </div>
            <div class="contentTwo"  @click="mobileMenu">
                <router-link to="/portfolio" tag="a" exact>Portfolio</router-link>
                <router-link to="/whoAmI" tag="a" exact>Who Am I ?</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mobileMenuStatus : false,
            mobileLink : false
        }
    },
    methods : {
        mobileMenu : function(){
            this.mobileMenuStatus = !this.mobileMenuStatus;
            setTimeout(() => {
                this.mobileLink = !this.mobileLink; 
            }, 800);

        }
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
    margin-left: -5%;
    position: relative;
    margin-bottom: 35px;
}
.menuIcon{
    position: fixed;
    z-index: 99;
    top: 5px;
    right: 5px;
    width: 50px;
    cursor: pointer;
    height: 50px;
    display: none;
}
.menuIcon span{
    position: relative;
    top: 20px;
	width: 50px;
	height: 6px;
	background-color: white;
    transition: all .5s ease;
    border-radius: 5px;
	display: block;
}
.menuIcon span::after,
.menuIcon span::before {
    content: '';
	width: 50px;
	height: 6px;
    border-radius: 5px;
    position: relative;
    top: 5px;
	background-color: white;
    transform-origin: left center;
	display: inline-block;
    transition: transform .5s ease-in-out;
}
.menuIcon span::after {
    top: -8px;
}
.menuIcon span::before {
    top: -22px; 
}
.contentOne,
.contentTwo{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 50%;
     background: black;
}

.contentOne a,
.contentTwo a{
    display: inline-block;
    font-size: 18px;
    width: 140px;
    height: 30px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    padding: 5px 10px;
    margin:15px 0;
    overflow: hidden;
    letter-spacing: 1px;
}
   /*  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */
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
        clip-path:polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)
    }
  to {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
    }
}
@keyframes mobileMenu {
  from {
       padding-top: 65px;
    }
  to {
        padding-top: 10px;
    }
}
@media(max-width: 1200px){ 


}
@media(max-width: 850px){ 
    .contentOne a,
    .contentTwo a{
        width: 122px;
    }

} 
@media(max-width: 576px){  
    .menu{
        position: absolute;
        top : -15px;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;       
        height: 100vh;
        display: none;
    }
    .mobileMenuActive{
        display: inline-block;
        position: fixed;
        height: 102vh;
    }
    .menuIcon{
        display: inline-block;
    }
    .contentOne{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 50%;
        background: black;
        animation: old 1s ease-in-out;
    }
    .contentTwo{
        position: relative;
        top: -5px;
        display: flex;
        background: black;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 50%;
        animation: event 1s ease-in-out;
    }
    .contentOne a,
    .contentTwo a{
        display: inline-block;
        font-size: 60px;
        width: 100%;
        height: 82px;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        padding: 0;
        padding-top: 85px;
        margin: 15px 0;
        letter-spacing: 1px;
        color:transparent;
        -webkit-text-stroke: 2px white;
    }
    .mobileLink .contentOne a,
    .mobileLink .contentTwo a{
        transition: padding 1s ease-out;
        padding-top: 10px;
    }
    .mobileMenuActive span{
      background-color: black;
    }
    .mobileMenuActive span::after {
        transform: rotate(323deg);
       transform-origin: left center;
    transition: transform .5s ease-in-out;

    }
    .mobileMenuActive span::before {
        opacity: 1;
        transform: rotate(40deg);
        transform-origin: left center;
        transition: transform .5s ease-in-out;

    }

}
</style>
