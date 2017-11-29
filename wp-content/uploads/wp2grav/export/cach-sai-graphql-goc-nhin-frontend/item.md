---
# http://learn.getgrav.org/content/headers
title: Cách sài GraphQL &#8211; Góc nhìn Frontend
slug: cach-sai-graphql-goc-nhin-frontend
# menu: Cách sài GraphQL &#8211; Góc nhìn Frontend
date: 14-01-2017
published: true
publish_date: 14-01-2017
# unpublish_date: 14-01-2017
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Frontend]
    tag: [build,frontend,GraphQL,Mutation,Query,Subcription,build,frontend,GraphQL,Mutation,Query,Subcription]
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

Chào các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png),

Như đã nói, em sẽ tập trung vào GraphQL trong mây bài gần đây. Trong bài viết ngắn ngủi này, em muốn giới thiệu tới các bác về cách sử dụng GraphQL duới góc nhìn của một dev frontend – GraphQL sử dụng làm sao, khác khỉ gì so với thằng Restful quen thuộc ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png)? Cùng tìm hiểu nhé.

# Demo – Playground

Ok bắt đầu vào câu chuyện nhé

Frontend: Anh ơi, gửi em URL API đê em làm Frontend nhanh không sếp chửi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)

Backend: Nè chú API: <http://cuthanh.com:2700/graphql> Document: <http://cuthanh.com:2700/graphiql> ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

Thế là các bác mò mẫm vào Document xem nó như thế nào

![](http://cuthanh.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-13-at-11.23.32-PM-1024x474.png)

Em đã xây dựng một GraphQL API sẵn cho các bác chơi bời. GraphQL này xây dựng để thay thế cho Restful api mà mình đã nói cách xây dựng trọng loạt bài [Xây dựng hệ thống gợi ý](http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1)

<http://cuthanh.com:2700/graphiql>

Các bác vào để xem document luôn nhé

GraphQL sẽ chia thành 2 phần chính

1. **Query** Các câu lệnh lấy dữ liệu (tương tự method GET trong RestFul API)
2. **Mutation** Các câu lệnh để thêm/sửa dữ liệu (tuơng tự method POST/PUT/DELETE trong RestFul API)
3. **Subscription** (Ơ dm thằng này không biết đếm à ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)) Thực ra cái này có chức năng [kiểu như Emitter](http://cuthanh.com/nodejs/event-emitter-x-goi-500-anh-em-tra-loi) như bài viết bữa trước em đã nói. Client nói với Server rằng “này khi nào có thêm thăng Xmen mới thì báo cho tao nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png)“. Vậy là Client đang lắng nghe server với sự kiện *Thêm Xmen mới*, do đó, mỗi khi có Xmen mới được thêm vào thì Server sẽ gửi Data cho Client. Bá đạo chưa, Restful làm gì có chức năng như vầy đúng không các bác. Tuy nhiên chức năng này mới chỉ đang thai nghén, và chưa được hỗ trợ chính thức ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Do đó các bác ráng  đợi nhé![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)

# Query

Như trong document, query có 2 lệnh là

1. `Xmens` – lấy toàn bộ danh sách các Xmen
2. `Xmen(UID: Int)` – lấy thông tin của một Xmen cụ thể

Ok theo ứng dụng của chúng ta, mới vào chúng ta cần danh sách Xmen để show off ra homepage. Mà việc show off thì chỉ cần Avatar đỉnh + một cái tên cool ngầu là được (Công thức tán gái trên facebook ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png))

## Query đơn giản

Viết query

 
    <pre class="prettyprint">{
      Xmens {
        name
        avatar
      }
    }

Ok, giờ ấn nút “Play” để “Chơi” thứ nó nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png)

 
    <pre class="prettyprint">{
      "data": {
        "Xmens": [
          {
            "name": "Wolverine",
            "avatar": "images/wolverine.jpg"
          },
          {
            "name": "Magneto",
            "avatar": "images/magneto.jpg"
          },
          {
            "name": "Mystique",
            "avatar": "images/mystique.jpg"
          },
          {
            "name": "Professor X",
            "avatar": "images/professorx.jpg"
          },
          {
            "name": "Quick Silver",
            "avatar": "images/quicksilver.jpg"
          }
        ]
      }
    }

