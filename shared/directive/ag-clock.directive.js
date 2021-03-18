app.directive('agClock',function($interval){
    return{
        restrict:'AE',
        scope: {
        userName:'=name',
        title:'@naziv'
        },
        template:'{{title}} {{time}} - {{userName}}',
        link:function(scope,el,att){
scope.poruka = 'Alen Kljuno'
$interval(function(){
scope.time = new Date().toLocaleTimeString();
},1000)
        }
    }
})