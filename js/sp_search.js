var html = '';

html += '<div class="mf_finder_header pc_dis_n" id="h_search">';
html += '<!-- ↓検索窓用カスタムエレメント -->';
html += '<mf-search-box submit-text="検索" ajax-url="//mf2apg01.marsflag.com/japanpost__bank_ja_all__bank_ja_all/x_search.x" serp-url="/search/src_index.html" options-hidden doctype-hidden force-category-csv="このサイト内でさがす" category-default="このサイト内でさがす" placeholder="検索キーワードを入力" input-title="検索したいワードを入力するエリアです"></mf-search-box>';
html += '</div>';
var gmenu = document.getElementById('sp_search');
gmenu.insertAdjacentHTML('afterbegin', html);