---
# http://learn.getgrav.org/content/headers
title: &#8220;Hack&#8221; hệ thống captcha của trường
slug: hack-thong-captcha-cua-truong
# menu: &#8220;Hack&#8221; hệ thống captcha của trường
date: 12-09-2016
published: true
publish_date: 12-09-2016
# unpublish_date: 12-09-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Technology]
    tag: [bách khoa,bypass,captcha,hack,bách khoa,bypass,captcha,hack]
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

Chào các thím, lâu rồi không viết bài tại em cũng chả biết viết gì cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4469a261d2724f2aa0ea4f8640469411.png)

Hôm nay em sẽ viết bài để vuợt qua hệ thống captcha của truờng mình, cụ thể là để xem thời khoá biểu (mấy thằng còn lại cũng y chang)

“Linh” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png): http://aao.hcmut.edu.vn/image/data/Tra\_cuu/xem\_tkb

![Screen Shot 2016-09-12 at 9.06.57 PM](http://cuthanh.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-12-at-9.06.57-PM.png)

*Các bác thấy cái số 94 không, nó đó, nó gọi là captcha đó ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png)*

Thuờng những cái hình captcha như vậy xuất hiện để chống bot request quá nhiều gây thiệt hại tài nguyên hệ thống. Thử tuởng tuợng các bác tạo trang đăng kí thành viên, không may trong quá trình sống các bác lại đắc tội với một số nguời, thế là nguời ta viết ra con bot vào đăng kí một lúc cả trăm acc khiến data của các bác như bãi rác thì sao? Thế là nguời ta nghĩ ra captcha tại vì bot thời bây giờ không biết trong hình vẽ cái gì, chỉ có mặt nguời thôi. Tuỳ nhiên càng phát triển thì tụi bot nó càng khôn, nên nó cũng có khả năng đọc xem trong hình nó ghi cái khỉ gì – ví dụ như [Dịch vụ Vision của Microsoft mình đã giời thiệu truớc đây](http://cuthanh.com/service/gioi-thieu-microsoft-cognitive-services-ai-trong-tam-tay). Vậy là nguời ta lại quyết định thêm một đống hoạ tiết lằng nhằng để cho máy nó không đọc đuợc, còn nguời dùng thì vừa type vừa… chửi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png)

Truờng mình hồi truớc không có sử dụng captcha tuy nhiên sau một thời gian hình như do nhiều bạn viết bot để lấy điểm của tất cả sinh viên, ứng dụng xem điểm, thời khoá biểu,… khiến cho truờng ghét, bảo thằng dev “*tụi mày thêm tính năng captcha vào cho bố ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png), hết tiền trả server rồi!*“. Thế là mấy cái app xem tkb, xem điểm ngỏm

Đấy là mục đích mà nguời ta nghĩ ra captcha, cái này mọi người thấy rất thường xuyên nhưng theo mình thấy thì có ít nguời biết công dụng của nó quá, đành ra nó toàn bị chửi không (Đặc biệt là mẹ mình ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)) . Trong khảo sát nào đó mình nghe nói loading, và captcha là những thứ mà cư dân mạng ghét nhất.

Mình thì cũng không ưa nó mấy, nên quyết định vuợt mặt qua captcha của truờng. Nói đơn giản là mình có thể lấy dữ liệu thời khoá biểu mà không cần phải nhập captcha nữa. Mình định sẽ viết con một con bot hay gì đó có thể lấy giữ liệu thời khoá biểu của sinh viên có MSSV xyz về, lấy thông tin đó để áp dụng vào app thời khoá biểu (để học React-Native luôn). Tuơng lai là vậy, vấn đề khó nhất bây giờ là vượt qua được thằng captcha này đã.

# Cơ chế hoạt động của captcha

Đầu tiên, captcha là một hình ảnh, trong đó sẽ có một vài kĩ tự kèm thêm vài hoạ tiết cho khó đọc. Sẽ có một ô input bên cạnh để nguời dùng nhập vào chuỗi kí tự trong hình. Đúng thì qua, không đúng thì nhập lại đi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png).

