<<<<<<< HEAD
'use strict';

module.exports = function($rootScope, $scope, $location, $routeParams,  Auth, localStorageService, User, $anchorScroll, TemplateGenerator){
  String.prototype.capitalize function (){
    return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
  };

  $rootScope.injectTemplate = function (title, content, buttons, success) {
     this.template =
       TemplateGenerator.create(title, content, buttons, success);
     this.templateActive = true;
   };

   $rootScope.closeOverlay = function () { this.templateActive = false; };

   $rootScope.goHome = function () {
     this.templateActive = false;
     this.redirect('/');
   };

   $rootScope.templateActive = false;

   $rootScope.scrollTo = function (hash) {
     $anchorScroll(hash);
   };

   $rootScope.cancelButton = {
      label: 'cancel',
      action: '$root.closeOverlay()',
    };

    $rootScope.homeButton = {
      label: 'home',
      action: '$root.goHome()',
    };

    $rootScope.redirect = function (url, then) {
     this.templateActive = false;
     $rootScope.redirectUrl = then;
     $location.path(url);
   };


    var pages = {
      home: {
        page_title: 'Home',
        page_description: '',
        og:{
          title: 'Mirror Mirror',
          type:'webapp',
          url:'mirror.ca',
        },
      },
      news:{
        page_title:'news',
        page_description:'',
        og:{
          title:'daily news',
          type:'webapp',
          url:'mirror.ca/news'
        },
      },
      off:{
        page_title:'off',
        page_description:'',
        og:{
          title:'screen off',
          type:'webapp',
          url:'mirror.ca/off'
        },
      },
      reminders:{
        page_title:'reminders',
        page_description:'',
        og:{
          title:'user reminders',
          type:'webapp',
          url:'mirror.ca/reminders',
        },
      },
    };

    $scope.$on('$locationChangeSuccess', function() {
      var rootPath = $location.path().replace('/', '').split('/');

      if (rootPath[0] === 'blog' && rootPath[1] !== undefined)
      {
        var seo = pages.blog;

        seo.page_title = rootPath[1].replace(/\-/g, ' ').capitalize();
        $scope._seo = seo;
      } else if (rootPath[0] == '' || pages[rootPath] === undefined)
        rootPath = 'home';
      else
        $scope._seo = pages[rootPath];

      console.log($scope.htmlReady);
      $scope.htmlReady();
    });
    $scope._seo = pages.home;
};
=======
'use strict';

module.exports = function($rootScope, $scope, $location, $routeParams,  Auth, localStorageService, User, $anchorScroll, TemplateGenerator){
  String.prototype.capitalize function (){
    return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
  };

  $rootScope.injectTemplate = function (title, content, buttons, success) {
     this.template =
       TemplateGenerator.create(title, content, buttons, success);
     this.templateActive = true;
   };

   $rootScope.closeOverlay = function () { this.templateActive = false; };

   $rootScope.goHome = function () {
     this.templateActive = false;
     this.redirect('/');
   };

   $rootScope.templateActive = false;

   $rootScope.scrollTo = function (hash) {
     $anchorScroll(hash);
   };

   $rootScope.cancelButton = {
      label: 'cancel',
      action: '$root.closeOverlay()',
    };

    $rootScope.homeButton = {
      label: 'home',
      action: '$root.goHome()',
    };

    $rootScope.redirect = function (url, then) {
     this.templateActive = false;
     $rootScope.redirectUrl = then;
     $location.path(url);
   };


    var pages = {
      home: {
        page_title: 'Home',
        page_description: '',
        og:{
          title: 'Mirror Mirror',
          type:'webapp',
          url:'mirror.ca',
        },
      },
      news:{
        page_title:'news',
        page_description:'',
        og:{
          title:'daily news',
          type:'webapp',
          url:'mirror.ca/news'
        },
      },
      off:{
        page_title:'off',
        page_description:'',
        og:{
          title:'screen off',
          type:'webapp',
          url:'mirror.ca/off'
        },
      },
      reminders:{
        page_title:'reminders',
        page_description:'',
        og:{
          title:'user reminders',
          type:'webapp',
          url:'mirror.ca/reminders',
        },
      },
    };

    $scope.$on('$locationChangeSuccess', function() {
      var rootPath = $location.path().replace('/', '').split('/');

      if (rootPath[0] === 'blog' && rootPath[1] !== undefined)
      {
        var seo = pages.blog;

        seo.page_title = rootPath[1].replace(/\-/g, ' ').capitalize();
        $scope._seo = seo;
      } else if (rootPath[0] == '' || pages[rootPath] === undefined)
        rootPath = 'home';
      else
        $scope._seo = pages[rootPath];

      console.log($scope.htmlReady);
      $scope.htmlReady();
    });
    $scope._seo = pages.home;
};
>>>>>>> a989be0d0c98ee64c41265ab02bab13979bc69c4
