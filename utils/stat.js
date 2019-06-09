import http from './http'

export default{
	tongji:function(page){
		var wxid = 'xxxx';
		var page = page;
		http.post("api/h5/stat",{
			app:"appid",
			wxid,
			page
		}).then((res) =>{
		}).catch((err) => {
		})
	}
}