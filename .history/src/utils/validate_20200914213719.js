/**
 * 过滤特殊字符串
 */

import { fround } from "core-js/fn/number";

 export function stripscript(s){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？↵\r\n]");
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }   
    return rs;
}

export function validateEmail(value){
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!reg.test(value)){
        return false
    }else{
        return true
    }
}