'use strict';

function double_to_one(collection)
{

 // var arr=[1, [2], [3, 4],[5,6,7,8]];
  var  newarr=[];
  for(var i=0; i<collection.length; i++)
  {
	    for(var j=0; j< collection[i].length; j++)
      {
        	newarr.push(collection[i][j]);
      }
  }
return newarr;
}

module.exports = double_to_one;
