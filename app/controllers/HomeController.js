angular.module("ainapp")
    .controller("HomeController", ["app.config", "$scope", "LoginService", "AuthenticationService", "$state", "$stateParams", "MainService", "localStorageService",
            function (config, $scope, LoginService, AuthenticationService, $state, $stateParams, MainService, localStorageService) {


            $scope.init = function () {


                $scope.Farmers = [];
                MainService.FarmerInDropdown().then(function (response) {
                    if (response.data) {
                        $scope.Farmers = response.data;
                    } else {
                        toastr.error("Error");
                    }
                    $scope.load = false;
                }, function (err) {
                    toastr.error("Network Error");
                    $scope.load = false;
                });

                $scope.Categories = [];
                MainService.CategoryInDropdown().then(function (response) {
                    if (response.data) {
                        $scope.Categories = response.data;
                        console.log(response.data);
                    } else {
                        toastr.error("Error");
                    }
                    $scope.load = false;
                }, function (err) {
                    toastr.error("Network Error");
                    $scope.load = false;
                });


                $scope.Enquirys = [];
                MainService.EnquiryInDropdown().then(function (response) {
                    $scope.Enquirys = response.data;
                }, function (err) {
                    toastr.error("Network Error");
                });


            }
            $scope.init();



                    }])
