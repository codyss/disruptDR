import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Line from '../components/map/Line.jsx';
import Map from '../components/map/Map.jsx';
import Marker from '../components/map/Marker.jsx'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {markers: List()}
    this.generateMarkers = this.generateMarkers.bind(this);
  }

  shouldComponentUpdate(nextProps) {

  }

  render() {
    return (
      <div />
    );
  }
}

MapContainer.propTypes = {

};
