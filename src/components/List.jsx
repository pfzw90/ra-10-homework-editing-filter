import React from 'react'
import { loadItemData, removeItem } from '../actions/actionCreators';
import { connect } from 'react-redux';
import ItemEdit from './ItemEdit';

function List(props) {

const handleRemove = id => { props.onRemove(id)}
const handleEdit = (name,price,id) => { 
    props.onStartEdit(name,price,id) 
}

return (
    <ul>
        {props.list.map(o => 
            <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => handleEdit(o.name, o.price, o.id)}>✎</button>
            <button onClick={() => handleRemove(o.id)}>🗑</button>
            </li>
        )}
    </ul>
 )
}

const mapStateToProps = (state, ownProps) => {
    const { items, filter } = state.list;
    return {
        list: (filter.length) ? items.filter((item) => item.name.includes(filter)) : items
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
return {
    onRemove: (id) => dispatch(removeItem(id)),
    onStartEdit: (name, price ,id) => dispatch(loadItemData(name, price ,id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)

