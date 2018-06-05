// 首页
const tempStr = `
	<div id="home">
		<img src="img/logo.png" class="home_logo"/>
	  	<img src="img/homeHead.png" class="home_head"/>
	  	<div @click="MaskFadeIn('.home_RuleMask')" class="guize"></div>
	  	<div class="home_Price">
	  		<img src="img/homePriceBg.png" class="home_head"/>
	  	</div>

	  	<div class="home_ISignUp01">
	  		<button @click="goOtherUrl('http://cdn.sf-companion.com/sf_special_topic/mothers/index.html')" class="home_ISignUp_Btn">查看中奖名单</button>
	  	</div>
	  	
	  	<div class="home_ISignUp">
	  		<button @click="BaomingFn()" class="home_ISignUp_Btn garyBg">我要报名</button>
	  	</div>
	  	
	  	<div class="home_search">
	  		<img @click="searchFn()" src="img/homesearch.png" class="home_search_Img"/>
	  		<input class="home_search_Input" id="home_search_Input" placeholder="搜索名字或编号"/>	  	
	  	</div>
	  	
	  	<div class="home_SignUpNumBox">
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle">已报名</div>
	  			<div class="home_SignUpNum">{{headInfo.all_sign}}</div>
	  		</div>
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle">投票人次</div>
	  			<div class="home_SignUpNum">{{headInfo.all_vote}}</div>
	  		</div>
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle">访问量</div>
	  			<div class="home_SignUpNum">{{headInfo.all_num}}</div>
	  		</div>			  					  		
	  		<div class="clearfix"></div>
	  	</div>
	  	
	  	<div class="home_momListBox">
	  	 
	  		<div v-for="(mominfo,index) in momList" :key="mominfo.id" class="home_momListBigBox">
		  		<router-link :to="'/vote/'+mominfo.id" class="home_momList">
		  			<img :src="mominfo.images[0]" class="home_momList_info fl" :class="{'home_momList_info':true,'fr':index%2 != 0,'fl':index%2 == 0}"/>
		  			<div :class="{'home_momList_info':true,'fr':index%2 != 0,'fl':index%2 == 0}">
		  				<div class="padding">
		  					<div class="home_momName">{{mominfo.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{mominfo.id}}号</div>
		  					<div class="home_ranking">排名：第{{mominfo.rank}}名</div>
		  					<div class="home_ranking">票数：{{mominfo.vote_count}}</div>
		  					<p class="home_xuanyan">参赛宣言：<br/>
		  						{{mominfo.info}}		  			
		  					</p>	  					
		  				</div>
		  			</div>
		  		</router-link>		
		  		<button @click="voteSheFn(mominfo.id,index)" class="home_momList_Btn posiR" :class="{'home_momList_Btn':true,'posiL':index%2 != 0,'posiR':index%2 == 0}">投她一票</button>
	  		</div>
	  		
	  		
	  	</div>			  	
	  	<div class="m-style M-box2"></div>
	  	
	  	<div class="home_RuleMask">
	  		<img @click="MaskFadeOut('.home_RuleMask')" src="img/close.png" class="home_Rule_close"/>
	  		<div class="home_Rule_TxtBox">
	  			<p class="home_Rule_Txt">
					报名前请仔细阅读以下内容：<br>
					1.活动时间：5月4日起-5月13日23:59分<br>
					2.本次竞选活动仅限于湖北、湖南、河南、陕西、云南、贵州、四川、重庆、甘肃、宁夏、青海、西藏、新疆地区的顺丰客户或顺丰中西大区区域内员工（可代自己母亲报名）<br>
					4.报名前请务必先注册顺丰会员，否则将无法正常参与竞选；<br>
					5.我们将会对您的个人信息（非公开信息）严格保密，参选用户请务必确保使用真实个人信息（包括但不限于联系方式、照片等），如照片核实并非本人，则无法正常参与竞选；<br>
					6.每人每天最多可投5票；<br>
					7.请确保报名信息准确无误，最竞选结果请以5月13日活动结束后页面排名为准；<br>
					8.最终按照得票数量高低依次排序，对得票最高的69位妈妈发放奖励（若得票数量相同则按照报名时间排序）；纪念奖100名，奖励顺丰定制鲜花一束（我们将在5月9日前从已报名的用户中抽取100名幸运客户送出）<br>
					特等奖1名，奖励IPhoneX一部<br>
					一等奖3名，奖励华为mate10手机一部<br>
					二等奖5名，奖励飞利浦空气净化器一台<br>
					三等奖10名，奖励1000元顺丰卡<br>
					四等奖20名，奖励500元顺丰卡<br>
					五等奖30名，奖励200元顺丰卡<br>
					纪念奖100名，奖励顺丰定制鲜花一束<br>
					9.为感谢所有报名用户对本次活动的支持，活动结束后所有通过审核的报名用户将获得5元顺丰一张（预计7个工作日内发放到手机号）<br>
					<br>
					注：我们的工作人员绝不会询问您任何其他私人信息（包括但不限于身份证号，银行卡号，各类密码，手机动态验证码等），也绝不会以奖品税点、保证金、报名费等任何理由要求您通过银行账户汇款，切勿轻易相信，谢谢！<br>
					本活动最终解释权归属顺丰速运中西大区销售部	<br>	  			
	  			</p>

	  		</div>
	  	</div>
	  	
	  	<div class="home_isVipMask">	  		
	  		<div class="home_isVipBigBox">
	  			<img src="img/homebindVip.png" class="home_isVipImg"/>
		  		<input class="home_isVip_tel" type="" value="" placeholder="手机" oninput="if(value.length>11)value=value.slice(0,11)" id="registerTel_Input" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
		  		<input class="home_isVip_Veri" type="" value="" placeholder="验证码" oninput="if(value.length>6)value=value.slice(0,6)" id="registerTel_Input" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
				<button class="GetVeriBtn">{{msgShow}}</button>
				<div @click="settime()" class="GetVeriBtnMask"></div>			
				<div @click="submitVeri()" class="InSure"></div>						  		
	  		</div>
			<div class="home_isVipMask_close" @click="MaskFadeOut('.home_isVipMask')"></div>	  		
	  	</div>
	  	
	  	<div class="vote_successMask">
	  		<div class="home_isVipBigBox">
	  			<img src="img/vote_successBg.png" class="home_isVipImg"/>
	  			<div @click="MaskFadeOut('.vote_successMask')" class="vote_success_close"></div>						  		
	  		</div>
	  		<div class="home_isVipMask_close" @click="MaskFadeOut('.vote_successMask')"></div>
	  	</div>	
	  	
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>					
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
	headInfo:[],
	page:1,
	momList:[],
	totalData:0,
	msgShow:'60s',
	countdown:60,	
	innerHeight:'',
};


const Home = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
    	this.initFn();
		this.shareUrlFn();
		this.fenyeFn();		
   	},    
    methods:{
    	//初始化
    	initFn:function(){
    		var that = this ;
    		that.innerHeight = window.innerHeight ; 	//获取视口高度，后面备用    
			
			
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
					}		            			            	
	            }
	        })
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
	        //获取列表信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_list_info',
	                query_type:1,			//1 普通顺序  2 排行榜顺序
	                page:1,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
					if(result.errorCode == 0){	
						that.momList = result.result.detail_info;
						
						that.totalData = parseInt(result.result.allNum);
						if(that.totalData == 0){
							$('.M-box2').hide()
						}else{
							that.fenyeFn();
						}
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })			

    	},   
    	//搜索
    	searchFn:function(a){
    		var that = this;
    		var query_info = $('#home_search_Input').val();
	        //获取列表信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_list_info',
	                query_info:query_info,
	                query_type:1,			//1 普通顺序  2 排行榜顺序
	                page:1,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
					if(result.errorCode == 0){	
						that.momList = result.result.detail_info;
						
						that.totalData = parseInt(result.result.allNum);
						if(that.totalData == 0){
							alert('暂无搜索结果！')
							$('.M-box2').hide()
						}else{
							that.fenyeFn();
						}	
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })   		

    		
    	},    	   
    	//投他一票
    	voteSheFn:function(id,index){
    		var that = this ;
    		//是否Vip;
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'check_is_mem',
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
					if(result.errorCode == 0){	
						if(result.result){  //是vip
					        $.ajax({
					            url: that.publicUrl,
					            data: {
					                a:'try_vote',
					                id:id,
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
					            	console.log(result)
									if(result.errorCode == 0){	
										that.momList[index].vote_count++;
										that.headInfo.all_vote++;
										that.MaskFadeIn('.vote_successMask');										
									}else{
										alert(result.errorMsg);
									}		            			            	
					            }
					        }) 							
						}else{ //不是vip
							$('.home_isVipMask').fadeIn();
						}
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        }) 
    	},   
    	//我要报名
    	BaomingFn:function(id){
    		var that = this ;
    		//是否Vip;
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'check_is_mem',
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
					if(result.errorCode == 0){	
						if(result.result){  //是vip
							//查询是否可以报名
					        $.ajax({
					            url: that.publicUrl,
					            data: {
					                a:'check_can_sign',
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
									if(result.errorCode == 0){	//是vip
										that.$router.push('/woyaobaoming'); 
									}else{
										alert(result.errorMsg);
									}		            			            	
					            }
					        })													
						}else{ //不是vip
							$('.home_isVipMask').fadeIn();
						}
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        }) 
    	},     	
    	//蒙版出现
    	MaskFadeIn:function(a){
    		$(a).fadeIn();
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
    		var c = document.getElementById('home');
//  		c.setAttribute('height', that.innerHeight*2.4);
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
    	//发送验证码
		settime:function(){  //发送验证码
			var that=this;
			var Telephone = $(".home_isVip_tel").val();
			console.log(Telephone)
			if(Telephone == '' || Telephone == null){
				alert("请输入手机号码");
			}else{
				if(!that.check_phone(Telephone)){
					alert("您输入的手机号输入错误");
				}else{	
			        $.ajax({
			            url: that.publicUrl,
			            data: {
			                a:'send_self_code',
			                phone:Telephone,			                
			            },
			            dataType:"json",
			            xhrFields:{withCredentials:that.withCredentials},
			            success: function (result) {	
			            	console.log(result);
							if(result.errorCode == 0){
								$('.GetVeriBtnMask').fadeOut()
								var myTime = setInterval(function(){		
									that.countdown--;
									that.msgShow =that.countdown + "s";
									if(that.countdown <= 0){
										$('.GetVeriBtnMask').fadeIn()
										that.getCodeClick = false;
										that.msgShow ="60s";
										that.countdown = 60;
										clearInterval(myTime);
									}
								},1000);																								
							}else{
								alert(result.errorMsg);
							}
			            }
			        })										
				}
			}
		},    	 	
		submitVeri:function(){
			var that = this;
			var Telephone = $(".home_isVip_tel").val();
			var Veri = $(".home_isVip_Veri").val();
			if(!that.check_phone(Telephone)){
				alert("您输入的手机号输入错误");
			}else{
				if(Veri == "" || Veri == null){
					alert("请输入验证码");
				}else{
					$("#spinner").fadeIn();
			        $.ajax({
			            url: that.publicUrl,
			            data: {
			                a:'submit_auth_code',
			                phone:Telephone,	
			                auth:Veri, 
			            },
			            dataType:"json",
			            xhrFields:{withCredentials:that.withCredentials},
			            success: function (result) {
			            	$("#spinner").fadeOut();
							if(result.errorCode == 0){
								alert('注册成功！');	
								$('.home_isVipMask').fadeOut();
							}else{
								alert(result.errorMsg);
							}
							console.log(result);
			            }
			        })				
				}								
			}			
		}, 
		fenyeFn:function(Url){
			var that = this ;
			//分页插件
			$('.M-box2').pagination({
				totalData:that.totalData,		//数据总条数
				showData:4,			//每页显示数据条数
				count:2,			//当前页前后显示数据条数
			    coping: true,
			    isHide:true,
			    prevContent: '上一页',
			    nextContent: '下一页',
			    keepShowPN:true,
			    callback: function (api) {
			        console.log(api.getCurrent())
			        var nowpage = api.getCurrent();
			        var query_info = $('#home_search_Input').val();
			        //获取列表信息
			        $.ajax({
			            url: that.publicUrl,
			            data: {
			                a:'get_list_info',
			                query_info:query_info,
			                query_type:1,			//1 普通顺序  2 排行榜顺序
			                page:nowpage,
			            },
			            dataType:"json",
			            xhrFields:{withCredentials:that.withCredentials},
			            success: function (result) {
			            	console.log(result)
							if(result.errorCode == 0){	
								that.momList = result.result.detail_info;
							}else{
								alert(result.errorMsg);
							}		            			            	
			            }
			        })			        
			        
			    }			    
			});
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

Vue.filter('time01', function (value) {
	var s = value/1000;
	var ms = s.toFixed(2)
    return ms;
});
	
Vue.filter('time', function (value) {
	var date = new Date(parseInt(value) * 1000);
	var Y = date.getFullYear() + '.';
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
	var D = date.getDate();
	//h = date.getHours() + ':';
	//m = date.getMinutes();
	//s = date.getSeconds();
	
    return Y+M+D;
})










export default { Home };