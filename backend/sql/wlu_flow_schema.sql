create database if not exists `wlu_flow_db`;

create table if not exists `wlu_flow_db`.`courses_list` (
  `course_id` varchar(5) not null,
  `course_name` varchar(255) default null,
  `course_link` varchar(255) default null,
  `course_description` varchar(255) default null,
  primary key (`course_id`)
);

