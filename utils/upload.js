import http from './http';

export default{
	saveToQiniu:function(sid,callback) {
	  http.post('api/h5/uploadimg',{
	  	sid
	  }).then((res) => {
	  	callback&&callback(res)
	  }).catch((err) => {
      console.log(err)
	  })
	}
}