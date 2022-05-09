/**
 * Write a function that takes an array of strings as input,
 * iterates over the array to remove leading hashtags,
 * and returns an array of strings
 *
 * @param {string[]} tweets - ['#javascript', '#python', 'c#', 'java']
 * @returns {string[]} ['javascript', 'python', 'c#', 'java']
 */

 const tweets = ['#javascript', '#python', 'c#', 'java']


 function removeHash (arr) {
    arr.map((el) => {
        const splitEl = el.split('');
        console.log(splitEl);
        
    })
 }

 removeHash(tweets)