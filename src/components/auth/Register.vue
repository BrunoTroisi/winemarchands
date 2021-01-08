<template>
<div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
      <form id="register-form" role="form" @submit.prevent="onSubmit">
        <h3 class="text-center"><em class="fas fa-user-plus"></em> Registrarse</h3>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Correo electrónico"
            value
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Contraseña"
            v-model="password"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-opacity" style="width: 100%" :disabled="isLoading">
            <em v-if="isLoading" class="fa fa-spinner fa-spin" />
            Registrarse
          </button>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <router-link to="/inicio%20sesion">
                  <a class="nav-link bg-light btn btn-outline-secondary"> <em class="fas fa-user"></em> Iniciar sesión</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
          </div>
      </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['clearMessage', 'addMessage', 'registerByEmail']),
    onSubmit() {
      this.isLoading = true
      let data = {
        email: this.email,
        password: this.password
      }
      this.registerByEmail(data).then(() => {
        this.clearMessage();
        this.$router.push({ name: 'home' });
      })
        .catch((error) => {
          // console.log('register error', error);
          let message_obj = {
            message: error.message,
            messageClass: "danger",
            autoClose: true
          }
          this.addMessage(message_obj);
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>
   .btn-opacity {
    background-color: #990000;
    color: white;
  }

  .btn-opacity:hover {
  background-color: #640000;
}

</style>
