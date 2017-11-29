---
# http://learn.getgrav.org/content/headers
title: React Native &#8211; Sự thật đằng sau ánh hào quang
slug: react-native-su-dang-sau-anh-hao-quang
# menu: React Native &#8211; Sự thật đằng sau ánh hào quang
date: 23-11-2016
published: true
publish_date: 23-11-2016
# unpublish_date: 23-11-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [React]
    tag: [android,app,hybrid,ios,lập trình,React,React Native,android,app,hybrid,ios,lập trình,React,React Native]
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

*Chào các bác lâu lắm rồi em không viết bài gì vì phải làm bài tập trên lớp với làm project bên ngoài nữa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/79655ff22c4eb02aba73a3e2728e3b30.png)*

*Như tít, bài này mình sẽ nói về react-native nó thật sự có “ngon”, thon thả như Ngọc Trinh không ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png)? Cùng tìm hiểu nhé!*

# Tại sao chọn React Native

Mình thì hướng theo Nodejs lâu rồi, cũng rất muốn làm app cho điện thoại nên mình đã tìm kiếm một nền tảng có thể giúp mình viết được app điện thoại với kiến thức NodeJS vốn có mà không phải học các ngôn ngữ native ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3182d42b9326c68c9a456df369ea9898.png) (Mình cực kì, cực kì, cực kì ghét Java ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png), đừng bao giờ nói mình viết code java. Ok?)

Theo như mình tìm hiểu, để viết app cho smartphone có 3 hướng chính

## Hybrid App

Thằng này hoạt động khá đơn giản, nó thực ra chỉ gói một Web App của mình vào, gắn thêm một số api hệ thống vào Javascript của web app đấy là xong. Cái mà bạn tương tác với app này chả khác nào tương tác với một Web App cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

Tiêu biểu cho thằng này có **IONIC, AppGyver, Onsen UI,…**

![aaeaaqaaaaaaaay8aaaajgrimgi2ymixlwninjytnguyzs05ytawltezyjq5owizytgwnq](http://cuthanh.com/wp-content/uploads/2016/11/AAEAAQAAAAAAAAY8AAAAJGRiMGI2YmIxLWNiNjYtNGUyZS05YTAwLTEzYjQ5OWIzYTgwNQ.jpg)

Đây là thằng đâu tiên mình dừng lại và trải nghiệm thử. Đa số các thằng trên đều sử dụng Angular + HTML là các bác có thể xây dựng được bột ứng dụng đa nền tảng kể cả trên Web, Android, iOS, một số thằng thậm chí còn hỗ trợ Windows Phone, hoặc gói nó vào một bộ đóng gói như Electron của Github là các bác có cả app cho Windows, MacOS, Linux,… Phê chưa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png)

Tuy nhiên. **Nó chỉ là một trang web thôi nên chậm, không mượt mà khiến trải nghiệm người dùng khá là tệ (đối với mình) ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/f7b14908d90b912b3fe5d7fa726df847.png)**

## App mà viết một ngôn ngữ sẽ compile ra chạy được nhiều nền tảng

Tiêu biểu cho thằng này có **React Native, Xamarin của Microsoft, NativeScript, SmartFace,…**

![mac-hong-quan-1](http://cuthanh.com/wp-content/uploads/2016/11/mac-hong-quan-1.jpg)

Đối với mình, một ứng dụng phải như một chàng Sở Khanh đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png) (đẹp trai, ngon ngọt, tôn trọng người dùng trong từng trải nghiệm, màn hình và chỉ tập trung vào những chức năng cần thiết nhất ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png), không đa năng như soái ca ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png))

Vì vậy mình bỏ Hyprid App mà tìm kiếm một hướng đi khác, giúp trải nghiệm ngừời dùng tốt hơn, thử qua nhiều thằng và chọn React Native vì thằng này có một số thành phần để code khá giống như `JSX` giống giống với `HTML`, `Style` giống giống với `CSS` luôn, và đặc biệt là được Facebook chống lưng ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png). Tại vì vào phần Showcase thì nhìn thấy như vầy

