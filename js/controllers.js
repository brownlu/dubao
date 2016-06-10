angular.module('starter.controllers', [])
.constant('ApiEndpoint', {
  url: 'http://localhost:8080/25dubao-server/'
})

.controller('TabCtrl', function($scope,$http,$timeout,$ionicLoading,$state,DashService,CachedUser,ApiEndpoint) {

  $scope.goTo = function() {
    if (CachedUser.l.flag != 1) {
      console.log('login .......');
      //$state.go('tab.login');
      $state.go('login');
    } else {
      $state.go('tab.account');
    }
  };

    $scope.loginData={'username':'','password':''};
  $scope.doLogin = function($event) {
    if (!$scope.loginData.username) {
      $scope.showMsg('用户名不能为空',$event);
      return false;
    };
    if (!$scope.loginData.password) {
      $scope.showMsg('密码不能为空',$event);
      return false;
    };
     $ionicLoading.show({
       template: "正在登录..."
     });
      $http.post(ApiEndpoint.url + 'user/login.do',{},{params:{
      userName:$scope.loginData.username,
      password:$scope.loginData.password,
      }}).success(function(data) {
         $ionicLoading.hide();
         if (data.errorCode == 0) {
            CachedUser.add('flag', 1);
            CachedUser.addLong('userInfo',JSON.stringify(data.result));
            $scope.flag = 1;
            $state.go('tab.account');
          }else{
              $scope.showMsg(data.errorMessage,$event);
          }

        });
  };



    
  })
.controller('DashCtrl', function($scope,$timeout,$state,DashService) {
     DashService.getInitDatas().then(function (data) {
       //响应成功。
       $scope.initData = data;
    }, function (error) {
       //响应拒绝
     });
    $scope.goDashDetail= DashService.goDashDetail;





  })
  .controller('DashDetailCtrl', function($scope,$stateParams,DashService) {
    var dashId;
    $scope.dashDetailData = {};
    DashService.getInitDatas().then(function (data) {
      $scope.initData = data;
    })
    $scope.$on("$ionicView.enter",function(){
      dashId = $stateParams.id;
      DashService.getDashDataById(dashId).then(function (data) {
        $scope.dashDetailData = data;
      })
    })
    $scope.goDashDetail = DashService.goDashDetail;
  })

.controller('AboutCtrl', function($scope,AboutService) {
    AboutService.getInitNewsDatas().then(function (data) {
      $scope.initNewsDatas = data;
    })


})
  .controller('NewsDetailCtrl', function($scope, $stateParams,AboutService, $ionicHistory) {
    $scope.$on("$ionicView.enter",function(){

      console.log($stateParams.newsId);

      AboutService.getNewsDataById($stateParams.newsId).then(function (data) {
        $scope.newsDetailData = data;


      })
    })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicPopup, $ionicModal, $state, $timeout, AuthService,ModalService) {
    //登录应该是一个全局模块，应该使用事件全局广播这里只是临时设置一个入口而已。
    $scope.loginData = {};
    $scope.doLogin = function (loginData) {
      AuthService.login(loginData.username, loginData.password).then(function (data) {
        $timeout(function () {
          $scope.closeModal();
        }, 1000);
        $state.go('tab.account');
      }, function (err) {
        var alertPopup = $ionicPopup.alert({
          title: '登录失败',
          template: '试试admin,密码 1'
        });
      });
    };
    //进入的时候检测是否登录
    //$scope.$on('$ionicView.beforeEnter' ,function(){
    //  ModalService.initModal($scope,'templates/login.html',function() {
    //    if (!AuthService.checkLogin()) {
    //      $scope.openModal();
    //    }
    //  }, function () {
    //    $state.go('tab.dash');
    //  });
    //});
})
// 登录信息
  .controller('PublicityCtrl', function($scope) {

  })
.controller('PublicityDetailyCtrl', function($scope) {

  })
  .controller('ChangePasswordCtrl', function($scope) {
    $scope.changePswData = {}

  })
  .controller('AccountInfoCtrl', function($scope) {
    $scope.userData={}

  })
 .controller('UserAddressListCtrl', function($scope) {
    $scope.userData={}

  })
  .controller('AddUserAddressCtrl', function($scope) {
    $scope.addUserAdddressData={};
  })
  .controller('JoinUserListCtrl', function($scope) {

  })
  .controller('ApplyHelpPlanListCtrl', function($scope) {

  })
  .controller('MyPlanListListCtrl', function($scope,$state,ModalService) {
    $scope.monwyData= {}
    ModalService.initModal($scope,'templates/model/moneyModel.html');
    $scope.showCheckBox = false;
    $scope.clickFootButton = function(){
      $scope.showCheckBox = true;
    }
    $scope.clickFootCanel = function(){
      $scope.showCheckBox = false;
    }
    $scope.clickFootEnter = function () {
      $scope.openModal();
    }
    $scope.changeMoney = function (money) {
      $scope.money = money;
      $scope.checkId = money;
    }
    $scope.clickEnter = function () {
      var money;
      if($scope.money !== 0 ){
        money = $scope.money
      }else{
        money = $scope.monwyData.money;
      }
      console.log(money)
    }
    $scope.clickItem = function () {
      if(!$scope.showCheckBox){
        $state.go('tab.joinInfoNew')
      }
    }

  })
  .controller('JoinInfoNewCtrl', function($scope,$ionicPopup) {
    $scope.clickLockMoney = function ($event) {
      $event.stopPropagation();
      var alertPopup = $ionicPopup.alert({
        template: '锁定金额是平台确保会员履行互助义务的一项措施。平台在申请互助的案件通过审核后进行公示，在公示期开始当日，系统会自动计算截止至公示之日互助计划会员人数和每位会员的均摊金额，然后锁定该金额。以确保在公示结束后能成功扣款，履行互助义务。'
      });
    }
  })
 .controller('PayRecordListCtrl', function($scope) {
    $scope.slideIndex = 0;
    $scope.activeSlide = function (id) {
      $scope.slideIndex = id
    }

  })
