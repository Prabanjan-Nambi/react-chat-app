import React, { Component, createElement, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import 'antd/dist/antd.css';
import './Chat.css';
import { Row, Col, Avatar, Input, Tooltip, Button, Layout, Image, notification, Badge, Skeleton, Card, Menu, 
Meta} from 'antd';
import { Comment} from 'antd';
import { useHistory } from 'react-router-dom';
import { SendOutlined, FormOutlined, SettingFilled, BellFilled, LogoutOutlined, MailOutlined, CalendarOutlined, LinkOutlined,
VideoCameraOutlined, UsergroupAddOutlined, ClockCircleOutlined, CloseOutlined, WechatOutlined} from '@ant-design/icons';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Content} from "antd/lib/layout/layout";
import AppLogo   from "../image/kloudone.png";
import firebase from "firebase";

const {Header, Footer } =  Layout;
const {TextArea} = Input;


const AlwaysScrollToBottom = () => {
  const elementRef = React.createRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};
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
        message: '',
        fetchingFeeds: false,
        fetchingComments: false,
        showingChatBox: true
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNewFeed = this.handleNewFeed.bind(this);
      this.postFeeds = this.postFeeds.bind(this);
      this.signOut = this.signOut.bind(this);
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
    
    signOut = () => {
      auth().signOut().then(function() {
          
      }, function() {
          console.log('Logout failed.');
      });
    }
    

    render() {
        return (
          <Layout style={{backgroundColor: '#dedede !important'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white'}}>
               <Row>
                 <Col  xs={2} sm={2} md={2} lg={2}>
                     <Avatar
                      src={AppLogo}
                      alt="Han Solo" title={this.state.user}></Avatar>
                 </Col>
                 <Col  xs={2} sm={2} md={2} lg={6}>
                     <Input className="app-search-input" placeholder="Search Friends..."></Input>
                 </Col>
                 <Col  xs={0} sm={0} md={2} lg={4}>

                 </Col>
                 <Col style={{height: '64px', overflow: 'hidden'}} xs={15} sm={15} md={8} lg={6}>
                       <LogoutOutlined  onClick={() => this.signOut()} className="app-header-icons"/>
                       <WechatOutlined title={'Messages'} onClick={() => { this.setState({
                          'showingChatBox' : true
                       })}} className="app-header-icons" />
                       <BellFilled  className="app-header-icons">
                         <Badge count={5}>
                         </Badge>
                       </BellFilled>
                 </Col>
                 <Col style={{height: '64px', overflow: 'hidden', textOverflow: 'ellipsis',
                 whiteSpace: 'nowrap'}} xs={3} sm={3} md={3} lg={6}>
                      <Avatar
                      src="https://avatars3.githubusercontent.com/u/10627086?s=460&u=6a06199761992e8d933380f1b57371925675f5ba&v=4"
                      alt="Han Solo" title={this.state.user}></Avatar>
                      <span title={this.state.user.email} className="app-login-name">{this.state.user.email}</span>
                 </Col>
               </Row>
            </Header>
            <Content style={{marginTop: '6%'}}>
               <Row>
                  <Col xs={24} sm={24} md={24} lg={7}>
                       <div className="app-news-feeds">
                        <Menu className="app-news-menu"
                          style={{ width: 256 }}
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode={'vertical'}
                          theme={'light'}
                        >
                          <Menu.Item key="1" icon={<Avatar
                                src="https://avatars3.githubusercontent.com/u/10627086?s=460&u=6a06199761992e8d933380f1b57371925675f5ba&v=4"
                                alt="Han Solo" title={this.state.user} style={{width: '24px', height: '26px', marginRight: '9px'}}></Avatar>}
                          >
                             Pages
                          </Menu.Item>
                          <Menu.Item key="2" icon={<CalendarOutlined />}>
                            Events
                          </Menu.Item>
                          <Menu.Item key="3" icon={<LinkOutlined />}>
                            Marketing
                          </Menu.Item>
                          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                            Videos
                          </Menu.Item>
                          <Menu.Item key="5" icon={<ClockCircleOutlined />}>
                            Memories
                          </Menu.Item>
                          <Menu.Item key="6" icon={<LinkOutlined />}>
                             Market Place
                          </Menu.Item>
                        </Menu>
                       </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={10}>
                      <div className="create-feeds">
                          <div className="create-feeds-header">
                              <FormOutlined className="create-feeds-icon"/>
                              <label className="create-feeds-label">Create Post</label>
                          </div>
                          <div className="create-feeds-input">
                             <TextArea placeholder="What's on your mind?" onPressEnter={this.postFeeds} onChange={this.handleNewFeed} value={this.state.message} style={{borderRadius: '20px', borderWidth: '1px', borderColor: '#e4e4e4'}} rows={4} />
                          </div>
                          <div className="create-feeds-controls">
                               <Button className="create-feeds-button" type="primary" onClick={this.postFeeds}>Post</Button>
                          </div>
                      </div>
                      <div className="feeds-list">
                           {
                               this.state.fetchingFeeds === true && <Skeleton className="app-entity-skeleton" active />
                           }
                           {this.state.fetchingFeeds === false && this.state.feeds.length === 0  && 
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
            { this.state.showingChatBox && <div className="chat-box-container">
                <div className="chat-box-header">
                   <p className="chat-box-header-content">Chat Room 
                   <span className="chat-box-active-icon"></span>
                   <span className="chat-box-minimize"><CloseOutlined  onClick={() => {
                        this.setState({'showingChatBox' : false});
                   }} /></span>
                   </p>
                </div>
                <div className="chat-box-conversations">
                  {
                    this.state.fetchingComments && <Skeleton className="app-entity-skeleton" active />
                  }
                  {
                    !this.state.fetchingComments && this.state.chats.length === 0 && <p className="app-no-chats">No Chats Available!</p>
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
                  <AlwaysScrollToBottom />
                </div>
                <div className="chat-box-controls">
                  <Row style={{padding: '5px'}}>
                    <Col xs={16} sm={16} md={16} lg={20}>
                        <Input className="chat-box-input" onPressEnter={this.handleSubmit} onChange={this.handleChange} placeholder="Type your message here..." value={this.state.content}/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4}>
                      <Tooltip title="Send">
                        <Button className="chat-send-button" onClick={this.handleSubmit} type="primary" shape="circle" icon={<SendOutlined />} />
                      </Tooltip>
                    </Col>
                  </Row>
                </div>
              </div>}
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
        this.setState({fetchingComments : true});
        db.ref("chats").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
          this.setState({ fetchingComments : false });
        });
        this.setState({fetchingFeeds : true});
        db.ref("feeds").on("value", snapshot => {
          let feeds = [];
          snapshot.forEach((feed) => {
            feeds.push({
              'key' : feed.key,
              'value' :feed.val() 
            });
          });
          this.setState({ feeds });
          this.setState({fetchingFeeds : false});
        });
      } catch (error) {
        this.setState({ readError: error.message });
        this.setState({fetchingFeeds : false});
        this.setState({fetchingComments : false});
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