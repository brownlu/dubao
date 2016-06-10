angular.module('starter.services', [])
.factory('CachedUser', function() {
  var userInfo = {};

  return {
    save: function(j) {
      for (var k in j) {
        window.localStorage[k] = userInfo[k] = j[k];
      };
      return userInfo;
    },

    remove: function(f) {
      if(f.constructor==Array){
        for(var i=0;i<f.length;i++){
          window.localStorage.removeItem(f[i]);
        }
      }
        window.localStorage.r

        moveItem(f);
    },

    add: function(k, v) {
      window.localStorage[k] = userInfo[k] = v;
    },

    addLong: function(k, v) {
      window.localStorage[k] = v;
    },

    l: window.localStorage
  };
})
  .factory('DashService', function ($q,$timeout,$state) {
    var initDashDatas = [
      {
        id:"1",
        name:"夸克驾车风险互助计划",
        img:"img/kk_07.jpg",
        p1:'三者豪车车损50万、人伤30万互助金',
        p2:'面向人群：C1、C2及以上驾照|非营利性7座以下',
        money:'9.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"9元",
        minMoney:"3元",
        donateMaxMoney:"3元"
      },{
        id:"2",
        name:"夸克1号中青年大病互助计划",
        img:"img/kk_01.jpg",
        p1:'60种重大疾病|30万元互助金',
        p2:'保障年龄：18-50周岁',
        money:'9.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"9元",
        minMoney:"3元",
        donateMaxMoney:"3元"
      },{
        id:"3",
        name:"夸克2号少儿大病互助计划",
        img:"img/kk_02.jpg",
        p1:'走失及60种重大疾病|30万元互助金',
        p2:'保障年龄：出生后28天—17周岁',
        money:'9.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"9元",
        minMoney:"3元",
        donateMaxMoney:"3元"
      },{
        id:"4",
        name:"夸克综合意外互助计划",
        img:"img/kk_05.jpg",
        p1:'意外身故/伤残30万元（航空意外100万元）',
        p2:'保障年龄：出生后28天-70周岁',
        money:'9.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"9元",
        minMoney:"3元",
        donateMaxMoney:"3元"
      },{
        id:"5",
        name:"夸克扶老太太爱心互助计划",
        img:"img/kk_04.jpg",
        p1:'做好事遇讹诈|20万元互助金|未成年免费',
        p2:'保障年龄：所有人',
        money:'2.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"2元",
        minMoney:"0元",
        donateMaxMoney:"2元"
      },{
        id:"6",
        name:"夸克女学生意外怀孕爱心互助计划",
        img:"img/kk_06.jpg",
        p1:'意外怀孕|2000元互助金',
        p2:'保障年龄：26周岁(含)以下在校女学生',
        money:'5.00',
        peopleNum:"39697人",
        mutualMoney:"462284.00元",
        mutualEvent:"0起",
        aboutPeople:"1. 拥有C1、C2及以上驾照 <br>2. 非营利性驾驶7座(含7座)以下小型载客汽车<br>3. 驾驶车辆已购买20万(含20万)以上商业三者险",
        dieMoney:"30万",
        dieAbout:" 三者伤残或死亡：<br>互助金额=（伤残赔偿金或死亡赔偿金）×交通事故责任占比-交强险-三者险。最高30万元",
        carMoney:"50万",
        carAbout:"会员所驾驶车辆在事故中的责任为同责或次责时可进行互助<br>三者豪车的车损：<br>互助金额=第三者豪车车辆损失×交通事故责任占比-交强险-三者险。最高50万元 <br>豪车：<br>   新车购置价不低于人民币100万元。<br>",
        time:"48小时",
        joinMoney:"5元",
        minMoney:"2元",
        donateMaxMoney:"2元"
      }
    ];
    function getInitDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      $timeout(function () {
        deferred.resolve(initDashDatas)
      },1000)
      return deferred.promise;
    }
    function getDashDataById (id){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashData = {};
      for(var key in initDashDatas){
        if(initDashDatas[key].id == id){
          dashData = initDashDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashData.id){
          deferred.resolve(dashData)
        }
      },1000)
      return deferred.promise;

    }
    function goDashDetail (event,item){
        event.stopPropagation();
        $timeout(function () {
          $state.go('tab.dash-detail', {id:item.id} )
        })
    }
    return{
      getInitDatas:getInitDatas,
      getDashDataById:getDashDataById,
      goDashDetail:goDashDetail
    }

  })
.factory('AboutService', function ($q,$timeout,$http) {
/*    var initNewsDatas = [
      {
        id:"35",
        name:"网络互助时代开启 夸克联盟值得提倡",
        explain:"发布时间：2016/4/29来源： 和讯网",
        tpl:'templates/news/news35.html'
      },
      {
        id:"34",
        name:"互联网公益新秀夸克联盟 网络互助共建和谐社会",
        explain:"发布时间：2016/4/26来源： 新浪新闻中心",
        tpl:'templates/news/news34.html'
      },
      {
        id:"33",
        name:"夸克联盟与你共御风险，共荣社会保障",
        explain:"发布时间：2016/4/25来源： 网易",
        tpl:'templates/news/news33.html'
      },
      {
        id:"32",
        name:"夸克联盟再发布救助事件 网络互助回归公益本心",
        explain:"发布时间：2016/4/21来源： 光明网",
        tpl:'templates/news/news32.html'
      },
      {
        id:"31",
        name:"夸克联盟，给无保人士的社会拥抱",
        explain:"发布时间：2016/4/20来源： 新浪网",
        tpl:'templates/news/news31.html'
      },
    ];*/
    var initNewsDatas = null;
    function getInitNewsDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/25dubao-server/' + 'news/getNewsList.do',{},{params:{
       type:0,
       pageNum:1,
       pageSize:10
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initNewsDatas=data.result;

        deferred.resolve(initNewsDatas)

        console.log(initNewsDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getNewsDataById (newsId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashData = {};
      console.log(newsId);

      for(var key in initNewsDatas){
        if(initNewsDatas[key].newsId == newsId){
          dashData = initNewsDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashData.newsId){
          deferred.resolve(dashData)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitNewsDatas:getInitNewsDatas,
      getNewsDataById:getNewsDataById
    }
  })
  .service('AuthService', function ($q) {
    var isLogin = false;
    var login = function (name, pw) {
      return $q(function (resolve, reject) {
        if ((name == 'admin' && pw == '1') || (name == 'user' && pw == '1')) {
          isLogin = true;
          resolve('登录成功');
        } else {
          isLogin = false;
          reject('登录失败');
        }
      });
    };
    return {
      login: login,
      checkLogin: function () {
        return isLogin;
      }
    };
  })
  .factory('ModalService', function ($ionicModal) {
    var initModal = function ($scope,tpl,initEnd,closeCallback) {
      var modal = $ionicModal.fromTemplateUrl(tpl,{
        scope:$scope,
        animation:'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
        initEnd&&initEnd();
        return modal
      });
      $scope.openModal = function () {
        $scope.modal.show();
      };
      $scope.closeModal = function (event) {
        event.stopPropagation();
        $scope.modal.hide();
        closeCallback&&closeCallback();
      };
      $scope.$on('$destroy', function () {
        $scope.modal.remove();
        closeCallback&&closeCallback();
      });
      return modal;
    };
    return {
      initModal : initModal
    }
  })
