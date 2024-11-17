angular.module("ainapp")
    .controller("LoginController", ["app.config", "$scope", "LoginService", "AuthenticationService", "$state", "$stateParams", "MainService", "localStorageService",
            function (config, $scope, LoginService, AuthenticationService, $state, $stateParams, MainService, localStorageService) {

            //            $scope.FinYear = [];
            //            MainService.FinYearInDropDown().then(function (response) {
            //                $scope.FinYear = response.data;
            //            });

            $scope.Init = function () {
                $scope.TokenInfo = AuthenticationService.getTokenInfo();
                $scope.Language = "EN";

                if ($scope.TokenInfo != null) {
                    $scope.IsLoggedIn = true;
                } else {
                    $scope.IsLoggedIn = false;
                }

                $scope.User = {
                    UserName: "",
                    Password: "",
                    // FinancialYearId: "",
                }

                //                $scope.load = true;
                //                $scope.CompanyProfile = {};
                //                MainService.GetCompanyProfile().then(function (response) {
                //                    $scope.CompanyProfile = response.data;
                //                    $scope.load = false;
                //                }, function (err) {
                //                    $scope.load = false;
                //                });

                $scope.View = 0;

            }
            $scope.Init();


            $scope.Login = function () {
                $state.go("home");
                $scope.loginError = false;
                $scope.loginError2 = false;

                $scope.IsLoggedIn = false;
                if ($scope.User.UserName == "") {
                    $scope.loginError = true;
                }
                //                else if ($scope.User.FinancialYearId == "") {
                //                    $scope.loginError = true;
                //                } 
                else if ($scope.User.Password == "" || $scope.User.Password == undefined) {
                    $scope.loginError = true;
                } else {
                    $scope.load = true;
                    LoginService.Login($scope.User)
                        .then(function (response) {
                            $scope.load = false;
                            if (response.data != null) {
                                if (response.data.Role == "Admin" || response.data.Role == "SA" || response.data.Role == "CA" || response.data.Role == "Employee") {
                                    $scope.TokenInfo = response.data;
                                    $scope.loginError = false;
                                    $scope.IsLoggedIn = true;
                                    AuthenticationService.setTokenInfo($scope.TokenInfo);
                                    $scope.Init();
                                    $state.go("home");
                                }
                            } else {
                                $scope.IsLoggedIn = false;
                                $scope.loginError = true;
                            }
                        }, function (err) {
                            $scope.load = false;
                            $scope.loginError = true;
                        });
                }
            };



      }]);
