import React from 'react';
import { getRandomData } from '../services/data.service'
import Table from '../components/Table'
import '../styles/views/home.css'

const Home = () => {
    const [data, setData] = React.useState({})

    const getData = () => {
        getRandomData()
            .then(r => {
                console.log(r)
                setData(r)
            })
    }

    React.useEffect(() => {
        if (Object.keys(data).length > 0) {
            setTimeout(getData, 10000)
        } else {
            getData()
        }
    }, [data])

    return Object.keys(data).length > 0 ?
        <div className="container">
            <div className="column">
                <Table
                    title={'Feature Name'}
                    items={data.feature_1}
                    itemsShow={4}
                />
            </div>
            <div className="column">
                <Table
                    title={'Feature Name'}
                    items={data.feature_2}
                    itemsShow={1}
                />
                <Table
                    title={'Feature Name'}
                    items={data.feature_3}
                    itemsShow={1}
                />
            </div>
            <div className="column">
                <Table
                    title={'Feature Name'}
                    items={data.feature_4}
                    itemsShow={1}
                />
                <Table
                    title={'Feature Name'}
                    items={data.feature_5}
                    itemsShow={1}
                />
            </div>
            <div className="column">
                <Table
                    title={'Feature Name'}
                    items={data.feature_6}
                    itemsShow={4}
                />
            </div>
        </div> : null

}

export default Home;