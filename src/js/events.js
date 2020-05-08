// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

var appEvents = new Framework7.Events();

function initializeEvents(){
    appEvents.on('languageChanged', function(lang){
        localStorage.setItem('lang', lang.toString())
        console.log(`changed language to ${lang}`)
    })

    appEvents.on('user:login', function(user){
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(`changed language to ${lang}`)
    })

    appEvents.on('user:logout', function(){
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('user');
        console.log(`Logged Out...`)
    })
}

function getLanguage(){
    var lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ar';
    return lang;
}

export default appEvents;
export {initializeEvents, getLanguage}