import React from 'react'
import PropTypes from 'prop-types'

class Tabber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
    }
  }

  componentDidMount () {
    this.setState({
      tabRow: document.getElementsByClassName('tabsRow')
    })
  }

  handleTabClick = (tab, index) => {
    this.setState({
      selectedTab: index
    })

    if (tab.cb)
      tab.cb(index)
  }

  render () {
    var styles = {
      tab: {
        height: this.props.styles.tabHeight ? this.props.styles.tabHeight : '45%',
        backgroundColor: this.props.styles.tabColor ? this.props.styles.tabColor :'#674343',
        transition: 'border-bottom 0.3s cubic-bezier(.25,.8,.25,1)',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '0 20px 0 20px',
        justifyContent: 'center'
      },
      slidingUnderline: {
        height: this.props.styles.tabHeight ? this.props.styles.tabHeight : '45%',
        background: 'transparent',
        display: 'flex',
        padding: '0 20px 0 20px',
        position: 'absolute',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        borderBottom: `2px solid ${this.props.styles.underlineColor ? this.props.styles.underlineColor : `#c7bd89`}`,
        left: this.state.tabRow && this.state.tabRow.length > 0 ? this.state.tabRow[0].children[this.state.selectedTab + 1].offsetLeft : null
      },
      invisitext: {
        color: 'transparent'
      },
      tabText: {
        color: '#e3e3e3',
        fontWeight: `300`,
        fontSize: '15px'
      },
      tabsRow: {
        height: '15%',
        width: '100%',
        margin: '0',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: this.props.styles.tabRowColor ? this.props.styles.tabRowColor :'#674343',
      },
      unselectedTab: {
        color: '#e3e3e38a'
      },
      selectedTab: {  }
    }

    return (
      <div className="tabsRow" style={styles.tabsRow}>
        <div style={styles.slidingUnderline}>
          {
            this.props.tabs[this.state.selectedTab].name
          }
        </div>
        {
          this.props.tabs.map((tab, index) => {
            return (
              <div key={index} style={styles.tab} onClick={() => this.handleTabClick(tab, index)}>
                <span style={Object.assign({}, styles.tabText, this.state.selectedTab !== index ? styles.unselectedTab : {})}>{tab.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Tabber.defaultProps = {
  styles: {}
}

export default Tabber