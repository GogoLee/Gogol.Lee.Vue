<<template>
  <el-menu :default-active="onRoutes" class="el-menu--dark" 
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
              <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
              <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
              </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"><i :class="item.icon"></i>{{ item.title }}</el-menu-item>
        </template>
      </template>
      
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      items: [
        {
          icon: "el-icon-menu",
          index: "home",
          title: "主页"
        },
        {
          icon: "el-icon-tickets",
          index: "2",
          title: "表格",
          subs: [
            {
              index: "datatable",
              title: "常规表格"
            },
            {
              index: "datasource",
              title: "组件表格"
            }
          ]
        },
        {
          icon: "el-icon-document",
          index: "3",
          title: "表单",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "form_validate",
              title: "表单验证"
            },
            {
              index: "table",
              title: "表格"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

