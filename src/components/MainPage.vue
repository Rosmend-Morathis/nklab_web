<template>
  <el-container>
      <el-aside width="200px">
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
              <el-menu-item index="1" @click="lab">
                <el-icon :size="40" style="margin-top: 5px"><Operation/></el-icon>
                <span>实验室管理</span>
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon :size="40"><SetUp/></el-icon>
                  <span>实验室设备</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="device1">设备管理</el-menu-item>
                  <el-menu-item index="1-2" @click="device2">使用审核</el-menu-item>
                  <el-menu-item index="1-3" @click="device3">领用记录</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="3" @click="achievement">
                <el-icon :size="40"><TrophyBase/></el-icon>
                <span>成果管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-aside>
      <el-container>
          <el-header>
            <Header/>
          </el-header>
          <el-main @changetable="handleEvent($)">
            <LabManagement v-if="LabManagementVisible"/>
            <DeviceManagement v-if="DeviceManagementVisible"/>
            <DeviceVerify v-if="DeviceVerifyVisible"/>
            <DeviceHistory v-if="DeviceHistoryVisible"/>
            <AchievementManagement v-if="AchievementManagementVisible"/>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Header from "./Header.vue";
import LabManagement from "./LabManagement.vue";
import AchievementManagement from "@/components/AchievementManagement.vue";
import DeviceManagement from "@/components/DeviceManagement.vue";
import DeviceVerify from "@/components/DeviceVerify.vue";
import DeviceHistory from "@/components/DeviceHistory.vue";

export default {
  data() {
    return {
      LabManagementVisible : true,
      DeviceManagementVisible : false,
      DeviceVerifyVisible : false,
      DeviceHistoryVisible :false,
      AchievementManagementVisible :false,
    }
  },
  components: {
    LabManagement,
    Header,
    DeviceManagement,
    AchievementManagement,
    DeviceVerify,
    DeviceHistory,
  },
  methods: {
    lab() {
      this.LabManagementVisible = true;
      this.DeviceManagementVisible = false;
      this.DeviceVerifyVisible = false;
      this.DeviceHistoryVisible = false;
      this.AchievementManagementVisible = false;
    },
    device1() {
      this.LabManagementVisible = false;
      this.DeviceManagementVisible = true;
      this.DeviceVerifyVisible = false;
      this.DeviceHistoryVisible = false;
      this.AchievementManagementVisible = false;
    },
    device2() {
      this.LabManagementVisible = false;
      this.DeviceManagementVisible = false;
      this.DeviceVerifyVisible = true;
      this.DeviceHistoryVisible = false;
      this.AchievementManagementVisible = false;
    },
    device3() {
      this.LabManagementVisible = false;
      this.DeviceManagementVisible = false;
      this.DeviceVerifyVisible = false;
      this.DeviceHistoryVisible = true;
      this.AchievementManagementVisible = false;
    },
    achievement() {
      this.LabManagementVisible = false;
      this.DeviceManagementVisible = false;
      this.DeviceVerifyVisible = false;
      this.DeviceHistoryVisible = false;
      this.AchievementManagementVisible = true;
    },
  }
}
</script>

<style>
html, body{
    margin: 0;
    padding: 0;
    height: 100%;
}

.el-container{
    height: 100%;
}

.el-aside::-webkit-scrollbar{
    display: none;
}

LabManagement{
  display: none;
}

.logo{
  width: 100%;
}

.logo img{
  margin-top: 10px;
  margin-left: 0;
  width: 80%;
  height: 80%;
  object-fit: cover;
}

.sidebar {
  width: 200px;
  height: 100%;
  background: rgb(230, 240, 250);
}

.el-menu-vertical {
  margin-left: 20px;
  height: 100%;
  border: none;
  background: transparent;
}
</style>
