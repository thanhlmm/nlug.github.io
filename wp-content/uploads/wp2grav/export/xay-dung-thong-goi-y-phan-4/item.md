---
# http://learn.getgrav.org/content/headers
title: Xây dựng hệ thống “Gợi ý…” (Phần 4)
slug: xay-dung-thong-goi-y-phan-4
# menu: Xây dựng hệ thống “Gợi ý…” (Phần 4)
date: 15-08-2016
published: true
publish_date: 15-08-2016
# unpublish_date: 15-08-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [NodeJS]
    tag: [AngularJS,api,code,gợi ý,Web app,AngularJS,api,code,gợi ý,Web app]
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

Hế looooooo. Bài này chúng ta cùng nhau xây dựng client nhé

Phần 1: <http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1>

Phần 2: <http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-2>

Phần 3: <http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-3>

# Demo

<http://demo.cuthanh.com/professorx-client/>

# Chuẩn bị

Chúng ta sẽ xây dựng web app sử dụng framework Angular nhé. Thực tế là có api thì mình có thể áp dụng cho cái gì cũng được. Viết app cho Windows dùng C#, viết cho iOS dùng Switf, Object C, …

Một vài kĩ năng HTML và CSS. Đẹp hay xấu là ở cái này đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)

Để bắt đầu thì các bạn chỉ cần có tí xíu căn bản về Angular là được rồi. Ah, nhớ đọc qua bài giới thiệu Angular Generator bữa trước của mình để dev cho nhanh nhé

Một vài bức hình Xmen ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aa9d71a4e03ce5ef22cd34781a848aae.png)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/magneto.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/wolverine-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/quicksilver-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/professorx-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/mystique-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/kitty-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/jeangray-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/cyclop-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/blink-150x150.jpg)

 ![](http://cuthanh.com/wp-content/uploads/2016/08/beast-150x150.jpg)



# Chiến thuật

Chúng ta sẽ xây dựng 2 route là

1. `/homepage` chỗ này là trang chủ giúp ta có thể thêm một Xmen nào đấy vào đội hình, hiện danh sách đội Xmen
2. `/xmen/:id` đây là thông tin cá nhân của xmen, tại đây có thể xem những người đã “thả tim”, lấy gợi ý những người có thể có… tình cảm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)

# Code

Tạo folder Client

 
    <pre class="prettyprint">mkdir client
    
    cd client

Áp dụng Angular generator

 
    <pre class="prettyprint">yo angular ProjectX

Ráng đợi xíu cho nó cài đặt nha, hơi lâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png)

Mặc định sau khi cài xong thì nó có sẵn 2 route mặc định cho các bác là `homepage` và `about`. Ngon, sài luôn, rename cái `about` lại thành `xmen` (nhớ rename lại trong `index.html`, `app.js` nữa đấy nhá ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)).

## Homepage

Mình thì thường làm html một trang mẫu đã xem nó Ok chưa, không đụng tí gì đến js nhé. File `./view/main.html`

 
    <pre class="prettyprint"><div class="row">
      <div class="col-sm-12 text-center">
        <h1 class="title">Project X</h1>
        <br>
      </div>
      <div class="col-sm-7 text-center row">
        <h1>Get suggest for...</h1>
        <br>
        <div class="col-sm-4">
          <a href="#/xmen/1"><img src="image/jeangray.jpg" alt="Jean Gray" class="img-thumbnail img-circle avatar"></a>
          Jean Gray
        </div>
        <div class="col-sm-4">
          <a href="#/xmen/1"><img src="image/jeangray.jpg" alt="Jean Gray" class="img-thumbnail img-circle avatar"></a>
          Jean Gray
        </div>
        <div class="col-sm-4">
          <a href="#/xmen/1"><img src="image/jeangray.jpg" alt="Jean Gray" class="img-thumbnail img-circle avatar"></a>
          Jean Gray
        </div>
      </div>
      <div class="col-sm-4 col-sm-offset-1 text-center box">
        <h1>Add Xmen</h1>
        <br>
        <form class="text-left" ng-init="newXmen">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" ng-model="newXmen.name" placeholder="Wolverine">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Avatar</label>
            <input type="text" class="form-control" ng-model="newXmen.avatar" placeholder="http://wolverine.com/avatar.png">
          </div>
          <button type="submit" class="btn btn-xmen" ng-click="add()">Submit</button> {{message}}
        </form>
      </div>
    </div>

