(function () {
  "use strict";
  angular
    .module("ainapp", [
      "ui.router",
      "ui.bootstrap",
      "LocalStorageModule",
      "ngLoader",
    ])
    .value("app.config", {
      //basePath: 'http://localhost:61504/'
      basePath: "https://agropro.ainsoft.in/",
    })
    .config([
      "$stateProvider",
      "$urlRouterProvider",
      "$locationProvider",
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("login");
        $stateProvider

          .state("login", {
            url: "/login",
            templateUrl: "templates/Login.tpl.html",
            controller: "LoginController",
          })

          ///////////// *************** home *********** //////////

          .state("init", {
            abstract: true,
            url: "/init",
            templateUrl: "templates/Init.tpl.html",
            //controller: "InitController",
          })

          .state("home", {
            parent: "init",
            url: "/home",
            templateUrl: "templates/Home.tpl.html",
            //controller: "HomeController",
          })

          .state("state", {
            parent: "init",
            url: "/state",
            templateUrl: "templates/state.html",
            //controller: "HomeController",
          })

          .state("Booking", {
            parent: "init",
            url: "/Booking",
            templateUrl: "templates/Booking.html",
            //controller: "HomeController",
          })
          .state("BookingDetails", {
            parent: "init",
            url: "/BookingDetails",
            templateUrl: "templates/BookingDetails.html",
            //controller: "HomeController",
          })
          .state("Category", {
            parent: "init",
            url: "/Category",
            templateUrl: "templates/Category.html",
            //controller: "HomeController",
          })
          .state("Feedback", {
            parent: "init",
            url: "/Feedback",
            templateUrl: "templates/Feedback.html",
            //controller: "HomeController",
          })
          .state("Farmers", {
            parent: "init",
            url: "/Farmers",
            templateUrl: "templates/Farmers.html",
            //controller: "HomeController",
          })
          .state("Merchants", {
            parent: "init",
            url: "/Merchants",
            templateUrl: "templates/Merchants.html",
            //controller: "HomeController",
          })
          .state("Location", {
            parent: "init",
            url: "/Location",
            templateUrl: "templates/Location.html",
            //controller: "HomeController",
          })
          .state("Customer", {
            parent: "init",
            url: "/Customer",
            templateUrl: "templates/Customer.html",
            //controller: "HomeController",
          })
          .state("Products", {
            parent: "init",
            url: "/Products",
            templateUrl: "templates/Products.html",
            //controller: "HomeController",
          })
          .state("Status", {
            parent: "init",
            url: "/Status",
            templateUrl: "templates/Status.html",
            //controller: "HomeController",
          })

          .state("district", {
            parent: "init",
            url: "/district",
            templateUrl: "templates/district.html",
            //controller: "HomeController",
          });
      },
    ])

    .config([
      "localStorageServiceProvider",
      function (localStorageServiceProvider) {
        localStorageServiceProvider
          .setPrefix("ainapp")
          .setStorageType("localStorage")
          .setNotify(true, true);
      },
    ])
    .config([
      "$httpProvider",
      function ($httpProvider) {
        $httpProvider.interceptors.push("AuthInterceptor");
      },
    ]);
})();
