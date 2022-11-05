alter table "public"."menu" drop constraint "menu_pkey";
alter table "public"."menu"
    add constraint "menu_pkey"
    primary key ("id");
