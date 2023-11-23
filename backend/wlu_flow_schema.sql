create database if not exists `wlu_flow_db`;

use `wlu_flow_db`;

create table if not exists `courses_list` (
  `course_id` varchar(5) not null,
  `course_name` varchar(255) default null,
  `course_link` varchar(255) default null,
  `course_description` varchar(255) default null,
  primary key (`course_id`)
);


create table if not exists `course_reviews`(
    `review_id` int primary key auto_increment,
    `course_id` varchar(5) not null,
    `review_author` varchar(255) not null,
    `review_text` varchar(255) not null,
    `bird_rating` int not null,
    `useful_rating` int not null,
    `writing_rating` int not null,
    `rating_birthdate` timestamp default current_timestamp,
    foreign key (`course_id`) references courses_list(`course_id`) on delete cascade 
);

create table if not exists `course_instructors`(
    `instructor_id` int primary key auto_increment,
    `course_id` varchar(5) not null,
    `bird_rating` int not null,
    `fun_rating` int not null,
    `bricked_rating` int not null,
    foreign key (`course_id`) references courses_list(`course_id`) on delete cascade
);
