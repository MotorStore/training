var CommonMod = {};

CommonMod.Grid = {
	"Grid01":'	<div class="common_cloms_mod common_w_big common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>',
	"Grid02":['	<div class="common_cloms_mod common_w_small common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>',
			 '	<div class="common_cloms_mod common_w_middle common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>'].join(""),
	"Grid03":['	<div class="common_cloms_mod common_w_middle common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>',
			 '	<div class="common_cloms_mod common_w_small common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>'].join(""),
	"Grid04":['	<div class="common_cloms_mod common_w_small common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>',
			 '	<div class="common_cloms_mod common_w_small common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>',
			 '	<div class="common_cloms_mod common_w_small common_cloms_drag"><div class="highspan"></div><div class="common_cloms_btm"></div></div>'].join("")
}
CommonMod.Mod = {
	"Ablum":{"Title":"相册","Html":"相册"},
	"Singer":{"Title":"音乐人","Html":'音乐人'},
	//"Mblog":{"Title":"微博客","Html":'微博客'},
	"Blog":{"Title":"博客","Html":'博客'},
	//"Reply":{"Title":"回复","Html":'回复'},
	//"Forum":{"Title":"论坛","Html":'论坛'},
	"Video":{"Title":"视频","Html":'视频'},
	"Rank":{"Title":"排行榜","Html":'排行榜'},
	//"FcousOnMe":{"Title":"关注我的","Html":'关注我的'},
	//"MusicHot":{"Title":"热门音乐","Html":'热门音乐'},
	//"Stage":{"Title":"舞台","Html":'舞台'},
	"Radio":{"Title":"Radio","Html":'Radio'},
	"Other":{"Title":"贴图版","Html":'贴图版'}
}
CommonMod.Mod.Ablum.Html = '<div class="common_ablums"><div>';
CommonMod.Mod.Singer.Html = ['<div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/1306296146" title="LilWayne"><img src="http://b0.ac-images.cdnmyspace.cn/cnimages01/3/c_3d973477b1a5e0a7a1c08a99ffd0efa8.gif"></a><br>',
		'    <a href="http://www.myspace.cn/1306296146" target="_blank" title="烺钊" class="li_name">烺钊</a> <a href="http://www.myspace.cn/1306296146" target="_blank" title="196人关注" class="li_num">196人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/fallinsex" title="LilWayne"><img src="http://b2.ac-images.cdnmyspace.cn/cnimages01/4/c_cd7f76dc932b171384ebc60a1694ca60.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/fallinsex" target="_blank" title="秋天的虫子" class="li_name">秋天的虫子...</a> <a href="http://www.myspace.cn/fallinsex" target="_blank" title="1926人关注" class="li_num">1926人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/dengliyuan" title="LilWayne"><img src="http://b1.ac-images.cdnmyspace.cn/cnimages01/4/c_09d14c7c3ddf6e9eca05ffa49e31abd4.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/dengliyuan" target="_blank" title="邓力源" class="li_name">邓力源</a> <a href="http://www.myspace.cn/dengliyuan" target="_blank" title="1539人关注" class="li_num">1539人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/cpcamera" title="LilWayne"><img src="http://b0.ac-images.cdnmyspace.cn/cnimages01/4/c_ec1f8be1eca8aee90b737c8888497aca.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/cpcamera" target="_blank" title="c.p.camera" class="li_name">c.p.camera</a> <a href="http://www.myspace.cn/cpcamera" target="_blank" title="274人关注" class="li_num">274人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/tjel" title="LilWayne"><img src="http://b0.ac-images.cdnmyspace.cn/cnimages01/4/c_7ab1e5985874323ebd9bbdb4b7b50f43.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/tjel" target="_blank" title="厄灵" class="li_name">厄灵</a> <a href="http://www.myspace.cn/tjel" target="_blank" title="214人关注" class="li_num">214人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/duotian" title="LilWayne"><img src="http://b4.ac-images.cdnmyspace.cn/cnimages01/3/c_87e3a74e6ee103755dbf81834075cd7f.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/duotian" target="_blank" title="堕天" class="li_name">堕天</a> <a href="http://www.myspace.cn/duotian" target="_blank" title="659人关注" class="li_num">659人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/xcgt" title="LilWayne"><img src="http://b2.ac-images.cdnmyspace.cn/cnimages01/3/c_1ebdcee38094511b1e2e0dc6792857bf.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/xcgt" target="_blank" title="秀场寡头" class="li_name">秀场寡头</a> <a href="http://www.myspace.cn/xcgt" target="_blank" title="196人关注" class="li_num">196人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/konymrt5" title="LilWayne"><img src="http://b2.ac-images.cdnmyspace.cn/cnimages01/3/c_3c9a4bcac1903d30a210bb7beb888016.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/konymrt5" target="_blank" title="Konymrt5" class="li_name">Konymrt5</a> <a href="http://www.myspace.cn/konymrt5" target="_blank" title="428人关注" class="li_num">428人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/longjinband" title="LilWayne"><img src="http://b1.ac-images.cdnmyspace.cn/cnimages01/3/c_adae77e0cf2a1b2e268e366ba50d23ad.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/longjinband" target="_blank" title="龙锦" class="li_name">龙锦</a> <a href="http://www.myspace.cn/longjinband" target="_blank" title="3146人关注" class="li_num">3146人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/superboyz" title="LilWayne"><img src="http://b4.ac-images.cdnmyspace.cn/cnimages01/4/c_edcc6ad227f3e385cd15f4654f8795aa.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/superboyz" target="_blank" title="魏十一" class="li_name">魏十一</a> <a href="http://www.myspace.cn/superboyz" target="_blank" title="210人关注" class="li_num">210人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/liusuyi" title="LilWayne"><img src="http://b3.ac-images.cdnmyspace.cn/cnimages01/4/c_b5980882cf6cc65c8002d246d34ff655.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/liusuyi" target="_blank" title="刘苏毅" class="li_name">刘苏毅</a> <a href="http://www.myspace.cn/liusuyi" target="_blank" title="122人关注" class="li_num">122人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/liyingfeng69" title="LilWayne"><img src="http://b2.ac-images.cdnmyspace.cn/cnimages01/3/c_fab939bbb123b67897cfe53cc41433f7.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/liyingfeng69" target="_blank" title="“唯一”父女演唱组" class="li_name">“唯一”父女...</a> <a href="http://www.myspace.cn/liyingfeng69" target="_blank" title="144人关注" class="li_num">144人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/djaka" title="LilWayne"><img src="http://b4.ac-images.cdnmyspace.cn/cnimages01/1/c_4159d54fe9d778ce6bc55506de65acc0.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/djaka" target="_blank" title="DJ Aka" class="li_name">DJ Aka</a> <a href="http://www.myspace.cn/djaka" target="_blank" title="450人关注" class="li_num">450人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/earband" title="LilWayne"><img src="http://b4.ac-images.cdnmyspace.cn/cnimages01/3/c_72d9b2b1e606294e1b5678a55cb53ae4.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/earband" target="_blank" title="李志辉" class="li_name">李志辉</a> <a href="http://www.myspace.cn/earband" target="_blank" title="602人关注" class="li_num">602人关注</a> </div>',
		'  <div class="common_singer">',
		'    <a class="li_img" target="_blank" href="http://www.myspace.cn/silentgaby" title="LilWayne"><img src="http://b4.ac-images.cdnmyspace.cn/cnimages01/4/c_f32475fb9f5ec193eb4a026e5d22ef94.jpg"></a><br>',
		'    <a href="http://www.myspace.cn/silentgaby" target="_blank" title="Silent G" class="li_name">Silent G</a> <a href="http://www.myspace.cn/silentgaby" target="_blank" title="702人关注" class="li_num">702人关注</a> </div>'].join("");
CommonMod.Mod.Blog.Html = ['<div class="common_blog">',
	'<ul class="common_newslist">',
	'	<li><a href="http://blog.myspace.cn/e/406742852.htm">“顾”显旋“枫”，引...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016422.htm">北京市井文化的博物馆...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016416.htm">中秋快乐，汇报下最近...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016412.htm">和平发展并不等于一味...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016410.htm">网易评论</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016021.htm">旅行。凉</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016394.htm">《盗梦空间》引新风潮...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016390.htm">姓氏观念弱化得不偿失</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016386.htm">北京：物业管理从业人...</a><small>2010.09.15</small></li>',
	'	<li><a href="http://blog.myspace.cn/e/408016381.htm">释美小心骗子时尚亲和...</a><small>2010.09.15</small></li>',
	'</ul>',
'<div>'].join("");
CommonMod.Mod.Other.Html = ['<textarea name="textarea" cols="55" rows="5"></textarea>',
							'<span class="common_cloms_mod_Other_save">保存</span>',
							'<span class="common_cloms_mod_Other_prev">预览</span>'].join("");