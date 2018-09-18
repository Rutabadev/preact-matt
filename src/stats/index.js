import { Component } from 'preact'

const SEARCH = 'https://api.fortnitetracker.com/v1/profile/pc/puex.'
const OPTIONS = {
    mode: 'no-cors',
    headers: { 'TRN-Api-Key': 'e95f658d-ddf6-44b4-a36b-23dbb0e5bbc8' }
}

export class Stats extends Component {
    async componentDidMount() {
        let res = await fetch(SEARCH, OPTIONS),
            json = await res.json(),
            results = json && json.items || []
        this.setState({ results })
        console.log(results)

    }

    render({ }, { results = [] }) {
        return (
            <h1>The statistics for this great g@mer</h1>
        )
    }
}