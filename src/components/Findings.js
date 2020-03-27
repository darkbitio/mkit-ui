import React from 'react'
import Modal from './Modal'
import Finding from './Finding'
import Stats from './Stats'
import Contact from './Contact'

class Findings extends React.Component {
  state = {
    currentFinding: null,
    showPassed: true,
    showFailed: true,
    allResources: [],
  }

  handleModalOpen = id => {
    const finding = this.props.findings.filter(x => x.id === id)[0]

    // this.disableBodyScroll()
    this.setState({ currentFinding: finding })
  }

  handleResourceModalOpen = () => {
    // this.disableBodyScroll()

    this.setState({
      allResources: this.props.findings
        .map(res => res.resources)
        .flat()
        .sort((a, b) => (a.status > b.status ? 1 : -1)),
    })
  }

  handleModalClose = () => {
    this.setState({ currentFinding: null, allResources: [] })

    // When the modal is hidden, we want to remain at the top of the scroll position
    document.body.style.position = ''
    document.body.style.top = ''
  }

  handleFindingsToggle = mode => {
    if (mode === 'failed') {
      this.setState({ showFailed: !this.state.showFailed })
    }
    if (mode === 'passed') {
      this.setState({ showPassed: !this.state.showPassed })
    }
  }

  disableBodyScroll = () => {
    // When the modal is shown, we want a fixed body
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
  }

  render() {
    const { findings } = this.props
    const findingsPassed = findings
      ? findings.filter(x => x.result.status === 'passed')
      : []
    const findingsFailed = findings
      ? findings.filter(x => x.result.status === 'failed')
      : []
    const { showFailed, showPassed } = this.state

    return (
      <React.Fragment>
        <div className='pb-5'>
          <Stats
            handleToggle={this.handleFindingsToggle}
            showFailed={this.state.showFailed}
            showPassed={this.state.showPassed}
            findings={findings}
            open={this.handleResourceModalOpen}
          />
        </div>
        <div className={`flex flex-col mb-5 ${showFailed ? '' : 'hidden'}`}>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      <div className='flex items-center'>
                        <div className='flex items-center justify-center h-8 w-8 rounded bg-red-100'>
                          <svg
                            className='h-6 w-6 text-red-600'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
                            />
                          </svg>
                        </div>
                        <div className='ml-6'>Failed Checks</div>
                      </div>
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Severity
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Effort
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Platform / Category
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {findings &&
                    findingsFailed.map(finding => {
                      return (
                        <Finding
                          key={finding.id}
                          finding={finding}
                          open={() => this.handleModalOpen(finding.id)}
                          close={this.handleModalClose}
                        />
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`flex flex-col mb-5 ${showPassed ? '' : 'hidden'}`}>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      <div className='flex items-center'>
                        <div className='flex items-center justify-center h-8 w-8 rounded bg-green-100'>
                          <svg
                            className='h-6 w-6 text-green-600'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                            />
                          </svg>
                        </div>
                        <div className='ml-6'>Passed Checks</div>
                      </div>
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Platform / Category
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {findings &&
                    findingsPassed.map(finding => (
                      <Finding
                        key={finding.id}
                        finding={finding}
                        open={() => this.handleModalOpen(finding.id)}
                        close={this.handleModalClose}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Contact />
        <Modal
          // open={this.state.showModal}
          handleClose={this.handleModalClose}
          finding={this.state.currentFinding}
        />
        <Modal
          // open={true}
          handleClose={this.handleModalClose}
          resources={this.state.allResources}
          // resources={findings.map(finding => finding.resources)}
        />
      </React.Fragment>
    )
  }
}

export default Findings
