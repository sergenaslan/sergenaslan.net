<template>
    <div class="projects">
        <!-- project classındaki hover animasyonu https://codepen.io/ dan copy/paste ile alınmıştır -->
        <div class="project" v-for="awards in awardsData" :key="awards.name">
            <div class="projectImage">
                <img :src="awards.projectImage" class="imgRespon" alt="">
            </div>
            <div class="projectTitle">
                {{awards.name}}
            </div>
            <div class="projectComment">
               {{awards.commet}}
            </div>
            <div class="openLink">
                <a :href="awards.chromeLink">
                    <svg height="20" width="20" viewBox="0 30 185 110"><defs>
                    <linearGradient y2="44.354" x2="81.837" y1="75.021" x1="29.337" gradientUnits="userSpaceOnUse" id="f" xlink:href="#a"/>
                    <linearGradient y2="130.33" x2="52.538" y1="164.5" x1="110.87" gradientUnits="userSpaceOnUse" id="g" xlink:href="#b"/>
                    <linearGradient y2="114.13" x2="136.55" y1="49.804" x1="121.86" gradientUnits="userSpaceOnUse" id="j" xlink:href="#c"/>
                    <linearGradient y2="114.13" x2="136.55" y1="49.804" x1="121.86" gradientUnits="userSpaceOnUse" id="k" xlink:href="#c"/>
                    <linearGradient y2="44.354" x2="81.837" y1="75.021" x1="29.337" gradientUnits="userSpaceOnUse" id="n" xlink:href="#a"/>
                    <linearGradient y2="130.33" x2="52.538" y1="164.5" x1="110.87" gradientUnits="userSpaceOnUse" id="r" xlink:href="#b"/>
                    <circle r="88" cx="96" cy="96" id="d"/></defs><clipPath id="e"><use height="100%" xlink:href="#d" overflow="visible" width="100%"/>
                    </clipPath><g clip-path="url(#e)" transform="translate(-8 -8)"><path fill="#db4437" d="M21.97 8v108h39.39L96 56h88V8z"/>
                    <linearGradient x1="29.337" x2="81.837" y1="75.021" gradientUnits="userSpaceOnUse" y2="44.354" id="a">
                    <stop offset="0" stop-opacity=".6" stop-color="#A52714"/><stop offset=".66" stop-opacity="0" stop-color="#A52714"/>
                    </linearGradient><path fill="url(#f)" d="M21.97 8v108h39.39L96 56h88V8z"/></g><path fill="#3e2723" transform="translate(-8 -8)" d="M62.31 115.65L22.48 47.34l-.58 1 39.54 67.8z" fill-opacity=".15" clip-path="url(#e)"/><g clip-path="url(#e)" transform="translate(-8 -8)"><path fill="#0f9d58" d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z"/><linearGradient x1="110.87" x2="52.538" y1="164.5" gradientUnits="userSpaceOnUse" y2="130.33" id="b"><stop offset="0" stop-opacity=".4" stop-color="#055524"/><stop offset=".33" stop-opacity="0" stop-color="#055524"/></linearGradient><path fill="url(#g)" d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z"/></g><path fill="#263238" transform="translate(-8 -8)" d="M129.84 117.33l-.83-.48L90.62 184h1.15l38.1-66.64z" fill-opacity=".15" clip-path="url(#e)"/><g clip-path="url(#e)" transform="translate(-8 -8)"><defs><path d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z" id="h"/></defs><clipPath id="i"><use height="100%" xlink:href="#h" overflow="visible" width="100%"/></clipPath><g clip-path="url(#i)"><path fill="#ffcd40" d="M96 56l34.65 60-38.88 68H184V56z"/><linearGradient x1="121.86" x2="136.55" y1="49.804" gradientUnits="userSpaceOnUse" y2="114.13" id="c"><stop offset="0" stop-opacity=".3" stop-color="#EA6100"/><stop offset=".66" stop-opacity="0" stop-color="#EA6100"/></linearGradient><path fill="url(#j)" d="M96 56l34.65 60-38.88 68H184V56z"/></g></g><g clip-path="url(#e)" transform="translate(-8 -8)"><path fill="#ffcd40" d="M96 56l34.65 60-38.88 68H184V56z"/><path fill="url(#k)" d="M96 56l34.65 60-38.88 68H184V56z"/></g><g clip-path="url(#e)" transform="translate(-8 -8)"><defs><path d="M96 56l34.65 60-38.88 68H184V56z" id="l"/></defs><clipPath id="m"><use height="100%" xlink:href="#l" overflow="visible" width="100%"/></clipPath><g clip-path="url(#m)"><path fill="#db4437" d="M21.97 8v108h39.39L96 56h88V8z"/><path fill="url(#n)" d="M21.97 8v108h39.39L96 56h88V8z"/></g></g><radialGradient r="84.078" gradientTransform="translate(-576)" cx="668.18" cy="55.948" gradientUnits="userSpaceOnUse" id="o"><stop offset="0" stop-opacity=".2" stop-color="#3E2723"/><stop offset="1" stop-opacity="0" stop-color="#3E2723"/></radialGradient><path fill="url(#o)" transform="translate(-8 -8)" d="M96 56v20.95L174.4 56z" clip-path="url(#e)"/><g clip-path="url(#e)" transform="translate(-8 -8)"><defs><path d="M21.97 8v40.34L61.36 116 96 56h88V8z" id="p"/></defs><clipPath id="q"><use height="100%" xlink:href="#p" overflow="visible" width="100%"/></clipPath><g clip-path="url(#q)"><path fill="#0f9d58" d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z"/><path fill="url(#r)" d="M8 184h83.77l38.88-38.88V116H61.36L8 24.48z"/></g></g><radialGradient r="78.044" gradientTransform="translate(-576)" cx="597.88" cy="48.52" gradientUnits="userSpaceOnUse" id="s"><stop offset="0" stop-opacity=".2" stop-color="#3E2723"/><stop offset="1" stop-opacity="0" stop-color="#3E2723"/></radialGradient><path fill="url(#s)" transform="translate(-8 -8)" d="M21.97 48.45l57.25 57.24L61.36 116z" clip-path="url(#e)"/><radialGradient r="87.87" gradientTransform="translate(-576)" cx="671.84" cy="96.138" gradientUnits="userSpaceOnUse" id="t"><stop offset="0" stop-opacity=".2" stop-color="#263238"/><stop offset="1" stop-opacity="0" stop-color="#263238"/></radialGradient><path fill="url(#t)" transform="translate(-8 -8)" d="M91.83 183.89l20.96-78.2L130.65 116z" clip-path="url(#e)"/><g clip-path="url(#e)" transform="translate(-8 -8)"><circle fill="#f1f1f1" r="40" cx="96" cy="96"/><circle fill="#4285f4" r="32" cx="96" cy="96"/></g><g clip-path="url(#e)" transform="translate(-8 -8)"><path fill="#3e2723" d="M96 55c-22.09 0-40 17.91-40 40v1c0-22.09 17.91-40 40-40h88v-1z" fill-opacity=".2"/><path fill="#fff" d="M130.6 116c-6.92 11.94-19.81 20-34.6 20-14.8 0-27.69-8.06-34.61-20h-.04L8 24.48v1L61.36 117h.04c6.92 11.94 19.81 20 34.61 20 14.79 0 27.68-8.05 34.6-20h.05v-1z" fill-opacity=".1"/><path fill="#3e2723" d="M97 56c-.17 0-.33.02-.5.03C118.36 56.3 136 74.08 136 96c0 21.92-17.64 39.7-39.5 39.97.17 0 .33.03.5.03 22.09 0 40-17.91 40-40s-17.91-40-40-40z" opacity=".1"/><path fill="#fff" d="M131 117.33c3.4-5.88 5.37-12.68 5.37-19.96 0-4.22-.66-8.28-1.87-12.09.95 3.42 1.5 7.01 1.5 10.73 0 7.28-1.97 14.08-5.37 19.96l.02.04-38.88 68h1.16l38.09-66.64z" fill-opacity=".2"/></g><g clip-path="url(#e)" transform="translate(-8 -8)"><path fill="#fff" d="M96 9c48.43 0 87.72 39.13 87.99 87.5 0-.17.01-.33.01-.5 0-48.6-39.4-88-88-88S8 47.4 8 96c0 .17.01.33.01.5C8.28 48.13 47.57 9 96 9z" fill-opacity=".2"/><path fill="#3e2723" d="M96 183c48.43 0 87.72-39.13 87.99-87.5 0 .17.01.33.01.5 0 48.6-39.4 88-88 88S8 144.6 8 96c0-.17.01-.33.01-.5C8.28 143.87 47.57 183 96 183z" fill-opacity=".15"/></g><radialGradient r="176.75" gradientTransform="translate(-8 -8)" cx="34.286" cy="32.014" gradientUnits="userSpaceOnUse" id="u"><stop offset="0" stop-opacity=".1" stop-color="#fff"/><stop offset="1" stop-opacity="0" stop-color="#fff"/></radialGradient>
                    <circle fill="url(#u)" r="88" cx="88" cy="88"/></svg>
                    chrome' da aç 
                </a>
            </div>
        </div>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
            awardsData : [
                { name : "17. Altın Örümcek Hizmet&B2B kategori 1. 'liği", projectImage : "./src/assets/images/award/altin-orumce-2019.jpg",chromeLink : "https://www.altinorumcek.com/2019/sonuclar/", commet : "Türkiye’de web ve internet teknolojileri kullanılarak gerçekleştirilen en iyi projelerin belirlendiği. İk ve tek bağımsız web ödülleri organizasyonu olan Altın Örümcek Web Ödülleri’nde 2019 yılında yapılan 17. Altın Örümcek Ödülleri' nde 32 kategoride 120 ödül sahiplerini buldu. inborn.digital projesi ise Hizmet & B2B kategorinse 1.liğe laik görülmüştür."},
                { name : "Awwwards Honorable Mention", projectImage : "./src/assets/images/award/awwards.jpg",chromeLink : "https://www.awwwards.com/sites/inborn-progressive-agency", commet : "Dünyanın her yerinden sitelerin başuvuru yapabildiği ve sitelerin dizayn, kullanilabirilirlik, yaraticilik, icerik gibi kategorilerde Awwwards’a üye yazılımcılar, tasarımcılar, kullanıcıların siteleri puanlayıp en yüksek puanı alan sitenin 1.seçildiği uluslar arası prestijli bir yarışma platformudur.Bu platformda inborn.dijital sitesi Honorable Mention ödülene laik "},
                { name : "18. Altın Örümcek Hizmet&B2B kategori 3. 'lüğü", projectImage : "./src/assets/images/award/altin-orumce-2020.jpg",chromeLink : "https://www.altinorumcek.com/2020/sonuclar/", commet : "Türkiye’de web ve internet teknolojileri kullanılarak gerçekleştirilen en iyi projelerin belirlendiği. İk ve tek bağımsız web ödülleri organizasyonu olan Altın Örümcek Web Ödülleri’nde 2019 yılında yapılan 17. Altın Örümcek Ödülleri' nde 32 kategoride 120 ödül sahiplerini buldu. inborn.digital projesi ise Hizmet & B2B kategorinse 1.liğe laik görülmüştür."},
                { name : "CSSlight Featured of the Day", projectImage : "./src/assets/images/award/css-light.jpg",chromeLink : "https://www.csslight.com/website/36497/INBORN-PROGRESSIVE--Advertising-", commet : "Site kendini hakkımızda (about) sayfasında şu şekilde kendini tanıtmaktadır;CSS Light, tasarım dünyasında yeni yetenekleri ve eğilimleri sergilemek ve tanıtmak için harika bir platformdur. CSS Light temel olarak estetik, yaratıcılık, sunum ve kodlamada benzersiz becerilere sahip çok çeşitli web sitelerine odaklanır. Tasarımcıların yaratıcılıklarını ve zorluklarını değerlendirip dünya ile paylaşmaktan mutluluk duyuyoruz.CSS Light, dünyanın her yerinden web tasarımcıları tarafından sunulan web tasarım teşviki için bir vitrindir. Yüksek kaliteli ve profesyonel dokunuşlu web sitelerini sadece kabul ediyoruz.27 ağustos 2020 Tarihinde Yüksek kaliteli ve profesyonel dokunuşlu görüp dünya ile paylaşmaktan mutluluk duyduğu site inborn.progresive idi"},
                { name : "Horizon İnteractive Awards Best Of Category", projectImage : "./src/assets/images/award/horizoninteractiveawards.jpg",chromeLink : "https://www.horizoninteractiveawards.com/web-site-awards/2019/agency", commet : "Ulusarası interaktif medya yarışması olan ve yılda sadece 1 kez düzenlenen Horizon Interactive Awards 'a  2019 yılında 18 farklı ülkeden toplamda 800 başvuru yapılmıştır ve Best of Category, kategorsinde 1. kazanmıştır"},
                
            ]
        }
    },
    methods : {

    }
}
</script>
<style scoped>
.imgRespon{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.dipslayNone{
    display: none;
}
.projects{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
/*     border:1px dashed white; */
}
h1{
    width: 100%;
    margin-bottom:25px;
}
.project{
    position: relative;
    width: 30%;
    min-height: 250px;
    margin-bottom: 80px;
    border-radius: 10px;
    transition: all .5s ease-in-out;
    color: #b9b9b9;
    text-align: right;

}
.project::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: -4rem;
    left: 0;
    margin: -1rem;
    border-radius: 10px;
    overflow: hidden;
    z-index: -1;
    background: #1f2229;
    -webkit-clip-path: inset(2rem 0 2rem 2rem round 10px);
    clip-path: inset(2rem 0 2rem 2rem round 10px);
    contain: strict;
    -webkit-transition: -webkit-clip-path 0.3s ease 0.1s;
    transition: -webkit-clip-path 0.3s ease 0.1s;
    transition: clip-path 0.3s ease 0.1s;
    transition: clip-path 0.3s ease 0.1s, -webkit-clip-path 0.3s ease 0.1s;
}
.project:hover::after{
    -webkit-clip-path: inset(0 0 0 0 round 10px);
    clip-path: inset(0 0 0 0 round 10px);
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
.projectImage{
    position: relative;
    width: 100%;
    min-height: 10%;
/*     border:1px solid red; */
    border-radius: 10px;
    overflow: hidden;
}
.projectImage img{
    object-fit: contain;
}
.projectTitle{
    font-family: 'Kiwi Maru', serif;
    /* border:1px solid red; */
    margin-top: 8px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #b9b9b9;
    font-size: 18px;
}
.projectComment{
    color: #b9b9b9;
    font-size: 16px;
    padding-left: 15px;
/*     border:1px solid red; */
    line-height: 25px;
    margin:15px 0;
}
.openLink{
    width: 100%;
    min-height: 20px;
    position: relative;
    top: 10px;
}
.openLink a svg{
    position: relative;
    top: 6px;
}
.openLink a{
    font-family: 'Kiwi Maru', serif;
    font-size: 12px;
    border:1px solid white;
    padding:4px 6px;
    border-radius: 5px;
}
.openLink a:first-child{
    margin-right: 10px;
}
@media(max-width: 1200px){ 


}
@media(max-width: 850px){ 


} 
@media(max-width: 576px){  


}
</style>
