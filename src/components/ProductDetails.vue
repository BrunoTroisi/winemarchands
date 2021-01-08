<template>
<div class="container">
  <div class="col-md-12">
    <div v-if="isProductLoading" class="text-center">
      <grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize" class="d-inline-block" />
    </div>
    <div v-else class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="intrinsic">
            <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt="">
          </div>
        </div>
      </div>

      <div class="caption-full">
        <h4 class="pull-right">$ {{ item.price }}</h4>
        <h4> {{ item.title }}</h4>
        <p> {{ item.description }} </p>
      </div>
      <div class="ratings">
      <span v-if="item.quantity === -1" class="card-subtitle mb-2 remain"> Próximamente</span>
      <span v-if="item.quantity === 0" class="card-subtitle mb-2 remain"> Sin stock</span>
      <span v-if="item.quantity < 1000 && item.quantity > 0" class="card-subtitle mb-2 remain"> Menos de {{ item.quantity }} en stock</span>
        <p class="pull-right">
          <button @click="addItem" :disabled="item.quantity <= 0" class="btn btn-opacity">
                            <!--<em class="fas fa-shopping-cart"></em>--><img class="cava" src="@/assets/fridge.svg"/> A la cava
                        </button>
        </p>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';
import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
  components: {
    GridLoader
  },
  data() {
    return {
      loaderColor: "#ba0000",
      loaderSize: "50px",
    }
  },
  computed: {
    ...mapGetters(['isProductLoading', 'products']),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter((item) => {
          return item.id == id
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      // console.log(order);
      this.updateCart(order);
    }
  }
}
</script>

<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

   .btn-opacity {
    background-color: #990000;
    color: white;
  }

  .btn-opacity:hover {
  background-color: #640000;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
.cava{
filter: brightness(0) invert(1);
  width: 20px;
  height: 20px;
}
</style>
