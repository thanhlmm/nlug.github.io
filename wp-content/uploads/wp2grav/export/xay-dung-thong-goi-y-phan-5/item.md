---
# http://learn.getgrav.org/content/headers
title: Xây dựng hệ thống “Gợi ý…” (Phần 5)
slug: xay-dung-thong-goi-y-phan-5
# menu: Xây dựng hệ thống “Gợi ý…” (Phần 5)
date: 18-08-2016
published: true
publish_date: 18-08-2016
# unpublish_date: 18-08-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Life]
    tag: [big data,gợi ý,thuật toán,tối ưu,xây dựng,big data,gợi ý,thuật toán,tối ưu,xây dựng]
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

Hế looooooooooooo ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

Bài này là phần cuối trong series mình viết sẽ nói về thuật toán, kỹ thuật khi xây dựng một hệ thống gợi ý…

- [Phần 1](http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1)
- [Phần 2](http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-2)
- [Phần 3](http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-3)
- [Phần 4](http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-4)

![scott](http://cuthanh.com/wp-content/uploads/2016/08/scott.jpg)

*Mẹ thằng WordPress sao update xong không thêm Feature Image được ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png)*

# Thuật toán

Không biết các bạn nhận ra một điều gì đấy khác biệt giữa 2 thuật toán mà mình đề suất hôm nọ hay không. Còn mình thì phát hiện ra… cả 2 là 1.

Không tin ư?

Trở lại VD hôm bữa nhé

*`U1 = {mystique, sói}`*

*`U2 = {mystique, sói, scott}`*

*`U3 = {sói, scott}`*

Có 3 Xmen với sở thích nêu trên, mình sẽ tìm gợi ý cho `U1` nhé

Độ giống nhau của

- `U1 và U2 là 2/3`
- `U1 và U3 là 1/3`

Theo thuật toán 1:

`U2` sẽ gợi ý `Scott` cho `U1` với số điểm là `2/3`

`U3` sẽ gợi ý `Scott` cho `U2` với số điểm là `1/3`

Vậy tổng điểm `Scott` nhận được là `1`

Theo thuật toán 2:

Minh nhắc lại công thức xíu

> **Mức độ Thanh niên X nào đây có thích Thanh niên K** nào không theo công thức
> 
> `P(X, K) = Z / M`
> 
> Trong đó `P(X, K)` là công thức tính mức điểm Thanh niên X có thích Thanh niên K. **`Z`** là **tổng điểm giống nhau của X với tất cả mọi người trong đội X-Men cũng “thả tim” thằng K**. **`M`** là **tổng số người thích K trong đội X-Men**. Và tất nhiên, giá trị của `P(X, K)` cũng chạy từ 0 tới 1.

Ta tính được

`Z = 2/3 + 1/3 = 1`

`M = 1 + 1 = 2`

Vậy `P(U1, Scott) = 1/2`

So sánh hai kết quả nhé. Giống nhau số 1 ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a729827d07c2862258711bdba931e289.png). Thần kìa chưa !!! Mình không đùa đâu, nó giống nhau ở số 1 đấy! Thuật toán 1 khác với thuật toán 2 chỉ ở chỗ “Chia cho tổng số người thích K trong đội X-Men”, điều này dẫn tới số điểm của công thức 2 sẽ chỉ chạy từ 0 đến 1. Và 2 công thức là hoàn toàn gần giống nhau, tức là ánh xạ 1 – 1 theo 1 hàm tăng.

Vì vậy cả 2 công thức đều cho kết quả, thứ tự giống nhau. Tuy nhiên mình sẽ sử dụng thuật toán 1 của mình. Tại sao? tại vì thuật toán có lưu lại số điểm giống nhau của U1 với tất cả Xmen, thuật toán 2 chỉ lưu lại điểm gợi ý thôi. Điều đấy có ý nghĩa gì? Đơn giản bởi vì: Nếu bạn và một người lạ mà bạn không biết, cả hai có chỉ số giống nhau khá cao, chúng ta dễ dàng kết luận được 1 điều: Bạn và người lạ đấy có thể “yêu” nhau!

# Tối ưu

Theo như tài liệu mình đọc, và cũng như một bạn góp ý ở Kipalog thì mỗi khi Xmen cập nhật một hành động gì đấy thì update lại tất cả các thông số giống nhau, điểm gợi ý vào Data. Mình vẫn chưa hiểu tại sao lại làm như vậy, không thấy nó tốn thời gian hơn hả nhỉ? Phải tính lại tất cả, xong lưu ngược lài vào DB. Thử nghĩ chúng ta có cả trăm Xmen thì tính tới bao giờ? Data phình chứa cả đống số khó hiểu?  Theo mình thì khi nào cần gợi ý rồi mới tính cho nó nhẹ nhàng. Mình không nói cái nào tốt hơn nhé, mỗi cái sẽ có ưu điểm riêng mà mình chưa tìm thấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png). Các bạn tìm giúp mình xem cái nào ngon hơn nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png).

Nói tiếp tới Big Data,  nếu cả trăm, cả ngàn Xmen thì tính tới bao giờ? Thuật toán tuy đơn giản, nhưng phải chạy vòng vèo trong vòng lặp, array nến chắc chắn sẽ lâu đấy. Tác giả bài viết mình tham khảo có gợi ý là:

Chúng ta chỉ cần tìm gợi ý trong một tập Xmen lân cận thôi. Hoặc một tập mà bạn cảm thấy tối ưu nhất. Đương nhiên, cách tìm được tập tối ưu thì các bạn tự vắt óc suy nghĩ đi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png).

Ngoài ra còn áp dụng các kĩ thuật cache và sử dụng ngôn ngữ khác, theo mình biết Nodejs không tối ưu trong việc tính toán, Golang có thể tốt hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png).

 

# Kết

Công thức suyên suốt series **Xây dựng hệ thống “gợi ý…”** này chỉ là cực kì đơn giản, nhưng nó giúp bạn đặt nền móng về ý tưởng sử dụng toán tập hợp, cách xây dựng một dự án mà theo kinh nghiệm cá nhân mình xây dựng được đưa lên, mong có chút nào giúp ích cho các bạn không chỉ về việc build một Suggest System mà cả cách hoàn thành một sản phẩm.

Từ trên, các bạn có thể mở rộng ra để tối ưu thuật toán của mình và có thể áp dụng được những mô hình khác nhau. Như ảnh hưởng của giới tính, nơi sinh, cung hoàng đạo ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png) chẳng hạn.

Là một lập trình viên, theo mình nghĩ nếu muốn nâng đến tầm “siêu phàm” thì thuật toán và tầm nhìn là tầng cao nhất, gọi đấy là một ngành khoa học chứ không chỉ đơn thuần là code. Nhìn Google, Facebook xem, nếu không có thuật toán sắp xếp kết quả tìm kiếm, sắp xếp New Feed, gợi ý kết bạn thì nó có thể còn người sử dụng đến bây giờ không. Nhìn xem người người đổ xô đi làm SEO mong sao thuật toán nó chấm cho mình điểm cao cao ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)

Cảm ơn các bạn đã chịu khó đọc bài viết của mình. Chào thân ái và quyết thắng ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)