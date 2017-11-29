---
# http://learn.getgrav.org/content/headers
title: Graph &#8211; Em là ai?
slug: graph-em-la-ai
# menu: Graph &#8211; Em là ai?
date: 14-12-2016
published: true
publish_date: 14-12-2016
# unpublish_date: 14-12-2016
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
    tag: [dồ thị,Graph,neo4j,node,dồ thị,Graph,neo4j,node]
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

Chào các mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png), kì này thấy những kiến thức hồi năm nhất khá hay nền em tìm hiểu để viết bài cho các bác (thực ra là vì nó liên quan tới mấy cái em đang nghiên cứu, không cũng chia tay lâu rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png)).

# Graph là gì?

Đầu tiên theo nghỉa tiếng việt Graph gọi là đồ thị. Mà đồ thị thì phải biểu diễn bằng hình vẽ đúng không các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png) và mục đích chính mà Graph ra đời là biểu thị mối quan hệ giữa các thực thể (Object/Entity).

*Tưởng mỗi người chúng ta là một thực thể (Object) – giống như cách mà các bác hình dung ở OOP. Cuộc sống thì phức tạp, các bác không thể không quen biết, không liên hệ, không kết nối với ai được ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png), do đó Graph sinh ra để miêu tả mối quan hệ giữa các thực thể (Object). VD có Bác (Object A) và ông già của bác (Object B) cả 2 liên hệ với nhau qua sợi dây (cha – con) ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png). Sau này bạn cưới 1 em về (Object C) thì quan hệ giữa Object A và Object C là vợ chồng ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png), Obj B và Obj C là bố vợ – con dâu ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png). Graph là sợi dây miêu tả mối quan hệ giữa các thành viên trong gia đình các bác.*

![](http://cuthanh.com/wp-content/uploads/2016/12/graph.png)

Hình trên là một Graph. Các bác có thể để ý nó có 2 thành phần chính là

- **Vertice (Node)** – Tiếng Việt gọi là Đỉnh: Là mấy cái vòng tròn có số bên trong ở cái hình bên trái đấy các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)
- **Edge (Connection)** – Tiếng Việt gọi là Cạnh: Là mấy cái đường thẳng nối giũa các cục tròn tròn Node đấy.

Một Graph có thể là **Directed** (có hướng) hay **Undirected** (vô hướng). Ở Graph bên trên là vô hướng, các bác muốn nó có hướng thì thêm mũi tên vào mấy cái Edge (cạnh) là được (Mũi tên 1 hướng thôi nha các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png)).

### Thế có hướng và vô hướng để làm gì?

- **Vô hướng**: Thằng X là bạn của các bác thì dĩ nhiên bác cũng là bạn của thằng X. Đó là mối quan hệ 2 chiều, vì vậy không cần vẽ mũi tên 2 chiều làm gì, tốn mực ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png).
- **Có hướng**: Các bác thích con Y đang là hoa khôi ở trường, áp dụng bao nhiêu nhiêu sách vở lý thuyết tán gái vẫn không làm nó thích mình được, nó chỉ coi các bác là anh trai tốt/bạn tốt thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Đây là quan hệ 1 chiều, bác thích nó nhưng nó chỉ coi bác như anh trai. Do đó phải có mũi tên chỉ ra là bác thích con Y nhưng nó thì không ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)

Trên thực tể thì một Graph chắc chắn phải có cả 2 trường hợp Directed và Undirected sảy ra trên cũng một Graph, mình cũng chả biết làm sao mà họ tách 2 cái để riêng. Chắc vậy cho dễ học ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)

# Ví dụ Graph trong thực tế

Đang là hàng tá ví dụ của thằng Neo4j, anh em tham khảo nhé

<https://neo4j.com/graphgists/>

# Biết Graph được gì

