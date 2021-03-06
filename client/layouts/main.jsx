
import React   from 'react'
import Sidebar from 'components/sidebar'

import ErrorsPage from 'components/errors/page'

export default class LayoutMain extends React.Component {
  render() {
    return (
      <div className="page">
        <ErrorsPage />
        <Sidebar />
        <div className="page-body">
          <main className="page-content">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

