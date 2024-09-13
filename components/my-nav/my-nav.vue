<template>
  <view class="nav-bar">
    <view class="arrow">
      <button class="change-button">
        <view class="arrow-icon">
          <uni-icons type="arrow-right" size="20"></uni-icons>
          <text>切换门店</text>
          <uni-icons type="arrow-left" size="20"></uni-icons>
        </view>
      </button>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    // height: 55px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;

    .change-button {
      display: flex;
      flex-direction: row;
      text-align: center;
      border: none;
      outline: none;
      justify-content: center;
      background-color: transparent;
    }
  }
</style>