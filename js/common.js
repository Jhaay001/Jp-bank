/*==============================
ユーザーエージェント
==============================*/
var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();

ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));

if (ua.isIE) {
    ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}
if (ua.isiOS) {
    ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}
if (ua.isAndroid) {
    ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}



/*==============================
基本設定
==============================*/

var w = $(window).innerWidth();
var x = 479;




/*==============================
ブレークポイント通過時リロード
==============================*/
var reflg = 0;
var uatab = navigator.userAgent;

$(window).on('load', function() {
	if(w <= x){
		reflg=1;
	}
	else if(w>x){
		reflg=2;
	}
});


$(window).resize(function() {
var w = $(window).innerWidth();
var new_url = location.href.replace(/#.*$/,"");
	if(w <= x && reflg==2){
		if((uatab.indexOf('Android') > 0 && uatab.indexOf('Mobile') == -1)){
		} else {
			location.href=new_url;
			reflg=1;
		}
	}
	else if(w>x && reflg==1){
		if((uatab.indexOf('Android') > 0 && uatab.indexOf('Mobile') == -1)){
		} else {
			location.href=new_url;
			reflg=2;
		}
	}
});



/*==============================
フォント設定
==============================*/
function cText(obj){
	if(obj.value==obj.defaultValue){
		obj.value="";
		obj.style.color="#000";
	}
}

function sText(obj){
	if(obj.value==""){
		obj.value=obj.defaultValue;
		obj.style.color="#666";
	}
}



/*==============================
グロナビ_現在地表示
==============================*/
$(function(){
	path = location.pathname;
	if (w > x) {
		if(path.match("/kojin/access/")){
			$("#header #h_g_menu_01kojin_01 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/chokin/")){
			$("#header #h_g_menu_01kojin_02 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/sokin/")){
			$("#header #h_g_menu_01kojin_03 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/sokin/yuchopay/")){
			$("#header #h_g_menu_01kojin_03 a.h_g_menu_01_01").removeClass('active');
			$("#header #h_g_menu_01kojin_05 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/kyuyo_nenkin/")){
			$("#header #h_g_menu_01kojin_04 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/card/")){
			$("#header #h_g_menu_01kojin_05 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/shisanunyou/")){
			$("#header #h_g_menu_01kojin_06 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/kojin/loan/")){
			$("#header #h_g_menu_01kojin_07 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/app/")){
			$("#header #h_g_menu_01kojin_08 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/hojin/speedy/")){
			$("#header #h_g_menu_01hojin_01 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/hojin/smart/")){
			$("#header #h_g_menu_01hojin_02 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/hojin/cs/")){
			$("#header #h_g_menu_01hojin_03 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/ir/financial/")){
			$("#header #h_g_menu_01ir_01 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/ir/policy/")){
			$("#header #h_g_menu_01ir_02 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/ir/investor/")){
			$("#header #h_g_menu_01ir_03 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/ir/stock/")){
			$("#header #h_g_menu_01ir_04 a.h_g_menu_01_01").addClass('active');
		}
		if(document.URL.match(/abt_mp_index/) || document.URL.match(/abt_cmp_message/)  || document.URL.match(/abt_cmp_ph_mission/)  || document.URL.match(/abt_cmp_strategy/)  || document.URL.match(/abt_cmp_ph_kensyo/)) {
			$("#header #h_g_menu_01aboutus_02 a.h_g_menu_01_01").addClass('active');
		}
		if(document.URL.match("/aboutus/company/outline/")|| document.URL.match(/abt_cmp_index/)) {
			$("#header #h_g_menu_01aboutus_03 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/aboutus/activity/")){
			$("#header #h_g_menu_01aboutus_04 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/aboutus/cm/")){
			$("#header #h_g_menu_01aboutus_05 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/recruit/sinsotu/")){
			$("#header #h_g_menu_01recruit_01 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/recruit/chuto/")){
			$("#header #h_g_menu_01recruit_02 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/recruit/alumni/")){
			$("#header #h_g_menu_01recruit_03 a.h_g_menu_01_01").addClass('active');
		}
		if(path.match("/recruit/challenged/")){
			$("#header #h_g_menu_01recruit_05 a.h_g_menu_01_01").addClass('active');
		}
	}
});

/*==============================
PCレイアウト
グロナビ_クリック開閉
==============================*/
$(function(){
	if (w > x) {
		$('#h_g_menu .js_menu_open').attr('aria-expanded', false);
		// 第2階層をクリックでドロップダウンメニューを開閉
		$('#h_g_menu .js_menu_open').on('click', function(e){
			// a要素のクリックイベントを無効化
			e.preventDefault();
			// クラス名activeを追加
			$(this).toggleClass('is-open');
			// ドロップダウンメニューを開く
			$(this).parent('dt').next('dd').slideDown(400);
			// aria-expandedを true にする
			$(this).attr('aria-expanded', true);
			// アクティブなメニュー以外はドロップダウンメニューを閉じて、クラス名activeを外す
			$('#h_g_menu .js_menu_open').not($(this)).parent('dt').next('dd').slideUp(400);
			$('#h_g_menu .js_menu_open').not($(this)).removeClass('is-open');
			// aria-expandedを false にする
			$('#h_g_menu .js_menu_open').not($(this)).attr('aria-expanded', false);
			// クラス名activeを持っていなければ、ドロップダウンメニューを閉じる
			if(!($(this).hasClass('is-open'))) {
				$(this).parent('dt').next('dd').slideUp(400);
				// aria-expandedを false にする
				$(this).attr('aria-expanded', false);
			}
		});
	}
});

/*==============================
グロナビ_閉じるボタン
==============================*/
$(function(){
	// 閉じるボタンをクリックでドロップダウンメニューを閉じる
	$("#header dd.h_g_menu_01_01 .h_g_menu_close button").on('click', function(){
		$(this).parent('div').parent('dd').slideUp(400);
		// アクティブな要素のクラス名activeを外す
		if ($(this).parent('div').parent('dd').prev('dt').children('.js_menu_open').hasClass('is-open')) {
			$(this).parent('div').parent('dd').prev('dt').children('.js_menu_open').removeClass('is-open');
			// aria-expandedを false にする
			$(this).parent('div').parent('dd').prev('dt').children('.js_menu_open').attr('aria-expanded', false);
		}
	})
});

/*==============================
グロナビ_フォーカス
==============================*/
// $(function(){
// 	if (w > x) {
// 		$('a.h_g_menu_01_01').focus(function(){
// 			// フォーカスがあたったカテゴリーのメニューを表示
// 			$('dd.h_g_menu_01_01').slideUp(400);
// 			$(this).parent('dt').next('dd.h_g_menu_01_01').stop(true,false).slideDown(400);
// 			$(this).addClass('hover');
// 		});
// 		$('a.h_g_menu_01_01').blur(function(){
// 			$(this).removeClass('hover');
// 		});
// 		$("dd.h_g_menu_01_01 .h_g_menu_close button:last").blur(function(){
// 			$(this).closest('dd.h_g_menu_01_01').css('display' , 'none');
// 			$(this).closest('dd.h_g_menu_01_01').prev('dt').children('a.h_g_menu_01_01').removeClass('active');
// 		});

// 		$('a.h_g_menu_01_01').on('keydown', function(e) {
// 			if(e.keyCode === 37) { // ←
// 					focus_prev();
// 					return false;
// 			}
// 			if(e.keyCode === 39) { // →
// 					focus_next();
// 					return false;
// 			}
// 		});
		
// 		// フォーカスを前に移動する
// 		function focus_prev() {
// 			// 現在のフォーカスを取得
// 			var currentFocusIndex = $('a.h_g_menu_01_01').index($(':focus'));
// 			if(currentFocusIndex > -1) {
// 					for (var i = 0; i < $('a.h_g_menu_01_01').length; i++) {
// 							if(i === currentFocusIndex && i > 0) {
// 								$('a.h_g_menu_01_01').eq(i - 1).focus();
// 							}
// 					}
// 			}
// 		}
		
// 		// フォーカスを次に移動する
// 		function focus_next() {
// 			// 現在のフォーカスを取得
// 			var currentFocusIndex = $('a.h_g_menu_01_01').index($(':focus'));
// 			if(currentFocusIndex > -1) {
// 					for (var i = 0; i < $('a.h_g_menu_01_01').length; i++) {
// 							if(i === currentFocusIndex && i < $('a.h_g_menu_01_01').length - 1) {
// 								$('a.h_g_menu_01_01').eq(i + 1).focus();
// 							}
// 					}
// 			} else {
// 				$('a.h_g_menu_01_01').eq(0).focus();
// 			}
// 		}
// 	}
// });

/*==============================
グロナビ_スマートフォン
==============================*/
$(function(){
	if(w<=x) {
		$('#h_menu_btn').on('click', function(){
			var display = $('#h_sp_menu').css('display');
			if (display == 'block') {
				//$(this).removeClass('h_menu_btn_open');
				//$(this).addClass('h_menu_btn_close');
				$('#h_sp_menu').slideUp(400);
				$('#contents').fadeIn();
				$('.side_menu').fadeIn();
				$('#footer').fadeIn();
				$('#top_contents,#contents').css('height','auto');
				$('#top_contents,#contents').css('overflow','visible');
				$('.btn_to_top').css('z-index','10000');
				$(this).attr('aria-expanded', 'false');
			} else {
				//$(this).removeClass('h_menu_btn_close');
				//$(this).addClass('h_menu_btn_open');
				$('#h_sp_menu').slideDown(400);
				$('#contents').fadeOut();
				$('.side_menu').fadeOut();
				$('#footer').fadeOut();
				$('#top_contents,#contents').css('height','0');
				$('#top_contents,#contents').css('overflow','hidden');
				$('.btn_to_top').css('z-index','0');
				$(this).attr('aria-expanded', 'true');
			}
		});
		$('#h_close_btn').on('click', function(){
			$('#h_menu_btn').removeClass('h_menu_btn_open');
			$('#h_menu_btn').addClass('h_menu_btn_close');
			$('#h_sp_menu').slideUp(400);
			$('#contents').fadeIn();
			$('.side_menu').fadeIn();
			$('#footer').fadeIn();
			$('#top_contents,#contents').css('height','auto');
			$('#top_contents,#contents').css('overflow','visible');
			$('.btn_to_top').css('z-index','10000');
			$('#h_menu_btn').attr('aria-expanded', 'false');
		});
	}
});



/*==============================
グロナビ_タブレット対応
==============================*/
$(function (){
	if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		if (w>x) {
			var tbtn = $('a.h_g_menu_01_01');
			tbtn.addClass('tab_off');
			$(tbtn).click(function(e){
				if ($(tbtn).parent('dt').next('dd').hasClass('dis_n')) {
					$(tbtn).removeClass('tab_on');
					$(this).addClass('tab_off');
				}
				else if($(this).hasClass('tab_off')) {
					e.preventDefault();
					$(tbtn).removeClass('tab_on');
					$(tbtn).addClass('tab_off');
					$(this).removeClass('tab_off');
					$(this).addClass('tab_on');
				}
				else {
					$(tbtn).removeClass('tab_on');
					$(this).addClass('tab_off');
				}
			});
		}
	}
});



