import {Component} from 'react'
import './index.css'
import Items from '../Items'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

export default class Home extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialHistoryList,
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteButton = id => {
    const {usersDetailsList} = this.state
    const filterUserData = usersDetailsList.filter(
      eachUser => eachUser.id !== id,
    )
    this.setState({
      usersDetailsList: filterUserData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const userListDetails = usersDetailsList.filter(userDetails =>
      userDetails.title.includes(searchInput),
    )
    return (
      <div className="container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt=" app logo"
            className="app-logo"
          />
          <div className="box-container">
            <div className="search-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt=" search"
                className="search"
              />
            </div>
            <input
              onChange={this.onChangeSearch}
              value={searchInput}
              type="search"
              placeholder="Search histhory"
              className="search-input"
            />
          </div>
        </nav>

        {userListDetails.length === 0 ? (
          <div className="error-name">
            <p className="error">There is no history to show</p>
          </div>
        ) : (
          <ul className="ul-list">
            {userListDetails.map(eachItem => (
              <Items
                key={eachItem.id}
                AllDetails={eachItem}
                deleteButton={this.deleteButton}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
