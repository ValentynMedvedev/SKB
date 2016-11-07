function sumParam(url) {
    var sum = 0;
    var strSearch   = url.substr(1),
        strPattern  = /([^=]+)=([^&]+)&?/ig,
        arrMatch    = strPattern.exec(strSearch),
        objRes      = {};
    while (arrMatch != null) {
        objRes[arrMatch[1]] = arrMatch[2];
        arrMatch = strPattern.exec(strSearch);
    }
    
    if (objRes.a) sum += Number(objRes.a);
    if (objRes.b) sum += Number(objRes.b);
    
    return sum;
    
}


const array = [
    '?a=1&b=2',
    '?a=1',
    '?some=8475'
];


array.forEach( (url) => {
    const sum = sumParam(url);
    console.log(sum);
});