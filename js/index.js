
import loading from "./components/loading";
import Home from "./components/home";
import Ranking from "./components/Ranking";
import My from "./components/My";
import woyaobaoming from "./components/woyaobaoming";
import vote from "./components/vote";


// 2. 定义路由
const routes = [
  { path: '/', redirect:"/loading" },  //初始页面重定向为home
  { path: '/loading', component: loading.loading },					//00加载页  
  { path: '/home', component: Home.Home },					//01首页
  { path: '/my', component: My.My },					//02我的
  { path: '/Ranking', component: Ranking.Ranking },					//03排行榜
  { path: '/woyaobaoming', component: woyaobaoming.woyaobaoming },					//04我要报名
  { path: '/vote/:id', component: vote.vote },					//05投票页

  
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



