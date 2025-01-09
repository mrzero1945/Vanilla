import React from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const WorldMap = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[106.8096, -6.2297]}>
        <circle r={4} fill="#F00" />
      </Marker>
    </ComposableMap>
  )
}

export default WorldMap

