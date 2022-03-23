<template>
  <v-card class="mx-auto my-auto bg-img">
    <v-card-text>
      <div class="father">
        <div class="child">
          <div class="text-center">
            <img
              src="../../assets/logos/Frigg_Logo_F_Tekst_Vertikal_hvit.png"
              class="my-10"
              alt="Symphony"
              width="auto"
              height="130px"
            />
            <router-view />
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-text class="login-card">
      <v-card-text>
        <div class="mb-5" style="color: #f19b28">
          <h4
            class="text-center login-font"
            style="font-weight: bold; font-size: 40px"
          >
            WELCOME
          </h4>
        </div>
        <div>
          <h5
            class="text-center regularFont login-font"
            style="font-size: 20px"
          >
            Login to your Account
          </h5>
        </div>
      </v-card-text>
      <v-card-text>
        <form>
          <h5 class="regularFont login-font" style="">Email Address</h5>
          <div class="right-inner-addon input-container">
            <i
              ><img
                src="../../assets/logos/Icon material-email.png"
                height="15px"
            /></i>

            <input
              v-model="loginForm.user_email"
              type="text"
              class="form-control login-field"
              placeholder="info@friggkantine.com"
            />
          </div>

          <h5 class="regularFont login-font">Password</h5>

          <div class="right-inner-addon input-container">
            <i @click="showPassword = !showPassword"
              ><img
                @click="showPassword = !showPassword"
                src="../../assets/logos/Icon ionic-md-eye-off.png"
                height="18px"
            /></i>

            <input
              v-model="loginForm.user_password"
              class="form-control login-field"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
            />
          </div>
          <v-btn block class="mt-4" color="main_bg_color" dark @click="submit">
            Login
          </v-btn>
          <div class="pt-4">
            <center>
              <a class="mt-4" @click="redirectToMenuUser"> Skip </a>
            </center>
          </div>
        </form>
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
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("signInUser", this.loginForm).then((response) => {
          if (response.success) {
            this.$router.push(`/menuUser/${this.$route.params.machineId}`);
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

    redirectToMenuUser() {
      this.$router.push(`/menuUser/${this.$route.params.machineId}`);
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
