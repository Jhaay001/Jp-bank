var html = '';

html += '<ul id="h_sp_submenu" class="pc_dis_n clfx">';
html += '<li><a href="https://direct.jp-bank.japanpost.jp/direct_login.html?link_id=ycDctLgn" onclick="_uiconv.push({\‘id\’:\‘index17082502\’})"><span class="txt_n">ゆうちょダイレクト</span>ログイン</a></li>';
html += '<li><a href="https://map.japanpost.jp/p/search/" target="_blank">ATM<span class="txt_n">（別ウィンドウで開く）</span></a></li>';
html += '<li><a href="https://faq.jp-bank.japanpost.jp/">FAQ</a></li>';
html += '</ul>';
var gmenu = document.getElementById('h_sp_submenu_container');
gmenu.insertAdjacentHTML('afterbegin', html);

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
    // 改修: SP版 グローバルナビゲーションの直後にリンクを追加
    // --------------------------------------------------

    var h_submenu_sp = '';

    h_submenu_sp += '<ul id="h_submenu_sp" class="clfx pc_dis_n">';
    h_submenu_sp += '<li><a href="https://faq.jp-bank.japanpost.jp/" class="left">よくあるご質問</a></li>';
    h_submenu_sp += '<li><a href="/contact/ctt_index.html">お問い合わせ</a></li>';
    h_submenu_sp += '<li><a href="/sitemap/stm_index.html" class="left">サイトマップ</a></li>';
    h_submenu_sp += '<li><a href="/en_index.html">English</a></li>';
    h_submenu_sp += '</ul>';

    $('#h_g_menu').append(h_submenu_sp);

  }

});

// --------------------------------------------------
// アクセシビリティ対応した HTML のみ動作する JavaScript （ここまで）
// --------------------------------------------------
