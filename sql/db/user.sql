create table user {
    uuid varchar(16),
    nickname varchar(16), -- 名称最长为16
    pwd varchar(16), -- 密码的加密形式
    sex varchar(1), -- 性别
    describe text, -- 自我介绍
    userImg varchar(256),

    PRIMARY KEY(uuid),
    comment '用户信息，记录用户的昵称，头像，等等信息'
}
