<<template>
  <div class="el-row" style="height:100%">
      <el-container class="wrapper">
        <el-aside width="200px"><v-sidebar></v-sidebar></el-aside>
      <el-container>
        <el-header>
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
  components:{
    vSidebar,vHead
  }
}
</script>
