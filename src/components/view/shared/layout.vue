<<template>
  <div class="el-row">
      <el-container>
        <el-aside width="200px"><v-sidebar></v-sidebar></el-aside>
      <el-container>
        <el-header><v-head></v-head></el-header>
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
