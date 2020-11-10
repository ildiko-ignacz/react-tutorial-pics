import React from 'react';

class SearchBar  extends React.Component {

  state = { term: '' };
  onFormSubmit = (event) => {
      
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Image search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;


// onInputChange(event) {
//     console.log(event.target.value);
// }; -------- we define this to later use it in an input for example.

/* onChange={this.onInputChange} - requires to define a method on the class */
// onChange={(event) => console.log(event.target.value) - no separate method required
// onChange={(e) => console.log(e.target.value)} - e short for e