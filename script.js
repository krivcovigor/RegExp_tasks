function getDate(obj) {                                    // 1. First task.
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let birthNow = new Date(now.getFullYear(), obj.getMonth(), obj.getDate());
    let age = now.getFullYear()-obj.getFullYear();
    if(today < birthNow) {
        age -= 1;
    }
    return age;
}

const birthday22 = new Date(2000, 9, 19);
const birthday23 = new Date(2000, 9, 22);

getDate(birthday22);
getDate(birthday23);

function getWeekDay(obj) {                                   // 2. Second task.
    let myWeekDay = obj.getDay();
    let arr = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return arr[myWeekDay];
}

getWeekDay(new Date());

function getAmountDaysToNewYear() {                           // 3. Third task.
    let now = new Date();
    let beginYear = new Date(now.getFullYear(), 0);
    let year = now.getFullYear();
    if((new Date(year + 1, 0)-new Date(year, 0))/86400000 === 365) {
        return 365 - (Math.floor((now - beginYear)/86400000));
    }else if((new Date(year + 1, 0)-new Date(year, 0))/86400000 === 366) {
        return 366 - (Math.floor((now - beginYear)/86400000));
    }
    return false;
}

getAmountDaysToNewYear();

function getProgrammersDay(year) {                            // 4. Fourth task.
    let choosedYear = new Date(year, 0);
    let myDate = new Date(choosedYear.setDate(256));
    let formatDate = 
                    `${myDate.getDate()} ${myDate.toLocaleString(
                        'en',
                        { month:'short'}
                    )}, ${myDate.getFullYear()} (${getWeekDay(myDate)})`;
    return formatDate;
}

getProgrammersDay(2020);                                           

function howFarIs(str) {                                      // 5. Fifth task.
    let now = new Date();
    let dayNum = now.getDay();
    let leftDays = 0;
    let arr = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    function general() {
        for(let day in arr) {
            if(new RegExp(`^${arr[day]}$`, "iu").test(str)) {
                dayNum = day;
            }
        }

        /*
         *Switch(true) {
         *case((/^sunday$/iu).test(str)): { dayNum = 0;
         *  break; }
         *case((/^monday$/iu).test(str)): { dayNum = 1;
         *  break; }
         *case((/^tuesday$/iu).test(str)): { dayNum = 2;
         *  break; }
         *case((/^wednesday$/iu).test(str)): { dayNum = 3;
         *  break; }
         *case((/^thursday$/iu).test(str)): { dayNum = 4;
         *  break; }
         *case((/^friday$/iu).test(str)): { dayNum = 5;
         *  break; }
         *case((/^saturday$/iu).test(str)): { dayNum = 6;
         *  break; }
         *}
         */
        if(dayNum == now.getDay()) {
            return `Hey, today is ${arr[dayNum]} =)`;
        }
        if(dayNum > now.getDay()) {
            leftDays = dayNum - now.getDay();
        }else {
            leftDays = 7 - (now.getDay() - dayNum);
        }  
        return `It's ${leftDays} day(s) left till ${arr[dayNum]}.`; 
    }
    return general();
}

howFarIs('SUNDAY');

function isValidIdentifier(str) {                             // 6. Sixth task.
    let bool = false;
    if((/^[a-z$_]{1}[\w$]{0,}$/iu).test(str)) {
        bool = true;
    }
    return bool;
}

isValidIdentifier('myVar!');
isValidIdentifier('myVar$');
isValidIdentifier('myVar_1');
isValidIdentifier('1_myVar');

function capitalize(str) {                                   // 7. Seventh task.
    return str.replace(/\b[a-z]/igu, (a) => a.toUpperCase());
}

const testStr = "My name is John Smith. I am 27."; 
capitalize(testStr);

function isValidAudioFile(str) {                             // 8. Eighth task.
    let bool = false;
    if((/^[a-z]+\.(?<music>mp3|flac|alac|aac)$/iu).test(str)) {
        bool = true;
    }
    return bool;
}

isValidAudioFile('file.mp4');
isValidAudioFile('my_file.mp3');
isValidAudioFile('file.mp3');

function getHexadecimalColors(str) {                         // 9. Ninth task.
    let arr=
        str.match(/(?<color>#[a-f0-9]{6}\b)|(?<orcolor>#[a-f0-9]{3}\b)/giu)||[];
    return arr;
}

const testString = "color: #3f3; background-color: #AA00ef; and: #abcd"; 
getHexadecimalColors(testString);
getHexadecimalColors("red and #0000");

function isValidPassword(str) {                             // 10. Tenth task.
    let bool = false;
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/u).test(str)) {
        bool = true;
    }
    return bool;
}

isValidPassword('agent007');  // False
isValidPassword('AGENT007'); // False (no lowercase letter) 
isValidPassword('AgentOOO'); // False (no numbers) 
isValidPassword('Age_007'); // False (too short) 
isValidPassword('Agent007'); // True 
function addThousandsSeparators(strOrNum) {                // 11. Eleventh task.
    if(typeof strOrNum != String) {
        strOrNum = `"${strOrNum}"`;
    }
    let transform = strOrNum.replace(/(?<=\d{1,3})(?<thous>\d\d\d)/gu, ",$&");
    return transform;
}

addThousandsSeparators("1234567890");
addThousandsSeparators(1234567890);

function getAllUrlsFromText(str) {       // 12. Twelfth task.
    try {            
        if(str == "undefined") {
            throw new Error("error");
        }         
        let arr = str.match(/http(?<web>s)?:\/\/(?<web2>\w+\.)+\w+\//igu) || [];
        return arr;
    } catch(e) {
        console.log(e);
        return false;
    }
    
}

const text1=
"https://translate.google.com/ to translate words from  https://angular.io/  ";
const text2 = "JavaScript is the best language for beginners!";  
  
getAllUrlsFromText(text1);
getAllUrlsFromText(text2);
getAllUrlsFromText();