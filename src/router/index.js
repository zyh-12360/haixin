import Vue from 'vue'
import Router from 'vue-router'
import zhuce from '@/components/zhuce'
import login from '@/components/login'
import forgetpwd from '@/components/forgetpwd'
import demo from '@/components/demo'
import dialog from '@/components/dialog.vue'
import main from '@/components/main.vue'
import VuejsDialog from "vuejs-dialog"
 
Vue.use(VuejsDialog)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/forgetpwd',
      name: 'forgetpwd',
      component: forgetpwd
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
