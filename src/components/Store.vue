<template>
<div class="container" :class="{loadingItem: isProductLoading}">
  <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
  <div class="row justify-content-center text-center" v-if="isProductLoading">
    <grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
  </div>
  <div v-else class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn btn-outline-dark" @click.prevent="changeDisplay(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn btn-outline-dark" @click.prevent="changeDisplay(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
    </div>
  </div>
  <div class="row" v-if="!isProductLoading">
    <div v-if="filteredProducts().length === 0" class="container p-5"><h4>Aún no hay productos que coincidan con {{find}}</h4><hr class="solid"></div>
    <app-product-item class="" v-for="prod in filteredProducts()" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
  </div>
            </div>
          </div>
      </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './product/ProductItem.vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';

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
    appProductItem: ProductItem,
    GridLoader
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    },
    filteredProducts(){
      return this.products.filter(p => !this.find || !p.category || p.category.includes(this.find) || p.title.includes(this.find) || p.description.includes(this.find));
    }
  }
}
</script>

<style>
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}
</style>
