const sockMerchant = (size, socks) => {
    let i = 0, count = 0;
    socks.sort();

    //Implementation using for loop
    for (i = 0; i < size-1; i += 2){
        currentSock = socks[i];
        if(currentSock === socks[i+1])
            count++;
        else
            i--;
    }
    
    // Implementation using while loop
    // while (i < size-1){
    //     currentSock = socks[i];
    //     if(currentSock === socks[i+1]){
    //         count++;
    //         i += 2;
    //     }else
    //         i++;
    // }

    return count;
}

let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let result = sockMerchant(socks.length, socks);
console.log('Result: ', result)