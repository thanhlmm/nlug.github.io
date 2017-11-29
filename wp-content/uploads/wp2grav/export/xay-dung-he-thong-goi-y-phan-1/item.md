---
# http://learn.getgrav.org/content/headers
title: Xây dựng hệ thống &#8220;Gợi ý&#8230;&#8221; (Phần 1)
slug: xay-dung-he-thong-goi-y-phan-1
# menu: Xây dựng hệ thống &#8220;Gợi ý&#8230;&#8221; (Phần 1)
date: 06-08-2016
published: true
publish_date: 06-08-2016
# unpublish_date: 06-08-2016
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
    tag: []
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

Chào các bác. Hôm nay mình sẽ việt một bài mang tính chuyên môn một tí nha, các bác ủng hộ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png)

# Demo

<http://demo.cuthanh.com/professorx-client/>

# Giới thiệu

Hệ thống, hay là chức năng gợi ý – mình cũng chả biết nói làm sao nữa. Đại loại là như vầy nè. Các bác sử dụng Facebook nó sẽ gợi ý kết bạn cho các bác. Đảm bảo lúc này các bác đang nghĩ “*mẹ thằng facebook này ăn gì khôn thế, sao biết mình quen thằng này mà giới thiệu ta* ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png)“. Hay như ngay dưới bài viết này, các bác sẽ thấy mục bài viết có liên quan, cái này máy tính nó tự tìm đó, không phải random mà cũng không phải em phải tự tìm bài liên quan chèn vào dưới cho các bác đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png), lười lắm.

Đấy là **hệ thống gợi ý (Suggest system/service).** Về ứng dụng thực tế thì rất là cao rồi, nó có thể gợi ý cho các bác nên xem film gì, gợi ý cho khách hàng xem có muốn mua sản phầm này không,… Mới đầu em nhìn thấy thì nghĩ rằng “*mấy cái này chắc khó lắm, mấy thằng to to đầu trâu mặt ngựa mới làm được thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)*“. Thực ra thì nó cũng không khó đến như vậy đâu, nên hôm nay mình sẽ hướng dẫn xây dựng một hệ thống gợi ý đơn giản.

*P/S: Thực tế là mình vừa đọc tại liệu vừa viết lại cho các bác đấy, chứ em cũng chưa xây dựng thành công đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png).*

# Dự án (Project)

Mình sẽ bắt đầu với bước khó nhất nhé – đặt tên dự án ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png). Sau một hồi đắn đo, uống hết ly cafe của bố mình pha thì mình quyết định đặt tên project này là **Professor x**.

## Cốt truyện

Cốt truyện là giáo sư x, đang trên con đường tập hợp các dị nhân (x-men) lại để tạo đội đi quẩy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png). Tuy nhiên thì mỗi thằng có một tích cách khác nhau như Wolverine chỉ thích chơi với Jean (Phoenix) thôi, bác X và cả Mangeto thì đều muốn “tâm sự” với Mystique (em xinh đẹp bữa trước mình giới thiệu trong bài [Startup xem film gì](http://cuthanh.com/startup/khoi-nghiep-xem-film-nay-di) đấy),… Công việc của chúng ta là sắp xếp các dị nhân đấy vào ở với nhau, tuy nhiên kinh tế thì khó khăn, đất ở Q7 mắc quá nên bác X chỉ thuê được nhà bé bé thôi. Người thì ít mà đít thì đông ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png). Phải làm sao đây???

![Review-phim-X-men-Apocalypse-2](http://cuthanh.com/wp-content/uploads/2016/08/Review-phim-X-men-Apocalypse-2.jpg)

Bác X quyết định sẽ xắp xếp các dị nhân có thể “hợp hợp” nhau lại ở chung với nhau. Và bạn là người bác X nhờ vả. Nếu các bác xếp sida thì nó đánh nhau banh trường thì coi như thế giới diệt vòng. Vận mệnh nằm trong tay các bác đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)

## Suit Up and Save the world!





## Ngôn ngữ

Trong dự án này thì mình sẽ sử dụng ngôn ngữ `Nodejs`, framework `Express` nhé, có thể có tí `Coffeescript` nữa cho tỉnh táo các bác ạ. Đương nhiên là không thể thiếu bộ đôi `HTML`, `CSS` rồi.

Quản lý dự án thì đương nhiên là dùng git rồi, cho khỏi phải [hối hận](http://cuthanh.com/life/dung-git-di-khong-hoi-han-suot-doi-day)

## Tạo lập dự án

Open CMDER. Tạo folder **projectx**

 
    <pre class="prettyprint">mkdir projectx

Hoàn toàn chạy được lệnh linux cơ bản trên Windows nếu các bác sài[ Cmder mà em đã giới thiệu trước đây nhé](http://cuthanh.com/tools/cmder-dem-unix-bash-len-windows). Okey giờ khởi tạo git và npm thôi

 
    <pre class="prettyprint">cd projectx
    git init
    npm init

Các bác nhập các thông tin mà nó hỏi rồi cứ Enter thôi. Đây là của em

![projectx](http://cuthanh.com/wp-content/uploads/2016/08/projectx.png)

Vậy là xong phần thiết lập cơ bản. Bài hôm nay kết thúc nhé. Em đói quá, hẹn các bác ở phần sau vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)

Phần 2: <http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-2>