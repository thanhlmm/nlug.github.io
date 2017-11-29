---
# http://learn.getgrav.org/content/headers
title: Giới thiệu về GraphQL
slug: gioi-thieu-ve-graphql
# menu: Giới thiệu về GraphQL
date: 06-01-2017
published: true
publish_date: 06-01-2017
# unpublish_date: 06-01-2017
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
    tag: [api,facebook,Graph,GraphQL,tree,api,facebook,Graph,GraphQL,tree]
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

Hế nhô các đồng dâm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png),

Kì này đang làm GraphQL thấy nó cũng khá thú vị nên mình viết bài này để giới thiệu GraphQL tới các bác, một phần cũng để minh chứng rằng Graph đang trên đà phát triển của nó mà [bài viết trước](http://cuthanh.com/technology/graph-em-la-ai) mình có nói tới.

# GraphQL là gì

**A query language for your API**GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. [Homepage http://graphql.org](http://graphql.org)





[![](http://cuthanh.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-06-at-12.29.46-PM-1024x351.png)](http://graphql.org)

Theo em hiểu là “Một chuẩn chung (ngôn ngữ) chung để xây dựng API cho ứng dụng của các bác” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png). Để tương tác với API thì có nhiều chuẩn khác nhau, và phổ biến nhất hiện nay là Restful.

Vd một API Restful mà mình đã xây dựng: [Xây dựng hệ thống “Gợi ý…” (Phần 3)](http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-3)

Chi tiết

 Mục đích Cách hiện thực Lấy danh sách Xmen **GET /xmen** Thêm Xmen **POST /xmen** Xem thông tin 1 Xmen cụ thể **GET /:UID** “Thả tim” **POST /:UID-cua-Xmen/Like** và trong body.request phải có UID của user được thả tim 

Qua bảng trên thì các bác cũng thấy là nếu xây dựng một ứng dụng thông qua Restful API ở trên thì phải `request` khá là mệt mỏi nhỉ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png).

1. Đầu tiền là Lấy danh sách Xmen
2. Nếu User xem thông tin 1 Xmen thì lại request một lần nữa để xem thông tin chi tiết của 1 thằng đấy
3. Okey, nếu tiếp theo muốn “thả tim” ai đó thì phải request đến server để “thả tim”

Có một điểm hạn chế cực kì to của Restful đó là mỗi `request` nó sẽ trả về `response` cứng. VD bác request `GET /:UID` thì nó luôn luôn trả về `response` dạng

 
    <pre class="prettyprint">{
      "_id":"57dff5a80eae7636015f3387",
      "UID":7,"name":"Magneto",
      "avatar":"images/magneto.jpg",
      "__v":17,
      "date":"2016-09-19T14:26:48.069Z",
      "like":[9,4,15,8,24,10,1]
    }

Như các bác thấy bên trên, nó luôn trả về những field cứng như `_id, UID, avatar, __v, data, like` . Ủa trong đấy có mấy field mình đâu sài bao giờ đâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a729827d07c2862258711bdba931e289.png) (như `_id`, `_v`) thì lấy nó về làm gì, nó làm nặng `response` đồng nghĩa với tốn thời gian của người dùng, tốn tài nguyên server ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png). Thực ra 2 thằng đấy chả bao giờ dùng nên đáng lẽ thằng nào làm ra cái API này phải bỏ đi chứ nhỉ? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png) Tại lúc làm em lười bỏ đi đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Ngoài ra ta xem field `date`, thằng này thì chắc cũng sẽ có ngày hữu ích nhưng mà trong [app gợi ý](http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1) của em thì không cần tới nhỉ? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png)

Vấn đề nảy xinh ra khi: Có những yêu cầu cần field `date` và những yêu cầu không cần field `date` thì sao? Viết ra thành 2 route thì sẽ gây mệt mỏi và ức chế cao độ cho dev ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png). Để chung một cái và trả về tất cả thì sẽ gây lãng phí tài nguyên cho cả server và client, tốn tiền quá sếp chửi thì sao? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

## GraphQL sinh ra và định nghĩa lại cách lấy thông tin từ Server về

GraphQL xây dựng một ngôn ngữ chung để giao tiếp với API mà nó sẽ gửi lên những field mà Client muốn và Server sẽ xem qua và trả lại chính xác những gì Client yêu cầu.

