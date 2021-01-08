import Search from './views/Search.vue';
import Home from './views/Home.vue';
import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export const routes = [
   {path: '/', component: Home, name: 'home'}
   ,{path: '/busqueda', component: Search, name: 'search'}
   ,{path: '/producto/:id', component: ProductDetails, name: 'product'}
   ,{path: '/carrito', component: ShoppingCart, name: 'shoppingcart'}
   ,{path: '/inicio%20sesion', component: Login, name: 'login', onlyGuest: true }
   ,{path: '/registro', component: Register, name: 'register', onlyGuest: true}
   ,{path: '/tienda', component: Store, name: 'mainpage'}
   ,{path: '/tienda/:category', component: Store, name: 'category'}
   ,{path: '*', redirect: '/' }
];