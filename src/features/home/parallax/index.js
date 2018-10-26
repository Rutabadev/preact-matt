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

export const ParallaxMatt = ({ device }) => (
    <div class="parallax">
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?nature,water'} strength={500} disabled={device === 'mobile'}>
            <div style={{ height: '100vh' }}>
                <div class="inside">Matthieu est beau</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?animal'} strength={500} disabled={device === 'mobile'}>
            <div style={{ height: '100vh' }}>
                <div class="inside">Matthieu est frais</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={'https://source.unsplash.com/1600x900/?landscape'} strength={500} disabled={device === 'mobile'}>
            <div style={{ height: '100vh' }}>
                <div class="inside">Mais surtout</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
            bgImage={'https://source.unsplash.com/1600x900/?dog'}
            strength={500}
            disabled={device === 'mobile'}
            renderLayer={percentage => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 220, 6, ${percentage})`,
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
            <div style={{ height: '100vh' }}>
                <div class="inside">Matthieu est bridé</div>
            </div>
        </Parallax>
        <div style={{ height: 370 }} />
        <h2>{"\u2728"}</h2>
    </div>
)
