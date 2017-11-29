---
# http://learn.getgrav.org/content/headers
title: Xây dựng hệ thống “Gợi ý…” (Phần 2)
slug: xay-dung-thong-goi-y-phan-2
# menu: Xây dựng hệ thống “Gợi ý…” (Phần 2)
date: 07-08-2016
published: true
publish_date: 07-08-2016
# unpublish_date: 07-08-2016
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
    tag: [công thức,gợi ý,hệ thống,thuật toán,xây dựng,công thức,gợi ý,hệ thống,thuật toán,xây dựng]
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

Tiếp tục loạt bài nào…

Phần 1: <http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1>

# Demo

<http://demo.cuthanh.com/professorx-client/>

# Ý tưởng

Đâu tiên phải xem ý tưởng mình gợi ý phòng cho giao sư như thế nào đã. Với hệ thống gợi ý như thế này, thì đâu tiên phải xem những thằng nào giống giống nhau đã.

**Ví dụ**

*Giáo sư X thích Mystique và bác Sói.*

*Jean Gray cũng thích Mystique và Sói, ngoài ra, còn cặp với Scott nữa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)*

Theo như tính chất bắc cầu thì… tính cách của giáo sư X và Jean Gray là khá giống nhau nên suy ra Giáo sư X cũng khá thích anh Scott đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aa9d71a4e03ce5ef22cd34781a848aae.png)

**Ví dụ 2**

*Việc gợi ý này cũng khá giống hệ thống gợi ý kết bạn trên facebook*

Bạn và thằng A có khá nhiều bạn chung. Nên facebook sẽ suy nghĩ chắc mấy thằng thằng A quen thì có lẽ bạn cũng quen. Tuy nhiên hệ thống gợi ý của nó cũng có nhiều yếu tố tác động khác như *nơi ở, tuổi tác, giới tính,…* nữa.

Vậy ý tưởng cho hệ thống gợi ý mình muốn nói là: Nó sẽ tìm xem những thằng nào có hành vi, tính cách giống bạn nhất, sau đó sẽ lấy sự khác biệt giữa 2 người rồi gợi ý cho bạn.

# Thuật toán

Có ý tưởng rồi, bây giờ phải truyền đạt cho máy tính đã, nó không khôn tới mức bạn nói lại ý tưởng là nó hiểu được đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3d4972d841d550c8b185c81dca71230b.png). Vì vậy phải hiện thực lại mô hình của chúng ta cho máy tính hiểu. Em có học môn này trên trường được gọi là Mô hình hóa toán học, thực sự thì em đi học, qua môn cũng chưa thấm nhuần được tí kiến thức nào cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png).

![batmanalogorithm](http://cuthanh.com/wp-content/uploads/2016/08/batmanalogorithm.jpg)

*Quả hình Batman nhằm mục đích gây war*

 

Ta sẽ nói đến **toán tập hợp (Sets)** nhé. Cái này học từ lớp 6 rồi.

Gọi tập hợp những người hợp tính với người thứ 1 là `U1`, người thứ 2 là `U2`

**Ví dụ**

*Người thứ 1 là Bác X. Suy ra `U1 = {mystique, sói}`*

*Người thứ 2 là Jean. Suy ra `U2 = {mystique, sói, scott}`*

Với kiến thức lớp 6, ta có:

Những người cả U1 và U2 đều thích sẽ là `U1 ∩ U2`

Tất cả những người cả 2 đều thích sẽ là `U1 ∪ U2`

**Ví dụ**

*`U1 ∩ U2 = {mystique, sói}`*

*`U1 ∪ U2 = {mystique, sói, scott}`*

Từ đó ta có công thức tính xem **mức độ giống nhau của `U1` và `U2`** sẽ là

`|U1 ∩ U2| / |U1 ∪ U2|`

Nhìn công thức trên thì nó sẽ chạy từ 0 đến 1. Nếu giá trị là 1 thì `U1` và `U2` hoàn toàn có sở thích giống nhau. Ngược lại nếu giá trị bằng 0 thì chắc… 2 thằng này không thể chung sống với nhau được ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png). BTW, công thức này được biết tới với tên gọi là “*coefficient de communauté*” của bác Paul Jaccard, không phải của em đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png).

**Ví dụ**

*Mức độ thích nhau của Bác X và Jean sẽ là: `2 / 3 = 0.6666666666666666666666666666666666666666666666666666...` ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)*

Tới đây chắc các bác cũng hình dung chúng ta sẽ  có** công thức gợi ý **áp dùng cho bác X là

`U2 \ U1 = {scott}` (Phép trừ 2 tập hợp đấy các bác)

Theo em thì vậy đã Ok rồi. Chũng ta sẽ gợi ý tất cả những người hợp với Thanh niên X nào đấy theo công thức trên và** sắp xếp theo mức độ giống nhau giữa 2 người.**

Tuy nhiên, trong bài viết mình tham khảo nó có cách tính **mức độ Thanh niên X nào đây có thích Thanh niên K** nào không theo công thức

`P(X, K) = Z / M`

Trong đó `P(X, K)` là công thức tính mức điểm Thanh niên X có thích Thanh niên K. **`Z`** là **tổng điểm giống nhau của X với tất cả mọi người trong đội X-Men cũng “thả tim” thằng K**. **`M`** là **tổng số người thích K trong đội X-Men**. Và tất nhiên, giá trị của `P(X, K)` cũng chạy từ 0 tới 1.

**Ví dụ**

*Tính xem Bác X có hợp với Scott không bằng công thức trên*

*Giả sự có thêm một nhân vật nữa là Storm có `U3 = {sói, scott}`*

*Mức độ giống nhau giữa Bác X và Storm sẽ là *

*`|U1 ∩ U3| / |U1 ∪ U3| = 1/3 = 0,333333333...`*

*Và trong ba nhân vật xét đến ở đây có 2 người thích Scott. Nên `M = 2`*

*`P(bác X, scott) = (0,333 + 0, 666) / 2 = 0.5`*

Em đã nói ở phần 1 là mình vừa đọc tài liệu, vừa xây dựng thử và vừa viết bài cho các bác nên em không biết là cách của bài viết em tham khảo hay cách mà em nhìn thấy được, cái nào tốt hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Nên em sẽ xây dựng theo cả 2 cách đến cuối cùng để xem cái nào tốt hơn nhé!

Link tham khảo: <https://www.toptal.com/algorithms/predicting-likes-inside-a-simple-recommendation-engine>

# Kết luận

Nếu đã hiểu thuật toán thì các bạn muốn xây dựng trên ngôn ngữ nào cũng được nên nếu các học ngôn ngữ khác thì thử làm theo thuật toán này xem sao nhé. Cùng xây dựng thử xem kết quá có giống em không.

Phần 3: [Xây dựng hệ thống “Gợi ý…” (Phần 3)](http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-3)