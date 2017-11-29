---
# http://learn.getgrav.org/content/headers
title: Giới thiệu Microsoft Cognitive Services &#8211; AI trong tầm tay
slug: gioi-thieu-microsoft-cognitive-services-ai-trong-tam-tay
# menu: Giới thiệu Microsoft Cognitive Services &#8211; AI trong tầm tay
date: 22-07-2016
published: true
publish_date: 22-07-2016
# unpublish_date: 22-07-2016
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
    tag: [AI,Bing,Machine Learning,Microsoft,nhận diện khuôn mặt,trí tuệ nhân tạo,AI,Bing,Machine Learning,Microsoft,nhận diện khuôn mặt,trí tuệ nhân tạo]
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

Bài viết này mình xin giới thiệu với các bạn **Microsoft Cognitive Services**

> #### Put intelligence APIs to work
> 
> Microsoft Cognitive Services let you build apps with powerful algorithms using just a few lines of code. They work across devices and platforms such as iOS, Android, and Windows, keep improving, and are easy to set up.

Đây là tập hợp những dịch vụ (service) của M$ cung cấp dưới dạng API, mình thấy khá nhiều là về Machine learning/AI. Mình cũng có sử dụng một số vào ứng dụng của mình và thấy khá hay, hiệu quả nên hôm nay giới thiệu với các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png)

# Demo

Thử vài demo cho các bác khoái đã ha

![](https://portalstoragewuprod2.azureedge.net/media/Default/Media/APP%20Gallery/howOld.PNG)

<http://how-old.net> – Ứng dụng đoán tuổi qua bức hình.

![](https://portalstoragewuprod2.azureedge.net/media/Default/Media/Apps/Screenshot_captionBot.png)

<https://www.captionbot.ai> – AI sẽ miêu tả bức ảnh mà bạn gửi lên

Thần kì chưa ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png), nếu dùng các API mà Microsoft cung cấp các bác cũng có thể viết được mấy cái bá đạo như vậy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/ab0f23d06fc786b40bb95a014604743f.png)

Thêm Demo cho các bác thích <https://www.microsoft.com/cognitive-services/en-us/applications>

# Tìm hiểu

Đây là toàn bộ nhứng API mà Microsoft cung cấp cho các bác <https://www.microsoft.com/cognitive-services/en-us/apis>

Đa số là miễn phí x lần gọi api (tầm 5000 lần gọi/tháng nên sài mệt nghỉ mới tính tới lúc trả tiền cho Microsoft đi nhá, yên tâm ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png))

Nó chia làm 5 nhóm chính, mình sẽ giới thiệu từng nhóm ở dưới:

- **Vision**
- **Speech**
- **Language**
- **Knowledge**
- **Search**

# Vision

Cái này giống như con mắt của mấy bà bô lão già già các bác ạ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png), kiểu “*Nhìn tướng con kia đi là tao biết nó 1 con rồi* ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png)“. Nói chung là nó có thể phân tính bức ảnh, video và trả về thông tin mà nó thu thập được. Muốn xem có mặt thằng nào trong bức ảnh – dùng Face API, muốn xem mặt của nó vui hay buồn – dùng Emotion API,..

