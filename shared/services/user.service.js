app.factory('userService', function(){
    return{
        checkLogin:function(username,password){
if(username==='Mika'&& password=== 123) {
    return true;
}
return false;
        }
    }
});