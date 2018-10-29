//increment
export function increment( index ) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment( postiD, author, comment ) {
  return {
    type: 'ADD_COMMENT',
    postiD, 
    author, 
    comment 
  }
}

//remove comment
export function increment( postiD, id ) {
  return {
    type: 'REMOVE_COMMENT',
    postiD,
    id
  }
}