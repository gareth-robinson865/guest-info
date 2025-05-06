import React, { useEffect } from 'react'
import { projectfirestore } from '../firebase/config';

const Songlist = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {

    }, [])
  return (
    <div>
        <h3>This is the song list</h3>
    </div>
  )
}

export default Songlist
