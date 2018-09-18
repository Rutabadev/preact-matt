import './style.scss'
import { Component } from 'preact'

const SEARCH = '//api.github.com/search/repositories'

export class Stats extends Component {
    componentDidMount() {
        let res = fetch(`${SEARCH}?q=matthieu`),
            json = res.json(),
            results = json && json.items || []
        this.setState({ results });
    }

    render({ }, { results = [] }) {
        return (
            <div class="stats">
                <h1>The statistics for this great g@mer</h1>
                <div class="list">
                    {results.map(result => (
                        <Result result={result} />
                    ))}
                </div>
            </div>
        )
    }
}

const Result = ({ result }) => (
    <div style={{
        padding: 10,
        margin: 10,
        background: 'white',
        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
    }}>
        <div>
            <a href={result.html_url} target="_blank">
                {result.full_name}
            </a>
            🌟<strong>{result.stargazers_count}</strong>
        </div>
        <p>{result.description}</p>
    </div>
);