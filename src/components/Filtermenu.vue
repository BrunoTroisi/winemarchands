<template>
<div>
        <div
      class="opacity justify-content-center text-center align-items-center scrollmenu"
      v-if="$route.path === '/tienda/tintos' || $route.path === '/tienda/malbec' || $route.path === '/tienda/cabernet%20suavignon' || $route.path === '/tienda/cabernet%20franc' || $route.path === '/tienda/bonarda' || $route.path === '/tienda/pinot%20noir' || $route.path === '/tienda/syrah' || $route.path === '/tienda/merlot' || $route.path === '/tienda/blends%20tintos' || $route.path === '/tienda/otros%20tintos'"
    >
      <router-link
        class="nav-item nav-link "
        :to="'/tienda/tintos'"
      >
        TODOS
      </router-link>
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: category} }"
        v-for="category of tintos"
        :key="category"
      >
        {{category}}
      </router-link>
    </div>
            <div
      class="opacity justify-content-center text-center align-items-center scrollmenu"
      v-if="$route.path === '/tienda/blancos' || $route.path === '/tienda/chardonnay' || $route.path === '/tienda/suavignon%20blanc' || $route.path === '/tienda/semillon' || $route.path === '/tienda/torrontes' || $route.path === '/tienda/blends%20blancos' || $route.path === '/tienda/otros%20blancos'"
    >
      <router-link
        class="nav-item nav-link "
        :to="'/tienda/blancos'"
      >
        TODOS
      </router-link>
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: category} }"
        v-for="category of blancos"
        :key="category"
      >
        {{category}}
      </router-link>
    </div>
            <div
      class="opacity justify-content-center text-center align-items-center scrollmenu"
      v-if="$route.path === '/tienda/otros%20vinos' || $route.path === '/tienda/naranjos' || $route.path === '/tienda/dulces' || $route.path === '/tienda/petnat'"
    >
      <router-link
        class="nav-item nav-link "
        :to="'/tienda/otros%20vinos'"
      >
        TODOS
      </router-link>
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: category} }"
        v-for="category of otros"
        :key="category"
      >
        {{category}}
      </router-link>
    </div>
            <div
      class="opacity justify-content-center text-center align-items-center scrollmenu"
      v-if="$route.path === '/tienda/importados' || $route.path === '/tienda/chile' || $route.path === '/tienda/españa' || $route.path === '/tienda/francia' || $route.path === '/tienda/italia' || $route.path === '/tienda/uruguay' || $route.path === '/tienda/otros%20importados'"
    >
      <router-link
        class="nav-item nav-link "
        :to="'/tienda/importados'"
      >
        TODOS
      </router-link>
      <router-link
        class="nav-item nav-link "
        :to="{ name: 'category', params:{category: category} }"
        v-for="category of importados"
        :key="category"
      >
        {{category}}
      </router-link>
    </div>
</div>
</template>

<script>
const tintos = [
  'malbec',
  'cabernet suavignon',
  'cabernet franc',
  'bonarda',
  'pinot noir',
  'syrah',
  'merlot',
  'blends tintos',
  'otros tintos',
]
const blancos = [
  'chardonnay',
  'suavignon blanc',
  'semillon',
  'torrontes',
  'blends blancos',
  'otros blancos',
]
const otros = [
  'naranjos',
  'dulces',
  'petnat',
]
const importados = [
  'chile',
  'españa',
  'francia',
  'italia',
  'uruguay',
  'otros importados',
]
export default {
  data() {
    return {
      tintos,
      blancos,
      otros,
      importados,
      isNavOpen: false,
    };
  },
}
</script>

<style scoped>
div.scrollmenu {
  font-size:1.4rem;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  color: rgb(58, 58, 58);
}
 .opacity {
    background-color: #FFF;
  }

   .btn-opacity {
    background-color: #FFF;
    color: white;
  }

  .btn-opacity:hover {
  background-color: #FFF;
}
</style>