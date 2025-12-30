function makeid(l) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < l; i++) {
        // Generate a random index based on the length of the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        
        // Append the character at that index to our result string
        result += characters.charAt(randomIndex);
    }
    
    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));