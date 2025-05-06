import React, { useEffect, useState } from 'react'
import { projectfirestore } from '../firebase/config';

const Songlist = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setPending(true);
        projectfirestore.collection('Guests').get().then((snapshot) => {
            console.log(snapshot); 
        })
    }, []);

  return (
    <div>
        <h3>This is the song list</h3>
        {error && <p className="error">{error}</p>}
        {pending && <p className="loading">Loading...</p>}
        
    </div>
  )
}

export default Songlist
