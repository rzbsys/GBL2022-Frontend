export const BOOTH_IN = 'BOOTH/BOOTH_IN';
export const BOOTH_OUT = 'BOOTH/BOOTH_OUT';

export const BoothIn = (BoothList) => {
    return {
        type : BOOTH_IN,
        payload : BoothList
    }
};