Đấy, chưa có tí gì gọi là Angular hay JavaScript gì trong đấy đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png). Tiếp theo nhẩy vào `controller` lấy danh sách Xmen về show ra nhé.

File `./scripts/controllers/main.js`

 
    <pre class="prettyprint">'use strict';
    
    /**
     * @ngdoc function
     * @name projectxApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the projectxApp
     */
    angular.module('projectxApp')
      .controller('MainCtrl', function ($http, $scope) {
        // Load xmen
        $http.get(apiUrl+'/xmen').then(function (response) {
          $scope.xmens = response.data;
        });
        $scope.add = function () {
          $http.post(apiUrl+'/xmen', $scope.newXmen).then(function (response) {
            $scope.message = response.data;
          });
        }
      });


Chạy thử

 
    <pre class="prettyprint">grunt serve

Lưu ý là đang chạy thử rồi sửa đổi file thì nó cập nhật lại luôn nhé, không cần phải chạy lại lệnh trên đâu. Mình khoái nhất cái này ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png).

Mở Firebug ra (bác nào sài Chrome dev thì nó là F12 đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png)). Xem xem nó request được những info gì, cấu trúc làm thao.

![xmenjson](http://cuthanh.com/wp-content/uploads/2016/08/xmenjson-1024x309.png)

*Của em*

Bây giờ sửa lại `./view/main.html` thôi. Bước này cần tí kĩ năng AngularJS đấy

 
    <pre class="prettyprint">    <div class="col-sm-4" ng-repeat="xmen in xmens">
          <a href="#/xmen/{{xmen.UID}}"><img src="{{xmen.avatar}}" alt="{{xmen.name}}" class="img-thumbnail img-circle avatar"></a>
          {{xmen.name}}
        </div>

Hehe, thực ra là xóa 3 cái icon kia, thay lại bằng `ng-repeat` rồi thả info vô thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)

Còn cài form thì dễ rồi, các bác tự nghiên cứu nhé. Em chỉ hướng dẫn theo các bước mà em hay làm khi dev thôi, hy vọng giúp ích được cho các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)

## Trang cá nhân Xmen

Cũng tương tự như cách dev với `homepage`, chúng ta được `./view/xmen.html`

 
    <pre class="prettyprint"><div class="container">
        <a href="#/"><span class="glyphicon glyphicon-menu-left"></span> Back to Homepage</a>
    </div>
    <div class="text-center">
        <h1 class="title">{{curXmen.name}}'s friends list </h1>
        <br>
        <div class="row">
            <div class="col-sm-2 avt-wraper" ng-repeat="xmen in xmens" ng-show="curXmen.like.indexOf(xmen.UID) >= 0 && xmen.UID !== curXmen.UID">
                <img src="{{xmen.avatar}}" alt="{{xmen.name}}" ng-click="like(xmen.UID)" class="img-thumbnail img-circle avatar">
                {{xmen.name}}
                <a href="" class="action"><span class="glyphicon glyphicon-heart"></span></a>
            </div>
            <div ng-if="curXmen.like.length <= 0"><h2>Opps... This one so selfish! Let's fall in love below</h2></div>
        </div>
        <hr>
        <h1 class="title"><span class="glyphicon glyphicon-heart"></span> if you love them</h1>
        <br>
        <div class="row">
            <div class="col-sm-2" ng-repeat="xmen in xmens" ng-show="curXmen.like.indexOf(xmen.UID) < 0 && xmen.UID !== curXmen.UID">
                <img src="{{xmen.avatar}}" alt="{{xmen.name}}" ng-click="like(xmen.UID)" class="img-thumbnail img-circle avatar">
                {{xmen.name}}
            </div>
        </div>
        <hr>
        <h1 class="title">Maybe you love...</h1>
        <br>
        <div class="row">
            <div class="col-sm-2" ng-repeat="xmen in suggests" ng-if="curXmen.like.length > 0">
                <img src="{{xmen.avatar}}" alt="{{xmen.name}}" ng-click="like(xmen.UID)" class="img-thumbnail img-circle avatar">
                <p>{{xmen.name}}</p>
                <p class="number">{{xmen.score*100 | number:2}}% {{xmen.suggestScore | number:2}}</p>
            </div>
            <div ng-if="curXmen.like.length <= 0"><h2>Opps... Love someone to get suggesting</h2></div>
            <div ng-if="suggests.length <= 0"><h2>Opps... We can not find anyone you want to live with</h2></div>
        </div>
    </div>

