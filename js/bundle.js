/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loading__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Ranking__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_My__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_woyaobaoming__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_vote__ = __webpack_require__(6);









// 2. 定义路由
const routes = [
  { path: '/', redirect:"/loading" },  //初始页面重定向为home
  { path: '/loading', component: __WEBPACK_IMPORTED_MODULE_0__components_loading__["a" /* default */].loading },					//00加载页  
  { path: '/home', component: __WEBPACK_IMPORTED_MODULE_1__components_home__["a" /* default */].Home },					//01首页
  { path: '/my', component: __WEBPACK_IMPORTED_MODULE_3__components_My__["a" /* default */].My },					//02我的
  { path: '/Ranking', component: __WEBPACK_IMPORTED_MODULE_2__components_Ranking__["a" /* default */].Ranking },					//03排行榜
  { path: '/woyaobaoming', component: __WEBPACK_IMPORTED_MODULE_4__components_woyaobaoming__["a" /* default */].woyaobaoming },					//04我要报名
  { path: '/vote/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_vote__["a" /* default */].vote },					//05投票页

  
]





// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#MostBMom')
// 现在，应用已经启动了！





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// loading页
const tempStr = `
	<div id="h_load">
		<div id="loading" class="loading">
		    <img src="img/load_bg.png" class="loadimg">
		    <div class="pgb_prog">
		        <div class="progressbar"></div>
		    </div>
		
		    <div class="loadbox">
		        <div class="loadlogo">100%</div>
		    </div>
		</div>	
	</div>
`;

var data = {
	Percent:'',
};


const loading = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
		this.loadingFn();
   	},    
    methods:{
    	//实例化加载器
		loadingFn:function(){
			var that = this ;
		    var loader = new resLoader({
		        resources: [
					'img/share.jpg',
					'img/baomingSuccess.png',
					'img/ceshi.png',
					'img/close.png',
					'img/homeBG.png',
					'img/homebindVip.png',
					'img/homeHead.png',
					'img/homePrcie01.png',
					'img/homePrcie02.png',
					'img/homePrcie03.png',
					'img/homePriceBg.png',
					'img/homeRule.png',
					'img/homesearch.png',
					'img/load_bg.png',
					'img/load_load.png',
					'img/logo.png',
					'img/MBMBtn01.png',
					'img/MBMBtn0101.png',
					'img/MBMBtn02.png',
					'img/MBMBtn0202.png',
					'img/MBMBtn03.png',
					'img/MBMBtn0303.png',
					'img/Mylapiao.png',
					'img/mystatusfail.png',
					'img/mystatusLahei.png',
					'img/sign_up.png',
					'img/unbaoming.png',
					'img/vote_successBg.png',
					'img/load.gif',
		        ],
		        onStart: function (total) {
		            
		            
		        },
		        onProgress: function (current, total) {
		            var percent = current / total * 100;
		            $('.progressbar').css({'width': percent + '%'});
		            $('.loadlogo').text(parseInt((current / total) * 100) + '%');
		        },
		        /*加载完后执行*/
		        onComplete: function (total) {
		        	var id = that.getUrlParam('id');

					if(id !=null && id.toString().length>=1){
						that.$router.push('/vote/'+id);
					}else{
						that.$router.push('/home');
					}
		        }
		    });
		    loader.start();			
		},	
		getUrlParam:function(name) {
		  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		  var r = window.location.search.substr(1).match(reg); //匹配目标参数
		  if (r != null) return unescape(r[2]); return null; //返回参数值
		},

		
		
    }
}


/* harmony default export */ __webpack_exports__["a"] = ({ loading });






















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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










