<template>
<div class="mb-3 col-sm-6 col-md-4 item" :class="{'list-group-item': displayList}">
  <div class="thumbnail card">
    <div class="img-event intrinsic">
      <img :src="item.thumbnail_url" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
    </div>
    <div class="card-body">
      <router-link :to="'/producto/' + item.id" tag="h5" class="card-title"><a>{{ item.title }}</a></router-link>
      <h6 v-if="item.quantity === -1" class="card-subtitle mb-2 remain"> Próximamente</h6>
      <h6 v-if="item.quantity === 0" class="card-subtitle mb-2 remain"> Sin stock</h6>
      <h6 v-if="item.quantity < 1000 && item.quantity > 0" class="card-subtitle mb-2 remain"> Menos de {{ item.quantity }} en stock</h6>

      <p class="card-text truncate">{{ item.description | shortDescription}}</p>

      <div class="row">
        <p class="col-6 lead">${{ item.price }}</p>
        <p class="col-6">
          <button class="btn opacity pull-right" :disabled="item.quantity <= 0" @click="addItem">
            <!--<em class="fas fa-shopping-cart"></em>-->
        <img class="cava" src="@/assets/fridge.svg"> A la cava
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['item', 'displayList'],
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
  height: 100%;
}

.card-text {
  font-size: 1rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

 .opacity {
    background-color: #990000;
    color: white;
  }

  .opacity:hover {
  background-color: #640000;
}

.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}

.card-title{
  font-size: 15px;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item:after {
  clear: both;
}

.cava{
filter: brightness(0) invert(1);
  width: 20px;
  height: 20px;
}
</style>
