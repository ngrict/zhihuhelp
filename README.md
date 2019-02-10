#   知乎助手 with TS

#   项目目标


1.  基于TS
2.  搭配图形界面
3.  通过抓取知乎接口将指定专栏转换为epub电子书

#   路线图
1.  基础功能
    - [x]    抓取用户回答
    - [x]    导出用户回答
    - [ ]    抓取收藏夹
    - [ ]    导出收藏夹
    - [ ]    抓取话题精华回答
    - [ ]    导出话题精华回答
    - [x]    抓取专栏文章
    - [x]    导出专栏文章
    - [x]    抓取用户行为记录
    - [x]    导出用户点赞的所有文章/回答
    - [ ]    使用基础命令, 派发进程
2.  扩展功能
    - [x]    导出为单页HTML
    - [ ]    导出为epub
    - [ ]    按赞同数/创建时间 正序/倒序 导出文章/答案
    - [ ]    添加升级检测, 从服务器获取cookie
    - [ ]    添加图形界面, 利用Electron创建图形界面/生成命令配置
3.  todo
    - [x]    将type声明改为使用namespace形式进行声明
    - [x]    将view改为使用类继承方式进行实现
    - [x]    输出目录结构
    - [x]    当用户回答为空时, 需要跳过渲染环节

#   epub库功能
目前没有较好的epub生成库, 自己实现一个
待实现功能
1.  自动生成目录

#   代码规范
1.  变量命名规范
    1.  类型统一使用namespace方式声明, 导入时使用`Type + xxx`形式进行导入
    2.  Model导入时统一使用`M + xxx`形式进行导入
    3.  View导入时统一使用`View + xxx`形式进行导入
    4.  async函数前统一添加`async`前缀, 以和正常函数进行区分