// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic-citydata','ionic-citypicker'])
  .run(function ($rootScope,$ionicHistory,$state) {
    $rootScope.navButtonCloseClick = function () {
      if(!$ionicHistory.backView()){
        $state.go('tab.dash')
      }else{
        $ionicHistory.goBack();
      };
    };
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
      if (toState.name == 'tab.dash-detail' || toState.name == 'tab.addUserAddress'|| toState.name == 'tab.userAddressList'|| toState.name == 'tab.accountInfo' || toState.name == 'tab.myPlanList'|| toState.name == 'tab.changePassword'|| toState.name == 'tab.joinInfoNew'|| toState.name == 'tab.joinUserList'|| toState.name == 'tab.publicity') {
        $rootScope.hideTabs=true;
      } else {
        $rootScope.hideTabs=false;
      }
      if(toState.name == "tab.ruledetails" || toState.name == "tab.processdetails"){
        $rootScope.hasCloseNavButton = true;
      }else{
        $rootScope.hasCloseNavButton = false;
      }
    });
  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.backButton.text('返回');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller:'TabCtrl'

  })
.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'

  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.dash-detail', {
      url: '/dash-detail/:id',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash/tab-dash-detail.html',
          controller: 'DashDetailCtrl'
        }
      }
    })
    .state('tab.ruledetails', {
      url: '/ruledetails',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash/ruledetails.html'
        }
      }
    })
    .state('tab.processdetails', {
      url: '/processdetails',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash/processdetails.html'
        }
      }
    })
    .state('tab.balanceDetail', {
      url: '/balanceDetail',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash/balanceDetail.html'
        }
      }
    })


    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/about/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('tab.about-news', {
      url: '/about-news',
      views: {
        'tab-about': {
          templateUrl: 'templates/about/about-news.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('tab.news-detail', {
      url: '/news-detail/{newsId}',
      views: {
        'tab-about': {
          templateUrl: 'templates/about/about-news-detail.html',
          controller: 'NewsDetailCtrl'
        }
      }
    })
    .state('tab.about-detail', {
      url: '/about-detail',
      views: {
        'tab-about': {
          templateUrl: 'templates/about/about-dubao.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('tab.about-contact', {
      url: '/about-contact',
      views: {
        'tab-about': {
          templateUrl: 'templates/about/about-contact.html'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/account/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('tab.publicity', {
      url: '/publicity',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/publicity.html',
          controller: 'PublicityCtrl'
        }
      }
    })
 .state('tab.publicityDetail', {
      url: '/publicityDetail',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/publicityDetail.html',
          controller: 'PublicityDetailyCtrl'
        }
      }
    })
    .state('tab.userInfoList', {
      url: '/userInfoList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/userInfoList.html'
        }
      }
    })
.state('tab.contactInformation', {
      url: '/contactInformation',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/contactInformation.html'
        }
      }
    })
.state('tab.changePassword', {
      url: '/changePassword',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/changePassword.html',
          controller:'ChangePasswordCtrl'
        }
      }
    })
.state('tab.accountInfo', {
      url: '/accountInfo',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/accountInfo.html',
          controller:'AccountInfoCtrl'
        }
      }
    })
    .state('tab.userAddressList', {
      url: '/userAddressList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/userAddressList.html',
          controller:'UserAddressListCtrl'
        }
      }
    })
    .state('tab.addUserAddress', {
      url: '/addUserAddress',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/addUserAddress.html',
          controller:'AddUserAddressCtrl'
        }
      }
    })
    .state('tab.joinUserList', {
      url: '/joinUserList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/joinUserList.html',
          controller:'JoinUserListCtrl'
        }
      }
    })
    .state('tab.applyHelpPlanList', {
      url: '/applyHelpPlanList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/applyHelpPlanList.html',
          controller:'ApplyHelpPlanListCtrl'
        }
      }
    })
    .state('tab.myPlanList', {
      url: '/myPlanList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/myPlanList.html',
          controller:'MyPlanListListCtrl'
        }
      }
    })
 .state('tab.joinInfoNew', {
      url: '/joinInfoNew',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/joinInfoNew.html',
          controller:'JoinInfoNewCtrl'
        }
      }
    })
.state('tab.payRecordList', {
      url: '/payRecordList',
      views: {
        'tab-account': {
          templateUrl: 'templates/account/payRecordList.html',
          controller:'PayRecordListCtrl'
        }
      }
    })




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})
