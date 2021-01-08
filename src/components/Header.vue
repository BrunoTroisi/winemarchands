<template>
  <div>
    <div class="fixed-top topnav-right my-2">
      <nav
        class="navbar rounded-left topnav-right d-flex content-justify-right navbar-expand-sm"
        role="navigation"
      >
        <div
          class="content-justify-right align-right"
          id="navbarTop"
          :class="{ show: isNavOpen }"
        >
          <ul class="nav navbar-nav">
            <router-link
              to="/inicio%20sesion"
              tag="li"
              v-if="!isLoggedIn"
              class="nav-item mr-1"
              active-class="active"
            >
              <a class="nav-link bg-light btn btn-outline-secondary">Iniciar sesión</a>
            </router-link>
            <li v-if="isLoggedIn" class="li-pointer nav-item mr-1">
              <a @click="logout" class="nav-link bg-light btn btn-outline-secondary">Cerrar sesión</a>
            </li>
            <li class="nav-item mr-1">
              <router-link
                to="/carrito"
                class="nav-link btn btn-opacity"
                tag="button"
              ><!--<em class="fas fa-shopping-cart"></em>--><img class="cava" src="@/assets/fridge.svg"/>
                Mi cava
                <span class="badge badge-light"
                  >{{ numItems }} ($ {{ cartValue }})</span
                >
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="justify-content-center text-center align-items-center">
      <router-link to="/" class="navbar-brand mr-auto"
        ><img src="../assets/logo.png" class="logo" alt="..."
      /></router-link>
    </div>
    <div
      class="opacity justify-content-center text-center align-items-center scrollmenu"
    >
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'search' }"
      >
      <em class="fas fa-search"></em>
      </router-link>
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: category} }"
        v-for="category of categories"
        :key="category"
      >
        {{category}}
      </router-link>
    </div>
    <Filtermenu/>
    <div class="fixed-bottom topnav-right my-2">
              <router-link
                v-if="$route.path != '/'"
                to="/"
                class="nav-link btn btn-opacity"
                tag="button"
              ><em class="fas fa-home"></em>
              </router-link>
    </div>
  </div>
</template>

<script>
import Filtermenu from "./Filtermenu.vue"
import { mapActions, mapGetters } from "vuex";
const cate = [
  'tintos',
  'blancos',
  'rosados',
  'espumosos',
  'otros vinos',
  'importados',
  'magnum',
  'otras bebidas',
  'combos',
  'aceites',
]
export default {
  components: {
      Filtermenu
  },
  data() {
    return {
      categories: cate, 
      isNavOpen: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "cartValue", "currentUser", "cartItemList"]),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
  },
  methods: {
    ...mapActions(["logout"]),
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style scoped lange="sass">
.logo {
  max-width: 20%;
}

.navbar-btn a {
  background-color: black;
  color: white;
}

.li-pointer {
  cursor: pointer;
}

.li-pointer:hover {
  cursor: pointer;
}

div.scrollmenu {
  font-size:1.4rem;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  color: rgb(225, 225, 225);
}

.sticky {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
}

 .opacity {
    background-color: #990000;
  }

   .btn-opacity {
    background-color: #990000;
    color: white;
  }

  .btn-opacity:hover {
  background-color: #640000;
}

.topnav-right {
  float: right;
}

.btn{font-size: 15px;}

.cava{
filter: brightness(0) invert(1);
  width: 20px;
  height: 20px;
}
</style>
