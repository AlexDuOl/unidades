import React, { Component } from 'react';
import { Map, Polyline, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            startPosition: { lat: 20.633848, lng: -103.43243 },
            positions: [
                { lat: 20.634493, lng: -103.425846 },
                { lat: 20.6366266, lng: -103.4225952 },
                { lat: 20.6379632, lng: -103.4200849 },
            ],
            endPosition: {lat: 20.6379632, lng: -103.4200849 },
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date(),
        })
    }

    /*draw_rute_map = () => {
        this.state.currentPosition
        return console.log(currentPos);
    }*/

    displayMarkers = () => {
        return this.state.positions.map(({lat,lng}) => {
            return <Marker position={{lat,lng}}/>
        })
    }

    displayPolyline = () => {
        return this.state.positions.map(({lat,lng}) => {
            const pathLine = this.state.positions;

            pathLine.forEach = (path) => {
                return <Polyline path={path} strokeColor="#f5821f" strokeOpacity={0.8} strokeWeight={6} />
            }
            console.log(pathLine);
            //return <Polyline path={this.state.positions} strokeColor="#f5821f" strokeOpacity={0.8} strokeWeight={6} />
        })
    }

    render() {
        
        return (
            <div id="map" className="ui segment" style={{width: '430px', height: '430px', align: 'center'}}>
                <Map
                    style={{ width: '400px', height: '400px' }}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={this.state.startPosition}
                    >
                    <Marker position={this.state.startPosition}/>
                    {this.displayMarkers()}
                    {this.displayPolyline()}
                </Map>
            </div>
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBfi7VNKtBAGPFAa43c_CEsLSlA0d32M9g',
})(Maps);