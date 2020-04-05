/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from 'react';
import { getPlayer } from '../utils/apihandler';

const playerPage = () => {
    const [player, setPlayer] = useState([]);

    const tes = async () => {
        console.log('tes')
        const res = await getPlayer()
        if (res.status === 200) {
            setPlayer(res.data.data)
        }
    }
    useEffect(() => {
        tes()
    }, []);
    return (
        <Fragment>
            tes  {console.log(player)}
            {player.map((val, i) => (
                <div key={i}>
                    {console.log(val)}
                </div>
            ))}
        </Fragment>
    )
}

export default playerPage;