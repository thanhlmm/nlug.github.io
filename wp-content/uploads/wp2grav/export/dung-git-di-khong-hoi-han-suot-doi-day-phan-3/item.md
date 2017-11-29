---
# http://learn.getgrav.org/content/headers
title: Dùng Git đi không hối hận suốt đời đấy (Phần 3)
slug: dung-git-di-khong-hoi-han-suot-doi-day-phan-3
# menu: Dùng Git đi không hối hận suốt đời đấy (Phần 3)
date: 31-07-2016
published: true
publish_date: 31-07-2016
# unpublish_date: 31-07-2016
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
    tag: [commit,conflict,git,khái niệm,merge,repository,commit,conflict,git,khái niệm,merge,repository]
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

**Phần 2**: <http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-2>

Hôm nay mình sẽ nói về các khái niệm cơ bản của git

# Repository

Một **repository** (còn hay gọi là **repo** cho nhanh) bao gồm tất cả cả những **commit**, **branch** nữa (mình sẽ giải thích bên dưới). Người ta chế vậy ra nghe cho nó màu.

Vậy công thức của một repo

## Repository = tất cả các commit + branch + thông tin về repo (thằng dev, tên project,…)

Và **repo** có 2 loại

- **Remote repository:** Cái này repo ở trên mây đấy
- **Local repository**: Cái này là repo chỉ lưu ở máy của các bác thôi.

Cả local hay remote repo đều có thể kết nối với nhau. Như *Dropbox* hay *Google Drive* đấy. Thay đổi có thể đổng bộ với nhau.

# Commit

**Commit** là một mốc trạng thái của các file source code của các bác. Nếu các bác nhớ tới phần 1 thì nó tương tự như một folder trong thư mục backup của em. Vậy là một commit sẽ bao gồm

- Thời gian commit.
- Ghi chú về commit đấy.
- “Tác giả” tạo ra cái commit này (Đây là lý do phải thiết lập Tên/Mail mà mĩnh đã nói ở [phần 2](http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-2))
- Thông tin về sự thay đổi của lần commit này so với lần commit trước

Các commit này, được đặt tên bởi 40 ký tự alphabet (mã md5 thì phải) không trùng nhau được băm từ thông tin commit. Bằng việc đặt tên cho commit, có thể chỉ định commit nào từ trong repository.

Ví dụ: Lần commit đầu tiên file `hello.php` của các bác là

 
    <pre class="prettyprint"><?php
    echo 'Hello cuthanh.com';
    ?>

Bác thấy code này sida quá, vào thêm dòng nữa để `hello.php` trở thành

 
    <pre class="prettyprint"><?php
    echo 'Hello cuthanh.com';
    echo ' - blog sida nhất hệ mặt trời';
    ?>

Okey bây giờ các bác commit thì thông tin trong lần commit tiếp theo sẽ chỉ lưu dạng như vầy nè “*Thằng dev nó thêm `echo ' - blog sida nhất hệ mặt trời';` vào sau line 2*“” Đấy nó chỉ ghi lại những gì thay đổi thôi, không lưu toàn bộ đâu, tốn dung lượng méo làm được gì cả. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png)

# Nhánh (Branch)

Tưởng tượng như vầy nhé các bác đang code tính năng **login** cho project của mình, tự nhiên nay vướng đống bug chả login qua facebook được mà méo hiểu tại sao. Thôi code tính năng **search** vậy. Các bác sẽ kệ mẹ file `login.php` đấy. Tạo file `search.php` rồi quẩy thôi. Nhẩy vào code mới biết nó cũng đầy bug như **login** vậy, mẹ tưởng dễ mà sao rốt tung lên thế! Quay lại code `login.php` tiếp cho dễ vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png). Bây giờ mở file `login.php` các bác lại phải hình dung xem bữa mình bỏ dở ở đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4469a261d2724f2aa0ea4f8640469411.png), rồi các bác lại đẻ ra thêm cái bug mới vì hồi bữa code tính năng search chỉ dành cho thằng nào đã login rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png). Định mệnh, đáng sợ chưa. Nếu chưa dùng git mình chắc chắn các bác sẽ vướng phải vấn để như mình nêu ở trên.  
**Branch** sinh ra để giải quyết vấn đề sida đấy.

