'use strict';

function double_to_one(collection) 
{
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
		
	for(var i=0; i<newarr.length; i++)
	{
		for(j= i+1; j < newarr.length-i; j++)
		{
			if(newarr[i] == newarr[j])
				{
					newarr.splice(j,1);//此方法会改变原始数组，我要的就是这个结果
				}	
				
		}	
	}	
//	document.write(newarr);
	return newarr;
module.exports = double_to_one;
