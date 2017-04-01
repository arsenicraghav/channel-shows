
angular.module( 'app.api', [

    ])
    .factory('API',['$http', '$q', function($http, $q){
        return {
            getChannelsData : function(){
                var deferred = $q.defer();
                $http.get('https://www.cubical.in/ir/channelsnew?size=488').then(function (resp) {
                    deferred.resolve(resp.data);
                });

                return deferred.promise;
            },
            getShowsData : function(){
                var deferred = $q.defer();
                $http.get('https://www.cubical.in/ir/shows?size=488&timestamp=1490374280').then(function (resp) {
                    deferred.resolve(resp.data);
                });

                return deferred.promise;
            }
        }
    }]);