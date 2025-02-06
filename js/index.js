// お知らせ タブメニュー
$(function() {

  // お知らせ タブメニューを変数 $topOshirase にセット
  var $topOshirase = $('#top_oshirase');

  // お知らせ タブメニューが存在した場合のみ _init() を実行
  (function() {
    if ($topOshirase.length > 0) {
      _init();
    }
  })();

  function _init() {

    var $tabMenu = $topOshirase.find('.tab_menu');
    var $tabCnts = $topOshirase.find('.tab_cnts');

    // 初期化
    $tabMenu.find('button').attr('tabindex','-1');
    $tabMenu.find('li.js_tabmemu:first-child').addClass('active');
    $tabMenu.find('li.js_tabmemu:first-child > button').attr('tabindex','0');
    $tabCnts.find('li.js_tabpanel').hide();
    $tabCnts.find('li.js_tabpanel:first-child').show().attr('tabindex','0');

    // タブメニューを押した場合の処理
    $tabMenu.find('button').on('click focus', function() {

      // 開く対象のタブパネルを取得
      $tabMenu.find('li.js_tabmemu').removeClass('active');
      var target = $(this).attr('aria-controls');
      var $target = $tabCnts.find('li#' + target);

      // タブパネルを開き、タブパネルにフォーカスを当てる
      $tabCnts.find('li.js_tabpanel').removeAttr('hidden, tabindex');
      $tabCnts.find('li.js_tabpanel').hide();
      $target.show().attr('tabindex','-1');

      // 押したメニューの属性値を変える
      $tabMenu.find('button').attr('tabindex','-1').attr('aria-selected','false');
      $(this).parent('li.js_tabmemu').addClass('active');
      $(this).attr('tabindex','0').attr('aria-selected','true');
  
      // Shift + Tab で逆順フォーカスした場合への対策
      // 見出し「お知らせ」に tabindex="0" を付与
      $('#top_oshirase > h2').attr('tabindex','0');
      // 前のメニューを取得
      var prevTabMenu = $(this).parent('li.js_tabmemu').prev('li.js_tabmemu').find('button');
      // 見出し「お知らせ」にフォーカスされたら、前のメニューにフォーカスを移動
      $('#top_oshirase > h2').on('focus', function() {
        prevTabMenu.focus();
      });
      // 先頭のメニューにフォーカスされた場合のみ、見出し「お知らせ」から tabindex を削除
      if($(this).parent('li.js_tabmemu').attr('class') === 'li01 js_tabmemu active') {
        $('#top_oshirase > h2').removeAttr('tabindex');
      }

    });

    // フォーカストラップを動的生成
    var focusTrap = '<div tabindex="0" class="js_focusTrap txt_n"></div>'
    $tabCnts.find('li.js_tabpanel').not('li.js_tabpanel:last-child').append(focusTrap);

    // タブパネル最下部の .js_focusTrap にフォーカスされたら、次のタブメニューにフォーカスする
    $('li.js_tabpanel > .js_focusTrap').on('focus', function() {
      var thisParentLabelledby = $(this).parent('li.js_tabpanel').attr('aria-labelledby');
      var $nextMenu = $('button#' + thisParentLabelledby).parent('li.js_tabmemu').next('li.js_tabmemu').find('button');
      $nextMenu.focus();
    });

  }

});

/*
$(function() {
	var tab = $('#top_oshirase .tab_cnts');
	$(tab).children('li:first-child').show();
	$('#top_oshirase .tab_menu li:first-child').addClass('active');
	$('#top_oshirase .tab_menu li').on('click', function() {
		if($(this).hasClass('txt')) {
		} else {
			$(tab).children('li').hide();
			$('#top_oshirase .tab_menu li').removeClass('active').attr('aria-selected', 'false');
			$(this).addClass('active').attr('aria-selected', 'true');
			if($(this).hasClass('li01')) {
				$(tab).children('.li01').show();
			}
			else if($(this).hasClass('li02')) {
				$(tab).children('.li02').show();
			}
			else if($(this).hasClass('li03')) {
				$(tab).children('.li03').show();
			}
			else if($(this).hasClass('li04')) {
				$(tab).children('.li04').show();
			}
			else if($(this).hasClass('li05')) {
				$(tab).children('.li05').show();
			}
			else if($(this).hasClass('li06')) {
				$(tab).children('.li06').show();
			}
		}
	});

	$('#top_oshirase .tab_menu li').keypress( function ( e ) {
		if ( e.which == 13 ) {
			$(tab).children('li').hide();
			$('#top_oshirase .tab_menu li').removeClass('active').attr('aria-selected', 'false');
			$(this).addClass('active').attr('aria-selected', 'true');
			if($(this).hasClass('li01')) {
				$(tab).children('.li01').show();
			}
			else if($(this).hasClass('li02')) {
				$(tab).children('.li02').show();
			}
			else if($(this).hasClass('li03')) {
				$(tab).children('.li03').show();
			}
			else if($(this).hasClass('li04')) {
				$(tab).children('.li04').show();
			}
			else if($(this).hasClass('li05')) {
				$(tab).children('.li05').show();
			}
			else if($(this).hasClass('li06')) {
				$(tab).children('.li06').show();
			}
			return false;
		}
	});
});
*/

//重要なお知らせボタン
$(window).on('load resize', function(){
$(function(){
    if($('#section_emergency_pc').length){
		if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
		}else{
			var h = $(window).height();
			var y = 663;
			if(h < y){
				$('.btn_emergency').removeClass('pc_dis_n');
				$('.btn_emergency a').click(function() {
					$(this).addClass('pc_dis_n');
				})
				$(function() {
					$(window).scroll(function () {
						if ($(this).scrollTop() > 200) {
							$('.btn_emergency').addClass('pc_dis_n');
						} else {
							//$('.btn_emergency').removeClass('pc_dis_n');
						}
					});
				});
			}
		}
    }
});
});

//MVスライダー
$(document).ready(function(){
	new  Splide('.mv-slider',  {
		type: 'loop',
		autoplay: true,
		interval: 4000,
		arrows: false,
	}).mount()

	//キャンペーンバナースライダー
	new Splide( '.campaign_slider', {
		type: 'loop',
    autoplay: true,
    interval: 4000,
		perPage: 4,
		perMove: 1,
		arrows: true,
		pagination: false,
		i18n: {
			prev: '前へ',
    	next: '次へ',
		},
		breakpoints: {
			479: {
				perPage: 1,
				pagination: true,
			},
		},
	}).mount();

	//サムネイルスライダー
	new  Splide('.thumbnail-slider',  {
		type: 'loop',
		autoplay: true,
		interval: 4000,
		arrows: false,
		pagination: true,
		perPage: 3,
		perMove: 1,
		focus  : 0,
		gap: 7,
		breakpoints: {
			479: {
				perPage: 1,
				padding: "10%",
			},
		},
	}).mount()
});

// キャンペーンバナースライダーの再生・一時停止ボタン
// SPの時はフォーカスされるように調整
$(function(){
	var w = $(window).innerWidth();
	var x = 479;
	if(w <= x) {
		$('.campaign_slider .splide__toggle').attr('tabindex','0');
	}
});
