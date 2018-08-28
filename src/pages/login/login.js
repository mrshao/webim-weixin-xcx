let WebIM = require("../../utils/WebIM")["default"];

Page({
	data: {
		name: "",
		psd: "",
		grant_type: "password"
	},
	bindUsername: function(e){
		this.setData({
			name: e.detail.value
		});
	},
	bindPassword: function(e){
		this.setData({
			psd: e.detail.value
		});
	},
	onLoad: function(){
		// this.login()
	},
	login: function(){
		// console.log('login')
		var that = this;
		if(that.data.name == ""){
			wx.showModal({
				title: "请输入用户名！",
				confirmText: "OK",
				showCancel: false
			});
		}
		else if(that.data.psd == ""){
			wx.showModal({
				title: "请输入密码！",
				confirmText: "OK",
				showCancel: false
			});
		}
		else{
			var options = {
				apiUrl: WebIM.config.apiURL,
				user: that.data.name,
				pwd: that.data.psd,
				grant_type: that.data.grant_type,
				appKey: WebIM.config.appkey
			};
			wx.setStorage({
				key: "myUsername",
				data: that.data.name
			});
			// console.log('open')
			WebIM.conn.open(options);
		}
	}
});