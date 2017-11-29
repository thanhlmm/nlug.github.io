---
# http://learn.getgrav.org/content/headers
title: Express và Sails? Cái nào tốt hơn (Phần 1)
slug: express-va-sails-cai-nao-tot-hon-phan-1
# menu: Express và Sails? Cái nào tốt hơn (Phần 1)
date: 18-07-2016
published: true
publish_date: 18-07-2016
# unpublish_date: 18-07-2016
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
    tag: [express,Nodejs,sails,so sánh,express,Nodejs,sails,so sánh]
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

Xin chào các bạn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png), hôm nay mình sẽ giới thiệu đến các bạn 2 framework khá phố biến của **Nodejs** là **Express** và **Sails**. Thằng nào ngon hơn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aa9d71a4e03ce5ef22cd34781a848aae.png), nên sài thằng nào bây giờ?

# Express

Thằng này thì quá kinh điển rồi, nếu đã tìm hiểu đến Nodejs hẳn các bác cũng đã từng nghe qua **Express**. Thằng này là framework của node giúp ta dễ dàng xây dựng một Restful server, hoặc giống như một web application (Mình chả biết giải thích sau nhưng theo mình hiểu là xây dựng một cái giống với WordPress, bác nào thử code coi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1a5e76df614241c5f0257f9bb3d73b19.png))

> ## Express
> 
> Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)

Nói cách khác thì thằng này là như là ổng tổ của các framework khác ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png) bao gồm cả **Sails** mà mình đã đề cập ở tít.

Một số framework build giựa trên **Express**

- **[Feathers](http://feathersjs.com/)**: Build prototypes in minutes and production ready real-time apps in days.
- **[ItemsAPI](https://www.itemsapi.com/)**: Search backend for web and mobile applications built on Express and Elasticsearch.
- **[KeystoneJS](http://keystonejs.com/)**: Website and API Application Framework / CMS with an auto-generated React.js Admin UI.
- **[Kraken](http://krakenjs.com/)**: Secure and scalable layer that extends Express by providing structure and convention.
- **[LEAN-STACK](http://lean-stack.io/)**: The Pure JavaScript Stack.
- **[LoopBack](http://loopback.io/)**: Highly-extensible, open-source Node.js framework for quickly creating dynamic end-to-end REST APIs.
- **[MEAN](http://mean.io/)**: Opinionated fullstack JavaScript framework that simplifies and accelerates web application development.
- **[Sails](http://sailsjs.org/)**: MVC framework for Node.js for building practical, production-ready apps.

Trang chủ <http://expressjs.com>

# Sails

> ## What Is Sails.js?
> 
> Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture. It’s especially good for building chat, realtime dashboards, or multiplayer games; but you can use it for any web application project – top to bottom.

Như đã nói ở trên, thằng này được xây dựng theo Express. Nghĩa là

**Sails** = **Express** + thêm một cục chức năng mới + thêm cách tổ chức file = Framework mới ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/aeabbb614c88c9f1e09869596f736441.png)

Vậy không sài bà nó **Sails** cho rồi, vừa đẹp trai như **Express** mà lại giàu có nữa (soái ca ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/071f21ef208c6035f370d855d4767207.png))

Trang chủ <http://sailsjs.org>

*Sau đây mình sẽ so sánh mốt số khả năng làm việc của hai thằng này để các bác hình dung nên dùng thằng nào nhé.*

## RESTful server

> RESTful
> 
> REST định nghĩa các quy tắc kiến trúc để bạn thiết kế Web services chú trọng vào tài nguyên hệ thống, bao gồm các trạng thái tài nguyên được định dạng như thế nào và được chuyển tải qua `HTTP` thông qua số lượng lớn người dùng và được viết bởi những ngôn ngữ khác nhau. Em copy trên mạng đấy, khó hiểu vl các bác đừng đọc ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/6ef225eb223b6df4166606abf92bde83.png)

Theo em thì đơn giản là nó quy chuẩn trạng thái và định nghịa của một API server. VD khi bác lấy thông tin thì dùng method `GET`, tạo mới là `POST`, sửa là `PUT` và xóa là `DELETE`. Kết quả gửi đi gửi về thường là **JSON**. Thôi kệ nó đi nó muốn là gì kệ nó

Đối với **Express**, nếu muốn xây dựng một **RESTful** server thì thường em làm các bước sau.

1. Thiết kế model (thường sài `mongoose`)
2. Viết từng controller nếu nhu cầu phức tạp, không thì em thả vào app.js luôn ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/4496791ae48b92a081a170ec56c63f89.png)
3. Require các cái ở trên vào `app.js`
4. Cài đặt mấy cái middleware, kết nối với `mongodb`
5. `node app.js`
6. Error ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/7a77f3bca77f8126d0cb4608460a3a0d.png)

Nhìn có vẻ khá mệt hả các bác

Còn nếu sài **Sails** thì dễ dàng hơn nhiều

1. `sails generate api flash`
2. Xong

Với việc có chức năng gọi là “Blueprints”, nó khiến cho công việc còn lại cực kì dễ dàng, **Sails** cũng hỗ trợ lưu data dạng file ngay lúc đầu thiết lập nên các bác cũng không phải mệt mỏi thiết lập kết nối với db server mà nếu có cũng nhanh hơn **express** nhiều. Đảm bảo ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/a2b20fedb8f910c6d52ffeb6a30af1b8.png)

Tuy nhiên mình thích **Express** hơn và khuyên các bác nên dùng **Express** cùng với em. Ơ điên à ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/1806c3404f8f66e0435009954ee1379e.png), rõ ràng sài **Sails** ngon hơn nhiều mà, nhanh chóng y như lời bác Bill-san căn dặn.

Tôi chọn người lười biếng để làm những việc khó khăn. Bởi một người lười biếng sẽ tìm ra cách dễ dàng để làm việc đóBill Gate - San



Khác biệt ở chỗ này này các bác.

Các bác tử chạy `node app.js` với Express và `sails lift` với Sails thử xem.

![expressvssails](http://cuthanh.com/wp-content/uploads/2016/07/expressvssails.png)

**Express** khởi động nhanh hơn! Đơn giản vì **Express** là framework cực kì gọn nhẹ, các bác thích có chức năng gì thì tự đi mà thêm vào ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png) trong khi đó **Sails** lại ôm đồm quá nhiều chức năng mà có khi bạn chưa sử dụng tới, nó khiến cho **sails** trở nên nặng nề. Và mình cũng hay có thói quen Combo `sửa vài ba kí tự`, `Ctrl + S`, `node app.js`, `F5`, `vẫn lỗi`, `quay lại bước đầu` ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/0dd17a12d85d368fd9f09090b1a961a7.png). Nên dù chênh lệnh nhau không quá lớn cũng khiến cho mình cảm thấy khó chịu. Nhưng mà xây dựng trên **Express** lằng nhằng lắm, tới tận 6 bước cơ mà. Thực sự nhìn to lớn vậy thôi chứ nhanh lắm.

