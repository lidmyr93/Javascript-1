// Truthy & Falsy
// Följande värden är alltid falska i JS
// 0
// null
// Nan
// ''
// undefined
// false

if(false || 0 || null || undefined || '' || NaN ){
    console.log('vi kommer aldrig hit');
}