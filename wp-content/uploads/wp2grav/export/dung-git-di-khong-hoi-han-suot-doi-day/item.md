---
# http://learn.getgrav.org/content/headers
title: Dùng Git đi không hối hận suốt đời đấy (Phần 1)
slug: dung-git-di-khong-hoi-han-suot-doi-day
# menu: Dùng Git đi không hối hận suốt đời đấy (Phần 1)
date: 27-07-2016
published: true
publish_date: 27-07-2016
# unpublish_date: 27-07-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Life,Service]
    tag: [chia sẻ,code,cuộc sống,git,sao lưu,chia sẻ,code,cuộc sống,git,sao lưu]
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

Chào các mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png),

Nay tự nhiên buồn nhớ lại những ngày đầu viết code, bao nhiêu là vui buồn hiện về nên em chia sẻ câu chuyện bi đát giữa em, code và cái máy tính đầu tiên của em.

Hồi mới tập tành vào code em thì hay gõ 2-3 kí tự rồi combo `Ctrl + S` thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png), cúp điện quen rồi mà, ngon mày cúp nữa tao cũng chẳng sợ. Có một hôm đang làm cái kiểu như [addnick.com](http://addnick.com) (mẹ bao nhiêu năm tháng rồi mà nó chưa sập, của em chạy được 6 tháng là tèo ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2295eb38bfeb56ab060aaf8e4bd2315.png)), hôm đấy trời mưa to, sấm chớp ầm ầm. BTW, lúc đấy em mới học lớp 7 thôi. Chả nhớ làm sao mình cãi nhau với mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png), bực quá không làm được gì nên bật máy tính ngồi Code ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png). Vừa bật lên, đang viết mã SQL query danh sách nick chat thì…**BÙMMMMMMMMMMMMMMMMMMMMMMMMMM**![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png). **WTF, Mother Fucker, kimochi, yamate**……… Các bác biết rồi đấy, đấy là lần cuối cùng em nhìn thấy cái máy tính gắn bó từ lớp 3 và cũng là lần cuối cùng nhìn đống code viết trong 3 tháng.

![thor](http://cuthanh.com/wp-content/uploads/2016/07/thor.jpg)

Sau thảm kịch đấy, em được cách ly khỏi máy tính gần 1 năm. Nhà nghèo làm gì có tiền mà mua máy mới với còn phải nghe chửi chán chê tội ngu đã ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Đối với cuộc đợi 8h/ngày ngồi máy tính như em thì đúng là khoảng thời gian ấy dài đằng đẵng các bác ạ. Cuộc sống không mục đích, không mục tiêu, không hy vọng,… Bạn bè em cũng không chơi nhiều nên đa số toàn ở nhà ngồi làm bạn với máy vi tính thôi mà giờ nó cũng bỏ em đi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png). Nhận thấy thằng con đang ngày càng tụt HP, mẹ em đã cố gắng mua cho em một con máy tính mới (Màn hình thùng  của máy cũ chưa hư nên chỉ được mua cái thùng máy mới thôi, ah kể cả bộ gear Mitsumi P/S2 và con chuột bi huyền thoại nữa). Kệ có máy là ngon rồi, chiến tiếp thôi.

Mất hết code cũ nên em phải làm lại hoàn toàn từ đầu, vẫn nhớ code cũ nên bây giờ code lại cũng nhanh. Rút kinh nghiệm mỗi ngày em sẽ tạo một bản sao lưu, quẳng nó vào một góc. Sau bao nhiều ngày tháng try hard cuối cùng em cũng hoàn thành, khi đó folder `Backup` của em cũng có hơn 60 folder con, nặng ~5Gb ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png). Thực ra dù có làm vậy hay không đi chăng nữa, nếu  bác Thor ghé thăm nhà em thì cũng đi hết thôi nhưng em vẫn làm vậy vì đôi khi hôm nay mình debug một hồi lại nhiều cmn hơn cũ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/3d4972d841d550c8b185c81dca71230b.png) nên lấy cái hôm qua thả vào debug lại vậy.

![meo-duoi-gian-2](http://cuthanh.com/wp-content/uploads/2016/07/meo-duoi-gian-2.jpg)

Hồi đấy *Dropbox* nổi lên, còn chưa có *Google Drive* hay *OneDrive* như bây giờ đâu, giới hạn dung lượng mỗi người chỉ được 2Gb nên em phải chắt lọc cái nào thực sự quan trong để “đưa lên mây”. Bây giờ thằng Thor ra đây, gọi cả bố mày nữa ngon mà đánh máy tính tao nữa đi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png).

![spartan300](http://cuthanh.com/wp-content/uploads/2016/07/spartan300-1024x540.jpg)

Làm như cách của em cũng khá hay đấy nhưng khổ nỗi có một hôm tự nhiên con bug ở đâu chui ra và em cũng không biết nó trốn ở đấy từ khi nào. Rõ ràng là mấy tuần trước làm khỉ gì có ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/111e40af5c869c33eec3a6a746831cbc.png). Thế là lại phải lục lại trong Folder `backup`, trong đấy em lưu mỗi folder con là ngày tháng em sao lưu. Giờ mới thấy mình ngu, biết mẹ gì hôm đó code tính năng gì, debug gì mà tìm lại bây giờ. Vất vả gần bằng code lại các bác ạ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png), vừa click chuột vừa chửi. Rút kinh nghiệm lần trước bây giờ tên folder của em sẽ là

#### Tên folder = ngày tháng lưu + tính năng thay đổi.

Vì giới hạn tên folder cũng với lại nếu dài quá Win sẽ hiện … ở cuối nên em phải trăn trở suy nghĩ mỗi lần sao lưu làm sao cho thật xúc tích, cô đọng, hàm ý hết mức có thể ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png).

Vậy đấy! Con người em máu Startup lắm, và đương nhiên là project hồi đấy thất bại rồi, không thì em cũng chả ngồi đây è cố viết Blog cho các bác đọc. Nhưng không nản em làm hết project này tới project khác hy vong có ngày mình bằng 1/10 Bill gate hay Steve Jobs thôi cũng hãnh diện với bà con lành xóng, anh em họ hàng lắm rồi. Project tìm bạn chat đấy là project đầu tiên của em, lớp 8, tới giờ em đã học xong năm 2 đại học đang triển khai project tiếp theo trong series thất bại của mình là [InboxTui – Chat với người lạ](http://cuthanh.com/startup/gioi-thieu-dich-vu-chat-voi-nguoi-la-inboxtui), trải qua hơn chục project khác nhau, thành quả em nhận được chỉ hơn con số 0 một tí. 

Cố gắng, tâm huyết để cuối cũng nhận ra mình còn quá non kém, thiếu sót và cả hiếu thắng nữa. Nhưng thôi đam mê mọi người ạ, hãy sống chết vì nó, sau này già còn nghĩ lại “Mẹ, hồi đấy ăn xyz gì mà ngu thế ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png)” .Minh Thành



**Phần 2**: <http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-2>

**Phần 3**: <http://cuthanh.com/service/dung-git-di-khong-hoi-han-suot-doi-day-phan-3>