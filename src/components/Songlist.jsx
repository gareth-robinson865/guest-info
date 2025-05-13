import React, { useEffect, useState } from 'react'
import { projectfirestore } from '../firebase/config';

const Songlist = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setPending(true);
        projectfirestore.collection('Guests').get().then((snapshot) => {
            if(snapshot.empty) {
              setError('no songs to load');
              setPending(false);
            } else {
              let songs = []
              snapshot.docs.forEach(doc => {
                songs.push({ id: doc.id, ...doc.data()})
              })
              setData(songs);
              setPending(false);
            }
        }).catch(err => {
          setError(err.message)
          setPending(false);
        })
    }, []);

  return (
    <div>
        <h3>This is the song list</h3>
        {error && <p className="error">{error}</p>}
        {pending && <p className="loading">Loading...</p>}
        {data && data.map(info => (
          <p key={info.id}>{info.song}</p>
        ))}
    </div>
  )
}

export default Songlist
