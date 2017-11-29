---
# http://learn.getgrav.org/content/headers
title: Viết app Angular siêu tốc với Angular generator
slug: viet-app-angular-sieu-toc-voi-angular-generator
# menu: Viết app Angular siêu tốc với Angular generator
date: 19-07-2016
published: true
publish_date: 19-07-2016
# unpublish_date: 19-07-2016
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
    tag: [angular,angular generator,bower,yeoman,angular,angular generator,bower,yeoman]
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

Các bác dev Angular thì bắt đầu như thế nào. Em thì hồi trước phải :

1. Download Angular
2. Thêm vào `index.html`
3. Tạo file `app.js`, thêm vào `index.html`
4. `angular.module('myApp', ['bla', 'balo']);`
5. Download thêm các `package`, rồi lại inject vào
6. Tạo file `controller`, `view`, `service`, `filter`  vân vân và mây mây ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)

Cực quá ha các bác, vậy mà em vẫn cứ làm như vậy đấy cho tới một ngày được làm chung project, PM thiết lập sẵn angular generator rồi giao cho team dev. Em còn ngu ngu không biết gì mở file bower.json lên Google search từng cái về rồi thêm vào `index.html` ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png). Mãi sau mới thỉnh giáo được cách sài. Sau khi biết tới Angular genarator thì công việc nhanh lên đáng kể, không phải đau đầu tìm kiếm các `package` rồi thêm thêm vô nữa.

Vì vậy, em viết bài này muốn hướng dẫn các bác sử dụng **Angular generator** để dev Angular nhanh tới chóng mặt – (feeling like Flash ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png))

# Giới thiệu

## Yeoman.io

![yeomant](http://cuthanh.com/wp-content/uploads/2016/07/yeomant-1024x405.png)

> #### What’s Yeoman?
> 
> Yeoman helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.

Trang chủ <http://yeoman.io>

Bác này là công cụ giúp dev có thể tìm trên công động những “genarator” để sử dụng cho project của mình hoặc có bác nào bá đạo cũng có thể viết generator để chia sẻ cho cộng đồng lấy điểm danh vọng ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png). Lý do mình giới thiệu thằng này làm gì, đang nói tới **Angular generator** cơ mà. Thực ra thằng này là ổng tổ của rất nhiều thằng generator, **Angular generator** mà mình nói đến bên trên cũng chỉ là một đứa cháu thôi. Muốn sài **Angular generator** thì phải có **yeoman** trong máy đã.

## Cài đặt **Yeoman**

 
    <pre class="prettyprint">npm install -g yo

Xong! Vậy là có Yeoman rồi.

## AngularJS generator

Nhân vật chính đây rồi. Tẹt ten ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/47c5e4b08a47d4ad47589f9f615cea5d.png).

Github <https://github.com/yeoman/generator-angular>

Cài đặt thôi

 
    <pre class="prettyprint">npm install -g grunt-cli bower yo generator-karma generator-angular

Vậy là đã có **Angular generator** trong máy rồi đấy. Giờ chiến thôi.

# Cách sử dụng

## Bắt đầu

Mở [CMDER](http://cuthanh.com/tools/cmder-dem-unix-bash-len-windows) lên rồi chiến nào anh em.

Tạo thư mục cho project rồi di chuyển đến folder đấy

 
    <pre class="prettyprint">mkdir my-new-project && cd my-new-project

Generate angular ra thôi nào.

 
    <pre class="prettyprint">yo angular [app-name]

Nó sẽ hỏi các bác vài lựa chọn. Di chuyển lên xuống và ấn nút `Space` để chọn/bỏ chọn rồi `Enter` để sang bước tiếp theo.

Okey xong rồi đấy, nhanh chưa. Giờ chạy thử nha

 
    <pre class="prettyprint">grunt serve

Nó sẽ tự mở trình duyệt truy cập vào địa chỉ local mà đang chạy app angular mà bác đang dev. Phê chưa.

![generator](http://cuthanh.com/wp-content/uploads/2016/07/generator.png)

*Giao diện khi chạy thử*

Chưa hết, **Angular generator** còn hỗ trợ bạn tạo file `controller`, `view`, `service`,… rồi tự thêm vào `index.html` luôn. Công việc của các bác là code trên các file được sinh ra thôi.

## Tạo route

Sinh ra file `controller`, `view`, và `config` lại route để kết nối đến mấy thắng vừa tạo.

 
    <pre class="prettyprint">yo angular:route myroute

## Tạo controller

Lệnh dưới đây sẽ tạo ra controller `flash`

 
    <pre class="prettyprint">yo angular:controller flash

## Directive

 
    <pre class="prettyprint">yo angular:directive myDirective

## Filter

 
    <pre class="prettyprint">yo angular:filter myFilter

## View

 
    <pre class="prettyprint">yo angular:view flash

## Service

 
    <pre class="prettyprint">yo angular:service myService

Ngoài ra nếu các bác code bằng *CoffeeScript* hoặc *TypeScript*

Thêm `--coffee` hoặc `--typescript` vào cuối lệnh.

Ví dụ.

 
    <pre class="prettyprint">yo angular:controller quicksilver --coffee

## Lệnh quan trọng nhất

 
    <pre class="prettyprint">grunt build

Lệnh này sẽ `build project` mà các thành product. Nghĩa là nó sẽ gom tất cả lại, minimize code, tối ưu lại cho gọn nhẹ nhất. Chạy lệnh trên xong thì toàn bộ code product của các bác nằm trong folder `dist` đấy.

# Cài đặt thêm package.

Theo mặc định **Angular generator** sử dụng **Bower** và **NPM**.

NPM hoàn toàn có thể thể thay thế được **bower** nhưng mình khuyên các bác cứ nên sử dụng **bower**. **NPM** dành cho **nodejs** (*server side*) và **bower** dành cho *client side*. Chắc vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3d4972d841d550c8b185c81dca71230b.png).

Ví dụ các bác muốn cài [Package loading bar giống bữa trước mà em giới thiệu nha](http://cuthanh.com/web-app/thanh-loading-o-dau-trang-nhu-youtube).

1. Truy cập Github của Package bữa em nói <https://github.com/chieffancypants/angular-loading-bar>
2. Thấy có dòng nó chỉ cho cài kìa `bower install angular-loading-bar`
3. Copy bỏ vào cmder, `ENTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR`

Xong, vậy là có package ngon lành, tự include vào `index.html` cho các bác luôn. Nhiệm vụ của các bác là inject vào angular trong file `app.js` thôi.

**Bower** chứa vô vàn `package` cho các bác nghiên cứu, tìm tòi, thấy cái nào cứ thêm hết vô, đảm bảo một lúc sau cái app của các bác như… hội chợ luôn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png).

# Kết bài

Với việc xã hội ngày càng tiến bộ, văn minh thì việc code cũng trở nên dễ dàng hơn, hỗ trợ tận răng cho các bác. Việc của các bác là lên [Stackoverflow ](http://stackoverflow.com)copy thả vào là xong. Ez life ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png).

Cách code nhanh nhất là méo code cái gì cả!Tri thức trẻ