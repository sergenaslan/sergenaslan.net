import homePage from './components/homePage.vue'
import awards from './components/awards.vue'
import portfolio from './components/portfolio.vue'
import whoAmI from './components/whoAmI.vue'


export const routes = [
    {path : '/', component : homePage, name : 'Anasayfa'},
    {path : '/awards', component : awards , name : 'Ödüller'},
    {path : '/portfolio', component : portfolio , name : 'portfolio'},
    {path : '/whoAmI', component : whoAmI , name : 'Ben Kimim'}

]