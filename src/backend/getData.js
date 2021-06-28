const FEATURE = ['Seam', 'Slot', 'Hole']
const POSITION = ['x', 'y', 'z', 'Diameter']

const getRandNum = () => Math.floor(Math.random() * 10)

const getfeatures = (numberData) => {
    const items = []
    for (let i = 0; i < numberData; i++) {
        const object = {}
        POSITION.forEach(x => {
            object[x] = {
                dev: getRandNum(),
                devOutTol: getRandNum(),
                feture: FEATURE[Math.floor(Math.random() * 3)],
            }
        })
        items.push(object)
    }
    return items
}


export const getData = () => {
    return {
        feature_1: getfeatures(10),
        feature_2: getfeatures(2),
        feature_3: getfeatures(8),
        feature_4: getfeatures(8),
        feature_5: getfeatures(4),
        feature_6: getfeatures(4),
    }
}