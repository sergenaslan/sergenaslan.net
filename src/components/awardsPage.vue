<template>
    <div class="projects">
        
        <audio autoplay="true">
            <source src="http://sergenaslan.net/tomme-1/static/clapTwo.mp3" type="audio/mpeg">
        </audio>
        <app-awards v-for="awards in awardsData" :key="awards.name" :awards="awards"></app-awards>
            <canvas id="canvas" ></canvas>
    </div>
</template>
<script>
import awards from "./awards"
export default {
    data(){
        return{
            awardsData : [
                { name : "17. Altın Örümcek Hizmet&B2B kategori 1. 'liği", projectImage : "./src/assets/images/award/altin-orumce-2019.jpg",chromeLink : "https://www.altinorumcek.com/2019/sonuclar/", commet : "Türkiye’de web ve internet teknolojileri kullanılarak gerçekleştirilen en iyi projelerin belirlendiği. İk ve tek bağımsız web ödülleri organizasyonu olan Altın Örümcek Web Ödülleri’nde 2019 yılında yapılan 17. Altın Örümcek Ödülleri' nde 32 kategoride 120 ödül sahiplerini buldu. inborn.digital projesi ise Hizmet & B2B kategorinse 1.liğe laik görülmüştür."},
                { name : "Awwwards Honorable Mention", projectImage : "./src/assets/images/award/awwards.jpg",chromeLink : "https://www.awwwards.com/sites/inborn-progressive-agency", commet : "Dünyanın her yerinden sitelerin başuvuru yapabildiği ve sitelerin dizayn, kullanilabirilirlik, yaraticilik, icerik gibi kategorilerde Awwwards’a üye yazılımcılar, tasarımcılar, kullanıcıların siteleri puanlayıp en yüksek puanı alan sitenin 1.seçildiği uluslar arası prestijli bir yarışma platformudur.Bu platformda inborn.dijital sitesi Honorable Mention ödülene laik "},
                { name : "18. Altın Örümcek Hizmet&B2B kategori 3. 'lüğü", projectImage : "./src/assets/images/award/altin-orumce-2020.jpg",chromeLink : "https://www.altinorumcek.com/2020/sonuclar/", commet : "Türkiye’de web ve internet teknolojileri kullanılarak gerçekleştirilen en iyi projelerin belirlendiği. İk ve tek bağımsız web ödülleri organizasyonu olan Altın Örümcek Web Ödülleri’nde 2019 yılında yapılan 17. Altın Örümcek Ödülleri' nde 32 kategoride 120 ödül sahiplerini buldu. inborn.digital projesi ise Hizmet & B2B kategorinse 1.liğe laik görülmüştür."},
                { name : "CSSlight Featured of the Day", projectImage : "./src/assets/images/award/css-light.jpg",chromeLink : "https://www.csslight.com/website/36497/INBORN-PROGRESSIVE--Advertising-", commet : "Site kendini hakkımızda (about) sayfasında şu şekilde kendini tanıtmaktadır;CSS Light, tasarım dünyasında yeni yetenekleri ve eğilimleri sergilemek ve tanıtmak için harika bir platformdur. CSS Light temel olarak estetik, yaratıcılık, sunum ve kodlamada benzersiz becerilere sahip çok çeşitli web sitelerine odaklanır. Tasarımcıların yaratıcılıklarını ve zorluklarını değerlendirip dünya ile paylaşmaktan mutluluk duyuyoruz.CSS Light, dünyanın her yerinden web tasarımcıları tarafından sunulan web tasarım teşviki için bir vitrindir. Yüksek kaliteli ve profesyonel dokunuşlu web sitelerini sadece kabul ediyoruz.27 ağustos 2020 Tarihinde Yüksek kaliteli ve profesyonel dokunuşlu görüp dünya ile paylaşmaktan mutluluk duyduğu site inborn.progresive idi"},
                { name : "Horizon İnteractive Awards Best Of Category", projectImage : "./src/assets/images/award/horizoninteractiveawards.jpg",chromeLink : "https://www.horizoninteractiveawards.com/web-site-awards/2019/agency", commet : "Ulusarası interaktif medya yarışması olan ve yılda sadece 1 kez düzenlenen Horizon Interactive Awards 'a  2019 yılında 18 farklı ülkeden toplamda 800 başvuru yapılmıştır ve Best of Category, kategorsinde 1. kazanmıştır"},
            ],
            theCanvas : null,
            theSound : null
        }
    },
    components : {
        appAwards : awards
    },
     mounted(e) {
        this.soundEfect();
        this.confeti();
    },
    destroyed : function (){
        this.theCanvas.style.display = "block";
        this.theSound.style.display = "block";
        console.log('öldü aq');
    },
    methods : {
        soundEfect(e) {
            setTimeout(() => {
                this.theCanvas = document.querySelector('canvas');
                this.theSound = document.querySelector('audio');
                setTimeout(() => {
                    this.theCanvas.style.display = "none";
                    this.theSound.style.display = "none";
                },3500);
            },100);
        },
        confeti(){
            let W = window.innerWidth;
            let H = window.innerHeight;
            const canvas = document.getElementById("canvas");
            const context = canvas.getContext("2d");
            const maxConfettis = 150;
            const particles = [];

            const possibleColors = [
            "DodgerBlue",
            "OliveDrab",
            "Gold",
            "Pink",
            "SlateBlue",
            "LightBlue",
            "Gold",
            "Violet",
            "PaleGreen",
            "SteelBlue",
            "SandyBrown",
            "Chocolate",
            "Crimson"
            ];

            function randomFromTo(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
            }

            function confettiParticle() {
            this.x = Math.random() * W; // x
            this.y = Math.random() * H - H; // y
            this.r = randomFromTo(11, 33); // radius
            this.d = Math.random() * maxConfettis + 11;
            this.color =
                possibleColors[Math.floor(Math.random() * possibleColors.length)];
            this.tilt = Math.floor(Math.random() * 33) - 11;
            this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
            this.tiltAngle = 0;

            this.draw = function() {
                context.beginPath();
                context.lineWidth = this.r / 2;
                context.strokeStyle = this.color;
                context.moveTo(this.x + this.tilt + this.r / 3, this.y);
                context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
                return context.stroke();
            };
            }

            function Draw() {
            const results = [];

            // Magical recursive functional love
            requestAnimationFrame(Draw);

            context.clearRect(0, 0, W, window.innerHeight);

            for (var i = 0; i < maxConfettis; i++) {
                results.push(particles[i].draw());
            }

            let particle = {};
            let remainingFlakes = 0;
            for (var i = 0; i < maxConfettis; i++) {
                particle = particles[i];

                particle.tiltAngle += particle.tiltAngleIncremental;
                particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
                particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

                if (particle.y <= H) remainingFlakes++;

                // If a confetti has fluttered out of view,
                // bring it back to above the viewport and let if re-fall.
                if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
                particle.x = Math.random() * W;
                particle.y = -30;
                particle.tilt = Math.floor(Math.random() * 10) - 20;
                }
            }

            return results;
            }

            window.addEventListener(
            "resize",
            function() {
                W = window.innerWidth;
                H = window.innerHeight;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            },
            false
            );

            // Push new confetti objects to `particles[]`
            for (var i = 0; i < maxConfettis; i++) {
            particles.push(new confettiParticle());
            }

            // Initialize
            canvas.width = W;
            canvas.height = H;
            Draw();

        }
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
    overflow: hidden;
}
canvas{
     width: 100%;
    position: absolute;
    z-index: 99;
}
</style>
