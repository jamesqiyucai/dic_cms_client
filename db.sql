create type integral_span as
(
	begin integer,
	"end" integer
);


create table example_control
(
	id bigserial not null
		constraint example_control_pkey
			primary key,
	current_version integer,
	next_translation_id integer
);


create table example
(
	id bigint not null
		constraint example_pkey
			primary key
		constraint example_id_fkey
			references example_control,
	text text,
	format_italic integral_span[],
	note text,
	comment text
);


create table example_snapshot
(
	id bigint not null
		constraint example_snapshot_id_fkey
			references example_control,
	version integer not null,
	text text,
	format_italic integral_span[],
	note text,
	comment text,
	keywords text[],
	constraint example_snapshot_pkey
		primary key (id, version)
);


create table example_translation_control
(
	example_id bigint not null,
	id integer not null,
	current_version integer,
	recency boolean,
	constraint example_translation_control_pkey
		primary key (example_id, id)
);


create table example_translation
(
	example_id bigint not null,
	id integer not null,
	text text,
	constraint example_translation_pkey
		primary key (example_id, id)
);


create table example_keyword
(
	example_id bigint not null
		constraint example_keyword_example_id_fk
			references example,
	keyword text not null
		constraint example_keyword_pk
			primary key
);


create table source
(
	example_id bigint not null
		constraint source_pkey
			primary key,
	type text not null,
	pagination text,
	place_of_publication text,
	year_of_publication integer,
	year_of_initial_publication integer,
	author text,
	title text,
	title_of_periodical text,
	publication_date date
);


create table proposal
(
	id bigserial not null
		constraint proposal_pk
			primary key,
	status text,
	document text,
	initiator integer,
	reviewer integer
);

alter table example_keyword drop constraint example_keyword_pk;

alter table example_keyword
   add constraint example_keyword_pk
      primary key (example_id, keyword);
