<?php
$home_url = esc_url(home_url());
$theme_url = get_template_directory_uri();
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title></title>
    <meta name="description" content="crane_traning">
    <link rel='stylesheet' href='/https://unpkg.com/ress/dist/ress.min.css'>
    <link href="/https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet"/>
    <!-- CSS -->
    <link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri(); ?>/css/style.min.css'>
    <!-- JS -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/style.js"></script>
    <!--------------------jQuery--------------> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!---------------------->      
  </head>
  <body>
    <header>
      <div class="header_pc">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/title.svg" class="title">
        <div class="header_pc_menu">
          <div class="header_pc_menu_item home">Home</div>
          <div class="header_pc_menu_item pro">Products
            <div class="promenu">
              <div class="promenu_down">
                <ul>
                  <h1>Skin care</h1>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cream.svg">
                    <li>Hand Cream<p>ハンドクリーム</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cream (1).svg">
                    <li>Face creamp <p>フェイスクリーム</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Outline.svg">
                    <li>Skin oil<p>スキンオイル</p></li>
                  </div>
                </ul>
                <ul>
                  <h1>Aroma</h1>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/serum.svg">
                    <li>Aroma Oil<p>アロマオイル</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/aroma.svg">
                    <li>Aroma pot<p>アロマポット</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/aroma (1).svg">
                    <li>Aroma Diffuser<p>アロマディフューザー</p></li>
                  </div>
                </ul>
                <ul>
                  <h1>Perfume</h1>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/givenchy.png">
                    <li>GIVENCHY<p>ジバンシー</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/chanel.png">
                    <li>CHANEL<p>シャネル</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/gucci.png">
                    <li>GUCCI<p>グッチ</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/polo.png">
                    <li>POLO<p>ポロ</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/lacoste.png">
                    <li>LACOSTE<p>ラコステ</p></li>
                  </div>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/bijan.png">
                    <li>Bijan<p>ビジャン</p></li>
                  </div>
                </ul>
                <ul>
                  <h1>Book</h1>
                  <div class="promenu_down_item">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/book.svg">
                    <li>floma official book<p>フロマオフィシャルブック</p></li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="header_pc_menu_item news">News</div>
          <div class="header_pc_menu_item about">About</div>
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cart.svg" class="header_pc_menu_item cart"></div>
        </div>
      </div>
      <div class="header_sp">
        <div class="header_sp_hamburger">
          <div class="header_sp_hamburger_menu top"></div>
          <div class="header_sp_hamburger_menu middle"></div>
          <div class="header_sp_hamburger_menu bottom"></div>
        </div>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/title.svg" class="header_sp_logo">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cart.svg" class="header_sp_cart">
      </div>
      <ul class="header_sp_menu">
        <li class="header_sp_menu_item">
          Home
          <p>＞</p>
        </li>
        <div class="header_sp_menu_border"></div>
        <li class="header_sp_menu_item">
          Products
          <p class="products">＞</p>
        </li>
        <div class="header_sp_menu_border"></div>
        <ul class="header_sp_menu_products">
          <li class="header_sp_menu_products_item">
            Skin care
            <p class="skin">＞</p>
          </li>
          <div class="header_sp_menu_products_border"></div>
          <ul class="header_sp_menu_products_skin">
            <div class="second">
              <li>
                <div class="header_sp_menu_products_skin_item">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cream.svg" class="hand">
                  <div class="header_sp_menu_products_skin_item_title">
                    <h1>Hand Cream</h1>
                    <h2>ハンドクリーム</h2>
                  </div>
                </div>
                <p>＞</p>
              </li>
              <div class="header_sp_menu_products_skin_border"></div>
              <li>
                <div class="header_sp_menu_products_skin_item">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cream (1).svg" class="face">
                  <div class="header_sp_menu_products_skin_item_title">
                    <h1>Face Cream</h1>
                    <h2>フェイスクリーム</h2>
                  </div>
                </div>  
                <p>＞</p>
              </li>
              <div class="header_sp_menu_products_skin_border"></div>
              <li>
                <div class="header_sp_menu_products_skin_item">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Outline.svg" class="skin">
                  <div class="header_sp_menu_products_skin_item_title">
                    <h1>Skin Oil</h1>
                    <h2>スキンオイル</h2>
                  </div>
                </div>
                <p>＞</p>
              </li>
            </div>
          </ul>
          <li class="header_sp_menu_products_item">
            Aroma
            <p>＞</p>
          </li>
          <div class="header_sp_menu_products_border"></div>
          <li class="header_sp_menu_products_item">
            Perfume
            <p>＞</p>
          </li>
          <div class="header_sp_menu_products_border"></div>
        </ul>
        <li class="header_sp_menu_item">
          News
          <p>＞</p>
        </li>
        <div class="header_sp_menu_border"></div>
        <li class="header_sp_menu_item">
          About
          <p>＞</p>
        </li>
        <div class="header_sp_menu_border"></div>
        <li class="header_sp_menu_item">
          <div class="header_sp_menu_item_shop">
            <img class="header_sp_menu_item_shop_cart" src="<?php echo get_stylesheet_directory_uri(); ?>/img/cart.svg">
            ショッピングカート
          </div>
          <p>＞</p>
        </li>
      </ul>
      <div class="background"></div>
    </header>