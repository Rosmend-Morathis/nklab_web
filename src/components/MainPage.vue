<template>
  <el-container>
      <el-aside width="200px">
          <Sidebar/>
      </el-aside>
      <el-container>
          <el-header>
            <Header/>
          </el-header>
          <el-main>
            <Genshin/>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>

import Sidebar from './Sidebar.vue';
import Header from "./Header.vue";
import Genshin from "./Genshin.vue";
export default {
  data(){
      return{
        c: ""
      }
  },
  components:{
    Header,
    Sidebar,
    Genshin,
  },
  methods:{
    mounted(){
      console.log(789465);
      this.$bus.on('message', data=>{
        this.c = data;
        console.log(this.c);
      })
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
</style>
