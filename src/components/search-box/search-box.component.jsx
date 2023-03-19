import { Component} from 'react';
import classes from './search-box.styles.module.css';
class SearchBox extends Component {

    render(){
        return (

            <input 
            className={classes['search-box']}
            type='search' 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
            />

        );
    }
}
export default SearchBox;