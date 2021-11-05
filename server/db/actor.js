const db = require('./index')

async function createActorTable(){
    try {
        const sqlActor = `
        CREATE TABLE IF NOT EXISTS actor
        (
            actor_id serial,
            first_name character varying(45) NOT NULL,
            last_name character varying(45) NOT NULL,
            last_update timestamp without time zone NOT NULL DEFAULT now(),
            PRIMARY KEY (actor_id)
        )
        
        TABLESPACE pg_default;
    
        
        CREATE SEQUENCE IF NOT EXISTS actor_actor_id_seq
            INCREMENT 1
            START 1
            MINVALUE 1
            MAXVALUE 9223372036854775807
            CACHE 1;
        DELETE FROM film_actor
        `
        await db.query(sqlActor)
    }
    catch(error){
        console.log(error);
    }
}

module.exports = createActorTable