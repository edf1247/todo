create table todo (
    id BIGSERIAL NOT NULL,
    title VARCHAR(100) NOT NULL,
    descript VARCHAR(500) NOT NULL,
    priority VARCHAR(6) NOT NULL,
    deadline DATE NOT NULL,
    completed VARCHAR(3) NOT NULL
);



insert into todo (id, title, descript, priority, deadline, completed) values ('1', 'test', 'test', 'low', '2024-07-10', 'yes');

