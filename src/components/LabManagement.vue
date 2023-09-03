<template>
    <div class="flex">
      <el-input class="input" v-model="input" placeholder="请输入需要搜索的实验室"/>
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary">
        上传<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
        <el-button type="primary">
          删除<el-icon class="el-icon--right"><Delete /></el-icon>
        </el-button>
    </div>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="实验室名称" width="180" />
    <el-table-column prop="id" label="实验室编号" width="180" />
    <el-table-column prop="admin" label="实验室管理员" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '曼哈顿计划',
          id: '001',
          admin: 'Oppenheimer',
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