<<template>
  <div class="el-row" style="height:100%">
      <el-container class="wrapper">
        <el-aside width="200px"><v-sidebar :toggle="isCollapse"></v-sidebar></el-aside>
      <el-container>
        <el-header>
          <a class="collpad"  @click="toggleSidebar"><i class="fa fa-bars"></i></a>
          <ul class="header-operations"><li>切换主题色</li> <li class="header-download is-available">
        下载主题
      </li> <li>帮助</li> <li><span class="header-lang is-active">
          中文
        </span> <span>/</span> <span class="header-lang">
          En
        </span></li></ul>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<<script>
import vSidebar from './sidebar.vue'
import vHead from './header.vue'
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  components:{
    vSidebar,vHead
  },
  methods:{
    toggleSidebar(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        document.querySelector('.el-aside').style.width = '65px';
      }else{
        document.querySelector('.el-aside').style.width = '200px';
      }
      this.$http.get('/api/list').then(response => {
            console.log(response.body);
            console.log(response.body.data);
        }, response => {
            console.log(response);
        });
    }
  }
}
</script>
