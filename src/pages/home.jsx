import React, { Fragment } from 'react';
import Sliders from "react-slick";
import logo from '../assets/logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import bg from '../assets/nba1.jpg';
import bg2 from '../assets/nba2.jpg';
import bg3 from '../assets/nba3.jpg';
import Player from '../components/playerPage';

const Slider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <Fragment>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <img style={{ marginTop: '24px' }} src={logo} width="190px" height="90" />
                </Grid>
            </Container>
            <Grid
                style={{ marginTop: '24px' }}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Sliders style={{ width: '100%' }} {...settings}>
                    <div>
                        <img src={bg} height="500" width="100%" />
                    </div>
                    <div>
                        <img src={bg2} height="500" width="100%" />
                    </div>
                    <div>
                        <img src={bg3} height="500" width="100%" />
                    </div>
                </Sliders>
            </Grid>
            <Container maxWidth="lg" style={{ marginTop: '0px' }}>
                <Player />
            </Container>
        </Fragment>
    )
}

export default Slider