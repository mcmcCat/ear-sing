<template>
  <div class="top_bar">
    <van-nav-bar
      title="歌曲详情"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
  <div class="container_box">
    <img src="@/assets/wuxianpu.jpg" alt="" />
  </div>
  <div class="but">
    <button class="record-btn">
      <span class="record-btn__icon"></span>
    </button>
  </div>

  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="service-o">练耳</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const learnList = [
  {
    icon: "service-o",
    label: "练耳练习",
    color: "#d6abaa",
  },
  {
    icon: "volume-o",
    label: "视唱练习",
    color: "#f2c09f",
  },
  {
    icon: "question-o",
    label: "教程学习",
    color: "#ace3fd",
  },
  {
    icon: "music-o",
    label: "乐理知识",
    color: "#cbfbac",
  },
];

const active = ref(0);
const icon = {
  active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
  inactive: "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
};

const onClickLeft = () => {
  console.log("返回");
  router.push("/song");
};
const onClickRight = () => {
  console.log("分享");
};
</script>

<style scoped lang="scss">
.container_box {
  display: block;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
  }
  .banner_2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 5px;
    background-color: #f8f9fd;
    .left_box {
      display: flex;
      gap: 5px;
      .text {
        .text_1 {
          font-weight: 700;
        }
        .text_2 {
          font-size: 12px;
          color: #aaa;
        }
      }
    }
  }
  .banner_3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px 0px;
    .learn_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 10px 10px;
      border-radius: 10px;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
      .icon_box {
        border-radius: 10px;
        padding: 10px;
      }
    }
  }
  .banner_4 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .round_1,
    .round_2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      border-radius: 60px;
      color: #fff;
      background-color: #77c9f9;
      font-size: 12px;
      h1 {
        font-size: 20px;
        margin: 5px 0;
      }
    }
    .round_2 {
      background-color: #aec5f9;
    }
  }
}
.but {
  text-align: center;
  margin-top: 30px;
}
.record-btn {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  margin: 0 auto;
  border: none;
  background-color: #ff4d4f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.record-btn:hover {
  background-color: #ff7875;
}

.record-btn:active {
  background-color: #ff4d4f;
}

.record-btn__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