- [Computer Vision API](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api) – Lấy các thông tin từ bức ảnh
- [Emotion API](https://www.microsoft.com/cognitive-services/en-us/emotion-api) – Đoán cảm xúc của khuôn mặt thông qua hình ảnh
- [Face API](https://www.microsoft.com/cognitive-services/en-us/face-api) – Xem coi trong hình có mẹt thằng nào không ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)
- [Video API](https://www.microsoft.com/cognitive-services/en-us/video-api) – Phân tích, chỉnh sửa Video các kiểu.

Nếu các bác hay chơi mấy cái ứng dụng *đoán tuổi, xem mình giống nhân vật nổi tiếng nào nhất *mình tin chắc 90% nó build theo service này của **Microsoft**.

# Speak

Thằng này là tai, nghe được gì thì nó sẽ mô tả cho các bác.

- [Bing Speed API](https://www.microsoft.com/cognitive-services/en-us/speech-api) – Chuyển ngôn ngữ bạn nói thành text.
- [Custom Recognition Intelligent Service (CRIS)](https://www.microsoft.com/cognitive-services/en-us/custom-recognition-intelligent-service-cris) – Khá thần kì, phân tích giọng âm, ngữ điệu, phong cách, từ vựng,…
- [Speacker Recognition](https://www.microsoft.com/cognitive-services/en-us/speaker-recognition-api) – Xem coi thằng nào đang phát biểu

Rất tiếc là vẫn chưa có hỗ trợ tiếng Việt cho các bác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2295eb38bfeb56ab060aaf8e4bd2315.png)

# Language

Thằng này chỉ biết đọc chữ thôi, nó có thể phân tích câu văn, đoạn văn và xác định thằng tác giả ý của nó là như thế nào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/e773a3d2ab3e30301da6f0ecd8153a76.png), giống cô giáo dạy văn của các bác đấy ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png).

- [Bing Spell Check API](https://www.microsoft.com/cognitive-services/en-us/bing-spell-check-api) – Xem coi các bác có sai chính tả không
- [Language Understanding Intelligent Service (LUIS)](https://www.microsoft.com/cognitive-services/en-us/language-understanding-intelligent-service-luis) – Hiểu mệnh lệnh của con người. Em đang nghiên cứu thằng này nhưng mà có vẻ khá là hạn chế, em sẽ nói trong một bài viết khác.
- [Linguistic Analysis API](https://www.microsoft.com/cognitive-services/en-us/linguistic-analysis-api) – Phân tính mấy câu phức tạp thành đơn giản
- [Text Analytics API](https://www.microsoft.com/cognitive-services/en-us/text-analytics-api) – Phân tích hàm ý, chủ đề, ngôn ngữ của đoạn text
- [Web language Model API](https://www.microsoft.com/cognitive-services/en-us/web-language-model-api) – Chuyển đoạn văn lại theo chuẩn

> **VD Bing Speed Check**
> 
> Ha vefun triingf owt theBin gspeller by typying a sentance or clcking teh sampels bellow
> 
> Sẽ thành
> 
> Have fun trying out the Bing speller by typing a sentence or clicking the samples below ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png)

Mấy cái này khá hay phải không nhưng có một nhược điểm cực kì lớn là chỉ hỗ trợ English thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Có thằng LUIS là kha khá hiểu được tí tiếng Việt nhưng mà cũng có hạn chế mình khuyên các bác chưa nên sài, nghịch vớ vẩn thôi.

# Knowledge

Mấy thằng này sâu rộng như kiến thức của Albert Einstein vậy nên em cũng chả biết nói sao ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png).

![chaien](http://cuthanh.com/wp-content/uploads/2016/07/chaien.jpg)

Mình chỉ chú ý nhất là thằng [Recommendations API](https://www.microsoft.com/cognitive-services/en-us/recommendations-api) – Nó giúp gợi ý cho người dùng. Vd như bác hay coi *Maria Ozawa* thì nó sẽ gợi ý “*Kìa, em Tsubasa Amami cũng ngon không kém *![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/d3499e4f2e48782da8f765fb4ad538c2.png)“.Phê chưa.

# Search

Thằng này thì quá là bình thường rồi. Chằng qua là thay vì bác vào Bing, search nó trả về HTML thì nay trả về JSON dưới dạng API cho các bác, đơn giản.

# Nhân xét

Trong các **API** mà mình giới thiệu bên trên, đang chú ý nhất có lẽ là phần **Vision**, và **Recommendations API** – vì mình thấy chỉ có 2 thằng này là anh em Việt Nam ta có thể áp dụng triệt để. Mấy thằng còn lại cũng rất hay nhưng tiếc là mới chỉ dành cho English hay các ngôn ngữ phổ biến khác. Các bác lo mà gầy dựng đất nước để Việt Nam trở thành cường quốc, Vietnamese sẽ thành ngôn ngữ quốc tế đi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/b5832fef30eaf55643c1756ec601702d.png).

Trong bài sau mình sẽ hướng dẫn các bác áp dụng thử một **API** vào project của mình xem như thế nào, có ngon lành như quảng cảo không.