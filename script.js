 let cNumContainer ={
    0: {"Romans": "I", "Arabic": 1},
    1: {"Romans": "V", "Arabic": 5},
    2: {"Romans": "X", "Arabic": 10},
    3: {"Romans": "L", "Arabic": 50},
    4: {"Romans": "C", "Arabic": 100},
    5: {"Romans": "D", "Arabic": 500},
    6: {"Romans": "M", "Arabic": 1000},
    "length": 7
 };
  function fWriteBackward(vSecondElement, vFirstElement)
  {
      return cNumContainer[vFirstElement].Romans+cNumContainer[vSecondElement].Romans;
  }
  function fWriteForward(vElement, vCount)
  {
      if (vCount > 3)
      {
        console.log("err: count>3");    
      }
      var vJoinString="";
      for (var i =0; i<vCount;i++)
      {
          vJoinString+=cNumContainer[vElement].Romans;
      }
      return vJoinString;
  }
   
function convertArabicToRoman(vArabicNumber) {

    var vMainString="";
    for (var vMainLoopCheck=cNumContainer.length-1; vMainLoopCheck >=0;vMainLoopCheck--)
    {
        var vCount = Math.floor(vArabicNumber/cNumContainer[vMainLoopCheck].Arabic);
        if(vCount>=1)
        {
            vMainString+=fWriteForward(vMainLoopCheck, vCount);
            vArabicNumber = vArabicNumber %cNumContainer[vMainLoopCheck].Arabic;
        }
        for (var vBackwardCheck=vMainLoopCheck-1; vBackwardCheck>=0; vBackwardCheck--)
        {
            if((vMainLoopCheck!==0)&
            (vArabicNumber+cNumContainer[vBackwardCheck].Arabic >= cNumContainer[vMainLoopCheck].Arabic)&
            (cNumContainer[vMainLoopCheck].Arabic!==cNumContainer[vBackwardCheck].Arabic*2))
            {
                vMainString+=fWriteBackward(vMainLoopCheck, vBackwardCheck);
                vArabicNumber = vArabicNumber - cNumContainer[vMainLoopCheck].Arabic+cNumContainer[vBackwardCheck].Arabic;
            }
        }
        
    }
    return(vMainString);
}
function convertRomanToArabic(vRomanNumber) 
{
	temp = cNumContainer.length-1;
	var vArabicNumber = 0;
	for (var i = 0; i<vRomanNumber.length; i++)
	{
		for (var j = 0; j<cNumContainer.length; j++)
		{
			if( vRomanNumber[i] == cNumContainer[j].Romans)
			{
				console.log(vArabicNumber, temp);
				if (temp<j)
				{
					vArabicNumber-=cNumContainer[temp].Arabic*2;
					temp = cNumContainer.length-1;
				}					
				vArabicNumber+=cNumContainer[j].Arabic;
				temp = j;
			}
		}
	}
	if(convertArabicToRoman(vArabicNumber) == vRomanNumber){ 
	return(vArabicNumber);
}
}

function handlerArabic() 
{
    document.getElementById("textRoman").value = convertArabicToRoman(parseInt(document.getElementById("textArabic").value));
	return(1);
 }
function handlerRoman() 
{
    document.getElementById("textArabic").value = convertRomanToArabic((document.getElementById("textRoman").value));
	return(1);
 }
