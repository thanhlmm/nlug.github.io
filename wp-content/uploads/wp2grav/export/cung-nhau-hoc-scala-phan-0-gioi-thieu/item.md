---
# http://learn.getgrav.org/content/headers
title: Cùng nhau học Scala. Phần 0: Giới thiệu
slug: cung-nhau-hoc-scala-phan-0-gioi-thieu
# menu: Cùng nhau học Scala. Phần 0: Giới thiệu
date: 21-08-2016
published: true
publish_date: 21-08-2016
# unpublish_date: 21-08-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Scala]
    tag: [giáo trình,giới thiệu,học scala,Scala,tut,giáo trình,giới thiệu,học scala,Scala,tut]
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

# Mở đầu

Chào các bác, tình hình là trên lớp em phải học một môn gọi là “Nguyên lý ngôn ngữ lập trình” và thầy nói là sẽ phải học được Scala nếu không muốn điểm trung bình “nhỏ hơn 5. Em thì cũng chả biết nó vuông dọc làm sao ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3d4972d841d550c8b185c81dca71230b.png) nên hôm nay, viết bài này mong các bác vào học cũng em.

Chương trình của mình học trong 15 tuần, nên thứ 2 mỗi tuần mình sẽ viết  tiếp series này để xem sau 1 tuần, mình biết gì về scala.

Thằng này được thầy mình quảng cáo là “*Ngôn ngữ của tương lai*” tuy nhiên hơi khó nên phải vừa “la”, vừa “ca” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)

# Giới thiệu Scala

**Scala** ra đời năm 2003 đã trở thành một ngôn ngữ server bậc cao được yêu thích trên toàn thế giới. Scala mang sức mạnh của lập trình hướng đối tượng được kế thừa và phát triển từ **Java** cộng với những tính năng của một ngôn ngữ lập trình hàm hiện đại.

Scala là một ngôn ngữ chặt chẽ và rất “professional” khi phát triển những hệ thống cần scale lớn, đồng thời cũng rất “quyến rũ” đối với hacker. Tuy vậy Scala cũng là một ngôn ngữ lớn với những khái niệm tương đối khó. Hi vọng loạt bài viết lần này sẽ điểm qua được những điểm nổi bật để giúp bạn có cái nhìn tổng quan về Scala.

![](https://s3-ap-southeast-1.amazonaws.com/kipalog.com/blob_z6axkjlk8z)

## Tại sao lại chọn Scala ?

> Scala là ngôn ngữ hướng đối tượng chuẩn mực

Tại sao lại chuẩn mực ? Vì Scala kế thừa những tính năng hướng đối tượng từ Java, ngôn ngữ “mainstream” về hướng đối tượng, đồng thời đã tiến hóa thêm một bậc.

- **Mixin** viết bằng **Trait**
- **Structural subtyping**
- **Variance**
- **Self type annotation**
- Kế thừa class kiểu **implicit**
- Xác lập quyền truy cập rõ ràng với từ khóa kiểu`private[this]`
- Tất cả các giá trị có thể sử dụng như là một object.

Nếu bạn có nền tảng tốt về Java thì sẽ thấy quen thuộc trong một số tính năng kể trên. Nhưng hãy đợi phần cụ thể nhé.

> Scala là ngôn ngữ lập trình hàm bậc cao

Có rất nhiều ngôn ngữ lập trình hàm: Lisp, Haskell…. từng tồn tại. Trong số đó Scala thậm chí được xếp là một ngôn ngữ lập trình hàm bậc cao. Có những lý do sau đây

- Hỗ trợ **Case class**
- Hỗ trợ **Pattern matching**
- Class định nghĩa với **implicit parameter**
- **Monad**
- **Higher kinded type**

Mỗi tính năng ở trên còn được phát triển thành nhiều tính năng nhỏ khác. Nếu bạn chưa dùng một ngôn ngữ lập trình hàm bao giờ thì có thể choáng ngợp và chưa bao giờ nghe đến những tính năng trên. Đừng lo, chúng ta sẽ làm quen dần dần!

> Scala tương thích với Java

Một ưu điểm rất lớn của Scala là độ tương thích với Java. Scala có thể gọi và sử dụng bất cứ thư viện Java nào, hơn thế nữa bản thân code Scala khi biên dịch ra cũng là cùng mã bytecode của JVM. Như vậy nguồn thư viện và kiến thức khổng lồ của ngành công nghiệp không bị lãng phí mà có thể tùy ý sử dụng theo chọn lựa.

> Scala ưu việt khi xử lý tính toán song song, phân tán và bất đồng bộ

Scala có bộ thư viện chuẩn [Future](http://www.scala-lang.org/api/current/#scala.concurrent.Future) để làm tính toán bất đồng bộ. Đồng thời Web framework [Play](https://www.playframework.com/) cũng dưa trên bộ thư viện [Netty](http://netty.io/).

[Akka](http://akka.io/) lại là một thư viện rất mạnh nữa để xử lý tính toán phân tán và tính toán song song. Trong Akka tồn tại khái niệm Actor như là hạt nhân cơ bản. giao tiếp với nhau thông qua message.

**Copy nghuyên văn từ **[http://kipalog.com/posts/Scala—lap-trinh-huong-doi-tuong-va-lap-trinh-ham](http://kipalog.com/posts/Scala---lap-trinh-huong-doi-tuong-va-lap-trinh-ham)

# Về mình

Đây là tất cả những gì hiện tại có trong bụng mình

- HTML, CSS sơ sơ
- JS, Jquery sơ sơ
- CoffeeScript (Một biến thể của JS để viết code nhìn văn vẻ và đỡ buồn ngủ hơn)
- PHP sơ sơ
- Nodejs sơ sơ
- MySQL sơ sơ nốt ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)
- C++, C# vỡ lòng

Scala theo mình tìm hiểu thì nó là một nhánh, hoặc là họ hàng cực kì thân thiết của Java, khổ nỗi Java một chữ bẻ đôi mình cũng không biết nên mình sẽ viết series này theo đúng những gì mà trong bụng mình tìm hiểu được. Mấy bác nào biết Java rồi chắc có lẽ sẽ dễ tiếp thu thằng Scala này hơn.