
console.log(`Switch Case`);
function weekDays(num) {
    console.log(`Enter number 1 to 7  as per week sequence`);
    switch (num) {
        case 1:
            console.log(`Monday`);
            break;
        case 2:
            console.log(`Tuesday`);
            break;
        case 4:
            console.log(`Wednsday`);
            break;
        case 5:
            console.log(`Thursday`);
            break;    
        case 6:
            console.log(`Friday`);
            break;
        case 7:
            console.log(`Saturday`);
            break;
        default:
            console.log(`Invalid Number`);
            break;
    }
}
weekDays(1);
weekDays(2);
weekDays(3);
weekDays(4);
weekDays(5);
weekDays(6);
weekDays(7);
weekDays(8);