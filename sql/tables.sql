create table client (
    id serial not null primary key,
    first_name text not null,
    last_name text not null,
    phone_number int not null
);

create table treatment (
    id serial not null primary key,
    type text not null,
    code text not null,
    price decimal(19,5)

);

create table stylist (
    id serial not null primary key,
    first_name text not null,
    last_name text not null,
    phone_number int not null,
    commision_percentage decimal (8,3)
);

create table booking (
    id serial not null primary key,
    booking_date int not null,
    booking_time  time,
    client_id int not null,
    treatment_id int not null,
    stylist_id int not null,
    foreign key (client_id) references client(id),
    foreign key (treatment_id) references treatment(id),
    foreign key (stylist_id) references stylist(id)
);



