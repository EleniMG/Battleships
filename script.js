
const shipFactory = (length) => {

    return {length, }
}



let hits = 0
    
    const hit = () => hits++

    const isSunk = () => length === hits