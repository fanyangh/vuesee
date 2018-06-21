import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import visitor from '@/views/table/visitor'
import news from '@/views/table/news'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'main',
      component: Layout,
      children:[
        {
          
            path: 'visitor',
            name: '访问者',
            component: () =>
              import('@/views/table/visitor'),
            meta: {
              title: '访问者'
            }
          },
          {
            path: 'news',
            name: '新闻',
            component: () =>
              import('@/views/table/news'),
            meta: {
              title: '新闻列表'
            }
          },
          {
            path: 'create',
            name: '新闻',
            component: () =>
              import('@/views/table/create'),
            meta: {
              title: '上传'
            }
          }
        

      ]
    }
    
      
  ]
})
