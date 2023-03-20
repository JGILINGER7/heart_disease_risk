import React, { useEffect, useRef } from 'react';
import { Button } from "@material-ui/core"
import { useNavigate } from 'react-router-dom';

const BehindTheScenes = () => {
    const ref = useRef(null)
    const { tableau } = window;
    const navigate = useNavigate(); 
    const url = 'https://public.tableau.com/views/heart_disease_risk/HeartDiseaseRisk?:language=en-US&:display_count=n&:origin=viz_share_link'
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);}
    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "90vh",
        })
    }

    useEffect(initViz, []);

    return (
        <>
        <div ref={ref} />
        <Button variant="contained" color="primary" fullWidth={true} onClick={routeChange}>
        Return back to form
      </Button>
      </>
    );
}

export default BehindTheScenes
