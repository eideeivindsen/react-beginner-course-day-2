import React, { useEffect, useState } from 'react';

const byUrls = {
  oslo: "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json",
  trondheim: "https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json",
  bergen: "https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json"
}

// Utføre et HTTP kall mot bysykkel API

const App = () => {

  const [bysykkelData, setBysykkelData] = useState(null);
  const [leveringstidAvData, setLeveringstidAvData] = useState(null);

  useEffect(() => {
    console.log("Henter bysykkeldata fra Oslo");
    const t0 = performance.now()

    fetch(byUrls.oslo)
      .then(res => res.json())
      .then(data => setBysykkelData(data))
      .finally(() => setLeveringstidAvData(performance.now() - t0));

  }, [])

  console.log(bysykkelData);

  return <div className="App">
    <h1>Bysykkeldata</h1>
    {bysykkelData && <h1>Antall stasjoner i Oslo: {bysykkelData.data.stations.length}</h1>}
    {leveringstidAvData && <h2>Leveringstid: {Math.floor(leveringstidAvData)}ms</h2>}
  </div>
}

export default App;
