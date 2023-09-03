<template>
  <div class="flex">
    <el-input class="input" v-model="input" placeholder="请输入需要搜索的设备"/>
    <el-button type="primary" :icon="Search">搜索</el-button>
    <el-button type="primary">
      上传<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
    <el-button type="primary">
      删除<el-icon class="el-icon--right"><Delete /></el-icon>
    </el-button>
  </div>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="devicename" label="设备名称" width="180" />
    <el-table-column prop="deviceid" label="设备编号" width="180" />
    <el-table-column prop="deviceadmin" label="设备管理员" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          devicename: '电脑',
          deviceid: '1',
          deviceadmin: '老板',
        },
      ]
    };
  }
};
</script>



<style scoped>
.input{
  margin-right: 5px;
  width:25%;
}

.flex{
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: left;
}
</style>