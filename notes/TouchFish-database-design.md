# TouchFish-database-design

## 需求分析

1. 创建记录项
   
    比方说创建一个书籍阅读进度，可以不断的在这个event中更新进度，打卡当前完成了哪些事情，可以记录下来一些心得体会。
    
    进度的以时间或者次数为主要评价标准（需要有很好看的进度动画），记录满了之后也可以接着记录。
    
2. 创建子收藏夹
   
    可以自定义创建一个收藏夹，比方说一个收藏夹中存放阅读相关的任务，比方说我定义了一个Reading  List，在Reading List下，我就可以定义比方说《资本论》，《房思琪的初恋乐园》等等这些阅读记录项，在这些项中看完成情况。
    
3. 任务评价指标自定义
   
    不同的任务有不同的评价指标，
    
    在定义任务的时候，会带有其特定的评价指标，比方说阅读，有分神情况，阅读的页数，自我评价，是否满意等等，这些指标的数值类型不同，最终合在一起构建出你完成这个任务的心路历程。
    
4. 可视化展示
   
    一月或者一周或者主动查看近期阅读完成情况。
    
    记录部分可以直接使用数值 - 分类数据图，
    
    每个记录项可以按照时间顺序展示任务的评价指标。
    

### 数据字典

| 任务评价指标名称（允许相同） | string  | 用于标识任务评价指标 |
| --- | --- | --- |
| 任务评价指标索引（不同） | string | 唯一标识任务评价指标 |
| 任务评价指标展示方式  | string  | 是单项选择，还是多选，还是复选，还是文本框，还是… |
| 任务评价指标的限制 | string | 针对不同任务指标展示方式所对应的不同限制方式，多选为数组，文本框为placeholder |
| 记录的索引 | string | 唯一标识各个记录 |
| 记录的创建日期 |  date | 记录记录的创建日期 |
| 记录的名称 | string | 记录的名称 |
| 记录的打卡方式（次数，还是时间） | int | 不同的数值标识不同的打卡方式 |
| 当前打卡次数 | int | 打卡方式，打卡时间。。 |
| 每次的任务完成的评价 | string | 存放索引 |
| 任务评价实例 | string |  |
| 收藏夹时间 | date | 收藏夹创建时间 |
| 收藏夹名称 | string | 定义收藏夹的名称 |
| 收藏夹的索引 | string | 定义收藏夹的索引，唯一标识 |
| 收藏夹下的记录实例表 | string | 定义收藏夹下的记录信息 |

### 基本业务流程：

1. 创建记录
    1. 点击右上角 + 号，创建一个记录，在记录内部填写记录的名称，记录的表述信息，期待的记录方式（按照次数打卡，还是按照日期记录），添加记录评价项（点击+号添加更多记录信息，比方说添加一个自我状态评价指标[1 ~ 10分，给自己打几分]）
    2. 给各个记录项设置一个初始值，默认情况下都是第一个为初始值。
    3. 默认情况下添加到最外层List中，也可以设置添加到子List中
2. 删除记录
    1. 点击delete即可删除对应记录
3. 记录信息
    1. 点击某个记录
    2. 可以展示最近一段时间所有的记录信息，并且可以在右上角看到添加符号用以添加记录，记录此次打卡的情况，感受等等。
    3. 添加完成之后会自动展示在当前记录中。
4. 记录信息的删除
    1. 记录信息创建之后可以删除，可以修改
    2. 记录左滑删除
5. 收藏夹的创建
    1. 定义收藏夹的名称，收藏夹的简短介绍，收藏夹的背景。
    2. 点击确认创建好一个收藏夹标记在全局中
6. 收藏夹的删除
    1. 定义好收藏夹的之后可以左滑选中收藏夹删除
    2. 内部的记录也会被一并删除，不过还是可以找回的。

## 概念模型设计







## 逻辑模型设计

## 物理模型设计

## 部署