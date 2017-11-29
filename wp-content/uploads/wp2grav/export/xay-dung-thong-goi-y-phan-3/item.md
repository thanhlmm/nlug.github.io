---
# http://learn.getgrav.org/content/headers
title: Xây dựng hệ thống “Gợi ý…” (Phần 3)
slug: xay-dung-thong-goi-y-phan-3
# menu: Xây dựng hệ thống “Gợi ý…” (Phần 3)
date: 12-08-2016
published: true
publish_date: 12-08-2016
# unpublish_date: 12-08-2016
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
    tag: [code,gợi ý,phần 3,thuật toán,xây dựng,code,gợi ý,phần 3,thuật toán,xây dựng]
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

Chào các mẹ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png), tiếp nối bài hôm trước. Hôm nay chúng ta sẽ viết server api nhé.

Phần 1: <http://cuthanh.com/nodejs/xay-dung-he-thong-goi-y-phan-1>

Phần 2: <http://cuthanh.com/nodejs/xay-dung-thong-goi-y-phan-2>

# Demo

<http://demo.cuthanh.com/professorx-client/>

# Tổng thể

Các bước để em phát triển bất kì một ứng dụng gì

1. Liệt kê những yêu cầu của bài toán
2. Vẽ ra sơ đồ theo hành vi của người dùng, dòng chảy của dữ liệu (data-flow),… em có vẽ mà để ở nhà rồi, không chụp lên cho các bác coi được ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)
3. Vẽ ra cấu trúc modal
4. Clone repo boilerplate của em sang
5. Code
6. Debug (cái khỉ này lâu nhất Mother fucker ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png))
7. Commit
8. Xong!

Có thể đối với các bác thấy 3 bước đầu của em hơi xàm thì theo kinh nghiệm của em thì nó là quan trọng nhất đấy. Rất nhiều coder cứ thấy yêu cầu là cắm đầu vào code mà không biết trời đất là gì, rồi sau một hồi mân mê chả biết mình đang làm cái vẹo gì ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/299e9352fa1be8323aba0ef9c0bdfab5.png). Như mình đã nói trước đây

## Cách code nhanh nhất là méo code cái gì cả





Khi bạn liệt kê yêu cầu, vẽ sơ đồ ra thì bài toán sẽ trở nên cực kì dễ hiểu. Đối với mình, một coder cũng rất rất cần bút và giấy không khác gì họa sĩ vậy. Chỉ có bút, giấy mới dễ dàng thể hiện ý tưởng của mình một cách nhanh nhất, tự do nhất thôi (Em không có tiền mua M$ Surface đâu nha, mấy bác đừng góp ý ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/78903d5af243d9b72ea6bfe3446fcee9.png))

## Yêu cầu bài toán

- Chức năng thêm, lấy danh sách, xóa Xmen.
- Mỗi Xmen có quyền “thả tim” Xmen khác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png)
- Lấy gợi ý “suggest” cho một Xmen bất kì,… (yêu cầu quan trọng nhất)

## Vẽ sơ đồ

## Cấu trúc modal

Modal thì chỉ cần một cái để quản lý Xmen, lưu thông tin, “người yêu” các kiểu là được rồi.

File `./models/Xmen.coffee`

 
    <pre class="prettyprint">mongoose = require 'mongoose'
    AutoIncrement = require 'mongoose-sequence'
    Schema = mongoose.Schema
    
    xMen = new mongoose.Schema {
        UID: Number
        name: String
        avatar: String
        like: Array #Luu UID nhung nguoi "tha tim"
        date:
            type: Date
            default: Date.now
    }
    xMen.plugin AutoIncrement, {inc_field: 'UID'}
    module.exports = mongoose.model('Xmen', xMen)

## Clone repo boilerplate

Như bác Bill đã dạy rồi, chọn cách ngắn nhất mà làm thôi các bác ạ ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/65f51c6b41112ac007ace7cf9f66e15e.png). Em có sẵn một bolderplate cho việc xây dựng API server của mình, các bác có thể tìm trên mạng hoặc tự làm riêng cho mình một cái. Khi nào cần thì `Git clone ...` là xong

Tôi chọn người lười biếng để làm những việc khó khăn. Bởi một người lười biếng sẽ tìm ra cách dễ dàng để làm việc đóBill Gate - Sama



