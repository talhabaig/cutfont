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
        <h2>Cart</h2>
      </div>
    </div>
    <v-card-text style="color: #000000">
      <div class="d-flex" v-for="(data, index) in product" :key="index">
        <div class="menu d-flex">
          <div class="pl-5">
            <h6 class="mb-1">{{ data.Name }}</h6>
            <p class="mb-0" style="width: 95%">
              {{ data.description }}
            </p>
            <div class="d-flex pt-1">
              <div @click="removeQuantity(data)">
                <img src="../../assets/logos/-.png" class="rem-icon-popup" />
              </div>
              <div style="padding-right: 10px; padding-left: 10px">
                <h2>{{ data.quantity }}</h2>
              </div>
              <div @click="addQuantity(data)">
                <img src="../../assets/logos/+.png" class="add-icon-popup" />
              </div>
              <div class="cart-price">
                <div class="mb-0">
                  <span class="pl-2"> NDK </span>{{ data.Price }}
                </div>
              </div>
            </div>
          </div>
          <div class="menu3">
            <img
              @click="removeindex(data)"
              src="../../assets/logos/Iconmetro-cross.svg"
              class="remove-icon-popup"
            />
          </div>
          <div class="menu2">
            <img src="https://picsum.photos/300/100/" class="menu-img" />
          </div>
        </div>

        <br /><br /><br /><br /><br />
      </div>
    </v-card-text>

    <div class="cartBtn">
      <div class="pb-5">
        <span class="float-left pl-5">Total</span>
        <span class="float-right pr-5 cart-total">{{ total }} NOK</span>
      </div>
      <center>
        <v-btn block color="main_bg_color" @click="checkoutDetail" dark> Checkout </v-btn>
      </center>
    </div>
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
    quantity: 1,
    product: [
      {
        Name: "Baguette",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        ActualPrice: 10.0,
        Price: 10.0,
        image: "",
        quantity: 1,
      },
      {
        Name: "Drinks",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        ActualPrice: 20.0,
        Price: 20.0,
        image: "",
        quantity: 1,
      },
      {
        Name: "Snacks",
        description:
          " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
        ActualPrice: 30.0,
        Price: 30.0,
        image: "",
        quantity: 1,
      },
    ],
    cartData: {
      Name: "Baguette",
      description:
        " Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.",
      Price: 150.0,
      image: "",
    },
  }),

  computed: {
    total() {
      var sum = 0;
      this.product.forEach((element) => {
        sum = sum + element.Price;
      });
      return sum;
    },
  },

  methods: {
    checkoutDetail(){
          this.$router.push({ name: "checkoutDetail" });
    },
    addQuantity(obj) {
      this.product.filter((x) => {
        if (x.Name == obj.Name) {
          x.quantity++;
          x.Price = x.ActualPrice * x.quantity;
        }
      });
      this.total;
    },
    removeindex(obj) {
      this.product = this.product.filter((x) => x.Name != obj.Name);
    },
    removeQuantity(obj) {
      if (this.product.filter((x) => x.Name == obj.Name)[0].quantity > 1) {
        this.product.filter((x) => {
          if (x.Name == obj.Name) {
            x.quantity--;
            x.Price = x.ActualPrice * x.quantity;
          }
        });
      }
    },
  },
};
</script>
<style>
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
  width: 100%;
  padding: 20px;
  margin: auto;
}
.menu {
  background-color: #f9d37c8a;
  color: #000000;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  left: 0px;
  font-weight: 300;
  padding-top: 1%;
  margin: 0 auto;
  width: 80%;
  height: auto;
  position: absolute;
}
.menu2 {
  background-color: #f19b28;
  color: #fff;
  border-radius: 35px;
  margin: 0 auto;
  width: 25%;
  height: 70px;
  position: absolute;
  margin-top: 5px;
  right: -45px;
}
.menu3 {
  border-radius: 50px;
  margin: 0 auto;
  width: 25%;
  height: 70px;
  position: absolute;
  top: -16px;
  right: -65px;
}
.menu p {
  font-size: 11px;
  line-height: 15px;
}
.add-icon {
  margin: 40%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #559d2e;
  box-shadow: 0 6px 8px 0 rgb(33 139 7 / 20%);
}
.add-icon-popup {
  margin: 2%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #559d2e;
}
.rem-icon-popup {
  margin: 2%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #b9b9b9;
}
.remove-icon-popup {
  margin: 2%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.menu-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 50%;
}
.cart-price {
  color: #f19b28;
  padding-left: 25px;
}
.cart-total {
  color: #f19b28;
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
