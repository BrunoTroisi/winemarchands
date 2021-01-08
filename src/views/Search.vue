<template>
    <div class="container">
    <div class="input-group p-5">
    <input type="text" v-model="search" class="form-control" placeholder="Búsqueda personalizada"> 
    <div class="input-group-append">
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: {search} } }"
      >
      <em class="fas fa-search"></em>
      </router-link>
    </div>
  </div>
      <div class="row">
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    appProductItem: ProductItem
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    },
    filtrarNovedades(){
      return this.products.filter(p => p.category.includes('novedades'));
    },
    filtrarDestacados(){
      return this.products.filter(p => p.category.includes('destacados'));
    }
  }
}
</script>

<style scoped>
.main {
    width: 50%;
    margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #000;
}
</style>