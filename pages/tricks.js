import React, { useState } from 'react';
import FullHeader from '../components/fullHeader';
import HitGame from '../components/hitgamefunc';
import SystemMap from '../components/systemMap';
import { Helmet } from "react-helmet";
import $ from 'jquery'

export default function Tricks() {

    return (
        <>
            <HitGame />
            <SystemMap />
        </>
    );
}
