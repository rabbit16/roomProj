<template>
  <!-- 轮播图区域 -->
  <view>
    <my-nav></my-nav>
    <custom-tab-bar direction="horizontal" :show-icon="true" :selected="selected" @onTabItemTap="onTabItemTap" />
    <view class="swiper-main">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <swiper-item v-for="(item, i) in swiperList" :key="i">
          <image :src="item.image_src"></image>
        </swiper-item>
      </swiper>
    </view>

    <!-- 主要功能的导航区域 -->
    <view class="func-nav">
      <ul class="left">
        <li class="money-main">余额充值</li>
        <li class="money-sub">请充值到余额</li>
        <img src="/static/home/pay.png" alt="" class="money-img" />
      </ul>
      <ul class="right">
        <li class="voucher-redemption"><uni-icons type="shop" size="24" color="#ffffff"></uni-icons><text>卡劵兑换</text>
        </li>
        <li class="platform-redemption"><uni-icons type="gift" size="24" color="#ffffff"></uni-icons><text>美团兑换</text>
        </li>
      </ul>
    </view>

    <!-- 二维码扫码 -->
    <view class="ercode-main">
      <view class="ercode-left">
        <img src="/static/home/ERCode.png" alt="" />
      </view>
      <view class="ercode-center">
        <view class="my-ercode">我的二维码</view>
        <view class="click-enter">点击扫码进入</view>
      </view>
      <view class="ercode-right">
        <img src="/static/home/scan.png" alt="" />
      </view>
    </view>


    <!-- 活动展示代码 -->
    <view class="event-hot">
      <view class="event-title">
        热门活动
      </view>
      <view class="item-main">
        <view class="event-item">
          <view class="item-left">
            <view class="item-title">xxxxxx这里是标题，啊哈哈哈哈哈哈哈</view>
            <view class="item-subtitle">2人团<uni-icons type="right" size="12" color="#606266"></uni-icons></view>
          </view>
          <view class="item-right">
            <img src="/static/home/vipCard.png" alt="" />
          </view>
        </view>
        <view class="detail">
          查看详细<uni-icons type="arrow-right" size="18"></uni-icons>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        swiperList: [], //创建一个列表存放轮播图的地址
        eventList: [], //这个是活动的列表
      };
    },
    onLoad() {
      this.getSwiperList()
    },
    methods: {
      async getSwiperList() {
        // 3.1 发起请求
        const {
          data: res
        } = await uni.$http.get('/room_router/home/swiperdata')
        // 3.2 请求失败
        // if (res.meta.status !== 200) {
        //   return uni.$showMsg()
        // }
        // 3.3 请求成功，为 data 中的数据赋值
        this.swiperList = res.message
      }
    }
  }
</script>

<style lang="scss">
  swiper {
    height: 360rpx;

    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }

  .func-nav {
    display: flex; // 使用Flexbox
    flex-direction: row; // 设置主轴为水平方向（默认值）
    justify-content: center; // 根据需要设置对齐方式，比如：space-between, space-around,
    margin-top: 30rpx;

    // grap: 10rpx;
    .left {
      box-sizing: border-box;
      height: 200rpx;
      width: 400rpx;
      border-radius: 20rpx;
      margin-right: 10rpx; // 可以设置右侧间隔，你可以根据需要更改这个值
      background-color: #0c9d16;
      text-decoration: none;
      word-wrap: normal;
      font-size: 18px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      padding-left: 18rpx;
      padding-top: 12rpx;

      .money-main {
        font-weight: bold;
      }

      .money-sub {
        font-size: 12px;
        margin-top: 5rpx;
      }

      .money-img {
        width: 52px;
        height: 52px;
        margin-left: auto;
        /* 使 Img 元素靠近盒子的最右边 */
      }


    }

    .right {
      height: 200rpx;
      width: 300rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        height: 96rpx;
        width: 100%;
        line-height: 96rpx;
        text-align: center;
        border-radius: 20rpx; // 设置圆角的半径，值可根据需要调整
        text-decoration: none;
        font-weight: bold;
        word-wrap: normal;
        font-size: 18px;
        color: #ffffff;

        &.voucher-redemption {
          background-color: #13bec1;
        }

        &.platform-redemption {
          background-color: #ff7801;
        }
      }
    }
  }

  // 扫一扫相关css
  .ercode-main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 150rpx;
    width: 700rpx;
    margin-left: 24rpx;
    border-radius: 50px;
    margin-top: 45px;
    box-sizing: border-box;
    background-color: #c1e5ff;

    .ercode-left {
      margin-left: -8px;
      margin-top: -35px;

      img {
        height: 200rpx;
        width: 200rpx;
      }
    }

    .ercode-center {
      position: relative;
      margin-top: 12px;
      left: -40px;

      view {
        &.my-ercode {
          // top: -10px;
          font-weight: bold;
          font-size: 20px;
          margin-top: -5px;
        }

        &.click-enter {
          margin-top: 5px;
          font-size: 13px;
          color: #464646;
        }
      }
    }

    .ercode-right {
      img {
        height: 50px;
        width: 50px;
        margin-top: 12px;
      }
    }

  }

  .event-hot {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 20rpx;
    margin-top: 20px;

    .item-main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 345px;

      .event-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 30rpx;
        background-color: #ffffff;
        width: 345px;
        margin-top: 30rpx;

        .item-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          padding-left: 30rpx;

          .item-title {
            padding-top: 20rpx;
            padding-right: 5rpx;
            text-decoration: none;
            font-weight: bold;
            word-wrap: normal;
            font-size: 18px;
            color: #0f0f0f;
          }

          .item-subtitle {
            font-size: 12px;
            color: #3e3e3e;
            padding-bottom: 5rpx;
          }
        }

        .item-right {
          img {
            height: 105px;
            width: 105px;
          }
        }
      }

      .detail {
        margin-left: auto;
        font-size: 13px;
        color: #606266;
      }

    }
  }
</style>