![screen-shot-2016-11-23-at-10-38-15-am](http://cuthanh.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-23-at-10.38.15-AM.png)

Moá, nó viết Facebook, Instagram đủ các kiểu bằng React Native luôn á ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a729827d07c2862258711bdba931e289.png)? Really mother fucker ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)????? Các bác dùng Facebook cũng biết độ muợt mà và ổn định của nó rồi đấy! Thế là mình theo React Native ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)

## App viết bằng ngôn ngữ native của nền tảng đấy

Mình nói rồi, cực kì **Ultra mega super extremely GHÉT** Java và cũng không có xiền mua MacBook nên Option này tạm thời bỏ qua! ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/76e3337135a7b852053b34aadd76ba6d.png)

# Trải nghiệm cùng React Native

Để có thể chiến được React Native, các bác phải có trong bụng `React` đã. Okey học xong `React` thì phải nghiên cứu thêm một chút `ES6` nè, rồi nếu ứng dụng ngày càng phức tạp thì phải xem qua thằng `Flux`/`Redux` nè,… nói chung khá là bội thực ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Trong project mình đang làm, team mình chọn stack `React Native + Redux + GraphQL + Relay`.

![cuxukulvaaaxhfq](http://cuthanh.com/wp-content/uploads/2016/11/CUxuKuLVAAAxHFQ.png)

Có thể do trình độ em kém nhưng thật sự có thể dung nạp được thằng `Relay` vào bụng thì khá là gian truân đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png)! Nhưng bù lại khi hiểu được nó rồi thì rất “sướng” ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)

Sau hơn 2 tuần nghiên cứu để có thể hình dung thăng React Native là gì? Em bắt đầu lao vào code. Đến với React là đâu tiên phải nhắc tới `Component`. Các bác cứ tưởng tuợng nó như mấy tag `h1`, `h2`, `div` trong `html` vậy. Nhưng chức năng, tên của nó là gì thì các bác tự code nhé hoặc các bác tưởng tượng mỗi `Component` là một `function` trong đống code của các bác vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/08c695086534a2344954042d153ad8fd.png). Nhờ đó, các bác có thể tận dụng lại bộ code của mình bất cứ khi nào. ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png)

Hồi năm nhất có thằng bạn giờ đã học tài năng nói với mình

Code mà để trùng lại những đoạn đã code thì mày chả khác nào máy tính cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png). Quăng nó vào thành một function đi.Thằng bạn



Mới đầu khá khó khăn vì một vài lỗi cơ bản nhưng dần rồi cũng quen.

Rồi một ngày mình được giao code phần Dách sách các phần tử xyz (Kiểu như kết quả search đấy)

![concept](http://cuthanh.com/wp-content/uploads/2016/11/Concept.png)

*Ý tưởng*

Vấn đề bắt đầu xuất hiện. Android hỗ trợ Menu Dropdown từ rất rất lâu rồi, trong khi iOS nói rằng:

Bồ đéo thích thằng Menu Dropdown, okey? ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)iOS



Thế là mình bắt đầu search từ khoá “react native menu dropdown” và tìm được thằng này https://github.com/jaysoo/react-native-menu . May quá, nó hỗ trợ cả Android lẫn iOS ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png).

`npm install --save react-native-menu` về thôi. Vâng, rắc rối vẫn không dừng lại ở đây. Ấn nút để hiện ra menu thì cái menu lại hiện ở chân trời nào đấy… Haizz. Thế là vào Issues trên github thì thấy vô vàn bác bị như mình rồi và tác giả repo trên vẫn chưa đứng ra nhận trách nhiệm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Có một bác đã sửa được bằng cách thay code và tạo pull request rồi nhưng có vẻ author đang bận đi chơi rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Thế là mình phại fork về sửa lại theo bác kia để fix cãi lỗi sida đấy. Ít ra mình cũng may mắn vì có người biết được vấn đề ở đâu và sửa nó ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png).

![reallity](http://cuthanh.com/wp-content/uploads/2016/11/Reallity.png)

*Thực tế*

Vậy đấy, menu của mình có thể hoạt động ổn định nhưng mình nhận ra là nó chậm quá. Tới đây nghĩ lại tới hybrid app – À thì ra nó cái Menu của mình chả khác gì hybrid app cả ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Component trên xây dựng bằng các component của React Native chứ không phải xây dựng bằng cách Native code cho Android và bằng React Native component cho iOS ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png).