/*==============================
ローカルナビ_アコーディオン
==============================*/
$(function(){
	if (w<=x) {
		$('.side_menu_list01').hide();
		// SP時のみWAI-ARIAの追加
		$('.side_menu_list h2 a').attr({
			'aria-controls': 'side_menu_list-panel01',
			'aria-expanded': 'false'
		});
		$('.side_menu_list h2 a').on('click', function(e){
			$(this).toggleClass('open');
			$('.side_menu_list01').slideToggle(400);
			e.preventDefault();
			// aria-expandedを開いているときはtrue、閉じているときはfalse
			if($(this).attr('aria-expanded') == 'false') {
				$(this).attr('aria-expanded', 'true');
			} else {
				$(this).attr('aria-expanded', 'false');
			}
		});
	}

	$('a.side_menu_list01_a').on('click', function(){
		if ($(this).attr('href') == "toggle") {
			if ($(this).hasClass('side_menu_list01_close')) {
				$(this).parent().children('.side_menu_list02').slideDown(400);
				$(this).removeClass('side_menu_list01_close');
				$(this).addClass('side_menu_list01_open');
				// 開いているときはaria-expandedをtrue
				$(this).attr('aria-expanded', 'true');
			} else if ($(this).hasClass('side_menu_list01_open')) {
				$(this).parent().children('.side_menu_list02').slideUp(400);
				$(this).removeClass('side_menu_list01_open');
				$(this).addClass('side_menu_list01_close');
				// 開いているときはaria-expandedをfalse
				$(this).attr('aria-expanded', 'false');
			}
			return false;
		}
	});

	$('a.side_menu_list02_a').on('click', function(){
		if ($(this).attr('href') == "toggle") {
			if ($(this).hasClass('side_menu_list02_close')) {
				$(this).parent().children('.side_menu_list03').slideDown(400);
				$(this).removeClass('side_menu_list02_close');
				$(this).addClass('side_menu_list02_open');
				// 開いているときはaria-expandedをtrue
				$(this).attr('aria-expanded', 'true');
			} else if ($(this).hasClass('side_menu_list02_open')) {
				$(this).parent().children('.side_menu_list03').slideUp(400);
				$(this).removeClass('side_menu_list02_open');
				$(this).addClass('side_menu_list02_close');
				// 開いているときはaria-expandedをfalse
				$(this).attr('aria-expanded', 'false');
			}
			return false;
		}
	});
});



