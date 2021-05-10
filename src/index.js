import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import Link from   '@material-ui/icons/Link';
import Location from   '@material-ui/icons/LocationCity';

class UserGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      githubtUrl: '',
      avatarUrl: '',
    }
  }
  componentDidMount() {
    $.get(this.props.source, (result) => {
      console.log(result);
      const data = result;
      if (data) {
        this.setState({
          username: data.login,
          githubtUrl: data.html_url,
          avatarUrl: data.avatar_url,
          created_at: data.created_at,
          updated_at: data.updated_at,
          location: data.location,
          blog: data.blog,
          followers: data.followers,
          following: data.following,
          location: data.location,
          bio: data.bio
        });
      }
    });
  }
  render() {
    return (
      <div>
        <img src={this.state.avatarUrl} width = "100" height = "100"  alt="" />
        <h3>{this.state.username}</h3>
        <font color = "gray">{this.state.username}</font>
        <br></br>
        <br></br>
        <IconButton color="primary" aria-label="Add a Lock icon"><People /></IconButton><text>{this.state.followers} followers, {this.state.following} following</text>
        <br></br>
        <IconButton color="primary" aria-label="Add a Lock icon"><Location /></IconButton><text>{this.state.location}</text>
        <br></br>
        <IconButton color="primary" aria-label="Add a Lock icon"><Email /></IconButton><text>{this.state.bio}</text>
        <br></br>
        <IconButton color="primary" aria-label="Add a Lock icon"><Link /></IconButton><a href={this.state.blog}>{this.state.blog}</a>
        <br></br>
        <text>創建日期: {this.state.created_at}</text>
        <br></br>
        <text>更新日期: {this.state.updated_at}</text>
        
        
      </div>
    );
  }
}
ReactDOM.render(
  <UserGithub source="https://api.github.com/users/huanyueTW" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