Như ví dụ trên, nếu sài GraphQL các bác chỉ cần request

 
    <pre class="prettyprint">{
      xmen(uid: 1) {
        UID
        name
        avatar
        like
      }
    }

Đấy, mình bảo với Server rằng “*Này mày lấy thông tin `UID, name, avatar, like` của thằng Xmen số báo danh 1 cho tao nha ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)*” sau đó server sẽ trả lời lại đúng những thông tin cần thiết.

![](http://cuthanh.com/wp-content/uploads/2017/01/GraphQL1-1.gif)

Ủa, bên Restful cũng làm được vậy kìa như thằng Facebook

 
    <pre class="prettyprint">https://graph.facebook.com/v2.8/me?fields=id,name,about&access_token=696969696

Thằng API này là sẽ trả về thông tin của User mà có `token 696969696` đang `request`. Thường thì sẽ trả về một đống field về thông tin của user đấy, nhưng chúng ta bảo với nó rằng “bố chỉ cần field `id, name, about` thôi nghe con ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png)” thế là thằng Facebook phải đọc request và trả về field `id`, `name` và `about` thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

## Định mệnh GraphQL lừa đảo à !!! Thậm chỉ Request mà nó gửi lên server cũng nặng hơn.

Thực ra trong việc xây dựng một ứng dụng người ta phải cân nhắc giữa hai bên của cán cân. Một bên là độ tiện lợi cho dev, một bên là hiệu năng cho người dùng. Dễ dev thì chạy chậm, khó dev thì chạy nhanh vậy thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png). Điều này tồn tại từ rất lâu rồi và vấn tiếp tục tồn tại. Các bác thử so sánh bất kì ngôn ngữ bậc cao nào như Java, C# so với ứng dụng viết bằng C, Assembly xem ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png). CuThanh



# Vậy tại sao lại GraphQL

Trở lại với GraphQL, việc giảm nhẹ tài nguyên cho hệ thống là dối trá ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png) (tạm thời là vậy), nó có thế ưu điểm hơn so với Restful trong một số trường hợp, số còn lại thì không ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Tuy nhiên, tới với GraphQL bạn sẽ nhận được một cấu trúc giao tiếp với API trong sáng hơn, ngôn tình hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png). Hơn thế nữa, nó còn có hơi hướng OOP, Graph, miêu tả các đối tượng dữ liệu như những thức thể sống chứ không giống kiểu như lấy từ table xong quăng thẳng vào mặt Client như Restful đang làm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png).

Chính việc này khiến cho GraphQL kết hợp cực kì, cực kì tốt với ứng dụng phía Client.

- Nó hỗ trợ cho bên frontend biết rằng trong `response` có nhưng field gì để mà còn lọc ra.
- Hỗ trợ vừa code vừa viết document (việc này khá mệt mỏi khi sử dụng Restful). Việc này đồng nghĩa với việc thằng backend chỉ cần viết code xong quăng thằng cái url GraphQL vào mặt thằng frontend ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png) mà không cần phải trao đổi, hợp tác lằng nhằng nữa (Nếu frontend là nữ thì các bác đừng nên viết document nha ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)) .
- Ngoài ra với ứng dụng ngày càng phức tạp, truy vấn theo nhiều lớp thì GraphQL sẽ thể hiện rõ ràng hơn ưu điểm của mình qua phương pháp duyệt cây. Mỗi node chỉ cần duyệt qua một lần là có thể sử dụng ở mọi nơi rồi (Chi tiết em sẽ nói ở bài viết sau khi hiện thực GraphQL kết hợp với Frontend)
- Và nhiều nhiều nữa mà em chưa nghĩ ra…![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)
- Chi tiết hơn các bác xem tại <https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html>

Nói chung tại sao dùng GraphQL? Tại vì em thấy thế giới đang chuyển dần sang dùng GraphQL rồi các bác ạ. Và nó được Facebook chống lưng ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aeabbb614c88c9f1e09869596f736441.png), đồng thời cộng đồng GraphQL cũng đang phát triển khá mạnh. Đối với em, là một trải nghiệm mới nữa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png), thế thôi. Sài hay không tuỳ các bác, biết đâu mai mốt ra cái gì ngon hơn thì sao!

P/S: Bài tiếp theo mình sẽ nói về cách sử dụng GraphQL, cách xây dựng một API theo chuẩn GraphQL, các bác đón đọc nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)