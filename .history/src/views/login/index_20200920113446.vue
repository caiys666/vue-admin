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
                    <label for="username">邮箱</label>
                    <el-input id="username" type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-form">
                    <label for="password">密码</label>
                    <el-input 
                        id="password"
                        type="password" v-model="ruleForm2.password" auto-complete="off"
                        minlength="6" maxlength="20"
                    ></el-input>
                </el-form-item>
                <el-form-item 
                    prop="passwords" 
                    class="item-form"
                    v-if="model === 'register'">
                    <label for="password1">重复密码</label>
                    <el-input 
                        id="password1"
                        type="password" v-model="ruleForm2.passwords" auto-complete="off"
                        minlength="6" maxlength="20"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label for="code">验证码</label>
                    <el-row :gutter="15">
                        <el-col :span="15"><el-input id="code" v-model="ruleForm2.code"></el-input></el-col>
                        <el-col :span="9">
                            <el-button type="primary" @click="getsms()" :disabled="codeButtonstatus.status">
                                {{codeButtonstatus.text}}
                            </el-button></el-col>
                    </el-row>
                    
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="danger" 
                        @click="submitForm('ruleForm2')" 
                        class="block"
                        
                    >{{model === 'login' ? "登陆" : "注册"}}</el-button>
                </el-form-item>
            </el-form>
        </div> 
    </div>
</template>
<script>
import sha1 from 'sha1'
import { getSms, Register, Login } from '@/api/login.js'
import { onMounted, reactive, ref } from '@vue/composition-api'
import { stripscript, validateEmail, validatePwd, validateCode_ } from '@/utils/validate.js'
export default {
    name: 'login',
    
    setup(props,{refs,root}){
        //测试
      // 正则邮箱
      let validateUsername = (rule, value, callback) => {
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
      let validatePassword = (rule, value, callback) => {
        // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
        ruleForm2.password = stripscript(value);
        value = ruleForm2.password ;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(!validatePwd(value)){
            callback(new Error('密码格式不正确'));
        }else{
            callback();
        }
      };
      let validatePasswords = (rule, value, callback) => {
        // let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
        if(model.value === 'login'){callback()}
        ruleForm2.passwords = stripscript(value);
        value = ruleForm2.passwords ;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value != ruleForm2.password){
            callback(new Error('重复密码不正确'));
        }else{
            callback();
        }
      };
      // 正则验证码
       let validateCode = (rule, value, callback) => {
        // let reg = /^[a-z0-9]{6}$/;
        ruleForm2.code = stripscript(value);
        value = ruleForm2.code ;
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        else if(!validateCode_(value)){
            callback(new Error('验证码格式不正确'));
        }else{
            callback();
        }
      };
        //放置data数据、生命周期、自定义函数 reactive
        const menuTab = reactive([
                {txt: '登陆', current :true, type: 'login'},
                {txt: "注册", current :false, type: 'register'}
            ])
        //模块值 ref
        const model = ref('login');
        //登陆按钮禁用状态
        const loginButtonStatus = ref(true);
        //验证码禁用状态
        const codeButtonstatus = reactive(
            {
                status: false,
                text: '发送验证码'
            }
        )
        //倒计时
        const timer = ref(null)
        
        /**
         * 表单数据
         */
        const ruleForm2 = reactive({
            username: '',
            password: '',
            passwords: '',
            code: ''
        })
        const rules2 = reactive({
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
        })

        /**
         * 声明函数
         */
        const toggleMenu = (data =>{
            menuTab.forEach(ele =>{
                ele.current = false;
            })
            model.value = data.type;
            data.current = true;
            //重置表单
            refs.ruleForm2.resetFields();
            clearCountDown();
        })

        /**
         * 提交表单
         */
        const submitForm = (formName =>{
            refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');

                //三元运算
                model.value === 'login' ? login() : register();
            } else {
                console.log('error submit!!');
                return false;
            }
            })
        });

        /**
         * 登陆
         */
        const login = (() => {
            let Requestdata = {
                username: ruleForm2.username,
                password: sha1(ruleForm2.password),
                code: ruleForm2.code,
            }
            Login(Requestdata).then(response => {
                console.log('登陆')
                /**
                 * 路由跳转
                 */
                root.$router.push({
                    name: 'Console'
                });

            }).catch(error => {
                root.$router.push({
                    name: 'Console'
                });
            })
        })

        /**
         * 更新button状态
         */
        const updataButtonStatus = ((params) => {
            codeButtonstatus.status = params.status,
            codeButtonstatus.text = params.text
        })

        /**
         * 注册
         */
        const register = (() => {
            let Requestdata = {
                username: ruleForm2.username,
                password: sha1(ruleForm2.password),
                code: ruleForm2.code,
                module: 'register'
            }
            //注册接口
            Register(Requestdata).then(response => {
                console.log(response)
                let data = response.data
                root.$message({
                    message:data.message,
                    type: 'success'
                })
                toggleMenu(menuTab[0])
                clearCountDown()
            }).catch(error => {
                //失败时执行的代码
            })
        })


       /**
        * 获取验证码
        */
       const getsms = (() =>{
           let requesedata = {
               username : ruleForm2.username,
               module: model.value
           }
           //进行提示
           if(ruleForm2.username === ''){
               root.$message.error('邮箱不能为空');
               return false
           }

        //    if(validateEmail(ruleForm2.username)){
        //        root.$message.error('邮箱格式有误');
        //        return false
        //    }

            const updataButtonStatus = reactive({
                status: true,
                text: '验证码已发送'
            })
            setTimeout(() => {
                    getSms(requesedata).then(response => {
                        let data = response.data
                        codeButtonstatus.text = '发送中'
                        countDown(5)
                        root.$message({
                            message: data.message,
                            type: 'success'
                        })
                    })
            },3000)
        })

        /**
         * 倒计时
         */
        const countDown = ((number) => {
            //判断计时器是否存在
            if(timer.value){
                clearInterval(timer.value)
            }

            //setTimeout 只执行一次  clearTimeout()
            //setInterval 不断执行 需要条件  clearInterval()

            let time = number
            timer.value = setInterval(() => {
                time--
                if(time === 0){
                    clearInterval(timer.value)
                    updataButtonStatus({
                        status: false,
                        text: '再次获取'
                    })
                }else{
                    codeButtonstatus.text = `倒计时${time}秒` //es6写法
                }   
            },2000)
        })
        /**
         * 清除倒计时
         */

        const clearCountDown = (() => {
            //还原验证码默认状态
            
            updataButtonStatus({
                status: false,
                text: '获取验证码'
            })
            //清除倒计时
            clearInterval(timer.value)

            // const codeButtonstatus = reactive(
            //     {
            //         status: false,
            //         text: '发送验证码'
            //     }
            // )
        })


        /**
         * 生命周期函数
         */
        // 挂载完成后
        onMounted(() => {
           
        })

        return{
            menuTab,
            model,
            toggleMenu,
            submitForm,
            ruleForm2,
            rules2,
            getsms,
            loginButtonStatus,
            codeButtonstatus,
            timer
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
