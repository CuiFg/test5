'use strict';

function double_to_one(collection) 
{
  var arr=[1, [2], [3, 4],[5,6,7,8]];
	var newarr=[];
	for(var i=0; i<arr.length; i++)
	{
		for(var j=0; j< arr[i].length; j++)
		{
			newarr.push(newarr[i][j]);  //将二维数组变成一维数组
		}
	}
}

for(var i=0; i<newarr.length; i++)
	{
		for(j= i+1; j < newarr.length; j++)
		{
			if(newarr[i] == newarr[j]) //将一维数组中重复元素删去
				{
					newarr.splice(j);//此方法会改变原始数组，我要的就是这个结果
				}	
		}	
	}	
	
	return newarr;

module.exports = double_to_one;
