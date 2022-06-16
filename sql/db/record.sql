
create table if not exists recordType (
    typename varchar(16),
    category varchar(32),
    rules JSON,
    PRIMARY KEY(typename, category)
    
)comment='记录类型的数据表，定义数据的类型于规则';

create table if not exists record (
    rind varchar(16),
    rtype varchar(16),
    rcategory varchar(32),
    rname text,
    rtime date,
    rdefault JSON,
    rrequired int,

    parentGInd varchar(16), 
    PRIMARY KEY(rind)
    
)comment='记录表中的记录项，规定记录的类型，是否必须，记录的时间。';

create table if not exists recordContent (
    rind varchar(16),
    textcontent JSON,
    url varchar(256),
    PRIMARY KEY(rind)
) comment='记录项的各个实例数据，使用rind 与规则绑定';
