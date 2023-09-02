<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/logo_transparent.png" alt="">
    </div>
    <el-col>
      <el-menu
          active-text-color="rgb(128, 34, 88)"
          background-color="rgb(230, 240, 250)"
          default-active="1"
          class="el-menu-vertical"
          text-color="rgb(100, 70, 70)"
      >
        <el-menu-item index="1" @click="sendsignal()">
          <el-icon :size="40" style="margin-top: 5px"><Operation/></el-icon>
          <span>实验室管理</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon :size="40"><SetUp/></el-icon>
            <span>实验室设备</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">设备管理</el-menu-item>
            <el-menu-item index="1-2">使用审核</el-menu-item>
            <el-menu-item index="1-3">领用记录</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon :size="40"><TrophyBase/></el-icon>
          <span>成果管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon :size="40"><User/></el-icon>
          <span>用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import {Operation, TrophyBase} from "@element-plus/icons-vue";

export default {
  components: {TrophyBase, Operation},
  data() {
    return {
      activeMenu: 'home',
      a : '123'
    };
  },
  methods: {
    sendsignal() {
      // console.log(this.$bus)
      this.$bus.emit('message', this.a)
    },
    handleMenuSelect(index) {
      this.activeMenu = index;
      // 在这里可以根据index进行路由跳转或其他操作
    },
  },
};
</script>

<style scoped>

.sidebar {
  width: 200px;
  height: 100%;
  background: rgb(230, 240, 250);
}

.logo{
  width: 100%;
}

.logo img{
  margin-top: 10px;
  margin-left: 0px;
  width: 80%;
  height: 80%;
  object-fit: cover;
}

.el-menu{
  height: 100vh;
}

.el-menu-vertical {
  margin-left: 20px;
  height: 100%;
  border: none;
  background: transparent;
}

.el-menu-item{
  background:rgb(230, 240, 250);
}

</style>
