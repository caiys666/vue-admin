import service from '@/utils/request.js'
/**
 * 获取验证码的接口
 */
export function getSms(data){
    return service.request({
        method: 'post',
        url: '/getSms/',
        data: data
        // data: data 左边的data是变量名（key）后台接收的  右边的data是接收的参数 两个同名可以写成一个即可（ES6）
    })
}


/**
 * 获取用户角色
 */

/**
 * 登陆
 */

/**
* 注册
*/
export function Register(data){
    return service.request({
        method: 'post',
        url: '/register/',
        data: data
        // data: data 左边的data是变量名（key）后台接收的  右边的data是接收的参数 两个同名可以写成一个即可（ES6）
    })
}
    