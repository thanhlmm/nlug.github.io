---
# http://learn.getgrav.org/content/headers
title: Thêm thanh loading ở đầu trang như YouTube cho Angular
slug: thanh-loading-o-dau-trang-nhu-youtube
# menu: Thêm thanh loading ở đầu trang như YouTube cho Angular
date: 17-07-2016
published: true
publish_date: 17-07-2016
# unpublish_date: 17-07-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Web App]
    tag: [angular,Loading bar,YouTube,angular,Loading bar,YouTube]
author: nlug
metadata:
    author: nlug
#      description: Your page description goes here
#      keywords: HTML, CSS, XML, JavaScript
#      robots: noindex, nofollow
#      og:
#          title: The Rock
#          type: video.movie
#          url: http://www.imdb.com/title/tt0117500/
#          image: http://ia.media-imdb.com/images/rock.jpg
#  cache_enable: false
#  last_modified: true

---

He nhô…. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

Bài viết này mình sẽ hướng dẫn các bác thêm thanh loading ở đầu trang giống YouTube.

# Giới Thiệu

![loadingbar](http://cuthanh.com/wp-content/uploads/2016/07/loadingbar-1024x550.png)

Hiện nay thì phong trao làm webapp đang lên cao, có rất rất nhiều công cụ hỗ trợ mình thêm các chức năng cool cool vào webapp. Một trong các cái mình thích nhất là <http://chieffancypants.github.io/angular-loading-bar/> . Thấy cái này đẹp mà dễ cài quá, kiểu như tương lai bất cứ cái nào làm bằng angular mình cũng thêm nó vô hết ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png).

> # Angular Loading Bar
> 
> An automatic loading bar using angular interceptors. It works automatically, so simply include it as a dependency and it will automatically display the progress of your `$http` requests.

Có rất nhiều project như vầy rồi nhưng đa số chả có cái nào tự động cả, phải cài đặt lằng nhằng nên bác **chieffancypants** làm ra repo này cho các bác chỉ down về thêm vài ba dòng là xong rồi. Nó sẽ tự động chạy khi các bác load dữ liệu qua XHR (kiểu load Ajax đấy, chắc vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png))

Link GitHub <https://github.com/chieffancypants/angular-loading-bar>

# Cài đặt

Download qua npm hoặc bower

 
    <pre class="prettyprint">$ npm install --save angular-loading-bar
    $ bower install --save angular-loading-bar

Thêm vào app của các bác

 
    <pre class="prettyprint">angular.module('myApp', ['angular-loading-bar'])


Include code vào project.

 
    <pre class="prettyprint"><link rel='stylesheet' href='build/loading-bar.min.css' type='text/css' media='all' />
    <script type='text/javascript' src='build/loading-bar.min.js'></script>

Okey xong rồi đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png). Mẹ bài gì mà ngắn thế ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png). Thôi viết thêm phần tùy chỉnh nữa vậy.

# Tùy chỉnh

Bật tắt cài vòng tròn xoay xoay góc trên bên trái

 
    <pre class="prettyprint">angular.module('myApp', ['angular-loading-bar'])
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }])

Bật tắt thanh chạy ngang (Bố mày đọc bài này để cài cái thanh này mà mày bắt tắt ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png))

 
    <pre class="prettyprint">angular.module('myApp', ['angular-loading-bar'])
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
      }])

Thay đổi màu

 
    <pre class="prettyprint">/* Style của cái thanh
      Thay #F0F3BD bằng màu các bác thích */
    #loading-bar .bar {
        background: #F0F3BD;  
    }
    #loading-bar .peg {
      -moz-box-shadow: #F0F3BD 1px 0 6px 1px;
      -ms-box-shadow: #F0F3BD 1px 0 6px 1px;
      -webkit-box-shadow: #F0F3BD 1px 0 6px 1px;
      box-shadow: #F0F3BD 1px 0 6px 1px;
    }
    /* Style của cái vòng tròn
      Thay #F0F3BD bằng màu các bác thích */
    #loading-bar-spinner .spinner-icon {
      border-top-color:  #F0F3BD;
      border-left-color: #F0F3BD;
    }

Thay đổi vị trí của cái thanh

 
    <pre class="prettyprint">angular.module('myApp', ['angular-loading-bar'])
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.parentSelector = '#loading-bar-container'; // Cây DOM mà sẽ chưa cái thanh chạy
        cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>'; // HTML của cái cục tròn tròn
      }])

Thiết lập thời gian tối thiểu đệ hiện Loading bar

*Bình thường thì request nào lâu hơn 100ms mới hiện cái thanh này*

 
    <pre class="prettyprint">angular.module('myApp', ['angular-loading-bar'])
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.latencyThreshold = 500; // Thiết lập thời gian tối thiểu
      }])

Bỏ qua không hiện Loading nữa.

 
    <pre class="prettyprint">// ignore a particular $http GET:
    $http.get('/status', {
      ignoreLoadingBar: true
    });
    
    // ignore a particular $http POST.  Note: POST and GET have different
    // method signatures:
    $http.post('/save', data, {
      ignoreLoadingBar: true
    });

# Service

Ngoài việc để cho nó chạy tự động thì các bác chỉnh tay cũng được. Inject nó vào controller set giá trị là xong.

 
    <pre class="prettyprint">angular.module('myApp').controller('myCtrl', function (cfp.loadingBar) {
      cfpLoadingBar.start(); // Thêm cây Loading vào page, hiện 1%
      cfpLoadingBar.inc(); // Chay thêm random %
      cfpLoadingBar.set(0.3); // 30% cho bố
      cfpLoadingBar.status(); // Trả về 0.3
      cfpLoadingBar.complete(); // Cây chạy đến 100% rồi biến mất
    });

# Kết luận

Theo mình thấy để mặc định rồi chỉnh lại màu là ngon lắm rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png). Cảm ơn các bạn đã đọc bài viết này. Nếu cần chi tiết hơn thì comment hoặc đọc document ở repo đi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)