function NextWarmerDay(temperatures = []) {
    const len = temperatures.length;
    const result = new Array(len).fill(0);
    
    for(let i = 0; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            if(temperatures[j] > temperatures[i]) {
                result[i] = j - i;
                break; 
            }
        }
    }
    return result;
}
