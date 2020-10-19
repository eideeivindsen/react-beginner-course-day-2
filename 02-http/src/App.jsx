import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const byUrls = {
  oslo: "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json",
  trondheim: "https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json",
  bergen: "https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json"
}

// Utføre et HTTP kall mot bysykkel API

const App = () => {

  const [bysykkelData, setBysykkelData] = useState(null);

  useEffect(() => {
    fetch(byUrls.bergen)
      .then(res => res.json())
      .then(data => setBysykkelData(data))
      .catch(err => console.log(err))
      .finally(() => console.log("Alt er ferdig"));
  }, [])

  return <div className="App">
    <h1>Bysykkeldata</h1>
    {bysykkelData && <h2>Antall stasjoner i Oslo: {bysykkelData.data.stations.length}</h2>}
  </div>
}

export default App;
