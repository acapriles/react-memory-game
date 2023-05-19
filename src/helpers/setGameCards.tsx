import { Card, Character } from "../interfaces/appInterfaces";

const cardNumbers = 12;

export const buildGameCards = ( characters: Character[] ) => {
    const randomCharacters = shuffle( characters );
    const uniqueCards = randomCharacters.slice( 0, cardNumbers / 2 )
      
    const updatedUniqueCards = uniqueCards.map(( item ) => ({
        //...item,
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        image: item.image,
        active: true,
    }));

    let gameCards = [];
    gameCards.push( ...updatedUniqueCards );
    gameCards.push( ...updatedUniqueCards );
    
    return gameCards;
}

const shuffle = ( array: Card[] ) => {
    let shuffled = array
    .map(value => ({ value, sort: Math.random() }))
    .sort( ( a, b ) => a.sort - b.sort )
    .map( ({ value }) => value )
  
    return shuffled;
}