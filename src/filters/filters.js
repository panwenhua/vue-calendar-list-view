"use strict"

/** 历史订单详情--旅行者信息状态
 * item.state
 */
exports.inforTravsta = travstate => {
	let statetext = "";
	let numstatu=parseInt(travstate);
	switch(numstatu) {
		case 1:
			statetext = "待完善";
			break;
		case 2:
			statetext = "已通过";
			break;
		case 3:
			statetext = "已取消";
			break;
		default:
			statetext ="未知";
		break
	}
	return statetext;
}
