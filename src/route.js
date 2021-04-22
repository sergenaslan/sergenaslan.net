import homePage from './components/homePage.vue'
import awardsPage from './components/awardsPage.vue'
import portfolio from './components/portfolio.vue'
import whoAmI from './components/whoAmI.vue'


export const routes = [
    {path : '/', component : homePage, name : 'Anasayfa'},
    {path : '/awardsPage', component : awardsPage , name : 'Ödüller'},
    {path : '/portfolio', component : portfolio , name : 'portfolio'},
    {path : '/whoAmI', component : whoAmI , name : 'Ben Kimim'}

]