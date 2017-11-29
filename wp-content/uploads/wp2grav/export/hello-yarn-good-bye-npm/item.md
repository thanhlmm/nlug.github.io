---
# http://learn.getgrav.org/content/headers
title: Hello Yarn and good bye NPM
slug: hello-yarn-good-bye-npm
# menu: Hello Yarn and good bye NPM
date: 13-10-2016
published: true
publish_date: 13-10-2016
# unpublish_date: 13-10-2016
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
    tag: [dev,facebook,npm,package manager,thay đổi,yarn,dev,facebook,npm,package manager,thay đổi,yarn]
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

Hello world ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

Bài viết này mình sẽ giới thiệu một package manager mới thay thế cho **NPM** được cài mặc định với **Nodejs**.

Nếu là một nodejs developer hẳn rằng các bác sẽ thấy nó thực sự mạnh ở… **NPM**. Vì sao? vì đa số cái khỉ gì cũng có trên đó cả, bạn cần xây dựng một api server?

 
    <pre class="prettyprint">npm install --save express

Bạn cần xây dựng server socket?

 
    <pre class="prettyprint">npm install --save socket.io

Muốn đưa ứng dụng local trên máy các bác ra demo cho khách hàng, show off với mấy thằng ku mà không cần phải tốn tiền, tốn công sức deploy lên Heroku, AWS,…

 
    <pre class="prettyprint">npm install --save localtunnel

Hay bạn có vài đoạn code hữu ích muốn chia sẻ lên công đồng? Hãy đóng gói nó lại (package), viết document (nhớ để tên tác giả to vào để lấy điểm danh vọng) rồi gửi lên, xong!. Sau đó đi khoe, mày mắc phải vấn đề này phải không? Mày đang không biết xử lý sao trong trường hợp này đúng không? `npm install --save my-super-package`. Problem solve. Ngầu chưa??? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

![1c99in](http://cuthanh.com/wp-content/uploads/2016/10/1c99in.jpg)

Một vài Package mà mình học hỏi được chế lại

https://www.npmjs.com/~minhthanh

Nói chung, điều khiến mình thích nhất ở **nodejs** đó là cộng đồng. Tất cả các package ở trên đều là đóng góp của cộng đồng. Việc của các bác là lấy về sài thôi. Nếu không có sực mạnh của cộng đồng thì thực sự, để có thế khiến cho **nodejs** “lên đỉnh” thì anh dev phải thực sự cực kì cực kì “cứng” và “bền bỉ” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

![1_jewx](http://cuthanh.com/wp-content/uploads/2016/10/1_JEWX.png)

Tuy nhiên có một vấn đề mắc phải khi dùng **NPM** là thời gian download khá lâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png), và phải online để có thể sử dụng đuợc (offline cũng được những phải vẽ vời lằng nhằng lắm, khó quá bỏ qua ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)). Vì thế, **Facebook** xin trân trọng giới thiệu đến các bác **Yarn** ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png), công cụ thay thế cho thằng **NPM**

# Về Yarn

![yarn-796x398](http://cuthanh.com/wp-content/uploads/2016/10/Yarn-796x398.jpg)

Theo TheNextWeb thì **Yarn** là

Facebook has launched Yarn, an open source JavaScript package manager that promises faster and more reliable installs than the massively popular npm. The company says its new creation is capable of reducing install times from several minutes to just seconds in some cases – depending on the size of the packages you’re working with, of course.[TheNextWeb](http://thenextweb.com/dd/2016/10/12/facebook-launches-yarn-a-faster-npm-client/)



Bác facebook hứa hẹn là nó sẽ nhanh hơn, mãnh mẽ hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png) nhiều nhiều so với thằng **NPM** sida, giảm dung luợng, hỗ trợ cài đặt offline,…

Nói chung là nhiều lắm, em chỉ thấy cái quan trọng nhất là… Nhanh, dễ triển khai và tương thích ngược với **NPM**

![screen-shot-2016-10-13-at-11-18-15-am](http://cuthanh.com/wp-content/uploads/2016/10/Screen-Shot-2016-10-13-at-11.18.15-AM-1024x611.png)

*Hình so sánh tốc độ giữa NPM và yarn, [xem thêm tại đây](https://yarnpkg.com/en/compare)*

# Cài đặt

Cách nhanh nhất là cài thông qua npm

`npm install -g yarn`

Nó giống như việc dùng IE để download các browser khác vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)

# Sử dụng

Nếu chuyển từ NPM qua thì chỉ cần thay `npm` bằng `yarn` cho hầu hết câu lệnh. Hoặc tham khảo bảng chuyển đối sau

 npm Yarn `npm install` `yarn install` ***(N/A)*** `yarn install --flat` ***(N/A)*** `yarn install --har` ***(N/A)*** `yarn install --no-lockfile` ***(N/A)*** `yarn install --pure-lockfile` `npm install [package]` ***(N/A)*** `npm install --save [package]` `yarn add [package]` `npm install --save-dev [package]` `yarn add [package] --dev` ***(N/A)*** `yarn add [package] --peer` `npm install --save-optional [package]` `yarn add [package] --optional` `npm install --save-exact [package]` `yarn add [package] --exact` ***(N/A)*** `yarn add [package] --tilde` `npm install --global [package]` `yarn global add [package]` `npm uninstall [package]` ***(N/A)*** `npm uninstall --save [package]` `yarn remove [package]` `npm uninstall --save-dev [package]` `yarn remove [package]` `npm uninstall --save-optional [package]` `yarn remove [package]` ***(N/A)*** `yarn upgrade [package]` 

Và **yarn** sử dụng lại file `package.json` của **NPM** nên hoàn toàn chả phải chỉnh sửa lại cái khỉ gì cả. Nếu có `package.json` sẵn thì chỉ cần `yarn` hoặc `yarn install` là xong rồi. Ez!

Ngoài việc sử dụng lại file `package.json` của **NPM** thì **yarn** có sử dụng thêm một file mới là `yarn.lock`. File này có nhiệm vụ lưu lại version của package lúc bạn cài đặt, sau này đem qua máy khác nó sẽ cài đặt lại đúng version của package lúc cài đặt. Tránh tình trạng chạy mượt ở máy dev, mang đi show off cho khách lại không! ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png)

**Yarn** là công cụ quản lý thôi nhé các bác, thế nên nó sẽ lấy nguồn package từ **NPM**, không phải lo không có package mà sài đâu

Nói chung sau, 30′ nghịch ngợm thì thấy nó nhanh hơn **NPM** khá nhiều, các bác nên chuyển qua đi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)

 