var yashApp = angular.module("mainModule",[]);
    yashApp.controller("crtLoadInfo",['$scope','$http','$log',function($scope,$http,$log){
        $http({
            url: 'http://www.cheapshark.com/api/1.0/deals',
            method: 'GET'
        }).then(function (responseData) {
            $scope.getDeals = responseData.data;
        }, function (response) {
            $scope.error = response.statusText;
            $log.info(error);
        });
        $scope.dealsData = [];
        $scope.under10 =[],$scope.under20=[],$scope.under30 = [],$scope.under40 = [],$scope.under50 = [],$scope.under60 = [],
            $scope.under70 = [], $scope.under80 = [], $scope.under90 = [], $scope.under100 = [];
        $scope.getInfo = function() {
            $scope.id10= 10,$scope.id20= 20,$scope.id30= 30,$scope.id40= 40,$scope.id50= 50,$scope.id60= 60,$scope.id70= 70;
            $scope.id80= 80,$scope.id90= 90,$scope.id100= 100;
            for (var i = 0; i < $scope.getDeals.length; i++) {
                $scope.dealsData.push({title: $scope.getDeals[i].title, score: $scope.getDeals[i].metacriticScore});
            }
            function sortScore(a,b){
                if(a.score > b.score){
                    return -1;
                }else if(a.score < b.score){
                    return 1;
                }else{
                    return 0;
                }
            }
            $scope.sortedDeals = $scope.dealsData.sort(sortScore);
                for(var i=0;i<$scope.sortedDeals.length;i++){
                    ($scope.sortedDeals[i].score<10)?$scope.under10.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>10&& $scope.sortedDeals[i].score<=20)?$scope.under20.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>20&& $scope.sortedDeals[i].score<=30)?$scope.under30.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>30&&$scope.sortedDeals[i].score<=40)?$scope.under40.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>40&&$scope.sortedDeals[i].score<=50)?$scope.under50.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>50&&$scope.sortedDeals[i].score<=60)?$scope.under60.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>60&&$scope.sortedDeals[i].score<=70)?$scope.under70.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>70&&$scope.sortedDeals[i].score<=80)?$scope.under80.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>80&&$scope.sortedDeals[i].score<=90)?$scope.under90.push($scope.sortedDeals[i])
                        :($scope.sortedDeals[i].score>90&&$scope.sortedDeals[i].score<=100)?$scope.under100.push($scope.sortedDeals[i])
                        :console.log("Error Occurred");
                }
            console.log($scope.under100);
        }
    }]);