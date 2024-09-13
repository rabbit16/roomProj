<template>
  <view class="main-content">
    <!-- 我的信息 -->
    <view class="backg">

    </view>
    <view class="my-info">
      <view class="login-part">
        <uni-icons type="contact-filled" size="85" color="gray"></uni-icons>
        <button type="primary" class="btn-login" @click="getUserInfo">点击登录</button>
      </view>
      <view class="info-detail">
        <text class="detail-text">我的资料</text>
        <ul class="item-list">
          <li><view class="num-item">0<text class="num-item-unit">张</text> </view><text class="num-sub">会员卡</text></li>
          <li><view class="num-item">0<text class="num-item-unit">张</text> </view><text class="num-sub">优惠券</text></li>
          <li><view class="num-item">0<text class="num-item-unit">元</text> </view><text class="num-sub">余额</text></li>
        </ul>
      </view>
    </view>

    <!-- 我的功能 -->
    <view class="my-func">
      <view class="info-detail">
        <text class="detail-text">我的功能</text>
        <ul class="item-list">
          <li><view class="num-item"><img src="/static/my/_订单.png" alt="" /></view><text class="num-sub">会员卡</text></li>
          <li><view class="num-item"><img src="/static/my/_订单.png" alt="" /></view><text class="num-sub">优惠券</text></li>
          <li><view class="num-item"><img src="/static/my/_订单.png" alt="" /></view><text class="num-sub">余额</text></li>
        </ul>
      </view>
    </view>

    <!-- 我的应用 -->
    <view class="my-app">
      <view class="info-detail">
        <text class="detail-text">我的应用</text>
        <ul class="item-list">
          <li><view class="num-item"><img src="/static/my/会员卡.png" alt="" /></view><text class="num-sub">会员卡</text></li>
          <li><view class="num-item"><img src="/static/my/商品.png" alt="" /></view><text class="num-sub">商品</text></li>
          <li><view class="num-item"><img src="/static/my/wifi.png" alt="" /></view><text class="num-sub">wifi</text></li>
          <li><view class="num-item"><img src="/static/my/排行榜.png" alt="" /></view><text class="num-sub">排行榜</text></li>
          <li><view class="num-item"><img src="/static/my/排行榜.png" alt="" /></view><text class="num-sub">排行榜</text></li>
          <li><view class="num-item"><img src="/static/my/排行榜.png" alt="" /></view><text class="num-sub">排行榜</text></li>
        </ul>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &::before {
      content: ' ';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 70px;
      border-radius: 18rpx;
      background-color: #f8f8f8;
      z-index: -1;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      /* 水平偏移, 垂直偏移, 模糊半径, 颜色 */
    }

    .my-info,.my-func,.my-app  {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 25rpx;
      border-radius: 18rpx;
      background-color: #ffffff;
      width: 340px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      /* 水平偏移, 垂直偏移, 模糊半径, 颜色 */
      margin-left: 19px;

      .login-part {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-right: auto;

        .btn-login {
          height: 80rpx;
          background-color: transparent;
          color: black;
          width: auto;
          line-height: 80rpx;
          margin-top: 60rpx;
          text-align: left;
        }
      }

      .info-detail {
        padding-top: 12px;
        .detail-text {
          padding-left: 20px;
          font-size: 15px;
          color: rgb(39, 39, 39);
        }

        .item-list {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          /* 允许换行 */
          justify-content: flex-start;
          /* 子元素靠左对齐 */
          padding: 0 17px;
          width: 340px;

          li {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            font-size: 15px;
            width: calc(33.33% - 20px);
            padding-top: 10px;
            padding-left: 15px;
            height: 60px;
            margin: 1px 10px 20px 0;
            
            /* 给右侧和底部添加间距，确保间隔均匀 */

            .num-item {
              // height: 20px;
              // margin-bottom: 10px;
              font-size: 30px;
              color: black;
              font-weight: bold;
              .num-item-unit{
                color: rgb(110, 110, 110);
                font-size: 13px;
              }
            }

            text.num-sub {
              font-size: 13px;
              color: rgb(110, 110, 110);
            }
          }
        }

      }
    }
    .num-item img{
      width: 20px;
      height: 20px;
    }
  }
</style>