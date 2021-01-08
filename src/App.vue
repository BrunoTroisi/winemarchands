<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <Filter/>
      <message-component></message-component>
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <footer class="navbar-default navbar-bottom ">
      <Contact/>
      <Map/>
      <div class="container-fluid navbar-dark bg-dark">
            <p class="text-center nav-bar mb-0 p-2">© Wine Marchands 2020 | Todos los derechos reservados | Beber con moderación. Prohibida su venta a menores de 18 años.</p>
      </div>
    </footer>
</div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  import Contact from './components/Contact.vue';
  import Map from './components/Map.vue';
  import Filter from './components/Filtermenu.vue';
  export default {
    components: {
      appHeader: Header,
      MessageComponent,
      Contact,
      Map,
      Filter
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