Kiểu vậy. Má data của em các bác làm nhoặng trong đấy nên em chỉ lấy một ít thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Thấy phê chưa, query thì dễ nhìn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png). Result trả về thì gần như y chang query ngoài việc gắn thêm data vào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png).

![](http://cuthanh.com/wp-content/uploads/2017/01/15941197_1229854860415048_1940074249517835867_n.jpg)

## Query với tham số (argument)

Ok, bây giờ giả sử User sẽ click vào một Xmen nào đó, chúng ta sẽ phải router tới trang cá nhân của user đó và đương nhiên, phải fetch data của user đó về rồi

Vậy ta sẽ sử dụng thằng query thứ 2 `Xmen(UID: Int): Xmen`

Một lệnh Query viết ở Document sẽ ở dạng prototype như sau: `Tên_Query(Tên_argument1: Kiểu_argument1, Tên_argument2: Kiểu_argument2):Kiểu trả về`

Với document cho thằng `Xmen(UID: Int): Xmen` chúng ta thấy được tên query là `Xmen`, `Argument` chúng ta cần truyền vào là `UID`, ở kiểu `Int`. Thằng này sẽ trả về một kiểu gọi là kiểu `Xmen`. Còn kiểu `Xmen` như thế nào các bác ấn vào ở Document mà tự nghiền ngẫm đi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png).

 
    <pre class="prettyprint">{
      Xmen(UID:1) {
        name
        avatar
        like {
          name
          avatar
        }
      }
    }

Các bác chạy thử xem Kết quả làm sao nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png)

## Query trong query

Có một điểm đáng chú ý ở đây là field `like` sẽ trả về `array(Xmen)`, nghĩa là thằng `like` này lưu giữ toàn bộ thông tin những Xmen mà nhân vật Wolverine của chúng ta yêu thích. Kiểu trả về của nó sẽ y chang như kiểu mà `Xmen(UID: 1)` trả về. Mẹ thằng này nói khó hiểu vl ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png), ví dụ thử coi

 
    <pre class="prettyprint">{
      Xmen(UID:1) {
        name
        avatar
        like {
          name
          like {
            name
            avatar
            like {
              name
            }
          }
        }
      }
    }

Câu lệnh trên nghĩa là sao các bác.

- Nghĩa là nó sẽ lấy thông tin `(name, avatar, like)` của Xmen có UID bằng 1 (Thằng Wolverine đấy)
- Tiếp theo ta sẽ lấy thông tin `(nam, like)` của tất cả những thằng Xmen được Wolverine yêu thích  ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png)(VD có n thằng trả về)
- Tiếp nữa, chúng ta lại lấy thông tin `(name, avatar, like)` của tất cả những thằng được Xmen được Wolverine yêu thích yêu thích ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png) (Vd có m thằng trả về)
- Cuối cúng, chúng ta lấy thông tin `(name)` của tất cả những thằng Xmen được Wolverine yêu thích yêu thích yêu thích. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png) (Vd có k thằng trả về)
- Done! (response) trả về gì các bác tự xem nhé. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/47c5e4b08a47d4ad47589f9f615cea5d.png)

![](http://cuthanh.com/wp-content/uploads/2017/01/15977056_2170178143207889_2856696580677427832_n.jpg)

*Haha fuck your mind =))*

Thử tượng tượng xem, nếu chúng ta dùng Rest thì phải làm sao. Chúng ta query `/1`. Đợi `response` trả về, lấy field `like` query tiếp n thằng nữa. Ứng với mỗi n ta sẽ query m lần nữa. Cuối cùng, ứng với mỗi m ta phải query k lần nữa.

**Vậy là tổng cộng 1 + n\*m\*k lần phải query**.

Đặc biệt hơn nữa, các bác phải đợi thằng trước trả kết quả rồi mới có thể query thằng sau. Trong khi với GraphQL, fortunately, chúng ta chỉ cần query **đúng 1 lần**. Thêm nữa, với Restful, mỗi lần query sẽ trả về full field của một xmen `(_id, UID, name, avatar, date, like, _v)`. Với GraphQL chúng ta chỉ cần lấy field nào chúng ta cần. Ez ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)

