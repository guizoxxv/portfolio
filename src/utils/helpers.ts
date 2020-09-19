import moment from 'moment';

export const getImageSrc = (path: string) => {
    return require('../assets/images/' + path);
}

export const getDate = (date: string) => {
    return moment(date).format('MMM, YYYY');
}

export const getDateBr = (date: string) => {
    return moment(date).format('DD/MM/YYYY');
}

export const getFullDate = (date: string) => {
    return moment(date).format('DD [de] MMMM [de] YYYY');
}