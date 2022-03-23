<template>
  <v-card class="mx-auto my-auto bg-img">
    <v-card-text>
      <div class="father">
        <div class="child">
          <div class="text-center">
            <img
              src="../../assets/logos/Group221.svg"
              class="my-3"
              alt="Symphony"
              width="auto"
              height="80px"
            />
            <br />
            <h3 style="color: #ffff">Payment Successful</h3>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-text class="login-card">
      <v-card-text>
        <div class="mb-5">
          <span class="text-center">
            Your Payment was successful Pick Your Food item from the vending
          </span>
        </div>

        <div class="d-flex pb-4">
          <div>
            <img src="../../assets/logos/Group222.svg" height="50px" />
          </div>
          <div class="ml-2" style="min-width: 140px">
            <b>Order Placed </b> <br />
            Your order has been placed successfully
          </div>
          <div>2:00 PM 15/21</div>
        </div>
        <div class="d-flex pb-4">
          <div>
            <img src="../../assets/logos/GroupSave.svg" height="50px" />
          </div>
          <div class="ml-2" style="min-width: 140px">
            <b>Payment Confirmation </b><br />
            You have paid for the food
          </div>
          <div>2:00 PM 15/21</div>
        </div>
        <div class="d-flex pb-4">
          <div>
            <img src="../../assets/logos/GroupFood.svg" height="50px" />
          </div>
          <div class="ml-2" style="min-width: 140px">
            <b> Enjoy your Food </b><br />
            Collect your bag
          </div>
          <div>2:00 PM 15/21</div>
        </div>
        <div class="d-flex">
          <div>
            <img src="../../assets/logos/GroupEmail.svg" height="50px" />
          </div>
          <div class="ml-2" style="min-width: 140px">
            <b> Email Receipt </b> <br />
            Your order has been placed successfully
          </div>
          <div>2:00 PM 15/21</div>
        </div>
      </v-card-text>
       <v-btn block class="mt-4" color="main_bg_color" dark @click="backHome">
          Back to Home
        </v-btn> 
    </v-card-text>
  </v-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
export default {
  mixins: [validationMixin],
  validations: {},

  data: () => ({}),

  computed: {},

  methods: {
      backHome(){
          this.$router.push({ name: "menuUser" });
      }
  },
};
</script>
<style scoped>
.login-card {
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  background-color: #fff;
}
.bg-img {
  background-image: url(../../assets/logos/bgcopy.jpg) !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
