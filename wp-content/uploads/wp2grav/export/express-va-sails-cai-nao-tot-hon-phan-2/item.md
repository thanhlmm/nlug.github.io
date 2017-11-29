---
# http://learn.getgrav.org/content/headers
title: Express và Sails? Cái nào tốt hơn (Phần 2)
slug: express-va-sails-cai-nao-tot-hon-phan-2
# menu: Express và Sails? Cái nào tốt hơn (Phần 2)
date: 20-07-2016
published: true
publish_date: 20-07-2016
# unpublish_date: 20-07-2016
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
    tag: [express,sails,socket.io,webapp,express,sails,socket.io,webapp]
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

Phần 1:[ Express và sails? Cài nào tốt hơn (Phần 1)](http://cuthanh.com/nodejs/express-va-sails-cai-nao-tot-hon-phan-1)

Chào mừng các bạn tới với phần 2. Trong phần này mình sẽ so sánh về xây dựng một Web App chung trong một source code.

# Webapp chung trong một bộ source code

*[Trong bài viết hôm trước](http://cuthanh.com/nodejs/express-va-sails-cai-nao-tot-hon-phan-1), mình đã chứng minh cho các bác thấy là **Express** thắng thế nếu các bác muốn xây dựng server và client tách biệt. Vậy nếu xây dựng cả 2 trong một bộ source code thì sao, tức là server của chúng ta không chỉ cung cấp api mà cả client file nữ*a.

## Phương thức xây dựng

**Cách 1**: Ta sẽ serve file tĩnh (static) trong một folder (Y chang như **nginx** đấy các bác).

![staticexpressnonginx](http://cuthanh.com/wp-content/uploads/2016/07/staticexpressnonginx.png)

Cách này thì chả khác gì tách biệt so với mình nói trong phần 1 nhưng lại dùng **Nodejs** để serve static file. WTF, **Nodejs** đâu có sinh ra để làm việc đấy đâu, việc đấy là của Nginx, Apache,… cơ mà ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png). Nodejs có thể serve static file nhưng chắc chắn, chắc chắn không thể nào tối ưu bằng **Nginx** hay **Apache** được.

Mời các bạn đọc bài phân tích ở đây [http://kipalog.com/posts/Cai-thien-toc-do-load-trang-cua-Express—Dung-serve-static-file-bang-nodejs](http://kipalog.com/posts/Cai-thien-toc-do-load-trang-cua-Express---Dung-serve-static-file-bang-nodejs)

**Cách 2**: Dùng template engines, nếu dùng theo cách này thì chúng ta sài nodejs giống như kiểu php cổ điển.

- Lấy data từ DB
- Xử lý
- Gửi cho template
- Render template rồi gửi về cho trình duyệt

Đối với mình, **Nodejs** là dùng ngôn ngữ **JavaScript** và nó hoàn toàn có lợi thế rất rất lơn nếu sử lý data thông qua **JSON**.

> **JSON** (JavaScript Object Noattion) là 1 định dạng hoán vị dữ liệu nhanh. Chúng dễ dàng cho chúng ta đọc và viết. Dễ dàng cho thiết bị phân tích và phát sinh. Chúng là cơ sở dựa trên tập hợp của Ngôn Ngữ Lập Trình [JavaScript](http://javascript.crockford.com/), tiêu chuẩn [ECMA-262 phiên bản 3 – tháng 12 năm 1999](http://www.ecma-international.org/publications/files/ecma-st/ECMA-262.pdf). JSON là 1 định dạng kiểu text mà hoàn toàn độc lập với các ngôn ngữ hoàn chỉnh, thuộc họ hàng với các ngôn ngữ họ hàng C, gồm có C, C++, C#, Java, JavaScript, Perl, Python, và nhiều ngôn ngữ khác. Những đặc tính đó đã tạo nên JSON 1 ngôn ngữ hoán vị dữ liệu lý tưởng.

Vậy tại sao ta không xây dựng **API server**, xuất ra **JSON** không đẹp trai hơn là phải render ra html thả về ah ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png).

Mình đã nói lên cả 2 cách và đã nêu ra nhược điểm của cả 2. Tuy nhiên nếu bác nào “Tao thích code như vậy đấy, còn ngon hơn của mày chán ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)” thì đọc tiếp nhé!

## Express

Nếu muốn làm điều này ở **Express** thì các bác phải cài thêm middleware `express.static` (cái này có tích hợp sẵn trong core của Express). Vậy là có thể serve static file trong folder mà các bác cấu hình.

Còn nếu muốn dùng template engines thì cài đặt về, thêm vào express rồi chạy. VD với template engines `pug` nhé(trước đây nó tên là `Jade`)

 
    <pre class="prettyprint">npm install pug --save

Load nó vào **express**

 
    <pre class="prettyprint">app.set('view engine', 'pug');

Tạo file template mẫu `./view/index.pug`

 
    <pre class="prettyprint">html
      head
        title= title
      body
        h1= message

Render chạy thử xem sao nào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png)

 
    <pre class="prettyprint">app.get('/', function (req, res) {
      res.render('index', { title: 'Hey', message: 'Hello there!'});
    });

`node app.js` xem thử đi nhé, em lười lắm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png).