Bolderplate của em <https://github.com/nlug/mt-bolderplate> nếu các bác muốn sử dụng. Nhớ Star cho em  nhé ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4e8a1167e4ebd4920705549439e77db2.png)

## Code

## Xử lý các Xmen

`POST /xmen` sẽ thêm một Xmen vào đội hình

 
    <pre class="prettyprint">app.get '/xmen', (req, res) ->
        Xmen.find().exec (error, data) ->
            res.json data

`GET /xmen` sẽ lấy danh sách tất cả các Xmen

 
    <pre class="prettyprint">app.post '/xmen', (req, res) ->
        if !req.body.name || !req.body.avatar
            res.end "Need more information"
        else 
            newXmen = new Xmen 
                name: req.body.name
                avatar: req.body.avatar
    
            newXmen.save (error) ->
                throw error if error
                res.status(201).json id: newXmen.UID

và `GET /:UID` là lấy thông tin Xmen có UID là 123 gì đấy

 
    <pre class="prettyprint">app.get '/:id', (req, res) ->
        Xmen.findOne({UID: req.params.id}).exec (error, data) ->
            if data
                res.json data
            else
                res.status(404).end();

## Xử lý hành động “thả tim”

Route sẽ là `POST /:UID-cua-Xmen/Like` và `body.uid` của `request` sẽ lưu UID của người được thích

 
    <pre class="prettyprint">app.post '/:id/like', (req, res) ->
        Xmen.findOne({UID: req.params.id}).exec (error, data) ->
            if !data || error
                res.status(404)
            else
                checker = data.like.indexOf req.body.uid
                if (checker < 0)
                    # Chua tha tim
                    data.like.push req.body.uid
                else 
                    # Doi lai tim
                    data.like.splice checker, 1
                data.markModified 'like'
                data.save()
                
                res.status(201).end('OK');

## Xây dựng Logic cho route Suggest

Vâng, cái này là mục đích chính của chúng ta, nên cũng là bước khó nhất. Như đã nói ở phần 2, mình có đề xuất ra hai mô hình để lấy  danh sách và xếp hạng các Xmen được gợi ý.

