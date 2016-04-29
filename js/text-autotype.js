var i = 1;
var j= -1;
var k =0;
var list = ['Eat.Code.Sleep.Hack'];
var a=list[0];
var len = list.length;
var num = 0;

function txt(){
	var strs = a.slice(0,i);

	$("#textdisp").html(strs +'|');

	if(i >= 0)
	{
		if (i != a.length)
			{
				i++;
			}
		else
			{
				if(k==-1)
				{
					return;}
				i = -1;

				}
	}
	else
	{
		if(-1*i != 10)
			{
				i--;
			}
			else{
					var ch = "Sleep";
					var sl = ch.strike();

					$("#textdisp").html(strs + sl);
					strs = strs+sl;
					i = 14;
					k = -1;

					a = "Eat.Code."+sl+".Hack";

			}


	}



}
function ret_index(a){
	var index = list.indexOf(a);
	if (index!= (len-1))
		{return (index+1);}
	else
		{return 0;}

}


setInterval(txt,300);