# Ngôn ngữ thiết kế

Vẫn trở lại với trưởng hợp mình nói ở trên. Tại sao thằng Android lại hỗ trợ Dropdown Menu trong native code mà iOS bảo không? Tại vì 2 nền tảng đấy có ngôn ngữ thiết kế khác nhau ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png).

![ios-vs-android-segmented-controls3x](http://cuthanh.com/wp-content/uploads/2016/11/iOS-vs-Android-Segmented-Controls@3x-1024x352.png)

![ios-vs-android3x](http://cuthanh.com/wp-content/uploads/2016/11/iOS-vs.-Android@3x-1024x741.png)

Các bác có thể xem chi tiết tại

Android: <https://developer.android.com/design/index.html>

iOS: <https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/>

Vậy đấy, mỗi nền tảng có phong cách thiết kế UI/UX khách nhau, việc này sẽ khiến cho người dùng có trải nghiệm xuyên suốt toàn bộ các ứng dụng trên nền tảng đó. Thử nghĩ bạn đưa ứng dụng Android đặt vào con iPhone xem ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/f7b14908d90b912b3fe5d7fa726df847.png)? YouTube là một ví dụ, mình không đánh giá cao UI/UX của nó trên iOS ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6f80ebee4d029216826f7c9af17e0a24.png)

Do đó, nếu muốn có một sản phẩm theo chuẩn Sở Khach ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aeabbb614c88c9f1e09869596f736441.png), bạn cần phải viết component riêng cho từng thằng trong khá nhiều trường hợp. Và để làm điều đó, theo mình phái có kha khá kinh nghiệm cho từng nên tảng riêng (Nghĩa là đã từng viết app bằng native language đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)).

Dĩ nhiên các bác hoàn toàn có thể xây dựng một component mà chạy ở mọi nơi như cái component mình dùng bên trên. Component như vậy hoặc là các bác mượn của nguời ta hoặc tự code. Nếu tự code thì mình nghĩ rằng, khả năng rất cao sẽ lại xảy ra một vấn đề kiểu như

Hồi xưa có, tại sao trời đã sinh ra Firefox lại sinh ra IE. Bây giờ là tại sao trời đã sinh ra iOS lại sinh ra Android nữa…![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png)Dev



Và việc để làm cho component hoạt động ngon lành ở cả 2 cũng chả phải là điều gì đơn giản. Trình độ hiện tại của mình chưa đủ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/79655ff22c4eb02aba73a3e2728e3b30.png). Vâng cuộc sống mà, chả có gì dễ dàng cả, huh?

# Kết luận

![cover](http://cuthanh.com/wp-content/uploads/2016/11/Cover.png)

Sau thời gian 3-4 tuần chơi bời với React Native, mình nhận ra hầu hết chỉ là dối trá ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Hãy quên đi việc biết một ngôn ngữ mà có thể viết cho nhiều thằng. Nếu muốn xây dựng một ứng dụng đúng chuẩn Sở Khanh, bạn phải hiểu rõ từng nên tảng, phải hiểu ngôn ngữ mà nền tảng đó sử dụng, các api mà nó cung cấp ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png). React Native chỉ giúp chũng ta tận dụng tối đa nhưng phần có thể giống nhau giữa cả 2, tận dụng cái ngôn ngữ JavaScript đang nối lên như nấm sau mưa thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png). Nhìn Facebook kìa, mình chắc chắn là chỉ có một phần là React Native thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png) chứ không hoàn toàn như mình tưởng tượng lúc đầu.

Các bác có thể xem thêm ở đây một bác viết về React Native sau 1 năm yêu thương nó: <https://hashnode.com/post/what-we-learned-after-using-react-native-for-a-year-civdr8zv6058l3853wqud7hqp>

Còn mình, mình sẽ vẫn tiếp tục cố gắng trinh phục React Native để có thể làm ra một sản phẩm theo đúng chuẩn Sở Khanh của mình ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png). Tuy nhiên các bạn hãy quên đi tư tưởng học một được nhiều đi nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Hãy tạo ra một sản phẩm tôn trọng người dùng! ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)

 