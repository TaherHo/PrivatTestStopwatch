import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker'
import { style } from './style.js';

export class PigeonMap extends React.Component {
  render () {
    const message = this.props.message;
    const mapsData = message.data._plugin;

    let center = [mapsData.center.lat, mapsData.center.lon];
    return (
      // Wrap in container so sizeMe works
      <div style={{ height: '200px', width: '100%' }}>
        {/* Initially render width 1px width otherwise Maps wont load correctly */}
        <Map center={center} zoom={mapsData.zoom || 15} height={200} width={1}>
          {mapsData.markers.map((marker, index) =>
            <Marker anchor={[marker.lat, marker.lon]} payload={index} key={index}/>
          )}
        </Map>
      </div>
    )
  }
}

const pigeonMap = {
  match: 'maps',
  component: PigeonMap,
  options: {
    fullwidth: true
  }
};

if (!window.cognigyWebchatMessagePlugins)
  window.cognigyWebchatMessagePlugins = [];

window.cognigyWebchatMessagePlugins.push(pigeonMap);
