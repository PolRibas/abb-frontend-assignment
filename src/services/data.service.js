import { getData } from '../backend/getData'

export const getRandomData = () => new Promise((resolve, reject) => {
    resolve(getData())
})