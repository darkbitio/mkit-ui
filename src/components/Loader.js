import React from 'react'
import axios from 'axios'
import Empty from './Empty'
import Findings from './Findings'
import Octo from './Octo'

/*
 * findings.json hosted from standalone Express
 * server in development
 */
const URL =
  process.env.NODE_ENV === 'production'
    ? '/results.json'
    : 'http://localhost:8000/results.json'

class Loader extends React.Component {
  state = {
    active: false,
    results: [],
  }

  componentDidMount = () => {
    axios
      .get(URL)
      .then(res => {
        if (res.data) {
          this.setState({
            // map an Id into each finding for later reference
            results: res.data.results.map((x, idx) => ({ ...x, id: idx })),
            active: true,
          })
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  render() {
    return (
      <div>
        <div className='bg-gray-800 pb-24'>
          <header className='py-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl leading-9 font-extrabold text-white'>
                MKIT
              </h1>
              <h2 className='text-xl leading-9 font-bold text-gray-500'>
                Managed Kubernetes Inspector Tool
              </h2>
            </div>
          </header>
        </div>
        <main className='-mt-32'>
          <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
            {this.state.active && <Findings findings={this.state.results} />}
            {!this.state.active && <Empty />}
          </div>
        </main>
        <Octo />
      </div>
    )
  }
}

export default Loader