Tới đây bạn đã thấy thằng GraphQL này bá đạo cỡ nào chưa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png). Với ví dụ trên thôi, theo mình GraphQL đã chạy nhanh hơn Restful API mấy trăm lần rồi.

## Batch Request

Chưa hết, GraphQL còn hỗ trợ **Batch Request** (cái này chúng bên Restful chúng ta cũng làm được nhưng mệt mỏi lắm, do đó các bác sẽ rất ít được gặp nó)

**Batch Request** là gì, nghĩa là request nhiều query cúng một lúc. Ví dụ trong ứng dụng của chúng ta, có một trang cần cả thông tin của 1 Xmen cụ thể, cần cả thông tin của danh sách Xmen nữa, giờ sao? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png)

 
    <pre class="prettyprint">{
      Xmens {
        name
        avatar
      }
      Xmen(UID:1) {
        name
        avatar
        like {
          name
        }
      }
    }

## Aliases

Vâng, với việc hỗ trợ **Batch Request** luôn thì chúng ta lại nảy sinh một vài vấn đề nữa (Cái này gọi là nợ mẹ đẻ nợ con ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a729827d07c2862258711bdba931e289.png))

Nếu chúng ta cần Query lấy thông tin của Xmen có `UID 1` và Xmen có `UID là 2` thì sao

 
    <pre class="prettyprint">{
      Xmen(UID:1) {
        name
        avatar
        like {
          name
        }
      }
      Xmen(UID:2) {
        name
        avatar
        like {
          name
        }
      }
    }

Các bác thử copy rồi ấn nút “Chơi” thử coi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png)

![](http://cuthanh.com/wp-content/uploads/2017/01/16106003_536065013252262_1977917222532016662_n.jpg)

Lỗi đúng không. Hehe ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png). Vì khi trả data về, server tương đương lắp data vào những field chúng ta query. Nhưng trong câu Query trên, có 2 field Xmen ở cùng cấp nên nó đị conflict (mâu thuẫn với nhau), làm sao có 2 field trong cùng một object (Javascript) được, đúng không các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png). Dù sao, các bác cũng query câu trên thử đi, server sẽ ném vào mặt các bác câu lỗi `Fields \"Xmen\" conflict because they have differing arguments.`

`Use different aliases on the fields to fetch both if this was intentional.`

Nghĩa là chúng ta nên đặt tên khác/bí danh (**aliases**) để giải quyết vấn đề. Đặt **aliases** làm sao? Xem bên dưới

 
    <pre class="prettyprint">{
      ThangA: Xmen(UID:1) {
        name
        avatar
        like {
          name
        }
      }
      ThangB: Xmen(UID:2) {
        name
        avatar
        like {
          name
        }
      }
    }

Đấy, vậy là lại có Response ngon lành ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png), chả lỗi lầm khỉ gì cả.

## Nâng cao – Operation Name, Directive, Variable

Ok, giờ nâng cao thêm xíu nữa nhể.

 
    <pre class="prettyprint">query getXmen($input:Int!, $getLike: Boolean!) {
      Xmen(UID:$input) {
        name
        like @include(if: $getLike) {
          UID
          name
          avatar
          date
        }
      }
    }

 
    <pre class="prettyprint">{
      "input": 1,
      "getLike": false
    }

Đầu tiên, ta thấy được dòng `query getXmen($input:Int!, $getLike: Boolean!)` khá lạ huh ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png)? Cái này là định nghĩa một function các mẹ ạ (hay đại loại kiểu vậy), thằng GraphQL gọi nó là Operation, em thích gọi là Function ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png). Okey, function thì phải có input – các argument. Và argument bắt đầu bằng kí hiệu $ (giống định nghĩa variable trong PHP nhỉ).

