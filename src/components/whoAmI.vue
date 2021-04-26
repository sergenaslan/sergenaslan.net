<template>
    <div class="whoAmI">
        <div class="ımageAnimation">
            <div class="cells">    
                <div class="cell-grid" >
                    <div class="cell" style="--i:0">
                        <div class="cell-inner"></div>
                    </div>
                    <div class="cell" style="--i:1">
                        <div class="cell-inner"></div>
                    </div>
                    <div class="cell" style="--i:2">
                        <div class="cell-inner"></div>
                    </div>
                    <div class="cell" style="--i:3">
                        <div class="cell-inner"></div>
                    </div>
                    <div class="cell" style="--i:4">
                        <div class="cell-inner"></div>
                    </div>
                    <div class="cell" style="--i:5">
                        <div class="cell-inner"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="presentationText">
            Merhaba, ben Sergen liseye geçiş sınavındaki puanım bilgisayar programcılığına
            yetmesi sonucu başlayan macera ile bu günlere geldim. Bu zamana kadar 2 reklam ajansı, 
            1 Startup ve freenlace çalışmış bulunmaktayım.Son iş yerim olan Modern Medya Group şirketinde
            kodladığım inborn.digital sitesi ulusal ve uluslar arası yarışmalarda 5 <router-link  to="/awards" tag="a" exact> ödüle </router-link>  laik görüldü. 
            interaksiyonlu ve animasyonlu web siteleri kodlamayı seviyorum. Bu konuda araştırmayı, kendimi geliştirmeye ve ödüller almaya devam etmek isteyen birisiyim.
            <br><br>Sosyal Medya Hesaplarım 
            <div class="socialInfo">
                <a href="https://github.com/sergenaslan" target="_blank" title="sergenaslan">Githup</a>
                <a href="https://www.linkssssssssssssedin.com/in/sergen-aslan-97a517136" target="_blank" title="sergenaslan">linkending</a>
                <a href="mailto:sergenaslan09@gmail.com" target="_blank" title="sergenaslan09@gmail.com">Gmail</a>
                <a href="https://t.me/sergenaslan" target="_blank" title="sergenaslan">Telegram</a>
                <a href="https://twitter.com/sergenaslan0" target="_blank" title="sergenaslan0">Twitter</a>
                <!-- Telefon Numaram : 05417336078 -->
            </div>
        </div>
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
.socialInfo{
    margin-top: 20px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
}
.presentationText .socialInfo a{
    color:white;
    text-decoration: none;
    font-weight: normal;
}
.whoAmI{
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.presentation{
    width: 100%;
}
.ımageAnimation{
    width: 450px;
    display: inline-block;
    height: 300px;
}
.cells{
    height: 100%;
    position: relative;
    overflow: hidden;
    border:1px solid white;
    visibility: hidden;
    background-size: cover; 
    background-image:url('../assets/images/project/whoAmI.jpg');
}
.cell-grid{
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: repeat( 1, 1fr ) / repeat( 5, 1fr );
}
.cell{
    transition: transform .8s cubic-bezier(0.63, 0.01, 0.07, 0.99), .8s linear;
    transition-delay: calc( 0.2s * var(--i) );
    position: relative;
    overflow: hidden;
    height: 100%;
    background:inherit;
}
.cell:nth-of-type(3){
    clip-path: polygon(0% 0%, 100% 00%, 100% 100%, 0% 100%);
    animation: three 1.5s ease-in-out;
}
.cell:nth-of-type(1),
.cell:nth-of-type(5){
    clip-path: polygon(0% 10%, 100% 10%, 100% 90%, 0% 90%);
    animation: event 1.5s ease-in-out;
}
.cell:nth-of-type(2),
.cell:nth-of-type(4){
    clip-path: polygon(0% 5%, 100% 5%, 100% 95%, 0% 95%);
    animation: old 1.5s ease-in-out;
}

@keyframes event {
  from {
        clip-path: polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%);
    }
  to {
        clip-path: polygon(0% 10%, 100% 10%, 100% 90%, 0% 90%);
    }
}

@keyframes old {
  from {
        clip-path: polygon(0% 5%, 100% 5%, 100% 0%, 0% 0%);
    }
  to {
        clip-path: polygon(0% 5%, 100% 5%, 100% 95%, 0% 95%);
    }
}
@keyframes three{
    from{
        clip-path:  polygon(0% 40%, 100% 40%, 100% 40%, 0% 40%);
    }
    to{
        clip-path: polygon(0% 0%, 100% 00%, 100% 100%, 0% 100%);
    }
}
.cell-inner{
    background:inherit;
    position: absolute;
    height: 100%;
    visibility: visible;
    width: calc(100% * 5);
    left: calc(-100% * var(--i));
    border-radius: 5px;
    overflow: hidden;
}

.presentationText{
    display: inline-block;
    width: calc( 90% - 450px );
    min-height: 150px;
    font-size: 18px;
    line-height: 21px;
}

.presentationText a{
    text-decoration: underline;
    font-weight: bold;
}
@media(max-width: 1000px){ 
    .ımageAnimation{
        width: 55%;
    }
    .presentationText{
        width:  45%;
        padding:0 10px;
    }

}
@media(max-width: 850px){ 
    .socialInfo{
        margin-top: 10px;
    }
    .ımageAnimation{
        width: 450px;
    }
    .presentationText{
        width:  85%;
    }

} 
@media(max-width: 576px){  
    .ımageAnimation{
        width: 450px;
        height: 250px;
    }
    .presentationText{
        margin-top: 20px;
        width:  100%;
        font-size: 16px;
        padding:0 10px;
    }
    .socialInfo{
        margin-top: 10px;
         height: 30px;
    }


}
</style>