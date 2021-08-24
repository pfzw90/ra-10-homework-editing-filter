import { changeItemField, changeItem, clearData } from '../actions/actionCreators';
import { connect } from 'react-redux';

function EditItem(props) {

    const handleChange = ev => { 
        const {name, value} = ev.target;
        props.onChange(name,value)
    }

    const handleSubmit = ev => { 
        ev.preventDefault();
        const {item} = props;
        props.onEdit(item.name, item.price, item.id)
    }

    const handleReset = ev => { 
        props.onReset();
    }

    return ( 
    <form onSubmit={handleSubmit}>
        <div>{props.item.id ? "Edit" : "Add new"} service</div>
        <input name="name" onChange={handleChange} value={props.item.name} />
        <input name="price" onChange={handleChange} value={props.item.price} type="number"/>
        <button type="submit">{props.item.id ? "Save" : "Add"}</button>
        <button type="reset" onClick={handleReset}>Cancel</button>
    </form>
    )
}

const mapStateToProps = (state) => {
    const { editItem } = state;
    return {item: editItem};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (name, value) => dispatch(changeItemField(name, value)),
        onEdit: (name, price, id) => {
            dispatch(changeItem(name, price, id))
            dispatch(clearData())
        },
        onReset: () => {
            dispatch(changeItemField('name', ''));
            dispatch(changeItemField('price', ''));
            dispatch(changeItemField('id', ''));
            dispatch(clearData());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)

