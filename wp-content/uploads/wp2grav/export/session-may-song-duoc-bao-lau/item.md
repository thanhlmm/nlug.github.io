---
# http://learn.getgrav.org/content/headers
title: Session, mày sống được bao lâu?
slug: session-may-song-duoc-bao-lau
# menu: Session, mày sống được bao lâu?
date: 29-09-2016
published: true
publish_date: 29-09-2016
# unpublish_date: 29-09-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Server]
    tag: [garbage collection,php,Session,thời gian sống,thu gom rác,garbage collection,php,Session,thời gian sống,thu gom rác]
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

Chào các mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png),

Như bữa trước đã nói trong bài [“hack” hệ thống captcha của truờng](http://cuthanh.com/technology/hack-thong-captcha-cua-truong), ta có thể bypass được việc nhập captcha do lỗi của nguời lập trình liên quan đến Session.

Mình cũng đã viết một con bot nhỏ nhỏ để lấy data thời khoá biểu về. Mọi việc diễn ra khá trơn tru mà không cần đến dầu nhớt ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png), tuy nhiên, sau khi ngủ một giấc, chạy lại thì con bot méo get được data. WTF??? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png) Chả lẽ hôm qua chạy đuợc mà hôm nay không chạy được ah

![it-ran-last](http://cuthanh.com/wp-content/uploads/2016/09/it-ran-last.jpg)

Ah, vậy đơn giản

![problem](http://cuthanh.com/wp-content/uploads/2016/09/problem-1.jpeg)

Em thử rồi, không đuợc đâu các bác ạ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png)

Sau một hồi mày mò StackOverFlow thì em cũng biết được nguyên nhân của vấn đề đó là **Thời gian sống của session**.

Nghĩa là sao? Nghĩa là data mà thằng Session lưu cho từng user sẽ chỉ tồn tại trong một khoảng thời gian và sau đó sẽ bị bác gom phế liệu (**garbage collection**) thu dọn đi bán ve chai. Tuỳ vào từng ngôn ngữ khác nhau mà Session sẽ có khoảng thời gian sống mặc định khác nhau. Như trường mình dùng PHP thì mình nghĩ chắc để mặc định là 24 phút, cũng chả có nhiều thằng quan tâm đến cái này mấy đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png).

 
    <pre class="prettyprint">; After this number of seconds, stored data will be seen as 'garbage' and
    ; cleaned up by the garbage collection process.
    session.gc_maxlifetime = 1440

Các bác có thể thay thế giá trị ấy trong file `php.ini` để Session của mình có thể sống thọ hơn đuợc một tí.

# Thử nghiệm

Tuy nhiên đấy chưa phải là tất cả? Mình có thử một đoạn test Session như sau

File `setSession.php`

 
    <pre class="prettyprint"><?php
    session_start();
    $t = time();
    $_SESSION['cuthanh'] = $t;
    echo "Session cuthanh set with value: ".$t;
    ?>

File `getSession.php`

 
    <pre class="prettyprint"><?php
    session_start();
    if (isset($_SESSION['cuthanh'])) {
        echo "We got session cuthanh contains value :".$_SESSION['cuthanh']." at ".time();
    } else {
        echo "Sorry, all sessions gone!";
    }
    ?>

Khá đơn giản nên em không giải thích gì thêm nha. Okey bây giờ test thử nhé

- Chạy thử file `setSession.php`
- Chạy file `getSession.php` để xem đã nhận Session chưa
- Okey, bây giờ ra Find Match trận Dota hoặc làm tập JAV ngắn ngắn (nói chung làm sao trên 24 phút là được)
- …
- Bây giờ load thử lại `getSession.php` xem sao nhé.

Theo các bác thì kết quả ra sao? “*Sorry, all sessions gone!*” hả? Nếu đúng như vậy thì các bác đi mua vé số, lô đề, chơi Dota thì pick PA hoặc OM đi nhé. Tại vì chỉ có 1% cơ hội các bác ra đuợc kết quá như vậy thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

![](https://i.ytimg.com/vi/h5I5UYxajnQ/maxresdefault.jpg)

Ủa, sao nãy bảo thời gian sống của nó được có 24 phút thôi mà. Nếu các bác đọc kĩ trong chỗ setting `php.ini` mà mình nói hồi nãy sẽ có dòng

 
    <pre class="prettyprint">After this number of seconds, stored data will be seen as 'garbage' and cleaned up by garbage collection proccess

Nghĩa là, sau chừng ấy thời gian, Session sẽ được coi như là phế liệu và sẽ bác thu gom phế liệu dọn dẹp.

Vấn đề ở đây là bác thu gom phế liệu bận đi bar rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png) nên lâu lâu rảnh rỗi mới qua nhà các bác lấy phế liệu thôi nhé.



Và tỉ lệ này theo mặc định là 1% nhé. Trong `php.ini` có đề cập đến vấn đề này như sau

 
    <pre class="prettyprint">; Define the probability that the 'garbage collection' process is started
    ; on every session initialization.
    ; The probability is calculated by using gc_probability/gc_divisor,
    ; e.g. 1/100 means there is a 1% chance that the GC process starts
    ; on each request.
    
    session.gc_probability = 1
    session.gc_divisor     = 100

Đây chính là lý do mà, sau khi xem tập JAV vào lại `getSession.php` chỉ có 1% cơ hội là Session sẽ chết, còn lại 99% là nó vẫn còn sống. Vì vậy nếu các bác muốn bác phế liệu chăm chỉ thu gom, không đi quẩy bar bủng các kiểu nữa thì chỉ cần** chỉnh lại 2 thông số trên**.

Ngoài ra thì các bác có thể **lưu Session ở một folder riêng** không cho bác ve chai nhìn ngó tới. Cách này cũng khá đơn giản, lại không phải chỉnh lại `php.ini` nên các bác tự search Google hay StackOverFlow đi nha

# Tại sao hôm nay mình lại nói đến vấn đề này?

Tại vì khi code con bot lấy giữ liệu thời khoá biểu của truờng mình thì vấp phải vấn đề thời gian sống của Session khiến cho con bot của mình hôm qua chạy mà hôm nay nó nghỉ. Cho dù mình có chỉnh lại *System Time* nhưng nó vẫn đình công.

Và với lượng truy cập của hơn 5k sinh viên bách khoa thì 1% cũng khiến cho Session không thế sống quá thọ đuợc

![screen-shot-2016-09-29-at-11-26-01-pm](http://cuthanh.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-29-at-11.26.01-PM-1024x642.png)

*Quả hình để cho các bác khỏi nói em chém gió ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png)*

# Làm sao để vuợt qua được

Thì nó chết thì kiếm con khác thôi. Ez, huh? Nghĩa là nếu Session cũ của mình chết, mình sẽ xin lại con session mới. Nếu làm như vậy thì cứ sau 24 phút thì mình lại phải “mồi” lại captcha một lần. Mà captcha lại phải nguời nhập, cũng chả khá hơn bao nhiêu nhỉ? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)

Theo các bạn, hướng đi nào để mình có thể tiếp tục viết app xem thời khoá biểu đây? Comment bên duới nhé.

Mình đã có cách riêng của mình rồi những chưa chắc là tốt ưu nhất, có gì mình sẽ chia sẻ ở bài viết sau nhé. Thân ái!