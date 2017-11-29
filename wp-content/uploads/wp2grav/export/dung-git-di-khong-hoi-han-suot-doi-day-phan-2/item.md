---
# http://learn.getgrav.org/content/headers
title: Dùng Git đi không hối hận suốt đời đấy (Phần 2)
slug: dung-git-di-khong-hoi-han-suot-doi-day-phan-2
# menu: Dùng Git đi không hối hận suốt đời đấy (Phần 2)
date: 28-07-2016
published: true
publish_date: 28-07-2016
# unpublish_date: 28-07-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Service]
    tag: [cài đặt git,giới thiệu,git,github,cài đặt git,giới thiệu,git,github]
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

**Phần 1**: <http://cuthanh.com/life/dung-git-di-khong-hoi-han-suot-doi-day>

Đọc câu truyện xàm lông của em bữa trước chắc các bác đang chửi thầm “*Thằng điên, bố vào đây để xem lý do tại sao phải dùng Git cơ mà* ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png)“. Câu chuyện bữa trước của mình hoàn toàn có liên quan đấy!.

# Giới thiệu

Nếu đang đọc đến đây, không biết mọi người nếu đã từng là coder có phải vướng vào những rắc rối như trong câu chuyện của mình không? Mình tin chắc là có, rất nhiều là đằng khác. Trừ khi các bác siêu nhân hoặc code cái gì đấy đơn giản kiểu

Hello WorldWorld's 1st lession



Vâng, **Git** sinh ra để giải quyết tất cả các vấn đề trên, thâm chí là cả những vấn đề mà em còn chưa gặp phải nữa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png). Kiểu như cả team làm chung một bộ source code (trước giờ em toàn solo nên chưa gặp phải, nhưng làm team thì chắc chắn có đấy).

Các chức năng chính của **Git** (Các vấn đề mà git giúp em giải quyết)

- Theo dõi (*watch*) thư mục làm việc, tìm ra những thay đổi trong bộ source code của bạn
- Lưu lại những thay đổi (*commit*) (Đương nhiên là có cho phép ghi chú xem thay đổi ấy là gì)
- Muốn trở lại ở lần thay đổi
- Phân nhánh(*branch*) bộ source code,
- Gắn nhãn (*tag*), *version*
- Upload, quản lý source code các bác lên mấy. Gần như không giới hạn nếu như code của các bác là Open Source
- Trộn code (*merge*) của nhiều người/branch vào thành một bộ source code hoàn chỉnh. Cực kì có ý nghĩa khi code theo team.

Đảm bảo, sau khi dùng **git** thì chắc chắn các bác không phải gặp những trường hợp dở khóc dở cười như em nữa.

# Git vs Github

Mình viết bài này cho những người mới tìm hiểu **Git**, hoặc code rất bá nhưng chưa một lần sử dụng Git bao giờ nên nếu đọc toàn bộ bài việt của mình tới đấy chắc có lẽ các bác ngợ ngợ sao thằng này cứ nói **Git** nhỉ, phải là **Github** chứ. Thực ra 2 thằng này là khác nhau đấy, và cái các bác cần nhất là **Git** rồi mới tới **Github**.

![gitvsgithub](http://cuthanh.com/wp-content/uploads/2016/07/gitvsgithub.png)

## Git

Như đã nói ở trên, **Git** là công cụ cài đặt vào trong máy tính của các bác. Giúp các bác **quản lý bộ source code** triệu $ của mình. **Giải quyết những vấn đề cực kì bullshit** mà toàn bộ lập trình viên trên thế giới gặp phải

## Github

Mình nói một ví dụ nhỏ cho các bác dễ hiểu nhé.

Git giống như ổ cứng (*Hard Drive*) của các bác vậy, các bác sao lưu Jav, anime,… là gì thì tùy các bác và bác hoàn toàn sở hữu nó, chả có thằng nào đụng đến ổ cứng của các bác được nếu không được bác cho phép hoặc là Hacker ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png). Còn **Github** thì như là [Dropbox ](https://www.dropbox.com)vậy, nó là “mây”, các bác hoàn toàn có thể đưa những dữ liệu của mình lên”mây”, có thể chia sẻ với nhau qua “mây” được (Chả lẽ các bác tháo ổ cứng ra truyền tay nhau ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png)). Và cũng giống như [Dropbox ](https://www.dropbox.com)vậy, có rất nhiều dịch vụ tương đương với [Github ](https://github.com)như [Bitbucket](https://bitbucket.org), [Sourceforge](https://sourceforge.net),… Hoặc các bác cũng có thể tự tạo server riêng tự sài cũng được cho nó ngầu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png). Và đương nhiên miễn phí “mây” cho các bác thì hít thở mà sống à. Vì vậy mỗi dịch vụ sẽ có cách tính phí khác nhau. Nhưng mà hầu hết đều free nếu source code của các bác là **Open Source**. **Github** nối tiếng vì nó có rất nhiều người dúng, áp đảo gần hết các thằng còn lại, và các bác cũng hay vào dây download code của người ta nên dễ dẫn đến nhầm lẫn giữa **Git** và **Github**.

 

![githubprice](http://cuthanh.com/wp-content/uploads/2016/07/githubprice.png)

*Bảng giá của Github. Free cho Open source, tính tiền cho “Private Repositories”*

# Cài đặt

Okey vậy là mường tượng được **Git**, **Github** là gì rồi chứ. Giờ cài đặt thử nhé. Chưa hiểu thì đọc tiếp các phần sau cũng hiểu ah.

## Windows

Vào đây download về <http://git-scm.com/download/win>

Next, Next,… Finish gì đấy. Cứ để mặc định cũng được rồi.

Lưu ý là nếu các bạn đã đọc bài viết về [CMDER – Đem \*unix bash lên Windows like a Boss](http://cuthanh.com/tools/cmder-dem-unix-bash-len-windows) rồi thì nên cài **Git** trước rồi mới cài **Cmder** nhé. Mình chưa thử cách ngược lại, lười gỡ ra cài lại lắm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png).

## Linux

 
    <pre class="prettyprint">sudo apt-get install git

hoặc

 
    <pre class="prettyprint">yum install git

## MacOS/OSX

Vào đây nghiên cứu <http://git-scm.com/download/mac>. Em không có Mac nên không biết đâu, lập trình viên nghèo ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)

# Thiết lập cá nhân

Okey bây giờ là cắm cờ đánh dấu chủ quyền nào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png). Việc làm này giúp mỗi repo mà các bác tạo ra sẽ lưu tên và email của các bác ở trong. “*Thằng nào có sử dụng code của tao thì nhớ tới thằng viết ra đấy nhé!*”

Mở Cmder lên, hoặc Bash nếu các bác sài Linux hay MacOS

 
    <pre class="prettyprint">git config --global user.name "Minh Thanh"
    git config --global user.email "nlug27@gmail.com"

Thiết lập xong rồi đấy.

 

Trong bài tiếp theo mình sẽ nói với các bạn về các khái niệm cơ bản của **Git** và **cách áp dụng Git** vào project của mình.

**Phần 3**: <http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-3>