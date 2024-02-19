import { createRouter,createWebHistory } from "vue-router";
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesReg from './pages/coaches/CoachesReg.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import ReqRec from './pages/requests/ReqRec.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches/', component: CoachesList},
        {path: '/coaches/:id/',
        component: CoachesDetail,
        props:true,
        children: [
            {path:'contact',component: ContactCoach}
        ]},
        {path: '/register', component: CoachesReg},
        {path: '/requests', component: ReqRec},
        {path: '/:notFound(.*)', component: NotFound},
        {path: '/coachcontact', component: ContactCoach}
    ]
});

export default router;