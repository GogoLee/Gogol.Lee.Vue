<template>
    <div class="form-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:25px;">
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>基本表单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="表单名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-col :span="4">
                    <el-select v-model="form.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="日期时间">
                <el-col :span="8">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="4">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="选择开关">
                <el-col :span="1"><el-switch on-text="" off-text="" v-model="form.delivery"></el-switch></el-col>
            </el-form-item>
            <el-form-item label="多选框">
                <el-col :span="9">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="饿了么" name="type"></el-checkbox>
                        <el-checkbox label="美团" name="type"></el-checkbox>
                        <el-checkbox label="口碑" name="type"></el-checkbox>
                        <el-checkbox label="百度外卖" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-col>
            </el-form-item>
            <el-form-item label="单选框">
                <el-col :span="7">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="吃了吗"></el-radio>
                        <el-radio label="想吃吗"></el-radio>
                        <el-radio label="饿了么"></el-radio>
                    </el-radio-group>
                </el-col>
            </el-form-item>
            <el-form-item label="文本框">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
  data: function() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: true,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message.success("提交成功！");
    }
  }
};
</script>