angular.module("ainapp")
    .service('MainService', ['$q', '$window', "$http", "app.config",
        function ($q, $window, $http, config) {


            this.ChangePassword = function (data) {
                return $http.post(config.basePath + "ChangePassword", data);
            };

            //////////////.  Country .//////////////////

            this.AddCountry = function (data) {
                return $http.post(config.basePath + "AddCountry", data);
            };

            this.DeleteCountry = function (id) {
                return $http.get(config.basePath + "DeleteCountry/" + id);
            };

            this.CountryInDropdown = function (data) {
                return $http.get(config.basePath + "CountryInDropdown");
            }
            this.OrderInDropdown = function (data) {
                return $http.get(config.basePath + "OrderInDropdown");
            }

            //////////////////.State .//////////////////

            this.AddState = function (data) {
                return $http.post(config.basePath + "AddState", data);
            };

            this.DeleteState = function (id) {
                return $http.get(config.basePath + "DeleteState/" + id);
            };

            this.StateInDropdown = function (data) {
                return $http.get(config.basePath + "StateInDropdown");
            }


            //////////////////.District .//////////////////

            this.AddDistrict = function (data) {
                return $http.post(config.basePath + "AddDistrict", data);
            };

            this.DeleteDistrict = function (id) {
                return $http.get(config.basePath + "DeleteDistrict/" + id);
            };

            this.DistrictInDropdown = function (data) {
                return $http.get(config.basePath + "DistrictInDropdown");
            }


            //////////////////. Category .//////////////////

            this.AddCategory = function (data) {
                return $http.post(config.basePath + "AddCategory", data);
            };

            this.DeleteCategory = function (id) {
                return $http.get(config.basePath + "DeleteCategory/" + id);
            };

            this.CategoryInDropdown = function (data) {
                return $http.get(config.basePath + "CategoryInDropdown");
            }

            //////////////////. Status .//////////////////

            this.AddStatus = function (data) {
                return $http.post(config.basePath + "AddStatus", data);
            };

            this.DeleteStatus = function (id) {
                return $http.get(config.basePath + "DeleteStatus/" + id);
            };

            this.StatusInDropdown = function (data) {
                return $http.get(config.basePath + "StatusInDropdown");
            }

            //////////////////. Customer .//////////////////

            this.AddCustomer = function (data) {
                return $http.post(config.basePath + "AddCustomer", data);
            };

            this.DeleteCustomer = function (id) {
                return $http.get(config.basePath + "DeleteCustomer/" + id);
            };

            this.CustomerInDropdown = function (data) {
                return $http.get(config.basePath + "CustomerInDropdown");
            }

            //////////////////. Address .//////////////////

            this.AddCustomerAddress = function (data) {
                return $http.post(config.basePath + "AddCustomerAddress", data);
            };

            this.DeleteCustomerAddress = function (id) {
                return $http.get(config.basePath + "DeleteCustomerAddress/" + id);
            };

            this.CustomerAddressInDropdown = function (data) {
                return $http.get(config.basePath + "CustomerAddressInDropdown");
            }

            this.GetAddressById = function (id) {
                return $http.get(config.basePath + "GetAddressById/" + id);
            };

            //////////////////. Farmer .//////////////////

            this.AddFarmer = function (data) {
                return $http.post(config.basePath + "AddFarmer", data);
            };

            this.DeleteFarmer = function (id) {
                return $http.get(config.basePath + "DeleteFarmer/" + id);
            };

            this.FarmerInDropdown = function (data) {
                return $http.get(config.basePath + "FarmerInDropdown");
            }

            this.GetFarmerById = function (id) {
                return $http.get(config.basePath + "GetFarmerById/" + id);
            };

            //////////////////. Products .//////////////////

            this.AddProduct = function (data) {
                return $http.post(config.basePath + "AddProduct", data);
            };

            this.DeleteProduct = function (id) {
                return $http.get(config.basePath + "DeleteProduct/" + id);
            };

            this.ProductsInDropdown = function (data) {
                return $http.get(config.basePath + "ProductsInDropdown");
            }

            this.GetProductById = function (id) {
                return $http.get(config.basePath + "GetProductById/" + id);
            };



            //////////////////. Policy .//////////////////

            this.AddPolicy = function (data) {
                return $http.post(config.basePath + "AddPolicy", data);
            };

            this.DeletePolicy = function (id) {
                return $http.get(config.basePath + "DeletePolicy/" + id);
            };

            this.PolicyInDropdown = function (data) {
                return $http.get(config.basePath + "PolicyInDropdown");
            }

            //////////////////. Order .//////////////////

            this.AddOrder = function (data) {
                return $http.post(config.basePath + "AddOrder", data);
            };

            this.DeleteOrder = function (id) {
                return $http.get(config.basePath + "DeleteOrder/" + id);
            };

            this.GetAllOrders = function (data) {
                return $http.get(config.basePath + "GetAllOrders");
            }

            this.GetOrderById = function (id) {
                return $http.get(config.basePath + "GetOrderById/" + id);
            };

            this.GetOrderDetailsByOrderId = function (id) {
                return $http.get(config.basePath + "GetOrderDetailsByOrderId/" + id);
            };

            //////////////////. Order Details .//////////////////

            this.AddOrderDetail = function (data) {
                return $http.post(config.basePath + "AddOrderDetail", data);
            };

            this.DeleteOrderDetail = function (id) {
                return $http.get(config.basePath + "DeleteOrderDetail/" + id);
            };

            this.OrderDetailInDropdown = function (data) {
                return $http.get(config.basePath + "OrderDetailInDropdown");
            }

            this.GetOrderDetailById = function (id) {
                return $http.get(config.basePath + "GetOrderDetailById/" + id);
            };

            //////////////////. Review .//////////////////

            this.AddReview = function (data) {
                return $http.post(config.basePath + "AddReview", data);
            };

            this.DeleteReview = function (id) {
                return $http.get(config.basePath + "DeleteReview/" + id);
            };

            this.ReviewsInDropdown = function (data) {
                return $http.get(config.basePath + "ReviewsInDropdown");
            }

            this.GetOrderDetailById = function (id) {
                return $http.get(config.basePath + "GetOrderDetailById/" + id);
            };



            //////////////////. Enquiry .//////////////////

            this.AddEnquiry = function (data) {
                return $http.post(config.basePath + "AddEnquiry", data);
            };


            this.EnquiryInDropdown = function (data) {
                return $http.get(config.basePath + "EnquiryInDropdown");
            }

            this.GetEnquiryById = function (id) {
                return $http.get(config.basePath + "GetEnquiryById/" + id);
            };





        }]);
