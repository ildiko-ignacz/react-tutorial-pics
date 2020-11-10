import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query:'term' }
        });

        this.setState({images: response.data.results});

        // .then(response => {
        //     console.log(response.data.results);
        // }) ----- one way of getting a notification on when we have response back
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '20px'}} >
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found {this.state.images.length} images
        </div>
        );
    }
}

// const App = () => {
//     return (
//         <div className="ui container" style={{marginTop: '20px'}}>
//             <SearchBar/>
//         </div>
//     );
// };

export default App;