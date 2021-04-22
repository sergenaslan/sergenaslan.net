<template>
    <div class="homePage" @wheel.prevent="wheelChange($event)">
        <div class="leftIcon" @click="changeSlide(-1)"></div>
        <div class="rightIcon" @click="changeSlide(+1)"></div>
        <div class="sliderState">
            <div class="slideNumber" :style="{ transform: activeSlideNumber()}" >
                <span v-for="(slide , index) in slideData" :key="index">  {{ index+1}}</span>
            </div>
            <div class="totalSlide"> {{ slideData.length  }} </div>
        </div>
        <img class="imageBackground" :src="slideData[activeSlide].image" :class="{slideDown : animationStatus }">
        <div class="projectImage" :style="{ border: '5px solid'+ slideData[activeSlide].color }" :class="{slideUp : animationStatus }">
            <img class="" :src="slideData[activeSlide].image" alt="">
        </div>
        <div class="projectComment">
            <h1> {{ slideData[activeSlide].title }} </h1>  
            <p>
                {{ slideData[activeSlide].description }} 
            </p>
            <a @click="navigate()"  :style="{ backgroundColor: slideData[activeSlide].color }">incele</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            slideData : [
                { title : 'Solgar Ucubes Landing Page', description:"Solgar'ın çocuklar için geliştirdiği Ucubes ürünün landing page tasarımına küplerin ve vitaminlerin hareketli olması fikrini uygulayarak kodladım. ",path:'/portfolio', color:"#7d227f",  image : './src/assets/images/project/ucubes.jpg'},
                { title : 'Hizmet & B2B Kategorisnde 1. liği ', description : 'Modern Medya şirketindeki son projem inborn.digital web sitesi 17. Altın Örümcek Ödüllerinde Hizmet & B2B Kategorisnde 1. elde etmiştir. ',path:'/awards', color:"#343434", image : './src/assets/images/award/altin-orumce-2020.jpg'},
                { title : 'Kişisel Web Sitem Yayında ', description : 'Terzi kendi söküğünü diklemeli diyerek yola çıktım ve ilk kişisel web sitemi yayına aldım ', path:'/portfolio', color:"#343434", image : './src/assets/images/project/sergenaslan.jpg'}
            ],
            activeSlide : 0,
            animationStatus : false,
            slideChange : true
        }
    },
    methods : {
        navigate : function(){
          this.$router.push(this.slideData[this.activeSlide].path);
        },
        activeSlideNumber : function(){
            let slide = "translateY("+this.activeSlide * -40 +"px)";
            return slide;
        },
        changeSlide : function(walk){
            this.animationStatus = true;
            setTimeout(() => {
                this.animationStatus = false;
            }, 500);
            if(walk > 0 ){
                if( this.activeSlide >= (this.slideData.length -1) ){
                     this.activeSlide = 0;
                }else{
                    this.activeSlide++;
                }
            }else{
                if(this.activeSlide == 0 ){
                    this.activeSlide = (this.slideData.length-1)
                }else{
                    this.activeSlide--;
                }
            }
        },
        wheelChange : function(e){
           if(e.deltaY < 0){
                if(this.slideChange){
                    this.slideChange = false
                    console.log('yukarı kaydı');
                    this.changeSlide(-1);
                    let that = this;
                    setTimeout(function(){
                        that.slideChange = true;
                    },1000);
                }
            }else{
                if(this.slideChange){
                    this.slideChange = false
                    console.log('aşşağa kaydırdı');
                    this.changeSlide(+1);
                    let that = this;
                    setTimeout(function(){
                        that.slideChange = true;
                    },1000)
                }
            }
        }
    }
}
</script>
<style scoped>
.homePage{
    position: relative;
    display: flex;
    width: 100%;
    height: 80vh;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.imageBackground{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .1;
}
.leftIcon,
.rightIcon{
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #525455;
    background-image: url('../icon/left_right_Icon.png');
    background-repeat: no-repeat;
    background-position: 12px center;
    border-radius: 50%;
}
.leftIcon{
    position: absolute;
    left: -25px;
    z-index: 2;
    transform: rotate(180deg);
}
.rightIcon{
    position: absolute;
    right: -25px;
    z-index: 2;
}
.sliderState{
    position: absolute;
    left: 15px;
    top:20px;
    width: 80px;
    height: 40px;
    overflow: hidden;
}
.slideNumber{
    min-height: 40px;
    width: 40px;
    font-size: 24px;
    text-align: center;
    display: inline-block;
    position: relative;
    transition: all .5s ease;
    
}
.slideNumber span{
    width: 100%;
    height: 40px;
    font-family: 'New Tegomin', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:30px;
}
.totalSlide{
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    font-family: 'New Tegomin', serif;
    height: 40px;
    font-size: 30px;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
}
.totalSlide::after{
    content: "/";
    position: absolute;
    left: -5px;
    top: -5px;
    font-size: 40px;
    font-weight: bold;
    font-family: 'New Tegomin', serif;
    width: 10px;
    height: 35px;
    display: inline-block;
}
.projectImage{
    width: 300px;
    height: 200px;
    object-fit: cover;
}
.projectImage img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.projectComment{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    position: relative;
    z-index: 2;
}
.projectComment h1{
    font-size: 26px;
    font-family: 'Playfair Display', serif;
}
.projectComment p{
    font-family: 'Kiwi Maru', serif;
    font-size: 18px;
}
.projectComment a{
    font-size: 14px;
    font-family: 'Playfair Display', serif;
    border-radius: 5px;
    letter-spacing: 2px;
    padding: 5px 0;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 2px;
    width: 100px;
    margin:0 auto;
}
.slideUp{
    animation: up .5s ease;
}
.slideDown{
    animation: down .5s ease;
}

@keyframes up {
  from {
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)
    }
  to {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
    }
}
@keyframes down {
  from {
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)
    }
  to {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
}

@media(max-width: 750px){ 
    .projectImage{
        margin-top: 50px;
    }
    .projectComment{
        width: 60%;
        height: 200px;
    }

} 
@media(max-width: 576px){  
    .projectComment{
        width: 90%;
    }
    .leftIcon, .rightIcon{
        width: 40px;
        height: 40px;
        margin-top: 40px;
        background-position: 7px center;
    }
    .leftIcon{
        left: -13px;
    }
    .rightIcon {
        right: -17px;
    }

}
</style>


