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


export default { loading };




















