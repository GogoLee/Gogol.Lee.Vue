<template>
  <div class="content">
      <el-card class="box-card" style="text-align:left;">
        vue-datasource：一个用于动态创建表格的vue.js服务端组件。访问地址：<a href="https://github.com/coderdiaz/vue-datasource" target="_blank">vue-datasource</a>
      </el-card>
      <!-- <server-datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                :actions="actions"
                v-on:change="changePage"
                v-on:searching="onSearch"></server-datasource> -->
      <!-- <server-datasource :source="items"
        :total="total"
        :columns="columns"
         ></server-datasource> -->
  </div>
</template>
<script>
    // import axios from 'axios';
    // import { ServerDatasource } from 'vue-datasource'
    export default {
        data: function(){
            const self = this;
            return {
              items: [
                {
                  'name':'javk'
                }
              ],
              total: 100,
              columns: [
                {
                    name: 'Name', // Table column name to display
                    key: 'name', // Key name from row object
                }
              ]
             
            }
        }
    }
</script>