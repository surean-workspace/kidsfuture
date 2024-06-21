<?php
$locale = getLocale();
$arrLocalType = getCFG("LocaleConfig");
$_SERVER['REQUEST_URI'] = RemoveXSS(preg_replace('/\/'.$locale.'/','',$_SERVER['REQUEST_URI']));

$arrCategory = array();
// 카테고리별 depth 구하기
if (!empty($category_code)) {
    for($i=2; $i<=strlen($category_code); $i+=2) {
        $arrCategory[$i/2] = substr(@$category_code,0,$i);
    }
}
?>

<!-- header -->
<header id="header">
  <div class="sta">
    <div class="inner lang-depth1">
      <?php include('html/_skin/'._SKIN.'/layout/inc_social_link.php');?>

      <ul>
        <li class="line-r mb_none">
          <a href="/">Home</a>
        </li>
        <?php
				if (!getLoginId()) {	// 로그인 전
?>
        <li class="type-member line-r"><a href="/member/login"><?=_LANG('Login')?></a></li>
        <li class="type-member line-r"><a href="/member/stipulation"><?=_LANG('Join')?></a></li>
        <?php
			   }
				else {					// 로그인 후
					if(getLoginLevel()!="99"){  // 회원
?>
        <li class="type-member line-r"><a href="/my-page/my-information"><?=_LANG('나의 정보')?></a></li>
        <?php
					}
?>
        <li class="type-member line-r"><a href="/index.php?tpf=_module/member/logout"><?=_LANG('Logout')?></a></li>
        <?php
				}
?>
        <li class="mb_none">
          <a href="/policy/sitemap">Sitemap</a>
        </li>
        <li class="lang-depth1-li">
          <a href="#">Other languages</a>
          <ul class="lang-depth2">
            <?php
						if (!empty($arrLocalType)) {
							foreach($arrLocalType['LocaleType'] as $key => $val) {
                // echo '<li class="lang"><a href="/index.html?locale='.$key.'&return_url='.urlencode($_SERVER['REQUEST_URI']).'">'.$val.'</a></li>';
                echo '<li class="lang"><a href="/index.html?locale='.$key.'&return_url=/main">'.$val.'</a></li>';
							}
						}
						?>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="header-bottom">
    <p class="logo"><a href="/"><img src="/html/_skin/img/common/logo.svg" alt="logo"></a></p>
    <div class="m-menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="gnb">
      <div class="m-lang">
        <div class="m-lang__box">
          <!-- empty -->
        </div>
      </div>
      <!-- gnb__nav -->
      <div class="gnb__nav">
        <div class="gnb__nav__menu">
          <ul class="gnb__nav__menu__utils">
            <li>
              <?php
              if (!getLoginId()) {	
    // 로그인 전
?>
              <a href="/member/login"><?=_LANG('로그인')?></a>
              <?php
} 
else {
?>
              <a href="/index.php?tpf=_module/member/logout"><?=_LANG('로그아웃')?></a>
              <?php
}
?>
            </li>
            <li>
<?php
if (!getLoginId()) {	
    // 로그인 전
?>
              <a href="/member/stipulation"><?=_LANG('회원가입')?></a>
<?php
} 
else {
  if(getLoginLevel()!="99"){  // 회원
?>
              <a href="/my-page/my-information"><?=_LANG('나의 정보')?></a>
<?php
  } else {
?>
              <a href="/index.php?tpf=_module/member/logout"><?=_LANG('로그아웃')?></a>
<?php
  }
}
?>
            </li>
          </ul>
        </div>
        <?php include('html/_skin/'._SKIN.'/layout/inc_navigation.php');?>
      </div>
      <!-- // gnb__nav -->
      <div class="m-gnb-bg"></div>
    </nav>
    <div class="pc_sitemap_btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>
    </div>
  </div>
  <div id="headerSitemap"></div>
</header>
<!-- //header -->
<script type="text/javascript" src="/html/_skin/<?=_SKIN?>/js/top-menu.js"></script>