Ví dụ mình áp dụng branch vào giải quyết vấn đề trên nhé.

![Git branch - Page 1](http://cuthanh.com/wp-content/uploads/2016/07/Git-branch-Page-1-1-1024x295.png)

Sẽ luôn có một nhánh chính gọi là **master** nhé. Nếu các bác muốn code tính năng **Login**? Tạo một branch từ nhánh chính **master** tên là **login** chẳng hạn. Bây giờ các bác cứ code và commit bình thương thôi.

- **Cục tròn tròn** biểu diễn mỗi commit
- **Màu vàng** nghĩa là code chưa chạy thật sự ổn định, hoặc đang còn code dở
- **Màu xang** nghĩa là tính năng bạn đang code ổn định rồi đấy.

Giả dụ bạn code **login** ở cục L2 rồi nhé.

Bây giờ đang code ở branch **login** đúng không, buồn quá, nhảy qua code tính năng **search** nhé. Trở về branch chính (**master**) nào. Bây giờ bạn đang ở cục M3. Tạo branch **search** từ **master**. Giờ đây bạn đang nằm ở cục S1.

Mẹ thằng **search** này code cũng khó vl, thôi trở về **login** tiếp vậy. Các bác sẽ nhảy lại vào cục L2 code tiếp, commit… tới được cục L3.

Okey bây giờ gần xong **login** rồi. Thiếu thằng **search** nữa, quay lại S1 “*chịch*” nó thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png). Bla… Bla…. Xong! Được cục S2. Bây giờ tính năng **search**, **login** đã hoàn thành. Nó vẫn đang là tách rời nhau, chứ chưa có login rồi mới được search đâu. Bây giờ các bác phải trộn (**Merge**) branch **search** vào vao branch **login**. Sửa lại xíu xíu, thêm xíu xíu code là xong, được cục L4.

Bây giờ tính năng **Login, Search** ngon lành rồi đấy. Trộn (**Merge**) nó vào nhánh chính (**master**) thôi.

Problem slove! ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

# Trộn (merge)

Trong quá trình phá triện code nêu trên. Có thể 2 tính năng login, search đều liên quan tới file `config.php` chẳng hạn. Mỗi tính năng lại sửa ở file `config.php` mỗi chỗ khác nhau. Bây giờ merge sẽ trộn tất cả thay đổi của 2 tính năng thành một file thống nhất.

Ví dụ:

Ở branch **login**, bạn sửa file `config.php` ở** line 15.**

Branch **search**, bạn sửa ở **line 18.**

Sau khi **merge** sẽ có được file `config.php` bao gồm thay đổi ở cả line 15 và line 18. Bá đạo chưa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)

Ủa. nếu cả 2 tính năng đều sửa ở line 69 thì sao. Thì 69 chứ sao, mỗi thằng một đầu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png). Em đùa đấy, nếu tính huống trên sảy ra, sẽ sảy ra tính trạng xung đột gọi là **Conflict**.

# Conflict

![meme-merge](http://cuthanh.com/wp-content/uploads/2016/07/meme-merge.jpg)

Git không thể có đủ trí lực như siêu nhân của các bác nên nó không thể tự quyết định nên giữ lại của **branch** nào, vứt đi của thằng nào hay là giữ lại cả 2. Vì vậy các bác phải tự mình giải quyết xung đột ấy một mình đi, chả có bố con thằng nào giúp đâu. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png)

Code ngu lỗi tại ai?Minh Thành



![conflict](http://cuthanh.com/wp-content/uploads/2016/07/conflict.png)

*Lỗi confilct. Bố không tự merge được. Mày vào mà sửa lại đi*

# Kết

*Okey vậy là xong phần 3 – Các khái niệm cơ bản. Phần sau mình sẽ giới thiệu các lệnh thao tác với các khái niệm mà mình đã nêu trong bài viết này. Cảm ơn các bạn đã ghé thăm. Nếu hay nhớ share cho mọi người để nó còn máu mà viết tiếp nhé.*

**Phần 4**: <http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-4>