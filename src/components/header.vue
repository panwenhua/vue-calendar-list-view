<template>
	<header :class="opa==false?{white: true}:{black: true}">
		<a :class="getBackClass" v-if="backType" @click="aBtn()">
		</a>
		<span v-text="pageName"></span>
		<a v-if="clickBtn" @click="clickAction" v-html="clickBtn" class="rightButton">
		</a>
	</header>
</template>

<script>
export default {
	props: ['pageName', 'backAction', "backType", "goback", "clickBtn", "clickAction", "opa"],
	computed: {
		getBackClass() {
			let back = {
				back: true,
				backWhite: false
			};
			if (this.opa == false) {
				back['back'] = false;
				back['backWhite'] = true;
			}
			return back;
		},
	},
	methods: {
		aBtn() {
			if (this.backAction) {
				this.backAction();
			}
		}
	},

}
</script>
<style lang="sass" scoped>
	.rightButton {
		position: absolute;
		right: 20px;
		top: 0px;
		font-size: 26px;
		/*px*/
		color: #666666;
		letter-spacing: 0px;
	}
	
	.black {
		background: #F9F8F8;
		box-shadow: 0px 1px 0px 0px #959595;
	}
	
	.white {
		color: #FFFFFF;
	}
	
	header {
		font-size: 36px;
		/*px*/
		height: 88px;
		line-height: 88px;
		a:nth-of-type(1) {
			width: 20px;
			height: 34px;
			position: absolute;
			left: 20px;
			top: 27px;
			&.back {
				background: url(../assets/images/components/black_back@2x.png) no-repeat;
				background-size: 100% 100%;
			}
			&.backWhite {
				background: url(../assets/images/components/black_white@2x.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		span {
			width: 100%;
			display: block;
			text-align: center;
		}
	}
</style>