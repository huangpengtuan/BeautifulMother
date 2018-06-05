// 海报
const tempStr = `
	<div id="h_body">
		<div class="h_vote_visit">
		    <label id="h_sign_up">{{headInfo.all_sign}}</label>
		    <label id="h_number_of_votes">{{headInfo.all_vote}}</label>
		    <label id="h_Visit">{{headInfo.all_num}}</label>
		</div>


	    <input @focus="PromptFadeOut()" @blur="PromptFadeOut()" type="text" id="h_name" maxlength="12">
	    <input @focus="PromptFadeOut()" @blur="PromptFadeOut()" type="text" id="h_phone" oninput="if(value.length>11)value=value.slice(0,11)" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
	    
	    <div id="select_contact" maxlength="35"></div>

		<div class="h_photo">
		    <form id="form">
		        <input id="js-file" type="file" accept="image/jpeg,image/x-png" style="display:none;"/>
		    </form>
		    <div id="uploadFile" href="javascript:void(0);" class="btn btn-lg btn-outline"></div>
		
		    
		
		    
		</div>
		
		<div id="result"></div>
		
		<textarea id="h_declaration" @focus="PromptFadeOut()" @blur="PromptFadeOut()" placeholder="最多填50个字" maxlength="50"></textarea>		
		
		<button @click="submitFn()" id="h_myself_sign_up"></button>
	  	<div class="baoming_successMask">
	  		<div class="home_isVipBigBox">
	  			<img src="img/baomingSuccess.png" class="home_isVipImg"/>
				<p class="baoming_success_Text">
					恭喜你成为<span class="colorYollow">第{{xuanshouNum}}号</span>选手,<br/>
					现在就去为自己拉票吧!
				</p>
				<div @click="MaskFadeIn('.My_shareMask')" class="baoming_success_Btn"></div>						  		
	  		</div>
	  		<div class="home_isVipMask_close" @click="MaskFadeOut('.baoming_successMask')"></div>
	  	</div>		
		
		
	  	<div @click="goOther('/my')" class="My_shareMask">
	  		<img src="img/Mylapiao.png" class="My_lapiaoImg"/>			  		
	  	</div>				

	</div>
`;

var data = {   
	publicUrl:"http://zmmm.sf-companion.com/zgame/?m=zmmm",
	withCredentials:true,
	shareTitle:'顺丰中西大区最美妈妈评选',
	shareDesc:'快来投票报名吧！',	
	resultUrl:'http://ucmp.sf-express.com/wxaccess/weixin/activity/wxjzmmm',	// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	shareImgUrl:'http://newtest2.szbiu.com/test/hpt/BeautifulMother/img/share.jpg',			//分享图标
	xuanshouNum:'',
	headInfo:[],	
	innerHeight:'',
};


