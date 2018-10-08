$GoogleExcelId = "1CU8kjmxoUpfNhsu0jtK3LKzOrvukZbS9N3UPPFVNUBQ";  //Google Excel Id

$(document).ready(function(){

$.getJSON("https://spreadsheets.google.com/feeds/list/" + $GoogleExcelId + "/od6/public/values?alt=json", function(data){
	data = data['feed']['entry']
while(data['0']['gsx$work']['$t'] !== "YES"){  //}
alert("SHOP DONT WORK")                        //}=> Проверка на работу магазина 
}                                              //}
$title = (data['0']['gsx$title']['$t']);                     //}
document.getElementById("title").innerHTML = $title ;        //}=  Взятие заголовка
$ShopName = (data['0']['gsx$shopname']['$t']);               //}=  Взятие Имени магазина
document.getElementById("ShopName").innerHTML = $ShopName ;  //}
});
});
