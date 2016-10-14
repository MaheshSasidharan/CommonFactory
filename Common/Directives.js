Personnel
    .directive('formLoading', function () {
        return {
            restrict: 'E',
            templateUrl: 'Templates/Common/_FormLoading.html'
        };
    })

    .directive('searchNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: 'Templates/Common/_FormSearchAndNavigation.html'
        };
    })

    .directive('formPills', function () {
        return {
            restrict: 'E',
            templateUrl: 'Templates/Common/_FormPills.html'
        };
    })

    .directive('formModals', function () {
        return {
            restrict: 'E',
            templateUrl: 'Templates/Common/_FormModals.html'
        };
    })

    .directive('personClp', function () {
        return {
            restrict: 'E',
            scope: {
                oform: '=oform'
            },
            transclude: true,
            templateUrl: '../Templates/Common/PersonCLP.html',
            link: function (scope, element, attr) {
                scope.vm = {
                    a : 1
                }
            }
        };
    });