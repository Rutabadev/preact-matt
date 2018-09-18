import './style.scss'
import { Component } from 'preact'

export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        fetch("http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=<<KEY>>&steamid=<<PROFILEID>>")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json)
            });
    }

    render({ }, { results }) {
        return (
            <div class="stats">
                <h1>The statistics for this great g@mer</h1>
                {/* <div class="list">
                    {results.map(result => (
                        <Result result={result} />
                    ))}
                </div> */}
            </div>
        )
    }
}

// const Result = ({ result }) => (
//     <div style={{
//         padding: 10,
//         margin: 10,
//         background: 'white',
//         boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
//     }}>
//         <div>
//             <a href={result.html_url} target="_blank">
//                 {result.full_name}
//             </a>
//             🌟<strong>{result.stargazers_count}</strong>
//         </div>
//         <p>{result.description}</p>
//     </div>
// );