import './style.scss'
import { Parallax, Background } from 'react-parallax'

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};


export const ParallaxMatt = () => (
    <div class="parallax">
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?nature,water'} strength={500}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>Matthieu est beau</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?animal'} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>Matthieu est frais</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?mountain'} strength={-100}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>Mais surtout</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
            bgImage={'https://source.unsplash.com/1600x900/?dog'}
            strength={200}
            renderLayer={percentage => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 220, 6, ${percentage * 1})`,
                            left: "50%",
                            top: "50%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 500,
                            height: percentage * 500
                        }}
                    />
                </div>
            )}
        >
            <div style={{ height: 500 }}>
                <div style={insideStyles}>Matthieu est bridé</div>
            </div>
        </Parallax>
        <div style={{ height: 370 }} />
        <h2>{"\u2728"}</h2>
    </div>
)
