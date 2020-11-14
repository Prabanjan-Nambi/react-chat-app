import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import 'antd/dist/antd.css';
import './chat.css';
import { Row, Col, Avatar, Input, Tooltip, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: auth().currentUser,
        chats: [],
        content: '',
        readError: null,
        writeError: null
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="chat-box-container">
                <div className="chat-box-conversations">
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
          );
    }
    
    handleChange(event) {
        this.setState({
          content: event.target.value
        });
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
  }