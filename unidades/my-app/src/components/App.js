import React from 'react';
import suma from '../api/suma';
import CarGps from './CarGps';
import LocationGps from './LocationGps';
import Maps from './Maps';

class App extends React.Component {
    state = { dataParams: [] };

    onlocationGps = (param) => {
        const response = suma.get('/' + param +'/posicion', {
            params: { query: param }
        });
        
        const dataParams = [response.data[0].units[0]];
        this.setState({dataParams})
    }

    render () {
        return (
            <div className="ui container">
                <CarGps onSubmit={this.onlocationGps} />
                <div className="container" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <LocationGps dataParams={this.state.dataParams} />
                    <div id="map">
                        <Maps />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;