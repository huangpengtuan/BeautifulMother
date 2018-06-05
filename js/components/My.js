//03我的
const tempStr = `
	<div id="My">
		<img src="img/logo.png" class="home_logo"/>
	  	
	  	<div class="My_head">2018最美妈妈</div>
	  	<div class="home_SignUpNumBox">
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle colorGay">已报名</div>
	  			<div class="home_SignUpNum">{{headInfo.all_sign}}</div>
	  		</div>
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle colorGay">投票人次</div>
	  			<div class="home_SignUpNum">{{headInfo.all_vote}}</div>
	  		</div>
	  		<div class="home_SignUpBoxList">
	  			<div class="home_SignUpTitle colorGay">访问量</div>
	  			<div class="home_SignUpNum">{{headInfo.all_num}}</div>
	  		</div>			  					  		
	  		<div class="clearfix"></div>
	  	</div>
	  	
	  	<div class="My_StatusBox">
	  		<div v-if="MysTatus == -2" class="My_Status_failBox">
	  			<img src="img/unbaoming.png" class="My_Status_fail"/>
	  			<div @click="BaomingFn()" class="My_Status_fail_Btn"></div>
	  		</div>	  	
	  		<div v-if="MysTatus == -3" class="My_Status_failBox">
	  			<img src="img/mystatusfail.png" class="My_Status_fail"/>
	  			<div @click="BaomingFn()" class="My_Status_fail_Btn"></div>
	  		</div>
	  		<div v-if="MysTatus == -4" class="My_Status_LaheiBox">
	  			<img src="img/mystatusLahei.png" class="My_Status_fail"/>
	  			<div @click="BaomingFn()" class="My_Status_fail_Btn"></div>
	  		</div>			  		
	  		
	  		<div v-if="MysTatus == 0" class="My_Status_YBox">
	  			<div class="My_Status_YHead">
	  				<div class="M_S_YHead_List01">
	  					<div class="M_S_YHead_List01_L">
	  						{{selfDetail.name}}&nbsp;&nbsp;&nbsp;{{selfDetail.id}}号
	  					</div>
	  					<div class="M_S_YHead_List01_R">
	  						排名：第{{selfDetail.rank}}&nbsp;&nbsp;&nbsp;名&nbsp;&nbsp;&nbsp;票数：{{selfDetail.count}}
	  					</div>			  					
	  				</div>
	  				<p class="M_S_YHead_List02">
	  					<span class="M_S_YHead_List02_T">参赛宣言</span><br />
	  					{{selfDetail.info}}
	  				</p>
	  			</div>
	  			<div class="My_momImgBox">
	  				<div class="My_momImgListBox">
	  					<div v-for="(momImg,index) in selfDetail.images" :key="momImg.id" @click="goIndexFn(index)" class="My_momImgList">
	  						<img :src="momImg" class="My_momSmallImg"/>
	  						<div class="My_momSmallImg_Mask"></div>
	  					</div>			  					
	  				</div>
					<div class="My_momImgbanner">
					    <div class="swiper-container">
					        <div class="swiper-wrapper">
					            <div v-for="(momImgBig,index) in selfDetail.images"   class="swiper-slide" >
					            	<img class="swiper-img" :src="momImgBig" />
					            </div>						            
					        </div>
					        <div class="swiper-pagination"></div>
						</div>				
					</div>			  							  				
	  			</div>
	  		</div>		  		
	  	</div>
	  	
	  	<div class="home_ISignUp">
	  		<button @click="MaskFadeIn('.My_shareMask')" class="home_ISignUp_Btn">我要拉票</button>
	  	</div>			  	
	  	
	  	<div @click="MaskFadeOut('.My_shareMask')" class="My_shareMask">
	  		<img src="img/Mylapiao.png" class="My_lapiaoImg"/>			  		
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
	  	
	  	
	  	
	</div> 	
`;

var data = {   
	publicUrl:"http://zmmm.sf-companion.com/zgame/?m=zmmm",
	withCredentials:true,
	shareTitle:'顺丰中西大区最美妈妈评选',
	shareDesc:'快来投票报名吧！',
	resultUrl:'http://ucmp.sf-express.com/wxaccess/weixin/activity/wxjzmmm',	// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	shareImgUrl:'http://newtest2.szbiu.com/test/hpt/BeautifulMother/img/share.jpg',			//分享图标
	otherUrl:'http://weixinback.sf-companion.com/zgame/?m=biu_common&a=pingan_enter',
	selfDetail:[],
	headInfo:[],
	MysTatus:'',
	swiper01:function(){},
	innerHeight:'',
};


const My = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
    	this.init();   	
		this.shareUrlFn();


		
   	},    
    methods:{
    	init:function(){
    		var that = this;
    		that.innerHeight = window.innerHeight ; 	//获取视口高度，后面备用 
    		
    		
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
	        //获取自己的信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_self_detail_info',               
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	//-2 没有报名信息   -3 未审核通过   -4 被拉黑
					if(result.errorCode == 0){	
						that.selfDetail = result.result;
						that.MysTatus = 0 ;
						
				        that.$nextTick(function () {
				            that.SwiperFn();
				        }); 						
					}else if(result.errorCode == -2){
						that.MysTatus = -2 ;
					}else if(result.errorCode == -3){
						that.MysTatus = -3 ;
					}else if(result.errorCode == -4){
						that.MysTatus = -4 ;
					}else{
						alert(result.errorMsg);
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
		//02banner
        SwiperFn:function() {
        	var that = this;
		    that.swiper01 = new Swiper('.swiper-container',{
		        pagination: '.swiper-pagination',
		        paginationClickable: true,			    	
		    	preventClicks : false,//默认true		
		        grabCursor : true,
		        touchRatio : 0.5,
				autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
				},
				loop : true,
				observer:true,
				observeParents:true,
				autoplayDisableOnInteraction : false,	
			  	on: {
			    	slideChangeTransitionEnd: function(){
			      		//console.log(that.swiper01.realIndex);//切换结束时，告诉我现在是第几个slide
					    $('.My_momImgList').removeClass('My_momSmallImgAcitve');	
					    $('.My_momImgList').eq(that.swiper01.realIndex).addClass('My_momSmallImgAcitve');	
					    $('.My_momSmallImg_Mask').fadeIn();	
					    $('.My_momSmallImg_Mask').eq(that.swiper01.realIndex).fadeOut();			      					      		
			    	},
			  	},			
			}); 
        }, 		
		//Swiper跳到指定页
        goIndexFn:function(a) {
        	var that = this ;
		    that.swiper01.slideTo(a, 1000, true);//切换到第一个slide，速度为1秒
		    $('.My_momImgList').removeClass('My_momSmallImgAcitve');	
		    $('.My_momImgList').eq(a).addClass('My_momSmallImgAcitve');	
		    $('.My_momSmallImg_Mask').fadeIn();	
		    $('.My_momSmallImg_Mask').eq(a).fadeOut();				    
		    
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
    	//input获取焦点重置元素高度兼容安卓
    	PromptFadeOut:function(){
    		var that = this ;   		
    		var c = document.getElementById('My');
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
							}else{
								alert(result.errorMsg);
							}
							console.log(result);
			            }
			        })				
				}								
			}			
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






export default { My };