export const BOOTH_IN = 'BOOTH/BOOTH_IN';
export const BOOTH_OUT = 'BOOTH/BOOTH_OUT';
export const BOOTH_IMAGE_IN = 'BOOTH/BOOTH_IMAGE_IN';


export const BoothIn = (BoothList) => {
    return {
        type : BOOTH_IN,
        payload : BoothList
    }
};

export const BoothImageIn = (ImageList) => {
    return {
        type : BOOTH_IMAGE_IN,
        payload : ImageList
    }
}