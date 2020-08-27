import http from './http';
import stat from './stat';

export default{
	initConfig:(reqUrl, callback) => {
		http.post("api/h5/sign",{
			"url":reqUrl
		}).then((resp) => {
			if(resp.code == 0){
				const {signature,appId,nonceStr,timestamp} = resp.data;
				wx.config({
					debug:false,
					signature,
					appId,
					nonceStr,
					timestamp,
					jsApiList:['chooseImage','getLocalImgData','uploadImage','closeWindow','updateAppMessageShareData','updateTimeLineShareData','onMenuShareAppMessage','onMenuShareTimeline']
				})
				callback&&callback()
			}
		})
	},
	setShare:(title, desc, imgUrl) => {
		const origin = window.location.origin+"/appid"
		wx.ready(function(){
			wx.onMenuShareAppMessage({
				title,
				desc,
				link:origin,
				imgUrl,
				success:function(){
					stat.tongji('share')
				}
			})

			wx.onMenuShareTimeline({
				title,
				link:origin,
				imgUrl,
				success:function(){
					stat.tongji('share')
				}
			})
		})
	}
}