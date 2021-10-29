-- Table: public.actor

-- DROP TABLE public.actor;

CREATE TABLE IF NOT EXISTS public.actor
(
    actor_id integer NOT NULL DEFAULT nextval('actor_actor_id_seq'::regclass),
    first_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
    last_update timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT actor_pkey PRIMARY KEY (actor_id)
)

TABLESPACE pg_default;

ALTER TABLE public.actor
    OWNER to postgres;
-- Index: idx_actor_last_name

-- DROP INDEX public.idx_actor_last_name;

CREATE INDEX idx_actor_last_name
    ON public.actor USING btree
    (last_name COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

-- Trigger: last_updated

-- DROP TRIGGER last_updated ON public.actor;

CREATE TRIGGER last_updated
    BEFORE UPDATE 
    ON public.actor
    FOR EACH ROW
    EXECUTE FUNCTION public.last_updated();