Mục đính viết function vào đấy làm gì? **Reusable**. Function giúp chúng ta chạy một đống câu lệnh bên trong mà mỗi lần sử dụng không phải viết lại từng câu lệnh và đối với GraphQL cùng để là dễ Debug nữa (Document của GraphQL viết vậy, em vẫn méo thấy dễ chỗ nào cả vì cũng chưa gặp Bug). ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png)

Ta định nghĩa Query ở trên, giá trị variable ở một nơi khác. Nó giống như định nghĩa một function, còn mỗi khi gọi nó ta lại pass argument khác nhau tuỳ trường hợp vậy. Giúp code của các bác dễ quản lý hơn.

Điều đặc biệt thứ 2 là đoạn `like @include(if: $getLike)` Đoạn này có nghĩa là chỉ Get field `like` nếu giá trị `$getLike` là `true`. Khá hay phải không? Và ngược lại với @`include` chúng ta có `@skip(if: $variable_in_bool_type)`, thằng `@skip` này hoạt động ngược lại với thằng `@include`. Nói chung chỉ cần biết một thằng thôi là đủ rồi, nhẹ não ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png).

Ngoài các kiểu Query mà mình đã nói bên trên, còn một số định nghĩa khác về **Fragments, Meta Type** nữa. Mình sẽ đề cập vào lần sau tại vì 2 thằng này chỉ thực sự phát huy công dụng tốt khi chúng ta làm việc với React/ReactNative và định nghĩa Type trong GraphQL phức tạp thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png).

Tạm thời vậy đã.

# Mutation

Một ứng dụng, trong thực tế, sẽ không chỉ có việc Fetch data từ server về. Nó cần phải có những thay đổi, thêm bớt và gửi lên server nữa. Để làm việc này, GraphQL tách ra thành nhánh **Mutation**.

Có một điều quan trọng em phải nhắc các bác trước. **Mutation luôn luôn phải đặt trong một function.**

 
    <pre class="prettyprint">mutation addAXmen($input: XmenInput!) {
      addXmen(input:$input) {
        name
        avatar
      }
    }

 
    <pre class="prettyprint">{
      "input": {
        "name": "Cu's Thanh's",
        "avatar": "https://graph.facebook.com/100003217152910/picture?type=large"
      }
    }

Cách để thêm một **Xmen Cu’s Thanh’s** vào data của chúng ta. **Các bác chú ý một điều nữa là nếu mutation nào chúng ta sử dụng mà cần argument not null (Có dấu `!` ở đằng sau đấy), thì khi định nghĩa function, chúng ta cũng phải cần thêm dấu `!` vào định nghĩa kiểu của variable nhé**. Một dấu `!` thôi mà cũng em điên đầu mấy tiếng đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png)

Một mutation thì có thể trả về kết quả. Còn kết quả kiểu gì thì các bác tự đọc document đi nhá. Của em là kiểu Xmen, do đó, chúng ta cũng thể nói với GraphQL là, “*bố chỉ cần những field x, field y thôi nhé con trai… ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)*”

# Subcription

Phần này em chưa code, và GraphQL cũng chưa có phương án giải quyết chính thức cho thằng này ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png). Vì thế các bác đợi bài sau nhé.

# Kết bài

Qua đây, dưới góc nhìn của Frontend thì thấy sao các bác. Đối với em thì thấy sướng quá, query cực kì thích, trực quan. Lại còn không phải xây dựng một đống query lằng nhằng, thằng này đợi thằng kia nữa chứ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)

Document thì khá là phê (em đánh giá là 8/10).

Về phần Mutation thì đúng thực là hơi nhằng hơn so với Restful một xíu, nhưng không sao, vẫn ngon lành ha ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png).

Từ đấy, thấy rằng GraphQL thực sự là một bước tiến so với Restful. Nó cực kì tiết kiệm thời gian cho frontend, và cả tài nguyên cho User nữa (không phải vêu mồm chờ response ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/f7b14908d90b912b3fe5d7fa726df847.png)).

![](http://cuthanh.com/wp-content/uploads/2017/01/15965546_536065016585595_2682968590436066881_n.jpg)

Còn các bác, các bác thấy GraphQL có thực sự nuột như em nói không, còn chỗ nào sida? Comment bên dưới nhé!