/* harmony default export */ __webpack_exports__["a"] = ({ Home });

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 首页
const tempStr = `
	<div id="home">
		<img src="img/logo.png" class="home_logo"/>
	  	<img src="img/homeHead.png" class="home_head"/>
	  	<div @click="MaskFadeIn('.home_RuleMask')" class="guize"></div>
	  	<div class="home_Price">
	  		<img src="img/homePriceBg.png" class="home_head"/>
	  	</div>
	  	<div class="home_ISignUp">
	  		<button @click="BaomingFn()" class="home_ISignUp_Btn">我要报名</button>
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
};


const Ranking = {
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
	                query_type:2,			//1 普通顺序  2 排行榜顺序
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
	        //获取列表信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_list_info',
	                query_info:query_info,
	                query_type:2,			//1 普通顺序  2 排行榜顺序
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
			        //获取列表信息
			        $.ajax({
			            url: that.publicUrl,
			            data: {
			                a:'get_list_info',
			                query_type:2,			//1 普通顺序  2 排行榜顺序
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










/* harmony default export */ __webpack_exports__["a"] = ({ Ranking });

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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






/* harmony default export */ __webpack_exports__["a"] = ({ My });

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/* harmony default export */ __webpack_exports__["a"] = ({ woyaobaoming });


































/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// vote投票页面
const tempStr = `
	<div id="vote">
		<img src="img/logo.png" class="home_logo"/>
	  	<img src="img/homeHead.png" class="home_head"/>
	  	<div @click="MaskFadeIn('.home_RuleMask')" class="guize"></div>
	  	<div class="home_Price">
	  		<img src="img/homePriceBg.png" class="home_head"/>
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
		  	
		<div v-if="MysTatus == -2 " id="home_StatueFor_examineNo">	  		  	
		  	<p class="OldSeeHome_Text">该选手资料未通过审核，正在<br />整理资料重新报名。</p>
		  	
		  	<button @click="BaomingFn()" class="vote_Btn01">我要报名</button>		
		</div>
	  	
		<div v-if="MysTatus != -2 " id="home_StatueFor_examineYes">
		  	<div class="My_StatusBox">
		  		<div v-if="MysTatus == -3" class="My_Status_failBox">
		  			<img src="img/mystatusfail.png" class="My_Status_fail"/>
		  			<div @click="BaomingFn()" class="My_Status_fail_Btn"></div>
		  		</div>
		  		<div v-if="MysTatus == -4 " class="My_Status_LaheiBox">
		  			<img src="img/mystatusLahei.png" class="My_Status_fail"/>
		  			<div @click="BaomingFn()" class="My_Status_fail_Btn"></div>
		  		</div>			  		
		  		
		  		<div v-if="MysTatus == 0 " class="My_Status_YBox">
		  			<div class="My_Status_YHead">
		  				<div class="M_S_YHead_List01">
		  					<div class="M_S_YHead_List01_L">
		  						{{sheDetail.name}}&nbsp;&nbsp;&nbsp;{{sheDetail.id}}号
		  					</div>
		  					<div class="M_S_YHead_List01_R">
		  						排名：第{{sheDetail.rank}}&nbsp;&nbsp;&nbsp;名&nbsp;&nbsp;&nbsp;票数：{{sheDetail.count}}
		  					</div>			  					
		  				</div>
		  				<p class="M_S_YHead_List02">
		  					<span class="M_S_YHead_List02_T">参赛宣言</span><br />
		  					{{sheDetail.info}}
		  				</p>
		  			</div>
		  			<div class="My_momImgBox">
			  			<div class="My_momImgListBox">
		  					<div v-for="(momImg,index) in sheDetail.images" :key="momImg.id" @click="goIndexFn(index)" class="My_momImgList">
		  						<img :src="momImg" class="My_momSmallImg"/>
		  						<div class="My_momSmallImg_Mask"></div>
		  					</div>			  					
		  				</div>
						<div class="My_momImgbanner">
						    <div class="swiper-container">
						        <div class="swiper-wrapper">
						            <div v-for="(momImgBig,index) in sheDetail.images"   class="swiper-slide" >
						            	<img class="swiper-img" :src="momImgBig" />
						            </div>						            
						        </div>
						        <div class="swiper-pagination"></div>
							</div>				
						</div>			  							  				
		  			</div>
		  				  			
		  		</div>	

		  	</div>
		  	<button @click="voteSheFn()" v-if="MysTatus == 0 " class="vote_Btn02">我来投票</button>
		  	<button @click="BaomingFn()" v-if="MysTatus == 0 " class="vote_Btn03">我要报名</button>			  	

		</div>	  	
	  	
	  	
	  	<div class="home_RuleMask">
	  		<img @click="MaskFadeOut('.home_RuleMask')" src="img/close.png" class="home_Rule_close"/>
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
	msgShow:'60s',
	countdown:60,
	sheId:'',
	sheDetail:[],
	MysTatus:'',
};


const vote = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
    	this.initFn();
		this.shareUrlFn();
		this.SwiperFn();		
   	},    
    methods:{
    	//初始化
    	initFn:function(){
    		var that = this ;
    		that.innerHeight = window.innerHeight ; 	//获取视口高度，后面备用
    		
    		
//  		$('#makeCard').css("height",that.innerHeight);
//  		$('#showBillBox').css("height",that.innerHeight*0.82);
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
   			//获取某人信息
   			that.sheId = that.$route.params.id;
	        //获取自己的信息
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_one_detail_info', 
	                id:that.sheId,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	//-2 没有报名信息   -3 未审核通过   -4 被拉黑
					if(result.errorCode == 0){	
						that.sheDetail = result.result;
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
   			
    	},
    	//投他一票
    	voteSheFn:function(){
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
					                id:that.sheId,
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
					            	console.log(result)
									if(result.errorCode == 0){	
										that.sheDetail.count++;
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
    		var c = document.getElementById('vote');
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
					    $('.My_momSmallImg_Mask').show();	
					    $('.My_momSmallImg_Mask').eq(that.swiper01.realIndex).hide();			      					      		
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
		    $('.My_momSmallImg_Mask').show();	
		    $('.My_momSmallImg_Mask').eq(a).hide();				    
		    
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










/* harmony default export */ __webpack_exports__["a"] = ({ vote });

/***/ })
/******/ ]);