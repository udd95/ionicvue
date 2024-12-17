import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Main from '../views/Main.vue';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'  // '/' 경로는 '/main'으로 리다이렉트합니다.
  },
  {
    path: '/main',  // '/main' 경로로 접근하면
    component: Main  // Main 컴포넌트를 보여줍니다.
  },
  {
    path: '/tabs/',  // '/tabs/' 경로는 TabsPage 컴포넌트를 렌더링합니다.
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'  // 기본적으로 '/tabs/tab1'로 리다이렉트
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
