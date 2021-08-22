import React from 'react';
import classnames from 'classnames/bind';
import style from './Tutorial.css';
const cx = classnames.bind(style);

export default class extends React.Component {
  render() {
    const { onClose, } = this.props;

    return (
      <div className={cx('tutorial-container')}>
      <div className={cx('content')}>
        <h1 className={cx('headline')}>Big and Small Card Game tutorial</h1>
  
        <h2>Introduction</h2>
        <p>
          Big and Small is a card game that is built under ERC-721 (NFT, non-fungible token) standard with truffle framework. 
          Each card in the game is a ERC-721, so every card is unique under a specific ownership.
        </p>
        
        
        <h2>Getting started</h2>
        <p>First, you will need MetaMask to run the game. To download MetaMask, click <a href="https://metamask.io/" target="_blank">here</a></p>
        
        <p>
          Second, top up at least 0.11 KUB to your MetaMask wallet. 0.01 KUB for mint NFT card and 0.1 KUB for betting in game.
        </p>
        
      
        <h2>How to play the game</h2>
        <h3>Acquiring the card</h3>
        <p>Now everything is ready. To play the game, acquire a ERC-721 card first, which will cost you 0.01 KUB. Once you sign a transaction and send it to our smart contract, you will receive a card with a random number on it. The number will be used to determine the winner later in the battle.</p>
        
        <h3>Card battle</h3>
        <p>Once you acquired a card, you can compete with our bot. </p>
        <p>Choose a card and place a bet to play for the round. The bet should be between 0.01 to 1 KUB.</p>
        <p>Each round, the smart contract will randomly decide either card with larger number or smaller number wins. At the same time, the smart contract will also randomly generate a number in order to compete with the player.</p>
        <p>Depending on the round, card with larger or smaller number will be the winner.</p>
        <p>Winner of game will win the 150% of the bet put in.</p>
        
        <p>You can view our smart contract at our <a href="https://github.com/PortalNetwork/nifty-game" target="_blank">github</a></p>
  
        <a className={cx('close')} onClick={onClose}>
          <img src="https://ipfs.infura.io/ipfs/QmRu3VNTA3HxgHpkqA7SVxsk2JjC96yD1Yse8rJA6NoDjw" alt="close tutorial" />
        </a>
      </div>
    </div>
    )
  }
}