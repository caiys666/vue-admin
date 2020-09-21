import Vue from 'vue'
import SvgIcon from './SvgIcon'
Vue.component('svg-icon',{
    template: "<div>{{msg}}</div>",
    data() {
      return {
        msg: '学习'
      }
    },
  })