Thiết kế model (`./model/User.js`)

 
    <pre class="prettyprint">var AutoIncrement, Schema, mongoose, shopSchema;
    
    mongoose = require('mongoose');
    
    AutoIncrement = require('mongoose-sequence');
    
    Schema = mongoose.Schema;
    
    shopSchema = new mongoose.Schema({
      _id: Number,
      name: {
        type: String,
        require: [true, "Missing Shop's name"]
      },
      fb: String,
      fbToken: String,
      ship: Array,
      setting: Schema.Types.Mixed,
      active: Boolean,
      user: {
        type: Number,
        ref: 'User'
      },
      date: {
        type: Date,
        "default": Date.now
      }
    }, {
      _id: false
    });
    
    shopSchema.plugin(AutoIncrement, {
      id: 'shopID'
    });
    
    module.exports = mongoose.model('Shop', shopSchema);


Viết controller (`./controllers/user.js`)

 
    <pre class="prettyprint">var Shop;
    
    Shop = require('../models/Shop');
    
    module.exports = {
      shopsGET: function(req, res) {
        return Shop.find().exec(function(error, shops) {
          return res.ok(shops);
        });
      },
      shopGET: function(req, res) {
        return Shop.findOne({
          _id: req.params.id
        }).exec(function(error, shops) {
          if (error) {
            return res.error(error);
          } else if (shops == null) {
            return res.notfound();
          } else {
            return res.ok(shops);
          }
        });
      },
      shopPOST: function(req, res) {
        var shop;
        shop = new Shop(req.body.data);
        return shop.save(function(error, data) {
          if (error) {
            return res.error(error);
          } else {
            return res.created();
          }
        });
      },
      shopPUT: function(req, res) {
        if (req.params.id != null) {
          delete req.body.data._id;
          return Shop.findOneAndUpdate({
            _id: req.params.id
          }, req.body.data).exec(function(error, shop) {
            if (error) {
              return res.error(error);
            } else if (shop == null) {
              return res.notfound();
            } else {
              return res.ok();
            }
          });
        } else {
          return res.error('Missing shopID');
        }
      },
      shopDEL: function(req, res) {
        if (req.params.id != null) {
          return Shop.findOneAndRemove({
            _id: req.params.id
          }).exec(function(error, shop) {
            if (error) {
              return res.error(error);
            } else if (shop == null) {
              return res.notfound();
            } else {
              return res.ok();
            }
          });
        } else {
          return res.error('Missing shopID');
        }
      }
    };


Sao dài thế. Thực ra nó chỉ dài hơn **Sails** ở đoạn model 4-5 dòng thôi. Không có của `sails generate api flash` là chạy luôn đâu, tin người vl ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/080861c0c12b3c87e3cb77a2d91754b8.png). Thực ra cũng chạy được nhưng áp dụng vào thực tế chắc chắn các bạn phải sửa lại từ model đến controller cho phù hợp thôi.

Vậy có thể thấy khi viết bằng **Express** thì các bác chỉ dài hơn **Sails** khoảng

- 4-5 dòng ở Model
- 4-5 dòng dể require Model và Controller vào app.js
- 10-15 dòng thêm middlewarve, kết nối db, thiết lập http server

Tổng cộng lại 25 dòng, các bác hoàn toàn có thể lưu lại file app.js để dành, coi như là framework riêng của các bác đấy, upload nên Github rồi nổi tiếng thôi ![](http://cuthanh.com/wp-content/uploads/lm-easy-emoticons/emoticons-custom/9ea612b30dc12f06939a01c96f151dc3.png). Sau này chỉ cần sửa lại 4-5 dòng là áp dụng cho project khác được rồi đúng không. Vừa có framework riêng, vừa chạy nhanh gọn lẹ. Vì vậy nếu xây dựng RESTful server thì các bác nên dùng Express giống em đi.

 

Mời các bạn đọc tiếp phần 2 [Express và Sails? Cái nào tốt hơn (Phần 2)](http://cuthanh.com/nodejs/express-va-sails-cai-nao-tot-hon-phan-2)