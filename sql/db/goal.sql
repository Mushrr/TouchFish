-- Goal 

create table goal (
    gInd varchar(16),
    gName text,
    gDescribe text,
    gImg varchar(256),
    gType int, -- 标记方式
    gCurr int, -- 当前完成情况
    gEnd  int, -- 最终完成情况

    parentWInd varchar(16),
    uuid varchar(16), -- user 的 UUID
    PRIMARY KEY(gInd),
    comment '目标项，用于规定任务完成方式，任务描述信息，以及当前完成情况，并与父wishlist 关联'
)