![capcha-la-gi](http://cuthanh.com/wp-content/uploads/2016/09/capcha-la-gi-1024x426.png)

Mình sẽ nói qua cơ chế hoạt động của captcha

![captcha](http://cuthanh.com/wp-content/uploads/2016/09/captcha-1024x636.jpg)

 

**Captcha** là một file trên server, viết theo ngôn ngữ gì thì tùy sở thích của thằng dev theo châm ngôn

Mình thích ngôn ngữ gì thì mình code cái đấy thôi!



File **captcha** này có nhiệm vụ là sinh ra một chuỗi random cho các bác, đồng thời lưu lại chuỗi đấy trên server. Thuờng thì webserver đều có hỗ trợ session/cookie – thằng này có nhiệm vụ lưu lại thông tin của từng user truy cập theo nó muốn. Ví dụ như các bác đăng nhập thì webserver sẽ lưu lại thông tin của các bác, để mỗi lần request sau nó biết đó là các bác, đừng có bắt tao đăng nhập nữa, khổ vl ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png). Sau khi sinh ra đuợc một chuỗi random, file **captcha** đấy sẽ lưu lại **captcha** **code** trên session, đồng thời, nó sinh ra một bức hình trong đó có chứa các kí tự random (của mình là *ya27a*) trả về trình duyệt cho thằng user nhìn thấy.

Tiếp theo user sẽ nhìn hình, nhập **captcha** đấy vào input, gửi về server kèm theo vài thông tin cần thiết cho request. Như trên hình em muốn xem thời khoá biểu thì sẽ phải gửi cả mssv của em nữa. Sau khi gửi về server, nó sẽ so sánh xem chuỗi captcha có giống nhau không, giống thì trả về thời khoá biểu, không thì các bác đi khám mắt đi nha![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png).

# Làm sao để “hack”

Đâu tiên phải xem xét đến cơ chế trình duyệt tải về một trang web cho các bác nhé

![request](http://cuthanh.com/wp-content/uploads/2016/09/request.jpg)

Bất kì khi các bác truy cập một trang web nào, server đầu tiên sẽ gửi trả về file `html`. Tiếp theo, trình duyệt sẽ đọc nội dung trong file `html` đấy, nó thấy là “à trong đây mày con cần những file như `style.css`, `app.js`,.. nữa” thế là nó tiếp tục gửi request lên server để lấy những thằng còn thiếu về. Và đuơng nhiên sẽ lấy luôn bức hình **captcha** về cho các bác điền vào nữa chứ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png).

Ví dụ link hình captcha của truờng mình: [http://aao.hcmut.edu.vn/image/data/Tra\_cuu/phpcaptcha/captcha.php?rand=1823730716](http://aao.hcmut.edu.vn/image/data/Tra_cuu/phpcaptcha/captcha.php?rand=1823730716)

![](http://aao.hcmut.edu.vn/image/data/Tra_cuu/phpcaptcha/captcha.php) Demo trực tiếp luôn, mỗi lần các bác `F5` sẽ thấy một kĩ tự khác nhau.

Trở lại với ví dụ thực tế, chúng ta đâu tiền sẽ request html cho url [http://aao.hcmut.edu.vn/image/data/Tra\_cuu/xem\_tkb](http://aao.hcmut.edu.vn/image/data/Tra_cuu/xem_tkb). Server trả về `html`, trình duyệt đọc, request tiếp những thành phần còn thiếu, xong!

Thử tuởng tuợng chúng ta** chặn không cho trình duyệt request tới file captcha** thì sao nhỉ? File captcha sẽ không đuợc thực thi, lúc đó server sẽ không lưu mã captcha mới nữa, nó chỉ nhớ cái gần nhất thôi, lần sau các bác chỉ việc nhập mã captcha cũ mà vẫn có thể lấy nội dung về.

![request2](http://cuthanh.com/wp-content/uploads/2016/09/request2.jpg)

# Test thử trên trình duyệt nhé.

- Đầu tiên các bác truy cập vào [http://aao.hcmut.edu.vn/image/data/Tra\_cuu/xem\_tkb](http://aao.hcmut.edu.vn/image/data/Tra_cuu/xem_tkb) ở tab 1
- Sau đó lấy link hình captcha, mở ở tab khác – gọi tạm là tab 2 (link là [http://aao.hcmut.edu.vn/image/data/Tra\_cuu/phpcaptcha/captcha.php?rand=1823730716](http://aao.hcmut.edu.vn/image/data/Tra_cuu/phpcaptcha/captcha.php?rand=1823730716)) cái số đằng sau các bác chưa cần quan tâm tới, nó liên quan tới cơ chế cache của trình duyệt.
- Lúc này các bác sẽ thấy một mã captcha mới, khác với tab 1.
- Bây giờ nhập mã captcha ở tab 2 vào tab 1. Nhập các các thông tin còn lại. *VD của em 1413559 đi*. Vẫn có kết quả thời khoá biểu trả về chứ? Nếu đuợc thì chắc các bác đã hiểu sơ sơ cơ chế của nó rồi đấy.
- Muốn hack đuợc thì chỉ cần chặn không cho load url captcha là [http://aao.hcmut.edu.vn/image/data/Tra\_cuu/phpcaptcha/captcha.php](http://aao.hcmut.edu.vn/image/data/Tra_cuu/phpcaptcha/captcha.php) À, nhớ truớc khi chặn các bác load 1 lần cuối cùng (chắc chắn là lần cuối cùng thấy nó xuất hiện nhé) lưu lại captcha đó.
- Sau đó mỗi lần yêu cầu nhập captcha các bác cữ nhập mã đã lưu ở trên là đuợc.

# Nhận xét

Chả tiện lợi hơn đuợc bao nhiêu, còn phải mò mẫm đủ thứ mới có thể chặn đuợc url captcha mà vẫn truy cập đuợc vào link xem thời khoá biểu (vì nó cùng domain mà ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)) Nói chung là mệt hơn, tự gõ captcha còn nhanh hơn.

Đúng, nhưng nếu mình xây dựng một con bot sẽ hỗ trợ tự động request lên server và có thể vuợt qua đuợc captcha thì mình có thể lấy thời khoá biểu hàng loạt, trả về cho user. Việc bypass vụ nhập captcha khiến mình có thể dễ dàng xây dựng một con bot clawer. Như của mình sẽ xây dựng App xem thời khoá biểu trên điện thoại (dự định thôi). Đuơng nhiên là nguời dụng chỉ cần nhập mssv 1 lần và không phải nhập captcha rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)

# Làm sao để fix?

Việc code sơ hở như vậy mình thấy khá là nhiều do dev chưa nghĩ tới truờng hợp như vậy. Muốn fix? đơn giản thôi. **Mỗi lần request tới url xem tkb ([http://aao.hcmut.edu.vn/image/data/Tra\_cuu/xem\_tkb](http://aao.hcmut.edu.vn/image/data/Tra_cuu/xem_tkb)) sẽ tự random ra mã captcha lưu lại trên server**. Sau khi web load thì file captcha sẽ ghi đè lại giá trị captcha\_code trên server. Nếu nguời dụng chặn file captcha thì server đã lưu một chuội random khác và xác xuất nguời dùng cũng random trúng là cực kì cực kì nhỏ.

Mình không gọi cái này là hack nhưng rất nhiều nguời thuờng có khái niệm hack rất rộng: đoán pass facebook -> hack, cheat game -> hack, seed comment, like facebook -> hack ,… ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

Hack – gain unauthorized access to (data in a computer): hacking private information from computers.Từ điển trên MacOS



Mình gọi là **bypass** – tìm một con đuờng khác mà vẫn giúp bạn về tới đích.

# Nói thêm

Sắp tới có lẽ mình sẽ vừa học React-native để làm app xem thời khoá biểu nên sẽ viết bài về vấn đề này. Đương nhiên sẽ có phần viết bot để áp dụng những gì hôm nay chúng ta tìm hiểu để lấy thông data của truờng rồi. Cảm ơn các bạn đã đọc bài.

 