<template>
  <v-card class="mx-auto my-auto bg-img">
    <div class="d-flex productHeader">
      <div class="productHeader-back">
        <img
          :src="require('@/assets/logos/ionic-ios-arrow-back.png')"
          style="height: 20px"
        />
      </div>
      <div class="productHeader-product">
        <h2>Payment Method</h2>
      </div>
    </div>
    <v-card-text class="login-card">
      <v-card-text>
        <div class="mb-5" style="color: #f19b28">
          <div class="text-center">
            <img src="../../assets/logos/673469-image.png" height="80px" />
          </div>
        </div>
        <div>
          <h5 class="regularFont login-font" style="font-size: 20px">
            Add Your Card Detail
          </h5>
        </div>
        <span class="regularFont login-font" style="">User Name</span>
        <div class="right-inner-addon input-container">
          <input
            v-model="loginForm.user_email"
            type="text"
            class="login-field"
            placeholder="mate"
          />
        </div>
        <span class="regularFont login-font" style="">Your Card Number</span>
        <div class="right-inner-addon input-container">
          <input
            v-model="loginForm.user_email"
            type="text"
            class="login-field"
            placeholder="4111 1111 1111"
          />
        </div>
        <div class="d-flex">
          <div style="margin: 10px">
            <span class="regularFont login-font" style="">Add Expiry</span>
            <div class="right-inner-addon input-container">
              <input
                v-model="loginForm.user_email"
                type="text"
                class="login-field"
                placeholder=""
              />
            </div>
          </div>
          <div style="margin: 10px">
            <span class="regularFont login-font" style="">Add CVV</span>
            <div class="right-inner-addon input-container">
              <input
                v-model="loginForm.user_email"
                type="text"
                class="login-field"
                placeholder=" "
              />
            </div>
          </div>
        </div>
        <v-btn block class="mt-4" color="main_bg_color" dark @click="submit">
          Done
        </v-btn>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
export default {
  mixins: [validationMixin],

  validations: {
    loginForm: {
      user_email: { required, email },
      user_password: { required },
    },
  },

  data: () => ({
    showPassword: false, 
    loginForm: {
      user_email: "",
      user_password: "",
    },
  }), 
  computed: { 
  },

  methods: {
    submit() {
          this.$router.push({ name: "paymentDetail" });
      // this.$v.$touch();
      // if (!this.$v.$invalid) {
      //   this.$store.dispatch("signInUser", this.loginForm).then((response) => {
      //     if (response.success) {
      //       this.$router.push({ name: "userList" });
      //     } else {
      //       Swal.fire({
      //         title: "Error!",
      //         text: response.message,
      //         icon: "error",
      //       });
      //     }
      //     // this.clear();
      //   });
      // }
    },

    redirectToSignUp() {
      this.$router.push({ name: "signup" });
    },
    redirectToForgot() {
      this.$router.push({ name: "forgot" });
    },

    clear() {
      this.$v.$reset();
      this.loginForm = {
        userName: "jams",
        password: "123456",
      };
    },
  },
};
</script>
<style scoped>
.productHeader {
  padding-bottom: 50px;
}
.productHeader-back {
  padding: 10px;
}
.productHeader-product {
  text-align: center;
  margin: auto;
  padding-top: 10px;
  color: #ffff;
}
.login-card {
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  background-color: #fff;
}
.login-field {
  border-radius: 10px;
  background-color: #ecf5f7;
  border-block: initial;
}
.login-font {
  font-family: "Bebas Neue Pro";
}
.regularFont {
  font-weight: "regular";
}
.bg-img {
  background-image: url(../../assets/logos/bgcopy.jpg) !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.right-inner-addon {
  position: relative;
  padding-bottom: 20px;
}
.right-inner-addon input {
  padding-right: 35px !important;
}
.right-inner-addon i {
  position: absolute;
  right: 0px;
  padding: 12px 12px;
  pointer-events: none;
}

input {
  width: 100%;
  padding: 10px !important;
  margin: 0em !important;
  box-sizing: border-box;
}
</style>
