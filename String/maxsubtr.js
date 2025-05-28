function longestUniqueSubstr(s) {
    let n = s.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        console.log('i',i)

        // Initializing all characters as not visited
        let vis = new Array(26).fill(false);

        for (let j = i; j < n; j++) {
            

            // If current character is visited
            // Break the loop
            if (vis[s.charCodeAt(j) - 'a'.charCodeAt(0)] === true)
                break;

            // Else update the result if this window is larger,
            // and mark current character as visited.
            else {
                res = Math.max(res, j - i + 1);
                
                // console.log(res)
                vis[s.charCodeAt(j) - 'a'.charCodeAt(0)] = true;
            }
        }
    }
    return res;
}

// Driver Code
let s = "geeksforgeeks";
console.log(longestUniqueSubstr(s));