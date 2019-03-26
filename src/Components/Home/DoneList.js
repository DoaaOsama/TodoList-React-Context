import React from 'react';
import ItemCard from './Card';
import { Context } from '../../App'

class DoneList extends React.PureComponent {

    render() {
        return (
            <Context.Consumer>
                {
                    (contextValue) =>
                        contextValue.state.data.filter(t => (t.done && !t.deleted)).map(p => (<ItemCard key={p.id} text={p.text} done={p.done} deleted={p.deleted} id={p.id} />))
                }
            </Context.Consumer>
        )
    }
}

export default DoneList;