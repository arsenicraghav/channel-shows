angular.module('app', ['ngMaterial', 'app.api'])
    .controller('AppCtrl', function($scope, API) {
        $scope.channeldata = [];
        $scope.shows = [];
        $scope.tiles = [];
        $scope.channelinfo = [];

        API.getChannelsData().then(function(res){
            $scope.channeldata=res;
            console.log($scope.channeldata);
            for(var i=0 ; i< $scope.channeldata.length ; i++){
                $scope.tiles.push({
                            'category'   : $scope.channeldata[i].category,
                            'channels'   : $scope.channeldata[i].channels
                });
            }
        });
        API.getShowsData().then(function(res){
            $scope.shows=res.shows;
            for(var i=0 ; i< $scope.shows.length ; i++){
                $scope.channelinfo.push({
                    'id' : $scope.shows[i].channel_id,
                    'start_datetime' : $scope.shows[i].start_datetime,
                    'end_datetime' : $scope.shows[i].end_datetime,
                    'description' : $scope.shows[i].description
                })
            }
            console.log( $scope.channelinfo);
        });
    });
