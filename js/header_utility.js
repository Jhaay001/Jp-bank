var html = '';

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

var $targetBody = $('body.js_a11y_2024summer');

if ($targetBody.length > 0) {

  // --------------------------------------------------
  // body.js_a11y_2024summer の場合
  // --------------------------------------------------
  html += '<div class="mf_finder_header sp_dis_n" id="h_search">';
  html += '<!-- ↓検索窓用カスタムエレメント -->';
  html += '<mf-search-box submit-text="検索" ajax-url="//mf2apg01.marsflag.com/japanpost__bank_ja_all__bank_ja_all/x_search.x" serp-url="/search/src_index.html" options-hidden doctype-hidden force-category-csv="このサイト内でさがす" category-default="このサイト内でさがす" placeholder="検索キーワードを入力" input-title="検索したいワードを入力するエリアです"></mf-search-box>';
  html += '</div>';
  html += '<p class="login sp_dis_n include"><a href="https://direct.jp-bank.japanpost.jp/direct_login.html?link_id=ycDctLgn" class="btn_link01 m_auto" onclick="_uiconv.push({\'id\':\'head201126\'})"><span class="txt_n">ゆうちょダイレクト</span>ログイン</a></p>';
  html += '<ul id="h_submenu" class="sp_dis_n clfx">';
  html += '<li><a href="https://faq.jp-bank.japanpost.jp/" class="left">よくあるご質問</a></li>\n';
  html += '<li><a href="/contact/ctt_index.html">お問い合わせ</a></li>\n';
  html += '<li><a href="/en_index.html">English</a></li>';
  html += '</ul>';

} else {

  // --------------------------------------------------
  // アクセシビリティ非対応の HTML の場合
  // --------------------------------------------------
  html += '<ul id="h_submenu" class="clfx">';
  html += '<li><a href="https://faq.jp-bank.japanpost.jp/" class="left" tabindex="4">よくあるご質問</a></li>\n';
  html += '<li><a href="/contact/ctt_index.html" tabindex="4">お問い合わせ</a></li>\n';
  html += '<li class="sp_dis_n"><a href="/en_index.html" tabindex="4">English</a></li>';
  html += '<li class="pc_dis_n"><a href="/sitemap/stm_index.html" class="left" tabindex="4">サイトマップ</a></li>\n';
  html += '<li class="pc_dis_n"><a href="/en_index.html">English</a></li>\n';
  html += '</ul>';
  html += '<div class="mf_finder_header sp_dis_n" id="h_search">';
  html += '<!-- ↓検索窓用カスタムエレメント -->';
  html += '<mf-search-box submit-text="検索" ajax-url="//mf2apg01.marsflag.com/japanpost__bank_ja_all__bank_ja_all/x_search.x" serp-url="/search/src_index.html" options-hidden doctype-hidden force-category-csv="このサイト内でさがす" category-default="このサイト内でさがす" placeholder="検索キーワードを入力" input-title="検索したいワードを入力するエリアです"></mf-search-box>';
  html += '</div>';
  html += '<p class="login sp_dis_n include"><a href="https://direct.jp-bank.japanpost.jp/direct_login.html?link_id=ycDctLgn" class="btn_link01 m_auto" tabindex="3" onclick="_uiconv.push({\'id\':\'head201126\'})"><span class="txt_n">ゆうちょダイレクト</span>ログイン</a></p>';
  html += '<button id="h_close_btn" class="pc_dis_n"><span>閉じる</span></button>';

}

var gmenu = document.getElementById('header_utility');
gmenu.insertAdjacentHTML('afterbegin', html);