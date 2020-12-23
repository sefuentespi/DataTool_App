import vueRouter from 'vue-router'
import User from './components/User'
import getData from './components/getData'
import updateData from './components/updateData'
import createData from './components/createData'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: 
    [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/clients/:id',
            name: "getData",
            component: getData
        },
        {   
            path: '/actualizar/:id',
            name: 'updateData',
            component: updateData    
        },
        {   
            path: '/crear/:id',
            name: 'createData',
            component: createData    
        },
    ]
    })
export default router