let n = 5;

/** Print this pattern
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
 */

for(let i = 0 ; i< n; i++){
    let row = "";
    for(let j = 0; j<n; j++){
        row += "* ";
    }
    console.log(row);
}

/**
 * Print this pattern
    *
    * *
    * * *
    * * * *
    * * * * *
 */

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

/**
 * Print this pattern
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j<=i ; j++){
        row += (j + 1) + " ";
    }
    console.log(row);
}

/**
 * Print this pattern
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
 */

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j<=i ; j++){
        row += (i + 1) + " ";
    }
    console.log(row);
}

/** Print this pattern
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
 */

for( let i=n ; i > 0; i--){
    let row = "";
    for (let j = 1; j<=i; j++){
        row += j + " ";
    }
    console.log(row);
}

OR

for( let i=0;i<n;i++){
    let row = "";
    for (let j = 1; j<=n-i; j++){
        row += j + " ";
    }
    console.log(row);
}

/**
 * Print this pattern
    * * * *
    * * *
    * *
    *
 */

for( let i=0;i<n;i++){
    let row = "";
    for (let j = 0; j<n-i; j++){
        row += "* ";
    }
    console.log(row);
}

/**
 * Print this pattern
             *
           * *
         * * *
       * * * *
     * * * * *
 */

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < (n-i-1)*2; j++){
        row += " ";
    }
    for(let k = 0; k < i+1; k++){
        row += "* ";
    }
    console.log(row);
}

/**
 * Print this pattern
        * 
       * * 
      * * * 
     * * * * 
    * * * * * 
*/

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < (n-i-1); j++){
        row += " ";
    }
    for(let k = 0; k < i+1; k++){
        row += "* ";
    }
    console.log(row);
}

/**
 * Print this pattern
    1
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
 */

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = 1 - toggle; // toggle between 1 and 0
  }
  console.log(row);
}

/**
 * Print this pattern
    1
    0 1
    0 1 0
    1 0 1 0
    1 0 1 0 1
 */
let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";
    toggle = 1 - toggle; // toggle between 1 and 0
  }
  console.log(row);
}
