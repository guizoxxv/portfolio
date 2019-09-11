import moment from 'moment';

export const getImageSrc = (path: string) => {
    return require('../assets/images/' + path);
}

export const getProjectDate = (date: string) => {
    return moment(date).format('MMM, YYYY');
}