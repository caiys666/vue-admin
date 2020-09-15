import service from '@/utils/request.js'
/**
 * 获取验证码的接口
 */
export function GetSms(){
    service.request({
        method: 'post',
        url: '/GetSms/',
        data: {}
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

    