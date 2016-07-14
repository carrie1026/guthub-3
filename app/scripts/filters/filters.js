'use strict';
//angular.module('guthub')
var app = angular.module('guthub',
    ['guthub.directives', 'guthub.services']);


//timeFilter 过滤时间，去除时间中的“时分秒”
app.filter("reverse",function(){
        return function(t){
            if(t){
                return t.substr(0,10);
            }
        }
    });