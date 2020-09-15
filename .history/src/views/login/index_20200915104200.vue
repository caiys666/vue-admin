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
                    <el-input 
                        type="password" v-model="ruleForm2.password" auto-complete="off"
                        minlength="6" maxlength="20"
                    ></el-input>
                </el-form-item>
                <el-form-item 
                    prop="passwords" 
                    class="item-form"
                    v-if="model === 'register'">
                    <label>重复密码</label>
                    <el-input 
                        type="password" v-model="ruleForm2.passwords" auto-complete="off"
                        minlength="6" maxlength="20"
                    ></el-input>
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
import { onMounted, reactive, ref } from '@vue/composition-api'
import { stripscript, validateEmail, validatePwd, validateCode_ } from '@/utils/validate.js'
export default {
    name: 'login',
    setup(props,context){
        //放置data数据、生命周期、自定义函数
        const menuTab = reactive([
                {txt: '登陆', current :true, type: 'login'},
                {txt: "注册", current :false, type: 'register'}
            ])
        //模块值
        const model = ref('login')

        /**
         * 声明函数
         */
        const toggleMenu = (data =>{
            this.menuTab.forEach(ele =>{
                ele.current = false
            })
            this.model = data.type
            data.current = true
        })
        const submitForm = (formName =>{
            this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        })


        /**
         * 生命周期函数
         */
        onMounted(() => {

        })

        return{
            menuTab,
            model,
            toggleMenu,
            submitForm
        }

    },
    data() {
      // 正则邮箱
      var validateUsername = (rule, value, callback) => {
        // let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value === '') {
           callback(new Error('请输入邮箱'));
        } else if(!validateEmail(value)){
            callback(new Error('邮箱格式不正确'));
        }else{
            callback();
        }
      };
      // 正则密码
      var validatePassword = (rule, value, callback) => {
        // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
        this.ruleForm2.password = stripscript(value);
        value = this.ruleForm2.password ;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!validatePwd(value)){
            callback(new Error('密码格式不正确'));
        }else{
            callback();
        }
      };
      var validatePasswords = (rule, value, callback) => {
        // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
        if(this.model === 'login'){callback()}
        this.ruleForm2.passwords = stripscript(value);
        value = this.ruleForm2.passwords ;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value != this.ruleForm2.password){
            callback(new Error('重复密码不正确'));
        }else{
            callback();
        }
      };
      // 正则验证码
       var validateCode = (rule, value, callback) => {
        // let reg = /^[a-z0-9]{6}$/;
        this.ruleForm2.code = stripscript(value);
        value = this.ruleForm2.code ;
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        else if(!validateCode_(value)){
            callback(new Error('验证码格式不正确'));
        }else{
            callback();
        }
      };
        return {
            menuTab:[
                {txt: '登陆', current :true, type: 'login'},
                {txt: "注册", current :false, type: 'register'}
            ],
            ruleForm2: {
            username: '',
            password: '',
            passwords: '',
            code: ''
        },
        model: 'login',
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
        cursor: pointer;
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
