import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './MainLayout.vue'
import App from './App.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: App },
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(MainLayout).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
