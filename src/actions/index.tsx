
export const ADDTO='我是第一个';

export function abc(txt:string):any{
    return ({
        type: ADDTO,
        txt: txt
    });
}