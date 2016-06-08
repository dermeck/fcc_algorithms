/**
 * Check if a value is classified as a boolean primitive. Return true or false.
 */


function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
   if(bool === true) {
       return true;
   }

    if(bool === false) {
        return true;
    }

    return false;
}

booWho(true);// should return true.
booWho(false);// should return true.
booWho([1, 2, 3]);// should return false.
booWho([].slice);// should return false.
booWho({ "a": 1 });// should return false.
booWho(1);// should return false.
booWho(NaN);// should return false.
booWho("a");// should return false.
booWho("true");// should return false.
booWho("false");// should return false.