'use strict';

function double_to_one(collection)
{

 // var arr=[1, [2], [3, 4],[5,6,7,8]];
 var newarr=[];
	for(var i=0; i<arr.length; i++)
	{
		if(arr[i].length ==undefined)
		{
			newarr.push(arr[i]);
		}
		else 
		{
			for(var j=0; j< arr[i].length; j++)
			{
				newarr.push(arr[i][j]); //将二维数组变成一维数组
			}
			
		}
	}
//	document.write(arr+"<br>");
	return newarr;
}

module.exports = double_to_one;
