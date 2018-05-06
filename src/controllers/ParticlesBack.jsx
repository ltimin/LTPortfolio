import React from 'react';
import '../assets/css/style.css';
import Particles from 'react-particles-js';

const ParticlesBack = () => (
    <div>
        <Particles className='canvas'
            params={{
                particles: {
                    number: {
                        value: 200,
                        value_area: 500
                    },
                    shape: {
                        polygon: {
                            nb_sides: 25
                        }
                    },
                    line_linked: {
                        enabled: true,
                        opacity: .09,
                        color: '#FF0000',
                        width: 2,
                        shadow: {
                            enable: false,
                            color: "#3CA9D1",
                            blur: 5
                        }
                    }
                }
            }
            } />
    </div >
);
export default ParticlesBack;