![toptal-blog-image-1423052526266](http://cuthanh.com/wp-content/uploads/2016/08/toptal-blog-image-1423052526266.jpg)

Cả hai thuật toán đều cần một hàm tính sự tương đồng của hai nhân vật. Do đó mình quăng nó vào một hàm

 
    <pre class="prettyprint">getSameScore = (a, b) ->
        sum = _.union a, b
        return 0 if sum.length == 0
        intersection = _.intersection a, b
        return intersection.length/sum.length

Route cho việc lấy danh sách Gợi ý… của Xmen có UID sẽ là `GET /:UID/suggest`

**Thuật toán thứ 1** mà mình đưa ra

 
    <pre class="prettyprint">app.get '/:id/suggest', (req, res) ->
        Xmen.findOne({UID: req.params.id}).exec (error, curXmen) ->
            if !curXmen || error
                res.status(404)
            else 
                Xmen.find({UID: $ne: req.params.id}).lean().exec (error, others) ->
                    # tinh diem giong nhau
                    returnArray = []
                    for xmen in others
                        xmen.score = getSameScore(curXmen.like, xmen.like)
                        console.log "#{xmen.name} got score #{xmen.score}"
                        xmen.suggestScore = 0 if !xmen.suggestScore
                        if xmen.score > 0.2 # Diem toi thieu giong nhau de co the dua ra goi y
                            listSuggest = _.difference xmen.like, curXmen.like
                            console.log "#{xmen.name} like differ list", listSuggest
                            for people in listSuggest
                                if people != curXmen.UID && curXmen.like.indexOf(people) # Loai bo nhung thang da thich ra
                                    index = _.findIndex(others, {UID: people})
                                    console.log "Calculate score for #{people.name} index at #{index}"
                                    if (others[index].suggestScore) 
                                        others[index].suggestScore += xmen.score;
                                    else
                                        others[index].suggestScore = xmen.score;
                                    console.log "#{xmen.name} suggest #{others[index].name} for #{others[index].suggestScore}"
                    # Sap xep theo diem
                    sorted = _.sortBy others, ['suggestScore','score'] # sap xep theo suggestScore roi toi score
                    sorted = _.reverse sorted # mac dinh no sap tu be den lon, minh doi nguoc lai
                    # Loc ket qua
                    sorted = _.reject sorted, (xmen) ->
                        return (xmen.suggestScore == xmen.score == 0) || curXmen.like.indexOf(xmen.UID) >= 0
                    
                    res.json sorted

Mình sẽ giải thích đống code trên cho các bác

1. Đầu tiên là phải lấy thông tin nhân vật Xmen đang xét tới rồi – `curXmen`.
2. Tiếp theo lấy danh sách các bác dị nhân còn lại
3. Tính điểm giống nhau của từng người trong danh sách với nhân vật `curXmen`
4. Nếu nhân vật `Xmen` này có điểm giống nhau với `curXmen` > 0.2 (Tùy các bác thiết lập) thì sẽ lấy danh sách những thằng `Xmen` like mà thằng `curXmen` không
5. Lưu điểm “Gợi ý – `xmen.suggestScore`“
6. Sắp xếp theo điểm “Gợi ý – `xmen.suggestScore`“, nếu trung nhau thì sắp xếp theo điểm “Giống nhau – `xmen.score`

Lưu ý ở trên là điểm Gợi ý – `suggestScore` là cộng dồn của điểm Giống nhau – `score` mà mỗi người gợi ý. Nói vầy cho dể hiểu nhé: A gợi ý B với 0.69 điểm. C cũng gợi ý B với số điểm 0.96 điểm. Vậy số điểm gợi ý mà B nhận được là 1.65.

**Thuật toán thứ 2** mà mình tham khảo

 
    <pre class="prettyprint">app.get '/:id/suggest2', (req, res) ->
        Xmen.findOne({UID: req.params.id}).exec (error, curXmen) ->
            if !curXmen || error
                res.status(404)
            else 
                Xmen.find({UID: $ne: req.params.id}).lean().exec (error, others) ->
                    # tinh diem giong nhau
                    returnArray = []
                    for xmen in others
                        xmen.totalScore = 0;
                        xmen.totalLike = 0;
                        if _.indexOf(curXmen.like, xmen.UID) < 0 # Da thich roi thi khong tinh diem cho thang nay nua
                            console.log "Okey let check #{xmen.name}"
                            for people in others
                                if people.UID != xmen.UID && _.indexOf(people.like, xmen.UID) >= 0
                                    console.log "check #{xmen.name} with #{people.name}"
                                    xmen.totalScore += getSameScore(curXmen.like, people.like)
                                    console.log "#{xmen.name} got totalscore #{xmen.totalScore}"
                                    xmen.totalLike += 1;
                            #if xmen.totalLike == 0 #ignore if no one like this men
                            if (xmen.totalLike > 0)
                                xmen.score = xmen.totalScore/xmen.totalLike
                                console.log "#{xmen.name} got score #{xmen.score}"
                                returnArray.push (xmen);
                    # Sap xep theo diem
                    sorted = _.sortBy(returnArray, ['score','totalLike']) # sap xep theo score
                    sorted = _.reverse(sorted) # mac dinh no sap tu be den lon, minh doi nguoc lai
                    res.json sorted

Giải thích

1. Đầu tiên là phải lấy thông tin nhân vật Xmen đang xét tới rồi.
2. Tiếp theo lấy danh sách các bác dị nhân còn lại
3. Vì công thức tính điểm gợi ý cho thanh niễn A sẽ là `Tổng điểm giống nhau của các nhân vật thích A / Tổng nhân vật thích A`. Nên ta cần tính được các dữ kiện yêu cầu
4. Đọc code nghiên cứu đi, em lười giải thích rồi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

![toptal-blog-image-1423052594582](http://cuthanh.com/wp-content/uploads/2016/08/toptal-blog-image-1423052594582.jpg)

Bộ source Api server của mình <https://github.com/nlug/Professor-x>

Okey vậy là xong 2 thuật toán khó nhất. Đố các bác phát hiện ra điều gì kì lạ trong 2 thuật toán đấy đấy. Bài tiếp theo mình sẽ xây dựng Web App để ứng dụng các API mình đã viết hôm nay.