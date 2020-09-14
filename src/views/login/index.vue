<template>
    <div id="login">
       <div class="login-wrap">
           <ul class="menu-tab">
               <li  v-for="item in menuTab"
                    :key="item.id"
                    :class="{'current': item.current}" 
                    @click="toggleMenu(item)">
                   {{item.txt}}
                </li>
           </ul>
           <!--表单-->
           <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="login-form">
                <el-form-item  prop="username" class="item-form">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-form">
                    <label>密码</label>
                    <el-input 
                        type="text" v-model="ruleForm2.password" auto-complete="off" 
                        minlegth='6' maxlength='20'></el-input>
                </el-form-item>
                <el-form-item prop="passwords" class="item-form" v-if="model === 'register'">
                    <label>重复密码</label>
                    <el-input 
                        type="text" v-model="ruleForm2.passwords" auto-complete="off" 
                        minlegth='6' maxlength='20'></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="16">
                        <el-col :span="15"><el-input v-model.number="ruleForm2.code"></el-input></el-col>
                        <el-col :span="9"><el-button type='success'>获取验证码</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>

                    <el-button type="primary" @click="submitForm('ruleForm2')" class="block">提交</el-button>
                </el-form-item>
           </el-form>
       </div>
       
    </div>
</template>
<script>
import { stripscript } from '@/utils/validate.js'
export default {
    name:"login",
    data(){
      var validateUsername = (rule, value, callback) => {
           let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(!reg.test(value)){
          callback(new Error('用户名格式错误'));
        }else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        //   console.log(stripscript(value))
        this.ruleForm2.password =  stripscript(value)
        value = this.ruleForm2.password
          //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
          let reg  = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!reg.test(value)) {
          callback(new Error('密码格式错误'));
        } else {
          callback();
        }
      };
      var validatePasswords = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入重复密码'));
        } else if (value != this.ruleForm2.password) {
          callback(new Error('密码格式错误'));
        } else {
          callback();
        }
      };
      var validateCode = (rule, value, callback) => {
        // this.ruleForm2.code =  stripscript(value)
        // value = this.ruleForm2.code
        let reg = /^[a-zA-Z0-9]{6}$/;
        if (value === '') {
          return callback(new Error('验证码不能为空'));
        }else if(!reg.test(value)){
            return callback(new Error('验证码格式错误'))
        }else{
            callback();
        }
      };
        return{
            menuTab:[
                {txt:"登陆", current:true, type: 'login'},
                {txt:"注册", current:false,  type: 'register'}
            ],
            model: 'login',
            ruleForm2: {
            username: '',
            password: '',
            passwords: '',
            code: ''
            },
            rules2: {
            username: [
                { validator: validateUsername, trigger: 'blur' }
            ],
            password: [
                { validator: validatePassword, trigger: 'blur' }
            ],
            passwords: [
                { validator: validatePasswords, trigger: 'blur' }
            ],
            code: [
                { validator: validateCode, trigger: 'blur' }
            ]
            }
        }
    },        
    created(){},
    mounted(){},
    methods:{
        toggleMenu(data){
            console.log(data)
            this.menuTab.forEach(elem =>{
                elem.current = false
            })
            data.current = true
            this.model = data.type
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
    },
    props:{

    },
    watch:{

    }
};
</script>

<style lang= 'scss' scoped>
#login{
    margin-top: 50px;
    height: 100vh;
    background-color:white;
}
.login-wrap{ 
    width: 330px;
    margin: auto;
}
.menu-tab{
    margin:0 auto;
    li {
        display: inline-block;
        text-align: center;
        width: 100px;
        background-color: #E2E3DC;
        line-height: 36px;
        font-size: 14px;
        color: #000;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color:#8f928f;
    }
}
.login-form{
    margin-top: 30px;
    labal{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
    }
    .item-form{margin-bottom: 13px;}
    .block{
        display: block;
        width: 100%;
        margin-top: 19px;
    }
}

</style>
