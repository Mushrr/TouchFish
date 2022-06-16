create table if not exists user (
    uuid varchar(16),
    nickname varchar(16),
    pwd varchar(16),
    sex int,
    uDescribe text,
    userImg varchar(256),
    PRIMARY KEY(uuid)
) comment='用户信息，记录用户的昵称，头像，等等信息';
