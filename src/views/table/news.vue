<template>
  <div class="app-container" :data="users" style=" text-align:center !important;">
      <el-table :data="users"  style="width: 100%;">
      <el-table-column prop="id" label="序号" min-width="50">
      </el-table-column>
      <el-table-column prop="user" label="作者" min-width="80">
      </el-table-column>
      <el-table-column prop="type" label="类型" min-width="100">
      </el-table-column>
      <el-table-column prop="title" label="标题" min-width="110">
      </el-table-column>
      <el-table-column prop="article" label="内容" min-width="110">
      </el-table-column>
      <el-table-column prop="createdAt" label="进入时间" min-width="80">
      </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间" min-width="80">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small" icon="delete" :disabled="selected.length==1">编辑</el-button>
        <el-button type="text" size="small" icon="edit" :disabled="selected.length==2">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination class="tc mg" :current-page="filter.page" :page-sizes="[10, 20, 50, 100]" :page-size="filter.per_page" layout="total, sizes, prev, pager, next, jumper" :total="total_rows" @size-change="pageSizeChange" @current-change="pageCurrentChange">
    </el-pagination>
  </div>
</template>
<style>
.el-table th {
    white-space: nowrap;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center !important;
}
</style>


<script>

export default {
  data: function() {
    return {
      url: "http://101.132.172.106:9001/news",
      users: [],
      filter: {
        per_page: 10, // 页大小
        page: 1, // 当前页
        name: "",
        username: "",
        phone: "",
        is_active: "",
        sorts: ""
      },
      total_rows: 0,
      loading: true,
      selected: [],
      users:null
    };
  },
  methods: {
    pageSizeChange(val) {
      this.filter.per_page = val;
      this.getUsers();
    },
    pageCurrentChange(val) {
      this.filter.page = val;
      this.getUsers();
    },
    // query() {
    //     this.filter.is-dark = "";
    //     this.filter.username = "";
    //     this.filter.phone = "";
    //     this.filter[this.select] = this.keywords;
    //     this.getUsers();
    // },
    // 获取用户列表
    async getUsers() {
      this.loading = true;

      var resource = await this.$http.get(this.url);
      console.log(resource.data.result);
      this.users = resource.data.result;
    }
  },
  mounted() {
    this.getUsers();
    console.log("table mouted!");
    console.log(this.getUsers)
  }
};
</script>
