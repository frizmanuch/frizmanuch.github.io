

$(document).ready(function(){

$.getJSON("https://spreadsheets.google.com/feeds/list/1CU8kjmxoUpfNhsu0jtK3LKzOrvukZbS9N3UPPFVNUBQ/od6/public/values?alt=json", function(data){
	data = data['feed']['entry']

	console.log(data);

showGoods(data);
});

function showGoods(data){

var out = '';

for (var i = 0; i<data.length; i++) {
	if (data[i]['gsx$val']['$t'] >= 1) {
out +=`<div class="col-lg-3 col-md-3 col-sm-2 text-center">`;
out +=`<div class="goods">`;
out +=`<h5>${data[i]['gsx$name']['$t']}</h5>`;
out +=`<img src="${data[i]['gsx$img']['$t']}" alt="">`;
out +=`<p class="cost">Цена: ${data[i]['gsx$cost']['$t']} Rub</p>`;
out +=`<a name="button" class="button" href="${data[i]['gsx$link']['$t']}">Купить</a>`;
out +=`</div>`;
out +=`</div>`;
}
}

$('.shop-field').html(out);

}



//out +=`<a style="inline-block;background-color: #f44336;color: #FFFFFF;padding: 15px 19px;text-align: center;text-decoration: none;font-size: 15px;margin-left: 15px;opacity: 0.9;" href="${data[i]['gsx$id']['$t']}">Купить</a>`;

})

