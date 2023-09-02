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
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    };
  },
  methods: {
    
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