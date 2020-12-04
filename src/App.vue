<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <Carousel/>
      <message-component></message-component>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view :key="$route.fullPath"></router-view> 
              <!-- esa key hace que al navegar dentro de la misma ruta, se rerenderice la vista -->
              <!-- lo usamos para las categorias -->
            </div>
          </div>
      </div>
      <Contact/>
      <Map/>
    </main>
    <footer class="navbar-default navbar-bottom navbar-dark bg-dark">
      <div class="container-fluid">
            <p class="text-center nav-bar mb-0">© Wine Marchands, 2020</p>
      </div>
    </footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  import Carousel from './components/Carousel.vue';
  import Contact from './components/Contact.vue';
  import Map from './components/Map.vue';
  export default {
    components: {
      appHeader: Header,
      MessageComponent,
      Carousel,
      Contact,
      Map
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  body, .sticky-footer-wrapper {
    font-family: 'Bebas Neue', cursive;
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }

  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