/*==============================
ローカルナビ_現在地表示
==============================*/
$(function(){
	var url = window.location;
	var url = url.href;
	var fileName = url.replace(/^[httpsfile]+:\/{2,3}[0-9a-z\.\_\-:]+?:?[0-9]*?\//i,'/');

	if (w>x) {
		if (fileName.indexOf('?') != -1) {
			fileName = fileName.substring(0,fileName.indexOf('?'));
		};
		if (fileName.indexOf('#') != -1) {
			fileName = fileName.substring(0,fileName.indexOf('#'));
		};
		if (fileName.indexOf('.html') == -1) {
			fileName = fileName+'index.html';
		};

		//if(fileName^=)
		var obj = 'a[href="'+fileName+'"]';
		$('.side_menu_top').find(obj).css('color','#009900');
		if ($(obj).hasClass('side_menu_list03_a')) {
			$(obj).parents('ul').show();
			$(obj).parent().parent().parent().children('.side_menu_list02_a').removeClass('side_menu_list02_close');
			$(obj).parent().parent().parent().children('.side_menu_list02_a').addClass('side_menu_list02_open');
			$(obj).parent().parent().parent().children('.side_menu_list02_a').css('color','#009900');
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').removeClass('side_menu_list01_close');
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').addClass('side_menu_list01_open');
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').css('color','#009900');
		};
		if ($(obj).hasClass('side_menu_list02_a')) {
			$(obj).parents('ul').show();
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').removeClass('side_menu_list01_close');
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').addClass('side_menu_list01_open');
			$(obj).parents('.side_menu_list02').prev('.side_menu_list01_a').css('color','#009900');
		};
	}
});

/*==============================
その他_画像＋テキスト並列
==============================*/
$(document).ready(function() {
	if(w>x){
		$('.arrange_box_l').each(function() {
			var fl_w = $(this).children('.img_area').children('.img').find('img').width();
			$(this).children('.img_area').children('.cap').css('width',fl_w);
			$(this).children('.txt_area').css('width',660-fl_w);
		});
		$('.arrange_box_r').each(function() {
			var fl_w = $(this).children('.img_area').children('.img').find('img').width();
			$(this).children('.img_area').children('.cap').css('width',fl_w);
			$(this).children('.txt_area').css('width',660-fl_w);
		});
	}
});
$(window).on('load', function() {
	if(w>x){
		$('.arrange_box_l').each(function() {
			var fl_w = $(this).children('.img_area').children('.img').find('img').width();
			$(this).children('.img_area').children('.cap').css('width',fl_w);
			$(this).children('.txt_area').css('width',660-fl_w);
		});
		$('.arrange_box_r').each(function() {
			var fl_w = $(this).children('.img_area').children('.img').find('img').width();
			$(this).children('.img_area').children('.cap').css('width',fl_w);
			$(this).children('.txt_area').css('width',660-fl_w);
		});
	}
});



/*==============================
その他_画像＋テキスト回り込み
==============================*/
$(window).on('load', function() {
	if(w>x){
		$('.img_fl_left').each(function() {
			var fl_w = $(this).children('.img_fl_left_img').find('img').width();
			$(this).children('.img_fl_left_img').children('span').css('width',fl_w);
		});
		$('.img_fl_right').each(function() {
			var fl_w = $(this).children('.img_fl_right_img').find('img').width();
			$(this).children('.img_fl_right_img').children('span').css('width',fl_w);
		});
	}
});



/*==============================
その他_画像PC,SP自動切替え
==============================*/
$(function(){
	if(w <= x){
		$('.pcsp').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pci', '_spi'));
		});
	}
});



/*==============================
その他_アコーディオン
==============================*/
$(document).ready(function(){
	if(document.URL.match(/kj_crd_cdt_jcb_sv_yutai/) || document.URL.match(/kj_crd_cdt_vm_sv_yutai/) || document.URL.match(/kj_crd_cdt_yutai/)) {
		$('.slide_content_btn').addClass('close');
	} else {
		$('.slide_content_btn').addClass('open');
	}
    $('.slide_content_title').on('click', function(){
		$(this).children('div').toggleClass('close');
		$(this).children('div').toggleClass('open');
		$(this).next('.slide_content_area').slideToggle("fast");
		// WAI-ARIA
		if($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', 'true');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
	});
	$('.slide_content_title').keypress( function ( e ) {
		if ( e.which == 13 ) {
		$(this).children('div').toggleClass('close');
		$(this).children('div').toggleClass('open');
		$(this).next('.slide_content_area').slideToggle("fast");
		// WAI-ARIA
		if($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', 'true');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
			return false;
		}
	});
});

$(document).ready(function(){
	if(document.URL.match(/kat_index/)) {
		$('.second_slide_content_btn').addClass('open');
	} else{
		$('.second_slide_content_btn').addClass('close');
	}
    $('.second_slide_content_btn').click(function(){
		$(this).toggleClass('close');
		$(this).toggleClass('open');
		$(this).prev('.second_slide_content_area').slideToggle("fast");
	});
	$('.second_slide_content_btn').keypress( function ( e ) {
		if ( e.which == 13 ) {
		$(this).toggleClass('close');
		$(this).toggleClass('open');
		$(this).prev('.second_slide_content_area').slideToggle("fast");
			return false;
		}
	});
});

/*==============================
その他_フッター位置調整
==============================*/
$(window).on('load', function() {
	if(w <= x){
		if ($('.side_menu_bottom').length) {
			// サイドメニューがある時
			var fp_t = $('.side_menu_bottom').height();
			$('#footer').css('padding-top', fp_t+20);
		} else {
			// サイドメニューがない時
			$('#footer').css('padding-top', 20);
		}
	}
});

/*==============================
その他_ページ内リンク
==============================*/
$(function() {
	$('a[href^="#"]:not(.popup-modal)').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// target が存在しない場合は <body> を戻り先とする
		if (!target.length > 0 ){
			target = $('body');
		}
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');

		// スクロールアニメーションが完了した後にフォーカスを設定
		// tabindex="-1" を用いてJavaScript からページ内リンク先にフォーカスを当て、次のフォーカスの開始点とする
		$(href).attr('tabindex','-1').focus();

		return false;
	});
	$('map area[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');

		// スクロールアニメーションが完了した後にフォーカスを設定
		// tabindex="-1" を用いてJavaScript からページ内リンク先にフォーカスを当て、次のフォーカスの開始点とする
		$(href).attr('tabindex','-1').focus();

		return false;
	});
});



/*==============================
その他_トップに戻る
==============================*/
$(function() {
	var topBtn = $('.btn_to_top');
	//最初はボタンを隠す
	topBtn.hide();
	//スクロールが300に達したらボタンを表示させる
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップに戻る
	//500の数字を大きくするとスクロール速度が遅くなる
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});



