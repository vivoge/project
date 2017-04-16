angular.module('myApp.controller',[])

.controller('tab1Control',function ($scope) {
    $scope.title = (Math.random()*(9-8)+8).toFixed(2)
})

.controller('tab2Control',function ($scope,$stateParams) {
    $scope.flag = {showDelete:false,showReorder:false};
    $scope.aa = function () {
        $scope.flag.showDelete = !$scope.flag.showDelete;
        console.log('22');
        console.log($scope.flag)
    };
    $scope.deleteItem = function (item) {
        console.log(item)
    }
})

.controller('tab3Control',function ($scope,$stateParams) {
    $scope.count = $stateParams.count;
})

.controller('tabcontent',function ($scope,$stateParams) {
    $scope.count = $stateParams.count;
});