và `./scripts/controllers/xmen.js`

 
    <pre class="prettyprint">'use strict';
    
    /**
     * @ngdoc function
     * @name projectxApp.controller:XmenCtrl
     * @description
     * # XmenCtrl
     * Controller of the projectxApp
     */
    angular.module('projectxApp')
      .controller('XmenCtrl', function ($http, $scope, $routeParams, $route) {
        var init = function () {
          $http.get(apiUrl+'/'+$routeParams.uid).then(function (response) {
            $scope.curXmen = response.data;
            $http.get(apiUrl+'/xmen').then(function (response) {
              $scope.xmens = response.data;
            });
          });
          $http.get(apiUrl+'/'+$routeParams.uid+'/suggest').then(function (response) {
            $scope.suggests = response.data;
          });
        }
        init();
        $scope.like = function (uid) {
          $http.post(apiUrl+'/'+$routeParams.uid+'/like', {uid: uid}).then(function (response) {
            $route.reload();
          });
          return false;
        }
        
      });


Phần controller thì có vẻ dễ hiểu rồi ha. Mình sẽ giải thích sơ qua về chiến lược, và thực hiện ở `xmen.html` thôi nhé

1. Lấy thông tin của xmen đang xét tới, sau đó lấy danh sách xmen
2. Hiện thực 3 section - Những người đã Like
- Những người chưa Like
- Danh sách gợi ý

Nhìn lên trên thì bạn sẽ thấy mấy cái `ng-show`. Mấy cái này để lọc ra danh sách đã/chưa like

Mấy cái `ng-if` sẽ hiển thị thông báo nếu thằng này chưa like thằng nào cả, hãy là “*xin lỗi, em chả tìm được thằng nào hợp với anh *![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)”

Đấy. vậy là hoàn thành xong project cho bác X. Chắc bác sẽ rất biết ơn các bác vì đã chung tay bảo vệ trái đất.

# Ai nói lập trình viên không cứu được thế giới nào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png)





Thêm quả loadingbar mà em[ giới thiệu trước đây](http://cuthanh.com/web-app/thanh-loading-o-dau-trang-nhu-youtube) cho các bác nhìn cho chuyên nghiệp ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)

- - - - - -

Series này vẫn chưa xong đây ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a729827d07c2862258711bdba931e289.png). Bài tiếp theo mình sẽ đưa ra một vài nhận xét, bình luận về thuật toán, cách xây dựng một ứng dụng. Mong các bác tiếp tục ủng hộ vì theo mình, phần kết luận lúc nào cũng bổ ích nhất ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png). Đón đọc nhé!

À quên repo cho các bác chạy thử không lại nói em chém gió. Nhớ đọc code rồi nghiên cứu nhé, đừng chạy xong rồi để đấy!

<https://github.com/nlug/Professor-X-client>