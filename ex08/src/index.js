function getUsername(email) {
    var username = '';
    // Only change code below this line
    switch (email) {
        case 'user1@gmail.com':
            username = 'user1';
            break;
            case 'user2@gmail.com':
            username = 'user2';
             break;
            case 'user3@gmail.com':
            username = 'user3';
            break;
            case 'user4@gmail.com':
            username = 'user4';
            break;
            case 'user5@gmail.com':
            username = 'user5';
            break;
            case 'user6@gmail.com':
            username = 'user6';
            break;
            case '':
            username = 'undefined'
        // Only change code above this line
    }
    return username;
}

console.log(getUsername(""))
getUsername();
module.exports = getUsername;