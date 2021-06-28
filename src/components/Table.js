import React from 'react';
import '../styles/components/table.css'

const Table = (props) => {
    const { items, title, itemsShow } = props
    const [expand, setExpand] = React.useState(false)
    const [complite, setComplite] = React.useState(false)

    React.useEffect(() => {
        const states = ['complite', 'uncomplit', 'partial']
        setComplite(states[Math.floor(Math.random() * 3)])
    }, [items])

    return (
        <div className="table">
            <div className={"title " + complite}>
                <div className="circle"></div>
                <h2>{title}</h2>
                <div className="circle">
                </div>
            </div>
            <div className={`${expand ? 'expand' : ''}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Control</th>
                            <th>Dev</th>
                            <th>Dev Out Tol</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((x, i) => Object.keys(x).map((key) =>
                            i + 1 > itemsShow && !expand ? null
                                : <tr key={i + key}>
                                    <td>{key}</td>
                                    <td>{x[key].dev}</td>
                                    <td>{x[key].devOutTol}</td>
                                    <td className={x[key].feture}>{x[key].feture}</td>
                                </tr>)
                        )}

                    </tbody>
                </table>
                <div className="expand-container" onClick={() => setExpand(!expand)}>
                    <h2>{expand ? 'x' : '...'}</h2>
                </div>
            </div>
        </div >
    );
}

export default Table;