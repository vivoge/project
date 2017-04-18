angular.module('myApp.controller',[])

.controller('tab1Control',function ($scope,$ionicModal) {
    $scope.title = 'tab1';

    $ionicModal.fromTemplateUrl('zstd.html',{
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.hideModal = function() {
        $scope.modal.hide();
    };

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