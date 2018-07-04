/*Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?*/
function strPwd(password) {
    var count = 0;

    if (password.match(/[A-Z]/g, "") === null) {
        count += 1;
    }
    if (password.match(/[a-z]/g, "") === null) {
        count += 1;
    }
    if (password.match(/[0-9.]/g, "") === null) {
        count += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi, "") === null) {
        count += 1;
    }
    var newLength = count + password.length;

    if (newLength < 6) {
        var l = 6 - password.length;
        count = l;
    }
    return count;

}

strPwd("Ab1");