
    MINYEARAD = 1913;
    MAXYEARAD = 2043;
    MINYEARBS = 1970;
    MAXYEARBS = 2100;

   hexData =[0xaed44540,0xbb950540,0x7b951240,0xada44540,0xaf644540,0xaea44500,0xbb950640,0x7ba11240,0xaea44540,0xaf944540,0x7b950640,0xaba14540,0xaea44540,0xaf944540,0xbb950640,0xaba14540,0xaea44540,0xbb944540,0xbb950640,0xaba44540,0x6ea44540,0xbb944540,0xbb951140,0xaba44540,0xaba44540,0xaba44540,0xaba44540,0xaba44540,0xaba44540,0xaba44540,0xbb950280,0xaea44540,0xaf944540,0xbb950640,0x7b951280,0xaea44540,0xaf944540,0xbb950640,0xaba14280,0xaea44540,0xaf944540,0xbb950640,0xaba14580,0xaea44540,0xaf944540,0xbb950640,0xaba14580,0xaea44540,0xbb944540,0xbb951240,0xaba44580,0xaea44540,0xbb950540,0xbb951240,0xaba44580,0xaea44540,0xbb950640,0x7b951280,0xaea44580,0xaed44540,0xbb950640,0x7b951280,0xaea44580,0xaf944540,0xbb950640,0x7ba14280,0xaea44580,0xaf944540,0xbb950640,0xaba14580,0xaea44580,0xaf944540,0xbb950640,0xaba14580,0xaea44580,0xbb944540,0xbb950640,0xaba44580,0xaea44580,0xbb950540,0xbb951240,0xaba44580,0xaea44580,0xbb950540,0xbb951240,0xaea44580,0xaed44580,0xbb950640,0x7b951280,0xaea44580,0xaf944580,0xbb950640,0x7ba11280,0xaea44580,0xaf944580,0xbb950640,0xaba14280,0xaea44580,0xaf944580,0xbb950640,0xaba14580,0xaea44580,0xbb944580,0xbb950640,0xaba44580,0xaea44580,0xbb950580,0xbb951240,0xaba44580,0xaea44580,0xbb950580,0xaf951540,0xbb951580,0xae951580,0xae951580,0xbba51540,0xbb951580,0xaea51580,0x6f6515c0,0xbb951580,0xbb951580,0xaea51580,0xaf951540,0xbb951580,0xae951580,0xaea45580,0x6f9445c0,0xbb951540,0xaea11680,0xaea41580,0xbb644580];

    function formatTwoDigitNumber(num){
        return ("0" + num).slice(-2);
    }

  function getYearDataAtIndex(index) {
       if (index < 0 || index > 130)
           return -1;
       else
           return hexData[index];
   }

  function getYearDataByAd(yearInAd) {
       var index = yearInAd -  MINYEARAD;
       return (index < 0 || index > 130) ? -1 :  hexData[index];
   }

  function getYearDataByBs(yearInBs) {
       var index = yearInBs -  MINYEARBS;
       return (index < 0 || index > 130) ? -1 :  hexData[index];
   }

  function getTotalDaysInMonth(month, data) {
       data = data << month * 2;
       return 29 + (data >>> 30);
   }

  function getFirstBaisakh(data) {
       data = data << 24;
       return 12 + (data >>> 30);
   }

  function getAllMonthDataByBs(yearInBs) {
       var data =  getYearDataByBs(yearInBs);
       var months = [];
       for (var i = 0; i < 12; i++)
           months[i] =  getTotalDaysInMonth(i, data);
       return months;
   }
  function getAllMonthDataByAd(yearInAd) {
       var data =  getYearDataByAd(yearInBs);
       var months = [];
       for (var i = 0; i < 12; i++)
           months[i] =  getTotalDaysInMonth(i, data);
       return months;
   }

  function getMonthList(yearData) {
       var months=[];
       for (var i = 0; i < 12; i++)
           months[i] =  getTotalDaysInMonth(i, yearData);
       return months;
   }

 function dateDiff(fromDate, toDate) {
    return Math.round((fromDate.getTime() - toDate.getTime()) / 86400000);
}
  
 function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
 function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  function getBsMonthName(mn) {
              return  (mn>=0&&mn<12)?(["Baisakh","Jestha", "Ashad", "Shrawan", "Bhadra", "Ashwin", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"])[mn]: "Invalid"
   }

  function getWeekDayName(wd){
    return (wd>0&&wd<=7)?(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])[wd]:"Invalid"
   }

 function toBs(dateInAd,format)
   {
        var day = dateInAd.getDate();
        var month = dateInAd.getMonth();
        var year = dateInAd.getFullYear();
        dateInAd = new Date(year,month,day);
        
        var wholeYearData =  getYearDataByAd(year);
        var firstBaisakh =  getFirstBaisakh(wholeYearData);
        
        var firstDateOfYear = new Date(year,3,firstBaisakh); 
        var diff=0,months=0;
        if(dateInAd.getTime()<firstDateOfYear.getTime())
        {
            year = year -1;
            wholeYearData =  getYearDataByAd(year);
            diff =  dateDiff(firstDateOfYear,dateInAd);
            months =  getMonthList(wholeYearData);
            var i=11,total=0,day=0;
            while(diff>=0)
            {
                    if(diff>months[i])
                    {
                        diff -= months[i];
                        i--;
                    }else if(diff==months[i])
                    {
                        day = 1;
                        break;
                    }
                    else
                    {
                        day = (months[i]-diff)+1;
                        break;
                    }
            }
            var yearBs = (year- MINYEARAD)+ MINYEARBS;
            return (format==1)?day+' '+getBsMonthName(i)+', '+yearBs:{'day':day,'month':i+1,'year':yearBs,'weekDay':getWeekDayName(dateInAd.getDay())};
        }
        else
        {
            diff =  dateDiff(dateInAd,firstDateOfYear);
            months =  getMonthList(wholeYearData);
            var i;
            var total=0;
            var day=0;

            for(i=0;(i<12 && total<=diff);i++)
                total += months[i];

            if(diff>=months[0]) {
                day = (((diff - (total - months[i - 1])) + 1));
                month = (i-1);
            }
            else {
                day = (diff + 1);
                month = i-1;
            }
            var yearBs = (year- MINYEARAD)+ MINYEARBS;
            return (format==1)?day+' '+getBsMonthName(month)+', '+yearBs:{'day':day,'month':month+1,'year':yearBs,'weekDay':getWeekDayName(dateInAd.getDay())};
        }
   }
  function toAd(day,month,year)
   {
        if(year< MINYEARBS || year> MAXYEARBS)
        {
            return;
        }
        if(month>11 || month < 0){
            return;
        }
        var diff = 0,data =  getYearDataByBs(year);
        var firstDay =  getFirstBaisakh(data);
        var months =  getMonthList(data);

        if(day>months[month]){
            return;
        }
        if (month == 0){
            diff = day;
        }
        else
        {
            var i;
            for (i = 0; i < month; i++)
            diff+=months[i];
            diff+=day;
        }
        diff--;
        var resultDate = new Date((year- MINYEARBS)+ MINYEARAD,3,firstDay);
        resultDate.setDate(resultDate.getDate()+diff);
        return resultDate;
   }

console.log(toBs(new Date(),1));
