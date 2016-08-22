import * as O from './objects';


export const NEW = "new";

/**
 * Is the entity being created?  True unless the _id of entity is a positive number,
 * which is what indicates a persistent entity.
 * 
 * @param entity
 */
export const isCreating = ( entity ) => ( entity._id==null || entity._id <= 0 );


/**
 * A simple generator of IDs that can be assigned to new objects,
 * until they are persisted.   Rezometry likes temporaries to be negative.
 */
let generatedID = -1;
export const nextID = () => generatedID--;


export const numericID = ( textID ) => {
    if ( typeof textID === "number" ) {
        return textID;
    }
    if ( typeof textID === "string" ) {
        try {
            return Number( textID );
        }
        catch ( err ) {
            console.warn( "Invalid Entity ID: ", textID );
        }
    }
    return 0;
};

/**
 * Finds the entity in entities that has the given id.
 * the comparison is made to the entity's _id property.
 * @param entities
 * @param id
 */
export const findByID = ( entities, id ) => entities.find( e => e._id == id );

/**
 * Finds the token in tokens that has the given key.
 * the comparison is made to the entity's _id property.
 * @param tokens array of tokens (or summaries)
 * @param key of the token to be found
 * @returns the token
 */
export const findByKey = ( tokens, key ) => tokens.find( e => e.key == key );


/**
 * Returns an array that excludes the token with given key from tokens.
 * @param tokens array of tokens (or summaries)
 * @param key of the token to be found
 * @returns a new array
 */
export const removeByKey = ( tokens, key ) => {
    const i = indexByKey( tokens, key );
    return O.removeIndex( i, tokens );
};


/**
 * Finds the index of the entity in entities that has the given id.
 * @param entities
 * @param id
 */
export const indexByID = (entities, id ) => entities.findIndex( e => e._id == id );

/**
 * Finds the index of the tokens in entities that has the given id.
 * @param tokens
 * @param key
 */
export const indexByKey = (tokens, key ) => tokens.findIndex( e => e.key == key );
