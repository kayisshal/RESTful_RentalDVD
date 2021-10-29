const db = require('./index')
const TABLE_NAME =  'actor'
const SEQUENCE_NAME =  'actor_actor_id_seq'

async function createActorTable(){
    try {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${TABLE_NAME}
        (
            actor_id serial,
            first_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
            last_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
            last_update timestamp without time zone NOT NULL DEFAULT now(),
            CONSTRAINT actor_pkey PRIMARY KEY (actor_id)
        )
        
        TABLESPACE pg_default;
        
        CREATE INDEX idx_actor_last_name
            ON ${TABLE_NAME} USING btree
            (last_name COLLATE pg_catalog."default" ASC NULLS LAST)
            TABLESPACE pg_default;
        
        CREATE TRIGGER last_updated
            BEFORE UPDATE 
            ON ${TABLE_NAME}
            FOR EACH ROW
            EXECUTE FUNCTION public.last_updated();
        
        CREATE SEQUENCE ${SEQUENCE_NAME}
            INCREMENT 1
            START 1
            MINVALUE 1
            MAXVALUE 9223372036854775807
            CACHE 1;
        `
        await db.query(sql)
    }
    catch(error){
        console.log(error);
    }
}

module.exports = createActorTable