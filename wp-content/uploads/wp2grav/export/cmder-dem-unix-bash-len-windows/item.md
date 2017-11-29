---
# http://learn.getgrav.org/content/headers
title: CMDER &#8211; Đem *unix bash lên Windows like a Boss
slug: cmder-dem-unix-bash-len-windows
# menu: CMDER &#8211; Đem *unix bash lên Windows like a Boss
date: 16-07-2016
published: true
publish_date: 16-07-2016
# unpublish_date: 16-07-2016
# template: false
# theme: false
visible: true
summary:
    enabled: true
    format: short
    size: 128
taxonomy:
    migration-status: review
    category: [Tools]
    tag: [Bash,terminal,unix,windows,Bash,terminal,unix,windows]
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

# Giới thiệu Cmder

Trong bài này mình sẽ giới thiệu về thằng Cmder. Trong lúc chờ đợi Microsoft phát hành [bản cập nhật](https://tinhte.vn/threads/tai-sao-microsoft-lai-ho-tro-chay-linux-tren-windows-dong-thai-nay-mang-y-nghia-gi-voi-gioi-ltv.2570084/) chính thức mang \*unix bash lên Windows 10 thì Cmder là một công cụ rất mạnh có thể mang sức mạnh của \*unix bash lên Windows cực dễ dàng.

[![](http://cmder.net/img/main.jpg)](http://cmder.net)

*Giao diện cmder*

Với cmder các bạn hoàn toàn có thể chạy các lệnh cơ bản của \*unix trên windows như `ls`, `mkdir`,… hay thậm chí là kết nối `ssh` mà không cần dùng thằng Putty sida nữa.

![ssh cmder](http://cuthanh.com/wp-content/uploads/2016/07/sshcmder-1.png)

*Quyên ngay thằng Putty sida đi*

Ngoài ra thì cmder còn hỗ trợ Git cực tốt (hiện branch đang sử dụng), mở nhiều tab cho gọn,…

![cmder feature](http://cuthanh.com/wp-content/uploads/2016/07/cmder-feature.png)

# Cài đặt Cmder

Để cài đặt Cmder thì các bạn làm theo các bước sau:

1. Download Cmder tại [trang chủ http://cmder.net](http://cmder.net)
2. Giải nén(Mình để vào `C:\Cmder\`)
3. Thêm đường dẫn `C:\Cmder\bin` vào `PATH`

*Vậy là bạn đã cài đặt xong Cmder*

Ngoài ra để có thẻ mở Cmder mọi lúc chỉ với right-click thì làm theo các bước sau:

![cmder-feature](http://cuthanh.com/wp-content/uploads/2016/07/cmder-feature-1.png)

1. Mở Terminal mặc định của Windows dưới quền Admin.
2. Chuyển tới thư mục Cmder (Của mình là `C:\Cmder\`)
3. Chạy lệnh sau `.\cmder.exe /REGISTER ALL`