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
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group181.png" style="height: 50px" />
          </div>
          <div>Drikke</div>
        </slide>
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group179.png" style="height: 50px" />
          </div>
          <div>Baguette</div>
        </slide>
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group183.png" style="height: 50px" />
          </div>
          <div>Salat</div>
        </slide>
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group187.png" style="height: 50px" />
          </div>
          <div>Subs</div>
        </slide>
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group179.png" style="height: 50px" />
          </div>
          <div>Pizza</div>
        </slide>
        <slide class="text-center">
          <div class="carousel-img">
            <img src="../../assets/logos/Group181.png" style="height: 50px" />
          </div>
          <div>Hot Dish</div>
        </slide>
      </carousel>
    </v-card-text>
    <v-card-text style="color: #000000">
      <h3 class="mb-5">Food Menu</h3>
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img
              @click="addQuantity"
              src="../../assets/logos/+-2.png"
              class="add-icon"
            />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img
              @click="addQuantity"
              src="../../assets/logos/+-2.png"
              class="add-icon"
            />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <div class="d-flex">
        <div class="menu d-flex">
          <div class="ml-5 pl-4 w-65">
            <h6 class="mb-1">Baguette</h6>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="../../assets/logos/+-2.png" class="add-icon" />
          </div>
        </div>
        <div class="menu2">
          <img src="https://picsum.photos/300/100/" class="menu-img" />
        </div>
        <div class="menu3">
          <h6 class="mb-0"><span class="pl-2"> NDK </span> 10.00</h6>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </v-card-text>

    <b-modal
      size="sl"
      id="scheduleTime"
      hide-footer
      hide-header
      bottom
      no-close-on-backdrop
    >
      <div><h3>poooooooo</h3></div>
      <div>fdfdsfsdgshreh</div>
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
  validations: {
    loginForm: {
      user_email: { required, email },
      user_password: { required },
    },
  },
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    showPassword: false,

    loginForm: {
      user_email: "",
      user_password: "",
    },
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
    addQuantity() {
      this.$bvModal.show("scheduleTime");
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("signInUser", this.loginForm).then((response) => {
          if (response.success) {
            this.$router.push({ name: "userList" });
          } else {
            Swal.fire({
              title: "Error!",
              text: response.message,
              icon: "error",
            });
          }
          // this.clear();
        });
      }
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
<style>
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
.carousel-img {
  padding-top: 10px;
  width: 70px;
  height: 70px;
  max-width: 100%;
  border-radius: 50%;
  background-color: #ecf5f7;
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
#scheduleTime___BV_modal_content_{
  border-top-left-radius: 30% !important;
  border-top-right-radius: 30% !important;
}
</style>
