<template>
  <div>
    <Carousel />
    <div class="container-fluid justify-content-center text-center align-items-center">
        <div class="row">
            <div class="justify-content-center col p-5">
            <img src="@/assets/banner1.png"/>  
            </div>
            <div class=" justify-content-center col p-5"> 
            <img src="@/assets/banner1.png"/>
            </div>
            <div class="justify-content-center col p-5"> 
            <img src="@/assets/banner1.png"/>
            </div>
        </div>
    </div>
    <div class="container p-5"><h1>DESTACADOS</h1><hr class="solid"></div>
    <div class="container">
      <div class="row">
    <app-product-item v-for="prod in filtrarDestacados()" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
    </div>
    <div class="container p-5"><hr class="solid"></div>
    </div>
    <div class="justify-content-center text-center align-items-center"><img src="@/assets/banner2.jpg" style="width:100%;height:auto"/></div>
    <div class="container p-5"><h1>NOVEDADES</h1><hr class="solid"></div>
    <div class="container">
    <div class="row">
      <app-product-item
        class="nav-item nav-link "
        v-for="prod in filtrarNovedades()"
        :item="prod" :key="prod.id" :displayList="displayList"
      >
      </app-product-item>
  </div>
  <div class="container p-5"><hr class="solid"></div>
        <div class="row justify-content-center text-center align-items-center">
            <div class="justify-content-center col p-5">
            <img src="@/assets/banner1.png"/>  
            </div>
            <div class=" justify-content-center col p-5"> 
            <img src="@/assets/banner1.png"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Carousel from "../components/Carousel.vue";
import ProductItem from '@/components/product/ProductItem.vue';

export default {
  data() {
    return {
      find: this.$route.params.category,
      loaderColor: "#990000",
      loaderSize: "50px",
      displayList: false
    }
  },
  computed: {
    ...mapGetters(['products', 'isProductLoading']),
  },
  components: {
    Carousel,
    appProductItem: ProductItem
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    },
    filtrarNovedades(){ //Filtra los últimos 3 productos ingresados
      return this.products.slice((this.products.length - 3), this.products.length );
    },
    filtrarDestacados(){ //Filtra todos los productos destacados
      return this.products.filter(p => p.category.includes('destacados'));
    }
  }
}
</script>

<style scoped>
hr.solid {
  border-top: 3px solid #bbb;
}
</style>