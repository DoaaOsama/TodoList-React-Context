import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';
import { Context } from '../../App'

class ItemCard extends PureComponent {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (Toggle) => (event) => {
        const id = this.props.id;
        if (event.target.value === "done" || event.target.value === "todo") {
            Toggle(id)
        }
        else if (event.target.value === "delete" || event.target.value === "restore") {
            Toggle(id)
        }
    }


    render() {
        const { text, done, deleted } = this.props;
        return (
            <Context.Consumer>
                {
                    (contextValue) => (
                        <div className="list-item">
                            <span className="list-item__text">{text}</span>
                            <div className="list-item__buttons">
                                {(done && !deleted) && <button name="todo" className="btn--rounded" value="todo" onClick={this.clickHandler(contextValue.DoneToggle)}><FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon></button>}
                                {!(done || deleted) && <button name="done" className="btn--rounded" value="done" onClick={this.clickHandler(contextValue.DoneToggle)}><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></button>}
                                {(!deleted) && <button name="delete" className="btn--rounded" value="delete" onClick={this.clickHandler(contextValue.DeleteToggle)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>}
                                {(deleted) && <button name="restore" className="btn" value="restore" onClick={this.clickHandler(contextValue.DeleteToggle)}>Restore</button>}
                            </div>
                        </div>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default ItemCard;