/*==============================
ローカルナビ_現在地展開
==============================*/
$(function(){
	if(w <= x){
		$(".side_menu_top h2 a").click(function() {
			return false;
		});
	}

	/*==========店舗・ATM==========*/
	//「ゆうちょ　ATMのご案内」タブを開く
	if(document.URL.match(/kj_acs_atmcd_atmcd/)) {
		$("a[href *= 'kj_acs_atmcd_atmcd']").next('ul').show();
		$("a[href *= 'kj_acs_atmcd_atmcd']").removeClass('side_menu_list01_link');
		$("a[href *= 'kj_acs_atmcd_atmcd']").addClass('side_menu_list01_open');
		$("a[href *= 'kj_acs_atmcd_atmcd']").append('<span class="txt_n">メニュー開閉</span>');
		$("a.side_menu_list01_a[href *= 'kj_acs_atmcd_atmcd']").attr("href", "toggle").attr('aria-expanded', 'true');
	}
	/*==========貯金==========*/
	//「定額貯金一覧」タブを開く
		if(document.URL.match(/kj_cho_tg_/)) {
			$("a[href *= 'kj_cho_tg_index']").next('ul').show();
			$("a[href *= 'kj_cho_tg_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_cho_tg_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_cho_tg_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_cho_tg_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「定期貯金一覧」タブを開く
		if(document.URL.match(/kj_cho_tk_/)) {
			$("a[href *= 'kj_cho_tk_index']").next('ul').show();
			$("a[href *= 'kj_cho_tk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_cho_tk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_cho_tk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_cho_tk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「財形貯金」タブを開く
		if(document.URL.match(/kj_cho_zk_/)) {
			$("a[href *= 'kj_cho_zk_index']").next('ul').show();
			$("a[href *= 'kj_cho_zk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_cho_zk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_cho_zk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_cho_zk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========送金・支払・海外関連==========*/
	//「口座を持っていない相手に送る」タブを開く
		if(document.URL.match(/kj_sk_hkz_/)) {
			$("a[href *= 'kj_sk_hkz_index']").next('ul').show();
			$("a[href *= 'kj_sk_hkz_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_hkz_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_hkz_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_hkz_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「ゆうちょ口座に送金する」タブを開く
		if(document.URL.match(/kj_sk_kz_/)) {
			$("a[href *= 'kj_sk_kz_index']").next('ul').show();
			$("a[href *= 'kj_sk_kz_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_kz_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_kz_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_kz_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「他の金融機関口座に送金する」タブを開く
		if(document.URL.match(/kj_sk_fm_/)) {
			$("a[href *= 'kj_sk_fm_furikomi']").next('ul').show();
			$("a[href *= 'kj_sk_fm_furikomi']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_fm_furikomi']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_fm_furikomi']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_fm_furikomi']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「自動で送金・払込み」タブを開く
		if(document.URL.match(/kj_sk_jd_/)) {
			$("a[href *= 'kj_sk_jd_haraikomi']").next('ul').show();
			$("a[href *= 'kj_sk_jd_haraikomi']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_jd_haraikomi']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_jd_haraikomi']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_jd_haraikomi']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「即時振替サービス・双方向即時振替サービス」タブを開く
		if(document.URL.match(/kj_sk_sj_/)) {
			$("a[href *= 'kj_sk_sj_index']").next('ul').show();
			$("a[href *= 'kj_sk_sj_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_sj_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_sj_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_sj_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Pay-easy（ペイジー）」タブを開く
		if(document.URL.match(/kj_sk_pe_/)) {
			$("a[href *= 'kj_sk_pe_index']").next('ul').show();
			$("a[href *= 'kj_sk_pe_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_pe_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_pe_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_pe_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Pay-easy（ペイジー）」「ペイジーでお支払いできる税金・料金」タブを開く
		if(document.URL.match(/kj_sk_pe_list/)) {
			$("a[href *= 'kj_sk_pe_list']").next('ul').show();
			$("a[href *= 'kj_sk_pe_list']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_pe_list']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_pe_list']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'kj_sk_pe_list']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「国際送金」タブを開く
		if(document.URL.match(/kj_sk_ks_/)) {
			$("a[href *= 'kj_sk_ks_index']").next('ul').show();
			$("a[href *= 'kj_sk_ks_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_ks_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_ks_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_ks_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「口座振替受付サービス」タブを開く
		if(document.URL.match(/kj_sk_kf_/)) {
			$("a[href *= 'kj_sk_kf_furikae.html']").next('ul').show();
			$("a[href *= 'kj_sk_kf_furikae.html']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_kf_furikae.html']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_kf_furikae.html']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_kf_furikae.html']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「ゆうちょPay」タブを開く
		if(document.URL.match(/kj_sk_yp_/)) {
			$("a[href *= 'kj_sk_yp_index']").next('ul').show();
			$("a[href *= 'kj_sk_yp_index]").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_sk_yp_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_sk_yp_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_sk_yp_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========給与・年金受取り==========*/
	//「年金自動受取り」タブを開く
		if(document.URL.match(/kj_kyn_nenkin/)) {
			$("a[href *= 'kj_kyn_nenkin']").next('ul').show();
			$("a[href *= 'kj_kyn_nenkin']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_kyn_nenkin']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_kyn_nenkin']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_kyn_nenkin']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========カードサービス==========*/
	//「クレジットカード」タブを開く
		if(document.URL.match(/kj_crd_cdt_/)) {
			$("a[href *= 'kj_crd_cdt_lu_index']").next('ul').show();
			$("a[href *= 'kj_crd_cdt_lu_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_crd_cdt_lu_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_crd_cdt_lu_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_crd_cdt_lu_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「クレジットカード」「JP BANK VISAカード/マスターカード」タブを開く
		if(document.URL.match(/kj_crd_cdt_vm_/)) {
			$("a[href *= 'kj_crd_cdt_vm_vmindex']").next('ul').show();
			$("a[href *= 'kj_crd_cdt_vm_vmindex']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_crd_cdt_vm_vmindex']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_crd_cdt_vm_vmindex']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'kj_crd_cdt_vm_vmindex']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「クレジットカード」「JP BANK JCBカード」タブを開く
		if(document.URL.match(/kj_crd_cdt_jcb_/)) {
			$("a[href *= 'kj_crd_cdt_jcb_jindex']").next('ul').show();
			$("a[href *= 'kj_crd_cdt_jcb_jindex']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_crd_cdt_jcb_jindex']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_crd_cdt_jcb_jindex']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'kj_crd_cdt_jcb_jindex']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「ゆうちょデビット」タブを開く
		if(document.URL.match(/kj_cl_yd_index/) || document.URL.match(/kj_crd_dbt/)) {
			$("a[href *= 'kj_cl_yd_index']").next('ul').show();
			$("a[href *= 'kj_cl_yd_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_cl_yd_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_cl_yd_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_cl_yd_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========資産運用==========*/
	//「国債」タブを開く
		if(document.URL.match(/kj_suy_ks_/)) {
			$("a[href *= 'kj_suy_ks_index']").next('ul').show();
			$("a[href *= 'kj_suy_ks_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_ks_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_suy_ks_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_suy_ks_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「投資信託」タブを開く
		if(document.URL.match(/kj_suy_ts_/)) {
			$("a[href *= 'kj_suy_ts_index']").next('ul').show();
			$("a[href *= 'kj_suy_ts_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_ts_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_suy_ts_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_suy_ts_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「投資信託」「NISA」タブを開く
		if(document.URL.match(/kj_suy_ts_nisa_/)) {
			$("a[href *= 'kj_suy_ts_nisa_index']").next('ul').show();
			$("a[href *= 'kj_suy_ts_nisa_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_ts_nisa_index']").addClass('side_menu_list02_open');
			$("a[href *= 'kj_suy_ts_nisa_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'kj_suy_ts_nisa_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「変額年金保険」タブを開く
		if(document.URL.match(/kj_suy_hg_/)) {
			$("a[href *= 'kj_suy_hg_index']").next('ul').show();
			$("a[href *= 'kj_suy_hg_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_hg_index']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_suy_hg_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_suy_hg_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「確定拠出年金」タブを開く
		if(document.URL.match(/kj_suy_kt_/)) {
			$("a[href *= 'kj_suy_kt_']").next('ul').show();
			$("a[href *= 'kj_suy_kt_']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_kt_']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_suy_kt_']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_suy_kt_']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「ゆうちょファンドラップ」タブを開く
		if(document.URL.match(/kj_suy_fw_/)) {
			$("a[href *= 'kj_suy_fw_']").next('ul').show();
			$("a[href *= 'kj_suy_fw_']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_suy_fw_']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_suy_fw_']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_suy_fw_']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========ローン・貸付け==========*/
	//「スルガ銀行の個人ローンのお申込み」タブを開く
		if(document.URL.match(/kj_ln_loan/) || document.URL.match(/kj_ln_tetuzuki/) || document.URL.match(/kj_ln_access/) || document.URL.match(/kj_ln_flat35/) ) {
			$("a[href *= 'kj_ln_loan']").next('ul').show();
			$("a[href *= 'kj_ln_loan']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_ln_loan']").addClass('side_menu_list01_open');
			$("a[href *= 'kj_ln_loan']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'kj_ln_loan']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「ゆうちょフラット３５」タブを開く
		if(document.URL.match(/kj_ln_flat35/)) {
			$("a[href *= 'kj_ln_flat35']").next('ul').show();
			$("a[href *= 'kj_ln_flat35']").removeClass('side_menu_list01_link');
			$("a[href *= 'kj_ln_flat35']").addClass('side_menu_list02_open');
			$("a[href *= 'kj_ln_flat35']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'kj_ln_flat35']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========アプリのご案内==========*/
	//「ゆうちょ通帳アプリ」タブを開く
		if(document.URL.match(/app_tsucho/)|| document.URL.match(/app_howto/)|| document.URL.match(/app_goriyo/)) {
			$("a[href *= 'app_tsucho']").next('ul').show();
			$("a[href *= 'app_tsucho']").removeClass('side_menu_list01_link');
			$("a[href *= 'app_tsucho']").addClass('side_menu_list01_open');
			$("a[href *= 'app_tsucho']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'app_tsucho']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「ゆうちょ手続きアプリ」タブを開く
	if(document.URL.match(/app_tz/)) {
		$("a[href *= 'app_tz']").next('ul').show();
		$("a[href *= 'app_tz']").removeClass('side_menu_list01_link');
		$("a[href *= 'app_tz']").addClass('side_menu_list01_open');
		$("a[href *= 'app_tz']").append('<span class="txt_n">メニュー開閉</span>');
		$("a.side_menu_list01_a[href *= 'app_tz']").attr("href", "toggle").attr('aria-expanded', 'true');
	}
	//「ゆうちょレコ」タブを開く
		if(document.URL.match(/app_yuchoreco/)) {
			$("a[href *= 'app_yuchoreco']").next('ul').show();
			$("a[href *= 'app_yuchoreco']").removeClass('side_menu_list01_link');
			$("a[href *= 'app_yuchoreco']").addClass('side_menu_list01_open');
			$("a[href *= 'app_yuchoreco']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'app_yuchoreco']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========入出力事務を省力化==========*/
	//「ゆうちょBizダイレクト」タブを開く
		if(document.URL.match(/hj_smt_bd_/)) {
			$("a[href *= 'hj_smt_bd_index']").next('ul').show();
			$("a[href *= 'hj_smt_bd_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'hj_smt_bd_index']").addClass('side_menu_list01_open');
			$("a[href *= 'hj_smt_bd_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'hj_smt_bd_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========顧客サービスを向上==========*/
	//「ゆうちょPay」タブを開く
		if(document.URL.match(/hj_cs_yp_/)|| document.URL.match(/kj_sk_yp_cl_crb/)) {
			$("a[href *= 'hj_cs_yp_index']").next('ul').show();
			$("a[href *= 'hj_cs_yp_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'hj_cs_yp_index']").addClass('side_menu_list01_open');
			$("a[href *= 'hj_cs_yp_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'hj_cs_yp_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========会社情報==========*/
	//「経営理念」タブを開く
		if(document.URL.match(/abt_cmp_ph_/)) {
			$("a[href *= 'abt_cmp_ph_mission']").next('ul').show();
			$("a[href *= 'abt_cmp_ph_mission']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_cmp_ph_mission']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_cmp_ph_mission']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_cmp_ph_mission']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「会社概要」タブを開く
		if(document.URL.match(/abt_cmp_ol_/)) {
			$("a[href *= 'abt_cmp_ol_profile']").next('ul').show();
			$("a[href *= 'abt_cmp_ol_profile']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_cmp_ol_profile']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_cmp_ol_profile']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_cmp_ol_profile']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「コーポレートガバナンス」タブを開く
		if(document.URL.match(/abt_cmp_governance/) || document.URL.match(/abt_cmp_report/)  || document.URL.match(/abt_cmp_system/)  || document.URL.match(/abt_cmp_compliance/)  || document.URL.match(/bt_cmp_conflict/)  || document.URL.match(/abt_cmp_risk/) || document.URL.match(/abt_cmp_internalaudit/) || document.URL.match(/abt_cmp_torikumi/)) {
			$("a[href *= 'abt_cmp_governance']").next('ul').show();
			$("a[href *= 'abt_cmp_governance']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_cmp_governance']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_cmp_governance']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_cmp_governance']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「ESG関連方針」タブを開く
		if(document.URL.match(/abt_cmp_esg_hosin/) || document.URL.match(/abt_cmp_human_rights/)  || document.URL.match(/abt_cmp_environment/)  || document.URL.match(/abt_cmp_esg/)  || document.URL.match(/index03/)) {
			$("a[href *= 'abt_cmp_esg_hosin']").next('ul').show();
			$("a[href *= 'abt_cmp_esg_hosin']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_cmp_esg_hosin']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_cmp_esg_hosin']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_cmp_esg_hosin']").attr("href", "toggle").attr('aria-expanded', 'true');
		}


	/*==========取り組み・活動==========*/
	//「電子決済等代行業者との連携等に係る取り組み」タブを開く
		if(document.URL.match(/abt_act_api_/)) {
			$("a[href *= 'abt_act_api_index']").next('ul').show();
			$("a[href *= 'abt_act_api_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_act_api_index']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_act_api_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_act_api_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「福祉・ボランティアサービス」タブを開く
		if(document.URL.match(/abt_act_fk_/)) {
			$("a[href *= 'abt_act_fk_index']").next('ul').show();
			$("a[href *= 'abt_act_fk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_act_fk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'abt_act_fk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'abt_act_fk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「福祉・ボランティアサービス」「ゆうちょボランティア貯金」タブを開く
		if(document.URL.match(/abt_act_fk_vlt_/) || document.URL.match(/abt_act_fk_volunteer/)) {
			$("a[href *= 'abt_act_fk_volunteer']").next('ul').show();
			$("a[href *= 'abt_act_fk_volunteer']").removeClass('side_menu_list01_link');
			$("a[href *= 'abt_act_fk_volunteer']").addClass('side_menu_list02_open');
			$("a[href *= 'abt_act_fk_volunteer']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list02_a[href *= 'abt_act_fk_volunteer']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	/*==========各種お申込み・お手続き==========*/
	//「住所・氏名・印章の変更　等」タブを開く
		if(document.URL.match(/tzk_hnk_/)) {
			$("a[href *= 'tzk_hnk_index']").next('ul').show();
			$("a[href *= 'tzk_hnk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_hnk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_hnk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_hnk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「相続」タブを開く
		if(document.URL.match(/tzk_szk_/)) {
			$("a[href *= 'tzk_szk_index']").next('ul').show();
			$("a[href *= 'tzk_szk_index]").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_szk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_szk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_szk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「貯金商品」タブを開く
		if(document.URL.match(/tzk_shn_/)) {
			$("a[href *= 'tzk_shn_index']").next('ul').show();
			$("a[href *= 'tzk_shn_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_shn_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_shn_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_shn_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「送金・決済・受取り」タブを開く
		if(document.URL.match(/tzk_sk_/)) {
			$("a[href *= 'tzk_sk_index']").next('ul').show();
			$("a[href *= 'tzk_sk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_sk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_sk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_sk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「貸付け」タブを開く
		if(document.URL.match(/tzk_ktk_/)) {
			$("a[href *= 'tzk_ktk_index']").next('ul').show();
			$("a[href *= 'tzk_ktk_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_ktk_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_ktk_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_ktk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「国債」タブを開く
		if(document.URL.match(/tzk_ks_/)) {
			$("a[href *= 'tzk_ks_index']").next('ul').show();
			$("a[href *= 'tzk_ks_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_ks_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_ks_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_ks_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「海外関連サービス」タブを開く
		if(document.URL.match(/tzk_kg_/)) {
			$("a[href *= 'tzk_kg_index']").next('ul').show();
			$("a[href *= 'tzk_kg_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'tzk_kg_index']").addClass('side_menu_list01_open');
			$("a[href *= 'tzk_kg_index']").append('<span class="txt_n">メニュー開閉</span>');
			$("a.side_menu_list01_a[href *= 'tzk_kg_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	if($(window).width() >= 479){
	//「Corporate Information」タブを開く
		if(document.URL.match(/en_abt_cmp_executives/) || document.URL.match(/en_abt_cmp_index/) || document.URL.match(/en_abt_cmp_management/) || document.URL.match(/en_abt_cmp_strategy/) || document.URL.match(/en_abt_cmp_profile/) || document.URL.match(/en_abt_cmp_executives/) || document.URL.match(/en_abt_cmp_governance/) || document.URL.match(/en_abt_cmp_stance/) || document.URL.match(/en_abt_cmp_system/) || document.URL.match(/en_abt_cmp_auditing/) || document.URL.match(/en_abt_cmp_risk/) || document.URL.match(/en_abt_cmp_risk/)) {
			$("a[href *= 'en_abt_cmp_index']").next('ul').show();
			$("a[href *= 'en_abt_cmp_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_abt_cmp_index']").addClass('side_menu_list01_open');
			$("a[href *= 'en_abt_cmp_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list01_a[href *= 'en_abt_cmp_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	// サイドメニューの他ディレクトリにもリンクがあるページは親階層のタブのみ開く
		if(document.URL.match(/en_abt_cmp_message/) || document.URL.match(/en_abt_cmp_strategy/) || document.URL.match(/en_abt_cmp_dirmessage/)) {
			$("a[href *= 'en_abt_cmp_index']").next('ul').show();
			$("a[href *= 'en_abt_cmp_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_abt_cmp_index']").addClass('side_menu_list01_open');
			$("a[href *= 'en_abt_cmp_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list01_a[href *= 'en_abt_cmp_index']").attr("href", "toggle").attr('aria-expanded', 'true');
			$("a[href *= 'en_ir']").next('ul').hide();
			$("a[href *= 'en_ir']").removeClass('side_menu_list01_open');
			$("a[href *= 'en_ir']").css('color','#333');
		}
		//「Corporate Information」「Corporate Profile」タブを開く
		if(document.URL.match(/en_abt_cmp_profile/) || document.URL.match(/en_abt_cmp_overseas/)) {
			$("a[href *= 'en_abt_cmp_profile']").next('ul').show();
			$("a[href *= 'en_abt_cmp_profile']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_abt_cmp_profile']").addClass('side_menu_list02_open');
			$("a[href *= 'en_abt_cmp_profile']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_abt_cmp_profile']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Corporate Information」「Corporate Governance」タブを開く
		if(document.URL.match(/en_abt_cmp_governance/) || document.URL.match(/en_abt_cmp_stance/) || document.URL.match(/en_abt_cmp_system/) || document.URL.match(/en_abt_cmp_auditing/) || document.URL.match(/en_abt_cmp_risk/) || document.URL.match(/en_abt_cmp_compliance/)) {
			$("a[href *= 'en_abt_cmp_governance']").next('ul').show();
			$("a[href *= 'en_abt_cmp_governance']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_abt_cmp_governance']").addClass('side_menu_list02_open');
			$("a[href *= 'en_abt_cmp_governance']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_abt_cmp_governance']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Investor Relations」タブを開く
		if(document.URL.match(/en_ir_/)) {
			$("a[href *= 'en_ir_index']").next('ul').show();
			$("a[href *= 'en_ir_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_ir_index']").addClass('side_menu_list01_open');
			$("a[href *= 'en_ir_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list01_a[href *= 'en_ir_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Investor Relations」「Financial Information」タブを開く
		if(document.URL.match(/en_ir_fnc_/)) {
			$("a[href *= 'en_ir_fnc_index']").next('ul').show();
			$("a[href *= 'en_ir_fnc_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_ir_fnc_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_ir_fnc_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_ir_fnc_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Investor Relations」「IR Information」タブを開く
		if(document.URL.match(/en_ir_inf_/)) {
			$("a[href *= 'en_ir_inf_index']").next('ul').show();
			$("a[href *= 'en_ir_inf_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_ir_inf_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_ir_inf_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_ir_inf_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Investor Relations」「Stock Information」タブを開く
		if(document.URL.match(/en_ir_stk_/)) {
			$("a[href *= 'en_ir_stk_index']").next('ul').show();
			$("a[href *= 'en_ir_stk_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_ir_stk_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_ir_stk_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_ir_stk_index']").attr("href", "toggle").attr('aria-expanded', 'true');
			$("a.side_menu_list02_a[href *= 'en_ir_stk_meeting_bn']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Investor Relations」「Management Policy」タブを開く
		if(document.URL.match(/en_ir_plc_index/) || document.URL.match(/en_csr_esg_gns_index/) || document.URL.match(/en_ir_plc_valuecreation/) || document.URL.match(/en_ir_plc_disclosure/)) {
			$("a[href *= 'en_ir_plc_index']").next('ul').show();
			$("a[href *= 'en_ir_plc_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_ir_plc_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_ir_plc_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_ir_plc_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		//「Investor Relations」「About JAPAN POST BANK」タブを開く
		if(document.URL.match(/en_ir_inv_index/) || document.URL.match(/en_ir_inv_aboutus/) || document.URL.match(/en_ir_inv_strengths/) || document.URL.match(/en_ir_inv_finance/)) {
			$("a[href *= 'en_ir_inv_index']").next('ul').show();
			$("a[href *= 'en_ir_inv_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_ir_inv_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_ir_inv_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_ir_inv_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
		if(document.URL.match(/en_ir_stk_haitou/)) {
			$("a[href *= 'en_ir_inv_index']").next('ul').hide();
			$("a[href *= 'en_ir_inv_index']").removeClass('side_menu_list02_open').attr('aria-expanded', 'true');
			$("a[href *= 'en_ir_inv_index'].side_menu_list02_a").css('color','#333333');
		}

	//「Service Information」タブを開く
		if(document.URL.match(/en_ias_/) || document.URL.match(/en_djp_index/) ) {
			$("a[href *= 'en_ias_index']").next('ul').show();
			$("a[href *= 'en_ias_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_ias_index']").addClass('side_menu_list01_open');
			$("a[href *= 'en_ias_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list01_a[href *= 'en_ias_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}


	//「APP informartion」タブを開く
	if(document.URL.match(/en_app_/) || document.URL.match(/en_app_tsucho/) ) {
		$("a[href *= 'en_app_tsucho']").next('ul').show();
		$("a[href *= 'en_app_tsucho']").removeClass('side_menu_list01_link');
		$("a[href *= 'en_app_tsucho']").addClass('side_menu_list01_open');
		$("a[href *= 'en_app_tsucho']").append('<span class="txt_n">Open Menu or Close Menu</span>');
		$("a.side_menu_list01_a[href *= 'en_app_tsucho']").attr("href", "toggle").attr('aria-expanded', 'true');
	}

	//「APP informartion」「Yucho Bankbook App」タブを開く
	if(document.URL.match(/en_app_/) || document.URL.match(/en_app_tsucho/) ) {
		$("a[href *= 'en_app_tsucho']").next('ul').show();
		$("a[href *= 'en_app_tsucho']").removeClass('side_menu_list02_link');
		$("a[href *= 'en_app_tsucho']").addClass('side_menu_list02_open');
		$("a[href *= 'en_app_tsucho']").append('<span class="txt_n">Open Menu or Close Menu</span>');
		$("a.side_menu_list02_a[href *= 'en_app_tsucho']").attr("href", "toggle").attr('aria-expanded', 'true');
	}

	//「Yucho Direct」タブを開く
	if(document.URL.match(/en_dr_pc_wh_/) ) {
		$("a[href *= 'en_dr_pc_wh_index']").next('ul').show();
		$("a[href *= 'en_dr_pc_wh_index']").removeClass('side_menu_list01_link');
		$("a[href *= 'en_dr_pc_wh_index']").addClass('side_menu_list01_open');
		$("a[href *= 'en_dr_pc_wh_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
		$("a.side_menu_list01_a[href *= 'en_dr_pc_wh_index']").attr("href", "toggle").attr('aria-expanded', 'true');
	}

	//「Yucho Direct」「Main operations (Smartphone version)」タブを開く
	if(document.URL.match(/en_dr_pc_gd_/) ) {
		$("a[href *= 'en_dr_pc_gd_index']").next('ul').show();
		$("a[href *= 'en_dr_pc_gd_index']").removeClass('side_menu_list02_link');
		$("a[href *= 'en_dr_pc_gd_index']").addClass('side_menu_list02_open');
		$("a[href *= 'en_dr_pc_gd_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
		$("a.side_menu_list02_a[href *= 'en_dr_pc_gd_index']").attr("href", "toggle").attr('aria-expanded', 'true');
	}

	//「Corporate Social Responsibility (ESG)」タブを開く
		if(document.URL.match(/en_csr_/) ) {
			$("a[href *= 'en_csr_index']").next('ul').show();
			$("a[href *= 'en_csr_index']").removeClass('side_menu_list01_link');
			$("a[href *= 'en_csr_index']").addClass('side_menu_list01_open');
			$("a[href *= 'en_csr_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list01_a[href *= 'en_csr_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「Environment」タブを開く
		if(document.URL.match(/en_csr_esg_env_/) ) {
			$("a[href *= 'en_csr_esg_env_index']").next('ul').show();
			$("a[href *= 'en_csr_esg_env_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_esg_env_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_esg_env_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_esg_env_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「ESG and CSR Management」タブを開く
		if(document.URL.match(/en_csr_mgm_/) ) {
			$("a[href *= 'en_csr_mgm_index']").next('ul').show();
			$("a[href *= 'en_csr_mgm_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_mgm_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_mgm_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_mgm_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「Priority Issues and the SDGs」タブを開く
		if(document.URL.match(/en_csr_sdgs_/) ) {
			$("a[href *= 'en_csr_sdgs_index']").next('ul').show();
			$("a[href *= 'en_csr_sdgs_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_sdgs_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_sdgs_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_sdgs_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「Social」タブを開く
		if(document.URL.match(/en_csr_esg_scl_/) ) {
			$("a[href *= 'en_csr_esg_scl_index']").next('ul').show();
			$("a[href *= 'en_csr_esg_scl_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_esg_scl_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_esg_scl_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_esg_scl_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「Governance」タブを開く
		if(document.URL.match(/en_csr_esg_gns_/) ) {
			$("a[href *= 'en_csr_esg_gns_index']").next('ul').show();
			$("a[href *= 'en_csr_esg_gns_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_esg_gns_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_esg_gns_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_esg_gns_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「CSR Report」タブを開く
		if(document.URL.match(/en_csr_rpt_index/) ) {
			$("a[href *= 'en_csr_rpt_index']").next('ul').show();
			$("a[href *= 'en_csr_rpt_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_rpt_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_rpt_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_rpt_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}
	//「Corporate Social Responsibility (ESG)」「Data Collection and Guideline Comparison」タブを開く
		if(document.URL.match(/en_csr_dtgd_/) ) {
			$("a[href *= 'en_csr_dtgd_index']").next('ul').show();
			$("a[href *= 'en_csr_dtgd_index']").removeClass('side_menu_list02_link');
			$("a[href *= 'en_csr_dtgd_index']").addClass('side_menu_list02_open');
			$("a[href *= 'en_csr_dtgd_index']").append('<span class="txt_n">Open Menu or Close Menu</span>');
			$("a.side_menu_list02_a[href *= 'en_csr_dtgd_index']").attr("href", "toggle").attr('aria-expanded', 'true');
		}

	//SP表示時にコンテンツ内に特定のURLが含まれているとき、クラスが付与されアイコンが表示されてしまうため、クラスを削除
		if(document.URL.indexOf('en_ias_simplifiedchinese.html') || document.URL.indexOf('en_ias_traditionalchinese.html') || document.URL.indexOf('en_ias_korean.html')){
			$('#contents ul.list_link li a').removeClass('side_menu_list01_open');
			$('#contents ul.list_link li a').removeClass('side_menu_list02_open');
		}
	}
});


//SPヘッダー固定
$(function() {
  var $win = $(window),
      $header = $('#header'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });
});

// 商品・サービス
	$(document).ready(function(){
		$('.slide_content_btn').on('click', function(){
		$(this).toggleClass('close');
		$(this).toggleClass('open');
		$(this).next().children('.slide_content_area').slideToggle("fast");
		// WAI-ARIA
		if($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', 'true');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
	});
		$('.slide_content_btn_close').on('click', function(){
		$(this).parent('.slide_content_area').slideUp("fast");
		$('.slide_content_btn').removeClass("close");
		$('.slide_content_btn').addClass("open");
		// WAI-ARIA
		const slideContentBtn = $(this).parents('.service_all').prev('.slide_content_btn');
		if(slideContentBtn.attr('aria-expanded') == 'false') {
			slideContentBtn.attr('aria-expanded', 'true');
		} else {
			slideContentBtn.attr('aria-expanded', 'false');
		}
	});
	});
// IR／ESG・CSRパート　フッターメニュー
$(document).ready(function(){
	if(w <= x) {
	$('.slide_content_area dt.sp_btn').attr('aria-expanded', 'false');
	$('.slide_content_area dt.sp_btn').on('click', function(){
		$(this).toggleClass('close');
		$(this).toggleClass('open');
		$(this).next('dd').slideToggle("fast");
		// WAI-ARIA
		if($(this).attr('aria-expanded') == 'false') {
			$(this).attr('aria-expanded', 'true');
		} else {
			$(this).attr('aria-expanded', 'false');
		}
	});
	}
});

// 360px未満の幅狭デバイス時はviewportを固定
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// フッタモーダル用の関数
function modalType01() {
	// モーダルが存在する場合のみ _init() を実行
	var $modalType01 = $('.modal_type01');
	(function() {
		if ($modalType01.length > 0) {
			_init();
		}
	})();
	function _init() {
		// モーダルと「ページの先頭へ」が重なった場合、「ページの先頭へ」をモーダルの上に表示する処理
		$(window).on('load ready resize', function() {
			var winsize = $(window).width();
			if (winsize < 1090) {
				var modalHeight = $('.modal_type01').outerHeight();
				$('.btn_to_top').css('bottom', modalHeight + 10);
			} else {
				$('.btn_to_top').css('bottom', '10px');
			}
		});
		// モーダルを閉じる処理
		$('.js_modal_type01_closeBtn').on('click', function (event) {
			event.preventDefault();
			$modalType01.remove();
			$('.btn_to_top').css('bottom', '10px');
		});
	}
}

// フッタモーダル用の関数を実行
$(function() {
	modalType01();
});

// --------------------------------------------------
// 【申し送り】
// アクセシビリティ対応／非対応のファイルが混在する為、
// アクセシビリティ対応した HTML の body の class には js_a11y_2024summer を追加するルールとする
// なお js_a11y_2024summer を追加するルールは、アクセシビリティ対応過渡期のみとする。
// 将来的には body.js_a11y_2024summer と付与せずとも、以下が動作するように調整する
// --------------------------------------------------

// --------------------------------------------------
// アクセシビリティ対応した HTML のみ動作する JavaScript （ここから）
// --------------------------------------------------

$(function() {

  var $targetBody = $('body.js_a11y_2024summer');

  // body.js_a11y_2024summer の場合のみ、以下を実行
  if ($targetBody.length > 0) {

  // --------------------------------------------------
  // 改修: div.side_menu_bottom を移動する
  // --------------------------------------------------

    var $side_menu_bottom = '';
    var $side_menu_hojin = '';

    // div.side_menu_bottom を変数 $side_menu_bottom にセット
    if ($('.side_menu_bottom').length > 0) {
      $side_menu_bottom = $('.side_menu_bottom');
    }

    // div.side_menu_hojin を変数 $side_menu_hojin にセット
    if ($('.side_menu_hojin').length > 0) {
      $side_menu_hojin = $('.side_menu_hojin');
    }

    // ウィンドウリサイズのたびに表示モードを取得
    // ハンバーガーメニューを変数 $checker にセット
    var $checker = $('#h_menu_btn');
    var displayMode; //表示モード（'PC' or 'SP'）

    _init();

    function _init() {
      $(window)
      .on('resize orientationchange', function() {
        // ハンバーガーメニューの表示／非表示に基づいて、表示モードをセット
        if ($checker.is(':hidden')) {
          if (displayMode !== 'PC') {
            // 表示モード PC 時は、関数 _initPC() を実行
            displayMode = 'PC';
            _initPC();
          }
        } else {
          if (displayMode !== 'SP') {
            displayMode = 'SP';
            // 表示モード SP 時は、関数 _initPC() を実行
            _initSP();
          }
        }
      })
      .resize();
    }

    function _initPC() {

      // PC 時の処理
      // .side_menu_bottom が存在する場合 .side_menu_top の直後に $side_menu_bottom を移動する
      if ($side_menu_bottom.length > 0) {
        $('.side_menu_top').after($side_menu_bottom);
      }

      // .side_menu_hojin が存在する場合 .side_menu_top の直前に $side_menu_hojin を移動する
      if ($side_menu_hojin.length > 0) {
        $('.side_menu_top').before($side_menu_hojin);
      }

      // （ビュー切り替え時にページがリロードされる仕様なので、元に戻す作業は不要）
    }

    function _initSP() {

      // SP 時の処理
      // #contents の直後に <div class="side_menu txt_align_l js_side_menu"></div> を作成する
      $('#contents').after('<div class="side_menu txt_align_l js_side_menu"></div>');

      // .side_menu_bottom が存在する場合 .js_side_menu の内部先頭に $side_menu_bottom を移動する
      if ($side_menu_bottom.length > 0) {
        $side_menu_bottom.prependTo('.js_side_menu');
      }

      // .side_menu_hojin が存在する場合 .js_side_menu の内部先頭に $side_menu_hojin を移動する
      if ($side_menu_hojin.length > 0) {
        $side_menu_hojin.prependTo('.js_side_menu');
      }

      // （ビュー切り替え時にページがリロードされる仕様なので、元に戻す作業は不要）
    }
  }

});

// --------------------------------------------------
// アクセシビリティ対応した HTML のみ動作する JavaScript （ここまで）
// --------------------------------------------------



/*--------------------------------------------------------------------------*
 *
 *  heightLine JavaScript Library beta4
 *
 *  MIT-style license.
 *
 *  2007 Kazuma Nishihata
 *  http://www.webcreativepark.net
 *
 *--------------------------------------------------------------------------*/
new function(){(function(h,k,a){try{h.addEventListener(k,a,!1)}catch(m){h.attachEvent("on"+k,a)}})(window,"load",function(){this.className="heightLine";this.parentClassName="heightLineParent";reg=new RegExp(this.className+"-([a-zA-Z0-9-_]+)","i");objCN=[];for(var h=document.getElementsByTagName?document.getElementsByTagName("*"):document.all,k=0;k<h.length;k++)for(var a=h[k].className.split(/\s+/),m=0;m<a.length;m++)if(a[m]==this.className){objCN["main CN"]||(objCN["main CN"]=[]);objCN["main CN"].push(h[k]);
break}else if(a[m]==this.parentClassName){objCN["parent CN"]||(objCN["parent CN"]=[]);objCN["parent CN"].push(h[k]);break}else if(a[m].match(reg)){a=a[m].match(reg);objCN[a]||(objCN[a]=[]);objCN[a].push(h[k]);break}var l=document.createElement("div"),h=document.createTextNode("S");l.appendChild(h);l.style.visibility="hidden";l.style.position="absolute";l.style.top="0";document.body.appendChild(l);var n=l.offsetHeight;changeBoxSize=function(){for(var f in objCN)if(objCN.hasOwnProperty(f))if("parent CN"==
f)for(var d=0;d<objCN[f].length;d++){for(var a=0,g=objCN[f][d].childNodes,e=0;e<g.length;e++)g[e]&&1==g[e].nodeType&&(g[e].style.height="auto",a=a>g[e].offsetHeight?a:g[e].offsetHeight);for(e=0;e<g.length;e++)if(g[e].style){var b=g[e].currentStyle||document.defaultView.getComputedStyle(g[e],""),c=a;b.paddingTop&&(c-=b.paddingTop.replace("px",""));b.paddingBottom&&(c-=b.paddingBottom.replace("px",""));b.borderTopWidth&&"medium"!=b.borderTopWidth&&(c-=b.borderTopWidth.replace("px",""));b.borderBottomWidth&&
"medium"!=b.borderBottomWidth&&(c-=b.borderBottomWidth.replace("px",""));g[e].style.height=c+"px"}}else{for(d=a=0;d<objCN[f].length;d++)objCN[f][d].style.height="auto",a=a>objCN[f][d].offsetHeight?a:objCN[f][d].offsetHeight;for(d=0;d<objCN[f].length;d++)objCN[f][d].style&&(b=objCN[f][d].currentStyle||document.defaultView.getComputedStyle(objCN[f][d],""),c=a,b.paddingTop&&(c-=b.paddingTop.replace("px","")),b.paddingBottom&&(c-=b.paddingBottom.replace("px","")),b.borderTopWidth&&"medium"!=b.borderTopWidth&&
(c-=b.borderTopWidth.replace("px","")),b.borderBottomWidth&&"medium"!=b.borderBottomWidth&&(c-=b.borderBottomWidth.replace("px","")),objCN[f][d].style.height=c+"px")}};checkBoxSize=function(){n!=l.offsetHeight&&(changeBoxSize(),n=l.offsetHeight)};changeBoxSize();setInterval(checkBoxSize,1E3);window.onresize=changeBoxSize})};
