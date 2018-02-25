
function findDuplicate(arr){
var duplArr =[];
var obj ={};		
   for(var i =0; i<arr.length; i++){
   			if(!obj[arr[i]]){
        		obj[arr[i]] = 1;
        }
        else{
        		duplArr.push(arr[i])
        }
   }
      //console.log(duplArr);

   return duplArr;

}
console.log(findDuplicate([1,4,5,5,5,3,2,4]));
