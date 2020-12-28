<template>
  <view
  :class="['onekit-lottie',onekitClass]"
  :style="onekitStyle"
  :id="onekitId"
  >
    <slot></slot>
  </view>
</template>

<script>
  import alipay_behavior from "../../behaviors/alipay_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-lottie",
    mixins: [alipay_behavior, onekit_behavior],
    props: {
    },
    methods: {
    }
  }
</script>

<style>
</style>