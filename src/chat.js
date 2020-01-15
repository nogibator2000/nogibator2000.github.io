import React, { Component } from 'react';
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from "@pusher/chatkit-client-react"
const instanceLocator = "v1:us1:e92f4c1a-f439-4d1a-b48a-2590db73d471"
const userId = "User"

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e92f4c1a-f439-4d1a-b48a-2590db73d471/token",
})
export default class Chat extends Component{

  render() {

    return (
      <div>
      <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={userId}
      >
        <WelcomeMessage />
      </ChatkitProvider>
</div>
    );
  }
}
const WelcomeMessage = withChatkit(props => {
  return (
    <div>
      {props.chatkit.isLoading
        ? 'Connecting to Chatkit...'
        : `Hello ${props.chatkit.currentUser.name}!`}
    </div>);});