Mình bắt đầu đụng vào code từ năm lớp 6, tới giờ mình đang học năm 3 về ngành Khoa học máy tính. Trong suốt quãng thời gian từ lúc biết viết code tới tật khi nộp đơn vào Truờng Bách Khoa HCM (hối hận vl) thì mình chả biết Graph là gì cả mà vẫn code bình thường. Năm lớp 11 mình có code được một website thương mại điện tử/forum (không dùng Framework) và cũng chả cần biết Graph là gì cả. Thực sự tới giờ mình cũng không tin mình có thể code được một project như vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/f7b14908d90b912b3fe5d7fa726df847.png)

Vậy đấy, theo mình, biết Graph hay không cũng không ảnh hưởng gì nhiều tới việc trở thành một lập trình viên cả. Nhưng nếu biết nó sẽ khiến các bác trở nên vĩ đại hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png), thông minh hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png), sang chảnh hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aeabbb614c88c9f1e09869596f736441.png),…

## Ứng dụng khi biết Graph

- Biểu diễn mỗi quan hệ trong một mạng xã hội (Social Network)
- Biểu diễn bản đổ, tìm đường đi ngắn nhất giữa các điểm trên biểu đồ,…
- Khiến bạn trở nên sang chảnh hơn khi đi Phỏng vấn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png)

Ngoài ra, theo mình hiện tại Graph chưa đặt được dấu ấn của mình nhiều trong công nghiệp lập trình nhưng mọi thứ luôn phát triển, sau này, có lẽ Graph sẽ có một chỗ đứng vững chắc cho riêng mình ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png)

Nhìn Facebook xem <https://www.facebook.com/notes/facebook-engineering/tao-the-power-of-the-graph/10151525983993920/>

Nhìn nguời ta đang chuyển từ REST API sang Graph

[View story at Medium.com](https://medium.com/chute-engineering/graphql-in-the-age-of-rest-apis-b10f2bf09bba#.emvrjg5zx)

https://0x2a.sh/from-rest-to-graphql-b4e95e94c26b#.qsq1ksosf

<https://dev.to/reactiveconf/why-i-believe-graphql-will-come-to-replace-rest>

Lưu một Database duới dạng Graph chứ không phải theo bảng/cột cũ rích nữa? <https://neo4j.com>

![](http://cuthanh.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-14-at-6.28.02-PM-1024x312.png)

Nó giống như hồi xưa chỉ cần Function Programing là đủ để đáp ứng nhưng nó dần trở nên sida ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png), OOP ra đời để thay thế nó ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

Nếu như văn học phản ánh đúng xã hội khi nó được viết thì code cũng vậy. OOP đang phản ánh đúng xã hội mà loài người đang tồn tại.Bịa ra



# Xây dựng một Graph

Thực ra mình có xây dựng một **Directed Graph** trong Series <http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1> và lưu nó trên MongoDB. Sau này có thể mình sẽ thử trên **Neo4j** xem sao nhỉ, nếu các bác hứng thú?

…hoặc một cách triển khai khác

 
    <pre class="prettyprint">let MakeGraph = () => { 
      let graph = {};
      graph.contains = (node)=> {
        return !!graph[node];
      }
      graph.addVertex = (node) => {  
        if(!graph.contains(node)){
          graph[node] = {edges:{}};
        }
      }
      graph.removeVertex = (node) => {
        if(graph.contains(node)) {
          for(let connectedNode in graph[node].edges) {
            graph.removeEdge(node, connectedNode);
          }
          delete graph[node];
        }
      }
      graph.addEdge = (startNode, endNode) => {
        if(graph.contains(startNode) && graph.contains(endNode)){
          graph[startNode].edges[endNode] = true;
          graph[endNode].edges[startNode] = true;
        }
      }
      
      graph.removeEdge = (startNode, endNode) => {
        if(graph.contains(startNode) && graph.contains(endNode)){
          delete graph[startNode].edges[endNode]
          delete graph[endNode].edges[startNode]
        }
      }
      return graph;
    }

Các bác xem qua đi nhé, em lười nói chi tiết quá! ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)

 

*Hy vọng mọi người có cái nhìn với Graph một cách tốt hơn (giống như mình đã từng chả coi Graph ra gì cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)) và ứng dụng Graph vào những project sau này của mình nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)*

 