<template>
  <v-card class="mx-auto" style="min-height: 500px">
    <v-card-text class="login-head">
      <div class="father">
        <div class="child">
          <div class="text-center">
            <img
              src="../../assets/logos/Frigg_Logo_F_Tekst_Horisontal_hvit.png"
              alt="Symphony"
              height="80px"
              width="250px"
            />
            <router-view />
          </div>
        </div>
      </div>

      <div class="news-section">
        <h3 class="mb-1">News</h3>
        <p class="mb-0">
          Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-card-text>
    <v-card-text class="login-card" style="margin-top: 50px">
      <carousel
        :paginationEnabled="false"
        :perPageCustom="[
          [320, 3],
          [600, 6],
          [768, 9],
          [1024, 12],
        ]"
      >
        <slide class="text-center" v-for="(data,index) in Category" :key="index">
          <div class="carousel-img">
            <img  :src="require('@/assets/logos/' + data.image + '.png')"   style="height: 50px" /> 
          </div>
          <div>{{data.Name}}</div>
        </slide> 
      </carousel>
    </v-card-text>
    <v-card-text style="color: #000000">
      <h3 class="mb-5">Food Menu</h3>
      <div class="d-flex" v-for="(data, index) in product" :key="index">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">{{ data.Name }}</h6>
            <p class="mb-0">
              {{ data.description }}
            </p>
          </div>
          <div>
            <img
              @click="showCart(data)"
              src="../../assets/logos/+-2.png"
              class="add-icon"
            />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span>{{ data.Price }}</h6>
        </div>
        <br /><br /><br /><br /><br />
        <br />
      </div>
    </v-card-text>

    <b-modal size="lg" id="scheduleTime" hide-footer hide-header bottom>
      <div class="d-flex pt-3">
        <div class="carousel-img-popup">
          <img src="../../assets/logos/Group181.png" style="height: 50px" />
        </div>
        <div>
          <h5 class="">{{cartData.Name}}</h5>
          <small style="font-size: x-small" class="mb-0">
            {{cartData.description}}
          </small>
        </div>
        <div class="orange-quantity">
          <div class="d-flex">
            <sub class="pt-3 pr-1">NDK</sub>
            <h4>{{cartData.Price}}</h4>
          </div>
        </div>
      </div>
        <div class="d-flex mt-3">
          <div @click="removeQuantity">
            <img
              :src="require('@/assets/logos/-.png')"
              class="rem-icon-popup"
            />
          </div>
          <div style="padding-left: 4px;padding-right: 4px">
            <h2>{{ quantity }}</h2>
          </div>
          <div @click="addQuantity">
            <img
              :src="require('@/assets/logos/+.png')"
              class="add-icon-popup"
            />
          </div>
          <div style="padding-left:40px" >
          <v-btn  block color="main_bg_color" dark @click="submit">
          Add To Cart
        </v-btn>
          </div>
        </div>
    </b-modal>
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { Carousel, Slide } from "vue-carousel";
import Swal from "sweetalert2";
export default {
  mixins: [validationMixin],
  validations: {},
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    showPassword: false,
    quantity: 1,
    cartData: {
      Name: "Baguette",
      description:
        " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      Price: "10.00",
      image: "",
    },
    product: [
      {
        Name: "Baguette",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "10.00",
        image: "",
      },
      {
        Name: "Drinks",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "20.00",
        image: "",
      },
      {
        Name: "Snacks",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "30.00",
        image: "",
      },
      {
        Name: "Varmet",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "40.00",
        image: "",
      },
      {
        Name: "Bakevarer",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "50.00",
        image: "",
      },
      {
        Name: "Pizza",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "60.00",
        image: "",
      },
      {
        Name: "Subs",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "70.00",
        image: "",
      },
      {
        Name: "Yogurt",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "80.00",
        image: "",
      },
      {
        Name: "Baguette",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        Price: "90.00",
        image: "",
      },
    ],
    Category: [
      {
        Name: "Drikke", 
        image: "Group181",
      }, 
      {
        Name: "Baguette", 
        image: "Group179",
      }, 
      {
        Name: "Salat", 
        image: "Group183",
      }, 
      {
        Name: "Subs", 
        image: "Group187",
      }, 
      {
        Name: "Pizza", 
        image: "Group179",
      }, 
      {
        Name: "Hot Dish", 
        image: "Group179",
      }, 
      {
        Name: "Hot Dish", 
        image: "Group179",
      }, 
      {
        Name: "Hot Dish", 
        image: "Group179",
      }, 
    ],
  }),

  computed: {
    user_passwordErrors() {
      const errors = [];
      if (!this.$v.loginForm.user_password.$dirty) return errors;
      !this.$v.loginForm.user_password.required &&
        errors.push("Password is required.");
      return errors;
    },
    user_emailErrors() {
      const errors = [];
      if (!this.$v.loginForm.user_email.$dirty) return errors;
      !this.$v.loginForm.user_email.email &&
        errors.push("Must be valid e-mail");
      !this.$v.loginForm.user_email.required &&
        errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    showCart(data) {
      this.cartData = data;
      this.$bvModal.show("scheduleTime");
    },
    addQuantity() {
      this.quantity = this.quantity + 1;
    },
    removeQuantity() {
      if (this.quantity > 1) {
        this.quantity = this.quantity - 1;
      }
    },
    submit() {
      this.$router.push({ name: "cart" });
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
  mounted:{
    
  }
};
</script>
<style scoped>
.login-card {
  background-color: #fff;
}
.login-head {
  border-bottom-left-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
  height: 150px;
  background-color: #f19b28;
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

.news-section {
  background-color: #dc5f26;
  color: #fff;
  border-radius: 19px;
  font-weight: 300;
  padding: 4%;
  margin: 0 auto;
  width: 90%;
  height: auto;
  position: absolute;
}
.news-section-text {
  color: white;
}
.orange-quantity {
  color: #dc5f26;
}
.carousel-img {
  padding-top: 10px;
  width: 70px;
  height: 70px;
  max-width: 100%;
  border-radius: 50%;
  background-color: #ecf5f7;
}
.carousel-img-popup {
  padding: 10px;
  padding-right: 30px;
  width: 70px;
  height: 70px;
  max-width: 100%;
  border-radius: 50%;
}
.VueCarousel-inner {
  flex-basis: 73px !important;
}

.menu {
  background-color: #f9d37c8a;
  color: #000000;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  right: 0px;
  font-weight: 300;
  padding: 4%;
  margin: 0 auto;
  width: 80%;
  height: auto;
  position: absolute;
}
.menu2 {
  background-color: #f19b28;
  color: #fff;
  border-radius: 35px;
  font-weight: 300;
  margin: 0 auto;
  width: 25%;
  height: 70px;
  position: absolute;
  margin-top: 13px;
}
.menu3 {
  background-color: #f19b28;
  color: #fff;
  border-radius: 20px;
  font-weight: 300;
  padding: 1.5%;
  margin: 0 auto;
  width: 33%;
  right: -8px;
  height: auto;
  position: absolute;
  margin-top: -20px;
}
.menu p {
  font-size: 11px;
  line-height: 15px;
}
.menu3 h6 {
  font-size: 16px;
}
.menu3 span {
  font-size: 12px;
  font-weight: 300;
}
.w-65 {
  width: 65%;
}
.add-icon {
  margin: 40%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #559d2e;
  box-shadow: 0 6px 8px 0 rgb(33 139 7 / 20%);
}
.add-icon-popup {
  margin: 4%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #559d2e;
  box-shadow: 0 6px 8px 0 rgb(33 139 7 / 20%);
}
.rem-icon-popup {
  margin: 4%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #b9b9b9;
}
.menu-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 50%;
}

.modal-dialog {
  position: absolute;
  bottom: 0vh;
  width: 98%;
  margin: 0px;
}
#scheduleTime___BV_modal_content_ {
  border-top-left-radius: 30% !important;
  border-top-right-radius: 30% !important;
}
</style>
