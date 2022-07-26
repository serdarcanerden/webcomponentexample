<template>
  <div class="cardDisplay">
    <v-card
      outlined
      :width="cardWidth"
      :height="cardHeight"
      class="cardForExample"
    >
      <v-btn
        class="btnForVuetify"
        :width="width"
        :height="height"
        :color="selectedColor"
        @click="alertBtnHandler"
      >
        Give Me An Alert
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);
import vuetify from "../plugins/vuetify";
import { VCard, VBtn } from "vuetify/lib";
export default {
  name: "webComponentExample",
  vuetify,
  props: {
    height: { type: Number, default: 50 },
    width: { type: Number, default: 200 },
    color: { type: Number, default: 0 },
  },
  components: {
    VCard,
    VBtn,
  },
  data() {
    return {
      dummyColors: [
        "#ff0000",
        "#6666ff",
        "#ff33cc",
        "#00cc99",
        "#ff9900",
        "#66ccff",
        "#ffe6cc",
        "#ff4d4d",
        "#99ff99",
      ],
      cardWidth: 250,
      cardHeight: 100,
      selectedColor: "#ff0000",
    };
  },
  methods: {
    alertBtnHandler() {
      this.$emit("alert-fired", { detail: true });
    },
  },
  watch: {
    color() {
      this.selectedColor = this.dummyColors[this.color];
    },
    width() {
      this.cardWidth = parseInt(this.width) + 50;
    },
    height() {
      this.cardHeight = parseInt(this.height) + 50;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../node_modules/vuetify/dist/vuetify.min.css";
.cardDisplay {
  display: flex;
}
.cardForExample {
  left: 45%;
}
.btnForVuetify {
  margin-top: 20px;
}
</style>
