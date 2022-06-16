-- wishlist


create table wishlist (
    wInd varchar(16),
    wImg varchar(256),
    wTitle text,
    wDescribe text,
    parentWInd varchar(16),
    uuid varchar(16 ),
    
    comment '定义愿望单List, 愿望单将于其他的愿望单关联起来，最顶层的愿望单将作为一级索引，存在父愿望单的愿望单将作为二级或者n级愿望单层层递进'
)
