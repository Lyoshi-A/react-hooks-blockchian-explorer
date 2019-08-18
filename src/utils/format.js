export const format=(str, groupby, dir = 0) => {
    const ar = ((!dir)?str.toString().split(''):str.toString().split('').reverse())
        .map((l,i) => (!dir)?l+((i+1) % groupby === 0?' ':''):((i+1) % groupby === 0?' ':'')+l);
    return (!dir)?ar.join(''):ar.reverse().join('');
}