import React from 'react'
import ReactAnime from 'react-animejs'

import { StyledPageContainer } from './style'

const { Anime, stagger } = ReactAnime

export default function AnimatedPageTransition({ children, color }) {
    return (
        <>
            <Anime
                initial={[{
                    targets: ".morph",
                    easing: "easeInOutQuint",
                    d: [
                        {
                            value: 'M0,0V413.824S34.517,279.336,296.486,300.846S625.621,567.515,953.129,471.1S1266.162,190.86600000000004,1554.683,361.26200000000006S1920,443.66,1920,443.66V0Z'
                        }, {
                            value: 'M0,0V1361.862S59.63,1107.038,321.6,1128.548S672.591,1407.517,1000.1,1311.106S1252.647,1002.913,1541.1680000000001,1173.306S1920,1245.674,1920,1245.674V0Z'
                        }
                    ],
                    duration: 1300,
                    autoplay: true,
                    loop: false
                }
                ]}>
                <svg
                    id="morph"
                    height="100%"
                    width="100%"
                    viewBox="0 0 1920 1080"
                    preserveAspectRatio="none">
                    <path
                        d="M0,0V-82.994S25.808,-126.958,287.777,-105.44800000000001S586.97,2.717,914.479,-93.7S1269.5910000000001,-275.849,1558.112,-105.45400000000001S1920,-114.333,1920,-114.333V0Z"
                        className="morph"
                        fill={color ? color : "#00b7c2"}>
                    </path>
                </svg>
            </Anime>
            <StyledPageContainer>
                {children}
            </StyledPageContainer>
        </>
    )
}
