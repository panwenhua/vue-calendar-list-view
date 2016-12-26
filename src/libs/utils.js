'use strict'

import Env from '../../config/env.js';
let getCheck = {
	checkEmail: function(val) {
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkPhone: function(val) {
		var filter = /^[1][34578][0-9]{9}$/;

		if(filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkPassword: function(val) {
		var filter = /^[0-9A-Za-z]{6,20}$/;

		if(filter.test(val)) {
			return true;
		} else {
			return false;
		}
	},
	checkIOS: function() {
		//判断是否IOS或者安卓
		var u = navigator.userAgent;
		//var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
		if(isiOS) {
			return true;
		} else {
			return false;
		}
	},
	checkWechat: function() {
		var ua = window.navigator.userAgent.toLowerCase();
		return ua.match(/MicroMessenger/i) == 'micromessenger';
	}
}
exports.getCheck = getCheck;