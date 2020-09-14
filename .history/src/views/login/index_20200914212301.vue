<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li 
                v-for="item in menuTab" 
                :key="item.id" 
                :class="{'current':item.current}"
                @click="toggleMenu(item)"
                >{{item.txt}}</li>
            </ul>

            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="login-form">
                <el-form-item  prop="username" class="item-form">
                    <label>邮箱</label>
                    <el-input type="password" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="15">
                        <el-col :span="15"><el-input v-model.number="ruleForm2.code"></el-input></el-col>
                        <el-col :span="9"><el-button type="primary">获取验证码</el-button></el-col>
                    </el-row>
                    
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm2')" class="block">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>
<script>

export default {
    name: 'login',
    data() {
      var validateUsername = (rule, value, callback) => {
          let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value === '') {
           callback(new Error('请输入邮箱'));
        } else if(!reg.test(value)){
            callback(new Error('邮箱格式不正确'));
        }else{
            callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!reg.test(value)){
            callback(new Error('密码格式不正确'));
        }else{
            callback();
        }
      };
       var validateCode = (rule, value, callback) => {
           let reg = /^[a-z0-9]{6}$/
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        else if(!reg.test(value)){
            callback(new Error('验证码格式不正确'));
        }else{
            callback();
        }
      };
        return {
            menuTab:[
                {txt: '登陆', current :true},
                {txt: "注册", current :false}
            ],
            ruleForm2: {
          username: '',
          password: '',
          code: ''
        },
        rules2: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }
        }
    },
    methods:{
        toggleMenu(data){
            this.menuTab.forEach(ele =>{
                ele.current = false
            })
            data.current = true
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
};
</script>

<style lang= 'scss' scoped>
#login{
    height: 100vh;
    background-color: rgb(234, 240, 238);
}
.login-wrap{
    width: 330px;
    margin: auto;
}
.menu-tab{
    text-align: center;
    li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #000;
        border-radius: 2px;
    }
}
.current{
    background-color: slategray;
}
.login-form{
    margin-top: 29px;
    label{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #000;

    }
}
.item-form{
    margin-bottom: 13px;
}
.block{
    width: 100%;
    display: block;
    margin-top: 19px;
}

</style>
