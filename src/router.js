import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'home'
    },
    {
      path:'/home',
      component: ()=>import('./views/Home')
    },
    {
      path:'/learn',
      component: ()=>import('./views/Learn')
    },
    {
      path:'/student',
      component: ()=>import('./views/Student')
    },
    {
      path:'/about',
      component: ()=>import('./views/About')
    },
    {
      path:'/activity',
      component:()=>import(/*webpackChunkName:'academic' */'./views/Activity'),
    //   redirect:'/activity/academic',
    //   redirect:{name:'academic'},
      redirect(to){
        return {
            name:'academic'
        }
      },
      children:[
        //  {
        //      path:'',
        //      component:()=>import('./views/Academic')
        //  },
          {
              path:'academic',
              name:'academic',
              component:()=>import(/*webpackChunkName:'academic' */'./views/Academic')
          },
          {
            path:'personal',
            name:'personal',
            component:()=>import('./views/Personal')
        },
        {
            path:'download',
            name:'download',
            component:()=>import('./views/Download')
        },
        
      ],
    },
    {
        path:'/course/:id',
        component:()=>import('./views/About')
    }
  ]
  
  
export default new VueRouter({
    mode:"history",
    routes,
  })
  