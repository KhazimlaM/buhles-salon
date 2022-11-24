insert into client(first_name, last_name, phone_number) values ('Khazimla', 'Mahomana', 0846569521);
insert into client(first_name, last_name, phone_number) values ('Amita', 'Mgweba', 0212356566);
insert into client(first_name, last_name, phone_number) values ('Amanda', 'Teys', 0219656666);
insert into client(first_name, last_name, phone_number) values ('Tiffany', 'Haddish', 0219656666);
insert into client(first_name, last_name, phone_number) values ('Lulo', 'Coffee', 0219656666);
insert into client(first_name, last_name, phone_number) values ('Cafe', 'Black', 0219656666);
insert into client(first_name, last_name, phone_number) values ('Hendrix', 'Mane', 0219656666);


insert into stylist(first_name, last_name, phone_number, commision_percentage) values ('Siya', 'Sonjica', 0216523217, 0.15 );
insert into stylist(first_name, last_name, phone_number, commision_percentage) values ('Emily', 'Vorgers', 0742319856, 0.12);
insert into stylist(first_name, last_name, phone_number, commision_percentage) values ('Dreya', 'Hendrix', 0796538974, 0.17);

insert into treatment(type, price, code) values ('Pedicure', '175', 'BJuP');
insert into treatment(type, price, code) values ('Manicure', '215', 'KloJ');
insert into treatment(type, price, code) values ('Make Up', '185', 'MnUP');
insert into treatment(type, price, code) values ('Brows & Lashes', '240', 'RtyP');


insert into booking(booking_date, booking_time ,client_id, treatment_id, stylist_id ) values (11-02-2022, '14:00', 4, 1, 2);
insert into booking(booking_date, booking_time ,client_id, treatment_id, stylist_id ) values (12-08-2022, '16:00', 10, 1, 2);



