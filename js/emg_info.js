$(function(){
	var xml = '/emg_info/xml/emg_info.xml';
	$.ajax({
		url:xml,
		type:'get',
		dataType:'xml',
		cache:false,
		timeout:10000,
		success:parse_xml
	});
});

function parse_xml(xml,status){
	if(status!='success')return;
	$(xml).find('item').each(disp);
}

function disp(){
	var title = "";
	var url = "";
	if(!$(this).find('title').is(':empty')) {
		title = $(this).find('title').text().replace("<![CDATA[","").replace("]]>","").replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}
	if(!$(this).find('url').is(':empty')) {
		url = $(this).find('url').text().replace("<![CDATA[","").replace("]]>","").replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}
	$('<li><p class="title"><a href="'+url+'" target="_blank"><strong>'+title+'</strong></a></p></li>').appendTo('ul.em');
}

$(window).on('load resize', function() {
	var href;
	var target;
	var cnts;
	var text;
	setTimeout(function(){
		$('ul.em li').each(function() {
			href = $(this).find('a').attr('href');
			target = $(this).find('a').attr('target');
			cnts = $(this).find('span').text();
			if(!$(this).find('dd.title').is(':empty')) {
				$('#section_emergency').addClass('show');
			}
			if (href=="") {
			text = $(this).find('a').html();
				$(this).html(text);
			}
			if (target=="_blank") {
				if(!($(this).hasClass('blank'))) {
					$(this).find('a').append('<span class="icon_link"><span class="txt_n">（別ウィンドウで開く）</span></span>');
					$(this).addClass('blank');
				}
			}
		});
	},100);
});