const woyaobaoming = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
    	this.init();
		this.shareUrlFn();		
		this.flieUpFn();	
		this.areaFn();
   	},    
    methods:{
    	//初始化
    	init:function(){
    		var that = this ;
    		that.innerHeight = window.innerHeight; 	//获取视口高度，后面备用
    		$('#h_body').css("height",that.innerHeight);
    		
	        //获取头部数据信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_all_data_info',               
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
					if(result.errorCode == 0){	
						that.headInfo = result.result;
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })	    		   		
			//获取分享链接
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_share_url',               
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
					if(result.errorCode == 0){	
						that.resultUrl = result.result;	
					}		            			            	
	            }
	        })    		
   		
    	},
    	//蒙版出现
    	submitFn:function(a){
    		var that = this ; 
    		var momName= $('#h_name').val();
    		var momPhone= $('#h_phone').val();
    		var momCity= $('#select_contact').html();

	        var imgLength = $('#result img').length;
	        var ImgArr = [];
	        for(var i = 0 ;i< imgLength;i++){
		        if (i == 0) {
		            ImgArr.push(localStorage.getItem("UpflieImg_1"));
		        }else if (i == 1) {
		            ImgArr.push(localStorage.getItem("UpflieImg_2"));
		        }else if (i == 2){
		            ImgArr.push(localStorage.getItem("UpflieImg_3"));
		        } 	        	
	        }
	        console.log(ImgArr);
			var momXuanyan = $('#h_declaration').val();
			if(momName == '' || momName == null){
				alert('请填写名字！')
			}else if(momPhone == '' || momPhone == null){ that.check_phone(momPhone)
				alert('输入电话号码！')
			}else if(!that.check_phone(momPhone)){ 
				alert('输入正确的电话号码！')
			}else if(momCity == '' || momCity == null){
				alert('请填写城市！')
			}else if(imgLength == 0){
				alert('请上传一到三张图片！')
			}else if(momXuanyan == '' || momXuanyan == null){
				alert('请填参赛宣言！')
			}else{
		        $.ajax({
		            url: that.publicUrl,
		            data: {
		                a:'try_sign',
		                name:momName,
						phone:momPhone,
						city:momCity,
						info:momXuanyan,
						images:JSON.stringify(ImgArr),	                
		            },
		            dataType:"json",
		            xhrFields:{withCredentials:that.withCredentials},
		            success: function (result) {
		            	console.log(result)
						if(result.errorCode == 0){	
							$('.baoming_successMask').fadeIn();
							that.xuanshouNum = result.result;	
							//获取分享的链接
					        $.ajax({
					            url: that.publicUrl,
					            data: {
					                a:'get_share_url',               
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
					            	console.log(result)
									if(result.errorCode == 0){	
										that.resultUrl = result.result;	
				                           wx.onMenuShareAppMessage({
				                                title: that.shareTitle, // 分享标题
				                                desc: that.shareDesc, // 分享描述
				                                link: that.resultUrl,  // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				                                imgUrl: that.shareImgUrl, // 分享图标
				                                type: '', // 分享类型,music、video或link，不填默认为link
				                                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				                                success: function () {
				                                    $.ajax({
				                                        url: that.publicUrl,
				                                        data: {
				                                            a: "submit_share_info",
				                                        },
				                                        dataType: "json",
				                                        xhrFields: {withCredentials: that.withCredentials},
				                                        cache: false,
				                                        success: function (result) {
															
				
				                                        }
				                                    })
				
				                                },
				                                cancel: function () {
				                                }
				                            });
				                            wx.onMenuShareTimeline({
				                                title: that.shareTitle, // 分享标题
				                                desc: that.shareDesc, // 分享描述
				                                link: that.resultUrl,  // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				                                imgUrl: that.shareImgUrl, // 分享图标
				                                type: '', // 分享类型,music、video或link，不填默认为link
				                                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				                                success: function () {
				                                    $.ajax({
				                                        url: that.publicUrl,
				                                        data: {
				                                            a: "submit_share_info",
				                                        },
				                                        dataType: "json",
				                                        xhrFields: {withCredentials: that.withCredentials},
				                                        cache: false,
				                                        success: function (result) {
				
				                                        }
				                                    })
				                                },
				                                cancel: function () {
				                                }
				                            });										
									}		            			            	
					            }
					        })					        
						}else{
							alert(result.errorMsg);
						}		            			            	
		            }
		        })				
			}
    	},    	
    	//蒙版出现
    	MaskFadeIn:function(a){
    		$(a).fadeIn();
    		$('.baoming_successMask').fadeOut();
    	},
    	//蒙版消失
    	MaskFadeOut:function(a){
    		$(a).fadeOut();
    	},
    	//跳转
    	goOther:function(a){
    		var that = this ;
			that.$router.push(a); 																							
    	},    
    	//跳转
    	goOtherUrl:function(Url){
    		var that = this ;
    		window.location.href= Url ; 																							
    	},     	
    	//登录相关-----------------------------------------------------------------
    	//input获取焦点重置元素高度兼容安卓
    	PromptFadeOut:function(){
    		var that = this ;   		
    		var c = document.getElementById('h_body');
    		c.setAttribute('height', that.innerHeight);
    	}, 	   	
    	//手机号码校验
    	check_phone:function(phone){	
			var reg =/^(1[3,4,5,7,8][0-9])\d{8}$/;
			if(phone.length!=11){
			  return false;
			}else if ( !reg.test(phone)){
			  return false;
			}
			return true;	    		
    	},   	
    	//提交验证码和电话
		submitVeri:function(){
			var that = this;
			var Telephone = $("#SignIn_Input").val();			
			if(!that.check_phone(Telephone)){
				alert("您输入的手机号输入错误");
			}else{
				$("#spinner").fadeIn();
		        $.ajax({
		            url: that.publicUrl,
		            data: {
		                a:'try_login',
		                phone:Telephone,	
		            },
		            dataType:"json",
		            xhrFields:{withCredentials:that.withCredentials},
		            success: function (result) {
		            	$("#spinner").fadeOut();
						if(result.errorCode == 0){
							$(".SignIn-Mask").fadeOut();
							that.islogin = 	true;	
					        $.ajax({
					            url: that.publicUrl,
					            data: {
					                a:'get_share_url',               
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
					            	console.log(result)
									if(result.errorCode == 0){	
										that.resultUrl = result.result;	
									}		            			            	
					            }
					        })							
						}else{
							$(".SignInfail_Mask").fadeIn();
							//alert(result.errorMsg);
						}
						console.log(result);
		            }
		        })								
			}			
		}, 
    	//地区选择插件
		areaFn:function(){
			var that = this;
		   	var selectContactDom = $('#select_contact');
		    
		    selectContactDom.bind('click', function () {
		        var sccode = selectContactDom.attr('data-city-code');
		        var scname = selectContactDom.attr('data-city-name');
		
		        var oneLevelId = selectContactDom.attr('data-province-code');
		        var twoLevelId = selectContactDom.attr('data-city-code');
		        var threeLevelId = selectContactDom.attr('data-district-code');
		        var iosSelect = new IosSelect(3, 
		            [iosProvinces, iosCitys, iosCountys],
		            {
		                title: '地址选择',
		                itemHeight: 35,
		                relation: [1, 1],
		                oneLevelId: oneLevelId,
		                twoLevelId: twoLevelId,
		                threeLevelId: threeLevelId,
		                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {
		
		                    selectContactDom.attr('data-province-code', selectOneObj.id);
		                    selectContactDom.attr('data-city-code', selectTwoObj.id);
		                    selectContactDom.attr('data-district-code', selectThreeObj.id);
		                    selectContactDom.html(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
		                }
		        });
		    });




		}, 		
		//上传图片
		flieUpFn:function(){    
			var that = this ;
			
			var domain_name = "zmmm.sf-companion.com"   //常用域名，上线时需要修改
			var get_xiaobo
		
		
		    //TODO 上传图片，
		    //TODO 以下几个值请确保填上再调用示例里的sdk方法
		    //具体可以到https://console.qcloud.com/cos 进行查看
		    var bucket = 'yuxiu';
		    var appid = '1254105281';
		    var sid = 'AKIDytgNuGibbR6cw5t8xa9XksvpaAdv71oP';
		    var skey = 'nU0LZcXGwYzJSQDoHaifQ0ObcS7buz4y';
		    var region = 'gz';
		    //TODO 以上几个值请确保填上再调用示例里的sdk方法
		
		    var myFolder = '/aaa/';//需要操作的目录
		
		    //初始化逻辑
		    //特别注意: JS-SDK使用之前请先到console.qcloud.com/cos 对相应的Bucket进行跨域设置
		    var cos = new CosCloud({
		        appid: appid, // APPID 必填参数
		        bucket: bucket, // bucketName 必填参数
		        region: region, // 地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
		        getAppSign: function (callback) {//获取签名 必填参数
		            $.ajax({
		                    // async : false,
		                    url: "http://" + domain_name + "/zgame/index.php?m=zmmm",
		                    data: {
		                        a: 'get_cos_sign_info',
		                        folder: '/'
		                    },
		                    success: function (result) {
		                        callback(result)
		                    },
		                }
		            )
		        },
		        getAppSignOnce: function (callback) {//单次签名，参考上面的注释即可
		            $.ajax({
		                    // async : false,
		                    url: "http://" + domain_name + "/zgame/index.php?m=zmmm",
		                    data: {
		                        a: 'get_cos_sign_info',
		                        folder: '/'
		                    },
		                    success: function (result) {
		                        callback(result)
		                    },
		                }
		            )
		        }
		    });
		
		    var successCallBack = function (result) {
		        console.log(result);
		        $("#result").val(JSON.stringify(result));
		        get_xiaobo = result.data.access_url;
		        //缓存返回的图片地址，传给小波
		        get_Value()
		    };
		
		    function get_Value(){
		        var result_img = $('#result img').length
		        if (result_img==1) {
		            localStorage.setItem("UpflieImg_1", get_xiaobo);
		        }else if (result_img ==2) {
		            localStorage.setItem("UpflieImg_2", get_xiaobo);
		        }else {
		            localStorage.setItem("UpflieImg_3", get_xiaobo);
		        }
		    }
		    var errorCallBack = function (result) {
		        result = result || {};
		        console.log('request error:', result && result.message);
		        $("#result").val(result.responseText || 'error');
		    };
		    var progressCallBack = function (curr, sha1) {
		        var sha1CheckProgress = ((sha1 * 100).toFixed(2) || 100) + '%';
		        var uploadProgress = ((curr || 0) * 100).toFixed(2) + '%';
		        var msg = '上传进度:' + uploadProgress + ';校验:' + sha1CheckProgress + '.';
		        /*        console.log(msg);*/
		        $("#result").val(msg);
		        $("#Video_progress").text(msg);
		    };
		    var lastTaskId;
		    var taskReady = function (taskId) {
		        lastTaskId = taskId;
		    };
		    //上传文件,适合小于20M的文件上传
		    var taskId = 0;
		    $('#uploadFile').on('click', function () {
		        if ($('#result img').length > 2) {
		            alert('最多上传三张')
		        } else {
		            $('#js-file').on('change', function (e) {
		                var file = e.target.files[0];
		                $.ajax({
		                    url: "http://" + domain_name + "/zgame/index.php?m=zmmm",
		                    data: {
		                        a: "get_update_url_info",
		                        tail: file.name
		                    },
		                    dataType: "json",
		                    /*  xhrFields:{withCredentials:withCredentials},*/
		                    cache: false,
		                    success: function (data) {
		                        if (data.errorCode != 0) {
		                            alert(data.errorMsg)
		                        } else {
		                            var location = file.name;
		                            var point = location.lastIndexOf(".");
		
		                            var type = location.substr(point);
		                            if (type == ".jpg" || type == ".png" || type == ".JPG" || type == ".GIF") {
		                                cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, data.result, file, 1, taskReady);
		                            } else {
		                                taskId = cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, myFolder + file.name, file, 0, taskReady);//insertOnly==0 表示允许覆盖文件 1表示不允许
		                            }
		
		                        }
		                    }
		                });
		                $('#form')[0].reset();
		                return false;
		            });
		
		            setTimeout(function () {
		                $('#js-file').click();
		            }, 0);
		        }
		        return false;
		        //分片上传文件,当选择大于20M大小的文件的时候用分片上传
		    });
		
		    //显示图片
		    $('#js-file').on('change', function () {
		        var fileName = $('#js-file').val();
		        if (fileName) {
		            console.info(fileName);
		            var file = document.getElementById("js-file").files;
		            var result = document.getElementById("result");
		            for (var i = 0; i < file.length; i++) {
		                var reader = new FileReader();
		                reader.readAsDataURL(file[i]);
		                reader.onload = function (e) {
		                    /* $("#result").empty();*/
		                    result.innerHTML = result.innerHTML + '<img src="' + this.result + '" alt="" />';
		                    
		                }
		            }
		        }
		    })
		},		   
		//01分享
		shareUrlFn:function(){
			var that = this ;
			that.innerHeight = window.innerHeight ; 
	        $.ajax({
	            url: "http://sf-college.szbiu.com/zgame/",
	            data: {
	                m: 'biu_common',
	                a: 'get_share_info',
	                nowurl: window.location.href
	            },
	            success: function (result) {
	                var tmp = JSON.parse(result);
	                var jssdk_info = tmp.other_info.jssdkinfo;
	                wx.config({
	                    debug: false,
	                    appId: jssdk_info.appId,
	                    timestamp: jssdk_info.timestamp,
	                    nonceStr: jssdk_info.nonceStr,
	                    signature: jssdk_info.signature,
	                    jsApiList: [
	                        'onMenuShareTimeline',
	                        'onMenuShareAppMessage',
	                        'hideMenuItems',
	                    ]
	                });
	                wx.ready(
                        function(){
                            wx.onMenuShareAppMessage({
                                title: that.shareTitle, // 分享标题
                                desc: that.shareDesc, // 分享描述
                                link: that.resultUrl,  // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                imgUrl: that.shareImgUrl, // 分享图标
                                type: '', // 分享类型,music、video或link，不填默认为link
                                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                success: function () {
                                    $.ajax({
                                        url: that.publicUrl,
                                        data: {
                                            a: "submit_share_info",
                                        },
                                        dataType: "json",
                                        xhrFields: {withCredentials: that.withCredentials},
                                        cache: false,
                                        success: function (result) {
											

                                        }
                                    })

                                },
                                cancel: function () {
                                }
                            });
                            wx.onMenuShareTimeline({
                                title: that.shareTitle, // 分享标题
                                desc: that.shareDesc, // 分享描述
                                link: that.resultUrl,  // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                                imgUrl: that.shareImgUrl, // 分享图标
                                type: '', // 分享类型,music、video或link，不填默认为link
                                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                success: function () {
                                    $.ajax({
                                        url: that.publicUrl,
                                        data: {
                                            a: "submit_share_info",
                                        },
                                        dataType: "json",
                                        xhrFields: {withCredentials: that.withCredentials},
                                        cache: false,
                                        success: function (result) {

                                        }
                                    })
                                },
                                cancel: function () {
                                }
                            });
                            wx.hideMenuItems({
                                menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
                            });
                        }
	                );
	            },
	        })				
		},
		
    }
}


export default { woyaobaoming };
