Cũng không đến nỗi khó khăn, hay dài lắm ha.

## Sails

Sails thì còn nhanh hơn nữa, nó cài đặt hết cả folder serve static file, cả template engines luôn (Mặc định là `EJX`).

Muốn serve static file? Thả file vào trong folder `./assets`

Muốn sài template? Thả file template vào folder `./views`

Ez life huh? Sails cũng hỗ trợ **grunt** nên các bác cũng có thể cài đặt, thêm task nào đó,.. Tuy nhiên càng nhiều thì mỗi lần `sails lift` lại càng rùa bò thêm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/76e3337135a7b852053b34aadd76ba6d.png) như trong [phần 1](http://cuthanh.com/nodejs/express-va-sails-cai-nao-tot-hon-phan-1) mình đã nói.

Nói đến Web app thì không thể thiếu một phần rất quan trọng đó là **Socket**

> **Socket** là một giao thức kết nối giữa 2 thằng server và client. Kết nối này là xuyên suốt, kiểu như thằng này nói cái gì thì thằng kia nghe được vậy. Không như http là client gửi request thì server mới được trả response về. Kết nối socket là hai chiều.

![socketio](http://cuthanh.com/wp-content/uploads/2016/07/socketio.png)

Socket thì ứng dụng nhiều thứ lắm game nè, chat nè,.. nói chung là tất cả các thứ dùng realtime thì đều nên nghĩ tới tới socket đầu tiên hết. Và đối với **Nodejs** thì hãy nghĩ tới [socket.io](http://socket.io/)

> *[Socket.IO](http://socket.io/) enables real-time bidirectional event-based communication.*  
> *It works on every platform, browser or device, focusing equally on reliability and speed.*

### Express

Đối với **express** thì cũng khá là lăng nhằng. Bạn cài đặt **socket.io**, load vào **Express**, config **Express**, config Client kết nối với **socket.io**

Chi tiết

- <http://www.programwitherik.com/socket-io-tutorial-with-node-js-and-express/>
- <http://socket.io/docs/>

### Sails

Sails thì nó soạn sẵn cho các bác rồi, include `sails.io.js` vào client, đọc xíu document là quẩy thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

Chi tiết <http://sailsjs.org/documentation/concepts/realtime>

Qua đấy bạn thấy, nếu muốn xây dựng một webapp all-in-source thì sails là Number 1

# Kết luận

Qua 2 bài viết, chắc các bạn cũng thấy **Express** và **Sails** khác nhau ở chỗ nào.

Nếu muốn xây dựng server và client tách biệt thì hãy dùng **Express** viết api, đơn giản, nhanh gọn, nhẹ.

Nếu muốn xây dựng web app chung vào một bộ source, phức tạp, yêu cầu nhiều chức năng như session, cookie, socket, template,… thì hãy nghĩ ngay tới **sails**.

Tự nhận thấy loạt bài này chưa hay, chưa rõ ràng nhưng các bác thông cảm cho em ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png), em sẽ cố găng cho các lần sau ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)