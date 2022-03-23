<template>
  <v-card class="mx-auto" style="min-height: 500px">
    <div class="d-flex productHeader">
      <div class="productHeader-back">
        <img
          :src="require('@/assets/logos/ionic-ios-arrow-back.png')"
          style="height: 20px"
        />
      </div>
      <div class="productHeader-product">
        <h2>{{ cartData.Name }}</h2>
      </div>
    </div>

    <div class="ml-2 pl-2 pt-4 w-65">
      <h6 class="mb-1 productName">{{ cartData.Name }}</h6>
      <p class="mb-0">
        {{ cartData.description }}
      </p>
    </div>
    <div class="d-flex productDisplay">
      <div>
        <div class="productPrice">
          {{ cartData.Price }} <br />
          NOK
        </div>
        <div class="d-flex pc c t-3">
          <div @click="removeQuantity">
            <img
              :src="require('@/assets/logos/-.png')"
              class="rem-icon-popup"
            />
          </div>
          <div style="padding: 10px">
            <h2>{{ quantity }}</h2>
          </div>
          <div @click="addQuantity">
            <img
              :src="require('@/assets/logos/+.png')"
              class="add-icon-popup"
            />
          </div>
        </div>
      </div>

      <div class="productImage">
        <img :src="require('@/assets/logos/Group9.png')" height="100px" />
      </div>
    </div>

    <div class="ml-2 pl-2 w-65">
      <h6 class="mb-1 productName">Ingredients</h6>
      <carousel
        :paginationEnabled="false"
        :perPageCustom="[
          [320, 4],
          [600, 6],
          [768, 9],
          [1024, 12],
        ]"
      >
        <slide class="text-center" v-for="(data, index) in 6" :key="index">
          <div class="ingredientsName">{{ cartData.Name }}</div>
        </slide>
      </carousel>
    </div>
    <div class="cartBtn">
      <center>
        <v-btn block color="main_bg_color" dark @click="submit">
          Add To Cart
        </v-btn>
      </center>
    </div>
  </v-card>
</template>
<script >
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
    quantity: 1,
    cartData: {
      Name: "Baguette",
      description:
        " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      Price: "150.00",
      image: "",
    },
  }),

  computed: {},

  methods: {
    addQuantity() {
      this.quantity = this.quantity + 1;
    },
    submit() {
      this.quantity = this.quantity + 1;
    },
    removeQuantity() {
      if (this.quantity > 1) {
        this.quantity = this.quantity - 1;
      }
    },
  },
};
</script>
<style scoped>
.productHeader {
  border-bottom: 2px solid #f19b28;
}
.productHeader-back {
  padding: 10px;
}
.productHeader-product {
  text-align: center;
  margin: auto;
  padding-top: 10px;
}
.productName {
  color: #f19b28;
}
.productDisplay {
  min-height: 200px;
}
.productPrice {
  margin-top: 40px;
  background-color: #f19b28;
  border-top-right-radius: 30% !important;
  border-bottom-right-radius: 30% !important;
  color: #ffff;
  font-weight: bold;
  padding-left: 20px;
  font-size: x-large;
}
.add-icon-popup {
  margin: 4%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #559d2e;
  box-shadow: 0 6px 8px 0 rgb(33 139 7 / 20%);
}
.rem-icon-popup {
  margin: 4%;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #b9b9b9;
}
.productImage {
  position: absolute;
  right: 0%;
  padding-top: 35px;
  animation: mymove 5s;
  animation-fill-mode: forwards;
}
.ingredientsName {
  background-color: #f7fbfc;
  margin: 3px;
}
.cartBtn {
  position: absolute;
  bottom: 10px;
  left: 30%;
  right: 40%;
  margin: auto;
}
@keyframes mymove {
  from {
    right: -70px;
  }
  to {
    right: 10px;
  }
}
</style>
