---
# http://learn.getgrav.org/content/headers
title: SEO Angular? Ez với prerender.io!
slug: seo-angular-ez
# menu: SEO Angular? Ez với prerender.io!
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
    category: [Server,Web App]
    tag: [angular,nginx,Prerender,SEO,angular,nginx,Prerender,SEO]
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

# Vấn đề

Hiện nay thì mặc dù thằng Google đã hỗ trợ Crawl Javascript nhưng theo mình thấy thì vẫn chưa ổn định mấy và Internet rộng lớn lắm, có mình mày hỗ trợ thì tao sống không nổi đâu. Vd như Crawler của Facebook.

> Các bạn truy cập <https://developers.facebook.com/tools/debug/sharing/>
> 
> Paste link website rồi ấn Debug xem coi thằng Facebook nó nhìn web của bạn như thế nào nhé.

Theo mình thì SEO quyết định rất rất lớn đến vấn đề của một website nói chung hay web app nói riêng. Vì vậy việc SEO cho webapp bằng Angular thật sự là cực kì cần thiết.

Search vòng vèo trên mạng thì có thể thấy có khá nhiều giải pháp, nhiều quá mính chưa thử nhưng toàn thấy chữ “3 years ago” nghĩ chắc sida rồi không sài được nữa.

![seoangulargit](http://cuthanh.com/wp-content/uploads/2016/07/seoangulargit.png)

*Vd như thằng này https://github.com/hackfanatic/angular-seo*

Mình sẽ giới thiệu các bạn cấu hình lại app angular của bạn sử dụng [Prerender.io](https://prerender.io) để render html cho tụi crawler

**Demo** mà mình đã áp dụng thành công: <http://inboxtui.com>

# Về Prerender.io

> Allows your Javascript website to be crawled perfectly by search engines.

Nếu bạn tự cài vào VPS của mình thì miễn phí, còn sài qua của nó thì tính phí, mình thấy cũng khả cao. Nên bài này mình hướng dẫn cài trên VPS của chính các bác.

Thằng này thực chất dùng [Phantomjs ](http://phantomjs.org)để giả lập trình duyệt web, truy cập vào app angular của chúng ta, đợi nó load xong, lưu lại cây HTML hiện tại rồi trả về cho thằng Crawer.

Vậy sao không sài bà nó thằng [Phantomjs ](http://phantomjs.org)cho rồi? Mình check qua thì có vể thằng [Prerender.io](https://prerender.io) này tối ưu hơn cho mấy cái nhu cầu kiều vầy và quan trong hơn là dễ cài đặt :p, tội gì đụng vào Phantomjs làm gì cho mệt đúng không các bác, bác Bill căn dặn vậy rồi mà ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png).

Tôi chọn người lười biếng để làm những việc khó khăn. Bởi một người lười biếng sẽ tìm ra cách dễ dàng để làm việc đóBill Gate - Sama



# Cài đặt

Mình sẽ hướng dẫn các bạn cái trên vps **ubuntu 14.04** dùng **nginx** làm webserver. Các thằng còn lại cũng tương tự, mình sẽ cung cấp tài liệu.

Okey. Mở [Cmder](http://cuthanh.com/tools/cmder-dem-unix-bash-len-windows) lên rồi quẩy thôi nào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

### Bước 1: Cài đặt [prerender.io](https://prerender.io)

Đầu tiên là chắc chắn bạn đã cài Nodejs và NPM nhé

 
    <pre class="prettyprint">sudo apt-get update
    sudo apt-get install nodejs npm
    ln -s /usr/bin/nodejs /usr/bin/node

Chạy `node -v` test thử xem đã cài được chưa nhé.

Clone repo của prerender.io

 
    <pre class="prettyprint">git clone https://github.com/prerender/prerender.git
    cd prerender
    npm install

Chạy thử

 
    <pre class="prettyprint">node server.js

Mặc định prerender.io sẽ chạy trên port 3000. Các bác thử vào `http://ip_vps:3000/http://dia_chi_app_angular` . Check source code thấy toàn html là Ok rồi đấy. Ez đúng không ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png).

Ah cái này để chạy tạm thơi test thử thôi. Để server render của mình chạy lâu dài thì các bác sử dụng `pm2` hay `forever` nhá.

### Bước 2: Cấu hình lại Angular.

Thêm đoạn mã sau **ngay đầu tiên trong thẻ head**`<base href=”/”>` (Trong trước hợp các bác chạy ở ngay đường đẫn gốc, không thì sửa lại cho phù hợp).

Tiếp theo thêm `<meta name="fragment" content="!">` vào trong thẻ **head**

Thêm dòng này vào angular config `$locationProvider.hashPrefix('!');`

Nếu sài chế độ `html5`.

Nhớ bật HTML5 mode trong chỗ config angular nhé `$locationProvider.html5Mode(true);`

Nếu sài chế độ mặc định thì thôi để im vậy. Mình khuyên dùng HTML5 Mode, cái này nhìn khá đẹp ^^.

Trong một số trường hợp nếu muốn chắc chắn là render server bắt đụng trạng thái html của app thì các bác nên thiết lập như sau:

Thêm đoạn này vào `<script> window.prerenderReady = false; </script>`

Sau đó khi nào chắc chắn app đã load xong thì set nó lại thành true `window.prerenderReady = true;`

### Bước 3: Cấu hình nginx để biết đâu là crawler, đâu là người.

 
    <pre class="prettyprint"># Change YOUR_TOKEN to your prerender token and uncomment that line if you want to cache urls and view crawl stats
    # Change example.com (server_name) to your website url
    # Change /path/to/your/root to the correct value
    
    server {
        listen 80;
        server_name example.com;
     
        root   /path/to/your/root;
        index  index.html;
    
        location / {
            try_files $uri @prerender;
        }
     
        location @prerender {
            #proxy_set_header X-Prerender-Token YOUR_TOKEN;
            
            set $prerender 0;
            if ($http_user_agent ~* "baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator") {
                set $prerender 1;
            }
            if ($args ~ "_escaped_fragment_") {
                set $prerender 1;
            }
            if ($http_user_agent ~ "Prerender") {
                set $prerender 0;
            }
            if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|doc|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)") {
                set $prerender 0;
            }
            
            #resolve using Google's DNS server to force DNS resolution and prevent caching of IPs
            resolver 8.8.8.8;
     
            if ($prerender = 1) {
                
                #setting prerender as a variable forces DNS resolution since nginx caches IPs and doesnt play well with load balancing
                set $prerender "127.0.0.1:3000"; #Server prerender của các bác 
                rewrite .* /$scheme://$host$request_uri? break;
                proxy_pass http://$prerender;
            }
            if ($prerender = 0) {
                rewrite .* /index.html break;
            }
        }
    }

Nếu sử dụng Apache thì cấu hình theo file sau: <https://gist.github.com/thoop/8072354>

Ruby [https://github.com/prerender/prerender\_rails](https://github.com/prerender/prerender_rails)

Nodejs sử dụng Express [https://github.com/prerender/prerender-node](https://github.com/prerender/prerender_rails)

Restart lại nginx server xem nào `sudo service nginx restart`

Thành quả

Ok xong hết rồi đấy. Giớ test xem thế nào nhé

**Nếu sài HTML5 Mode**

Link bình thường của các bác `http://www.example.com/user/1`

Link test `http://www.example.com/user/1?_escaped_fragment_=`

**Sài chế độ mặc định của Angular**

Link bình thường `http://www.example.com/#!/user/1`

Link test `http://www.example.com/?_escaped_fragment_=/user/1`

Nếu thấy view source code thấy toàn là html thì ngon rồi đấy ^^.

# Nhược điểm

Cách này có nhược điểm là nó render html khá lâu (Phải giả lập trình duyệt truy cập vào app angular của các bác mà). [Phantomjs ](http://phantomjs.org)lâu lâu bị crash (mẹ y chang thằng chrome) ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png).

Giải pháp là áp dụng cache vào server prerender.io. Các bác có thể tham khảo ở repo <https://github.com/prerender/prerender> nó có đề cập tới đấy.

# Nói thêm

Vì mình chỉ mới biết tới angular thôi nên không thể hướng dẫn các bạn áp dụng cho cái framework như *meteor* hay *stack của react*,… các bác có thể thiết lập tùy theo.