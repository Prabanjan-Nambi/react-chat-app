import React, { Component, createElement } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import 'antd/dist/antd.css';
import './Chat.css';
import { Row, Col, Avatar, Input, Tooltip, Button, Layout, Image} from 'antd';
import { Comment} from 'antd';
import { SendOutlined, FormOutlined, SettingOutlined, BellOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Content} from "antd/lib/layout/layout";

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
    
    like = () => {
      
    };
  
    dislike = () => {
     
    };

    render() {
        return (
          <Layout style={{backgroundColor: '#dedede !important'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white'}}>
               <Row>
                 <Col  xs={24} sm={24} md={24} lg={4}>
                     <Avatar
                      src="https://i.pravatar.cc/150?img=32"
                      alt="Han Solo" title={this.state.user}></Avatar>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={8}>
                     <Input className="app-search-input" placeholder="Search Friends..."></Input>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={2}>

                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={4}>
                       <SettingOutlined className="app-header-icons" />
                       <BellOutlined  className="app-header-icons"/>
                       <InfoCircleOutlined  className="app-header-icons"/>
                 </Col>
                 <Col  xs={24} sm={24} md={24} lg={6}>
                      <Avatar
                      src="https://i.pravatar.cc/150?img=32"
                      alt="Han Solo" title={this.state.user}></Avatar>
                      <span className="app-login-name">Logged In as : {this.state.user.email}</span>
                 </Col>
               </Row>
            </Header>
            <Content style={{marginTop: '6%'}}>
               <Row>
                  <Col xs={0} sm={0} md={0} lg={7}>
 
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
                              return <Comment className="app-feeds-list"
                                  actions={[
                                    <Tooltip key="comment-basic-like" title="Like">
                                      <span onClick={this.like}>
                                        <LikeOutlined></LikeOutlined>
                                        <span className="comment-action">{feed.likes}</span>
                                      </span>
                                    </Tooltip>,
                                    <Tooltip key="comment-basic-dislike" title="Dislike">
                                      <span onClick={this.dislike}>
                                        <DislikeOutlined></DislikeOutlined>
                                        <span className="comment-action">{feed.dislikes}</span>
                                      </span>
                                    </Tooltip>,
                                    <span key="comment-basic-reply-to">Share</span>,
                                  ]}
                                  author={<a>{feed.author}</a>}
                                  avatar={
                                    <Avatar
                                      src="https://i.pravatar.cc/150?img=56"
                                      alt={feed.author}
                                    />
                                  }
                                  content={[
                                    <p>
                                     {feed.content}
                                    </p>,
                                    <Image
                                      width={200}
                                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />]
                                  }
                                  datetime={
                                    <Tooltip title={new Date(feed.timestamp).toLocaleDateString()}>
                                      <span>{new Date(feed.timestamp).toLocaleDateString()}</span>
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
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
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
            feeds.push(feed.val());
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
      event.preventDefault();
      this.setState({ writeError: null });
      try {
        await db.ref("feeds").push({
          content: this.state.message,
          timestamp: Date.now(),
          author: this.state.user.email,
          likes: 0,
          dislikes: 0
        });
        this.setState({ message: '' });
      } catch (error) {
        this.setState({ writeError: error.message });
      }
    }
  }