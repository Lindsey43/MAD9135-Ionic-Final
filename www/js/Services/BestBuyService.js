angular.module('starter')
    .factory('BestBuyService', ['$http', function ($http) {
            var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
            var key = '8j2zp956acvwx2jaaude2mzh';

            return {

                search: function (term) {
                    
                    return $http.get(bestBuyAPIendPoint + '/products((search=' + term + '))?show=name,sku,salePrice,image&format=json&apiKey=' + key);
                    
                        }
//                        getStore: function () {
//
//                            return
//                        }
                };
            }]);