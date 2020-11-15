import React, { Component, createElement } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import 'antd/dist/antd.css';
import './Chat.css';
import { Row, Col, Avatar, Input, Tooltip, Button, Layout, Image, notification, Badge, Statistic} from 'antd';
import { Comment} from 'antd';
import { SendOutlined, FormOutlined, SettingOutlined, BellOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Content} from "antd/lib/layout/layout";
import ChatImage   from "../image/chat.jpg";

const {Header, Footer } =  Layout;
const {TextArea} = Input;


export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: auth().currentUser,
        chats: [],
        content: '',
        readError: null,
        writeError: null,
        feeds: [],
        message: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNewFeed = this.handleNewFeed.bind(this);
      this.postFeeds = this.postFeeds.bind(this);
    }
    
    like = (event) => {
      let likes = parseInt(event.value.likes);
      db.ref(`/feeds/${event.key}`).update({
          likes : likes + 1
      });
    };
  
    dislike = (event) => {
      let dislikes = parseInt(event.value.dislikes);
      db.ref(`/feeds/${event.key}`).update({
        dislikes : dislikes + 1
      });
    };

    share = (event) => {
      let placement = 'bottomLeft';
      let shares = parseInt(event.value.shares);
      db.ref(`/feeds/${event.key}`).update({
        shares : shares + 1
      });
      notification.info({
        message: 'Share',
        description:
          'Your post has been shared.',
        placement,
      })
    };

    render() {
        return (
          <Layout style={{backgroundColor: '#dedede !important'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white'}}>
               <Row>
                 <Col  xs={24} sm={24} md={24} lg={2}>
                     <Avatar style={{width: '40px'}}
                      src={ChatImage}
                      alt="Han Solo" title={this.state.user}></Avatar>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={6}>
                     <Input className="app-search-input" placeholder="Search Friends..."></Input>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={4}>

                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={6}>
                       <SettingOutlined className="app-header-icons" />
                       <BellOutlined  className="app-header-icons">
                         <Badge count={5}>
                         </Badge>
                       </BellOutlined>
                       <InfoCircleOutlined  className="app-header-icons"/>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={6}>
                      <Avatar
                      src="https://avatars3.githubusercontent.com/u/10627086?s=460&u=6a06199761992e8d933380f1b57371925675f5ba&v=4"
                      alt="Han Solo" title={this.state.user}></Avatar>
                      <span className="app-login-name">Logged In as : {this.state.user.email}</span>
                 </Col>
               </Row>
            </Header>
            <Content style={{marginTop: '6%'}}>
               <Row>
                  <Col xs={0} sm={0} md={0} lg={7}>
                       <div className="app-news-feeds">
                       
                       </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10}>
                      <div className="create-feeds">
                          <div className="create-feeds-header">
                              <FormOutlined className="create-feeds-icon"/>
                              <label className="create-feeds-label">Create Post</label>
                          </div>
                          <div className="create-feeds-input">
                             <TextArea placeholder="What's on your mind?" onChange={this.handleNewFeed} value={this.state.message} style={{borderRadius: '20px', borderWidth: '1px', borderColor: '#e4e4e4'}} rows={4} />
                          </div>
                          <div className="create-feeds-controls">
                               <Button className="create-feeds-button" type="primary" onClick={this.postFeeds}>Post</Button>
                          </div>
                      </div>
                      <div className="feeds-list">
                           {this.state.feeds.length === 0  && 
                              <p className="app-no-feeds">No Feeds Available!</p>
                           }
                           {this.state.feeds.map(feed => {
                              return <Comment key={feed.value.timestamp} className="app-feeds-list"
                                  actions={[
                                    <Tooltip key="comment-basic-like" title="Like">
                                      <span onClick={() => this.like(feed)}>
                                        <LikeOutlined className="app-comments-actions"></LikeOutlined>
                                        <span className="comment-action">{feed.value.likes}</span>
                                      </span>
                                    </Tooltip>,
                                    <Tooltip key="comment-basic-dislike" title="Dislike">
                                      <span onClick={() => this.dislike(feed)}>
                                        <DislikeOutlined className="app-comments-actions"></DislikeOutlined>
                                        <span className="comment-action">{feed.value.dislikes}</span>
                                      </span>
                                    </Tooltip>,
                                     <Tooltip key="comment-basic-share" title="Share">
                                      <span onClick={() => this.share(feed)}>
                                        <SendOutlined className="app-comments-actions"></SendOutlined>
                                        <span className="comment-action">{feed.value.shares}</span>
                                      </span>
                                    </Tooltip>
                                  ]}
                                  author={<a>{feed.value.author}</a>}
                                  avatar={
                                    <Avatar
                                      src="https://i.pravatar.cc/150?img=56"
                                      alt={feed.value.author}
                                    />
                                  }
                                  content={
                                    <p>
                                     {feed.value.content}
                                    </p>
                                  }
                                  datetime={
                                    <Tooltip title={new Date(feed.value.timestamp).toLocaleDateString()}>
                                      <span>{new Date(feed.value.timestamp).toLocaleDateString()}</span>
                                    </Tooltip>
                                  }
                                /> 
                            })}
                      </div>
                  </Col>
                  <Col xs={0} sm={0} md={0} lg={7}>
                    
                  </Col>
               </Row>
            </Content>
            <div className="chat-box-container">
                <div className="chat-box-conversations">
                  {
                    this.state.chats.length === 0 &&  <p className="app-no-chats">No Chats Available!</p>
                  }
                  {this.state.chats.map(chat => {
                    if(chat.userInfo != this.state.user.email) {
                      return <Row key={chat.timestamp} style={{padding: '1rem 0 0 0', transition: 'all 0.15s ease-in-out',
                      animation: 'fadeNewMessage 0.5s', animation: 'forwards'}}>
                        <Col xs={22} sm={22} md={22} lg={22}>
                            <div key={chat.timestamp} className="chat-box-message chat-box-message-right">
                                {chat.content}
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                          <Avatar
                          src="https://i.pravatar.cc/150?img=32"
                          alt="Han Solo" title={this.state.user}></Avatar>
                        </Col>
                      </Row> 
                    }
                    else{
                      return <Row key={chat.timestamp} style={{padding: '1rem 0 0 0', transition: 'all 0.15s ease-in-out',
                      animation: 'fadeNewMessage 0.5s', animation: 'forwards'}}>
                        <Col xs={2} sm={2} md={2} lg={2}>
                          <Avatar 
                          src="https://avatars1.githubusercontent.com/u/7843281?s=460&v=4"
                          alt="Han Solo" title={this.state.user}></Avatar>
                        </Col>
                        <Col xs={22} sm={22} md={22} lg={22}>
                            <div key={chat.timestamp} className="chat-box-message chat-box-message-left">
                                {chat.content}
                            </div>
                        </Col>
                      </Row> 
                    }
                  })}
                </div>
                <div className="chat-box-controls">
                  <Row style={{padding: '5px'}}>
                    <Col xs={20} sm={20} md={20} lg={20}>
                        <Input className="chat-box-input" onChange={this.handleChange} placeholder="Type your message here..." value={this.state.content}/>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <Tooltip title="Send">
                        <Button className="chat-send-button" onClick={this.handleSubmit} type="primary" shape="circle" icon={<SendOutlined />} />
                      </Tooltip>
                    </Col>
                  </Row>
                </div>
              </div>
          </Layout>
          );
    }
    
    handleChange(event) {
        this.setState({
          content: event.target.value
        });
    }

    handleNewFeed(event){
      this.setState({
        message: event.target.value
      })
    }
    
    async componentDidMount() {
      this.setState({ readError: null });
      try {
        db.ref("chats").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
        });
        db.ref("feeds").on("value", snapshot => {
          let feeds = [];
          snapshot.forEach((feed) => {
            feeds.push({
              'key' : feed.key,
              'value' :feed.val() 
            });
          });
          this.setState({ feeds });
        });
      } catch (error) {
        this.setState({ readError: error.message });
      }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            userInfo: this.state.user.email
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
    }

    async postFeeds(event){
      let placement = 'bottomLeft';
      event.preventDefault();
      this.setState({ writeError: null });
      try {
        await db.ref("feeds").push({
          content: this.state.message,
          timestamp: Date.now(),
          author: this.state.user.email,
          likes: 0,
          dislikes: 0,
          shares: 0
        });
        notification.info({
          message: 'Post',
          description:
            'Your post has been created.',
          placement,
        })
        this.setState({ message: '' });
      } catch (error) {
        this.setState({ writeError: error.message });
      }
    }
  }