import CryptoNews from "../CryptoNews";
import {useEffect, useState } from "react";
const Channels = ({ provider, account, dappcord, channels, currentChannel, setCurrentChannel }) => {
  const [IsNews, setIsNews] = useState(false);
  const channelHandler = async (channel) => {
    // Check if user has joined
    // If they haven't allow them to mint.
    const hasJoined = await dappcord.hasJoined(channel.id, account)

    if (hasJoined) {
      setCurrentChannel(channel)
    } else {
      const signer = await provider.getSigner()
      const transaction = await dappcord.connect(signer).mint(channel.id, { value: channel.cost })
      await transaction.wait()
      setCurrentChannel(channel)
    }
  }

  return (
    <div className="channels">
      <div className="channels__text">
        <h2>General ChatRoom</h2>

        <ul>
          {channels.map((channel, index) => (
            <li
              onClick={() => channelHandler(channel)} key={index}
              className={currentChannel && currentChannel.id.toString() === channel.id.toString() ? "active" : ""}>
              {channel.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="channels__voice">
        <h2 style={{"color": "white", "cursor": "pointer"}} onClick={() => {setIsNews(!IsNews)}}>Coin Ranking</h2>
      </div>
      {
        IsNews && (
          <CryptoNews IsNews={IsNews} setIsNews={setIsNews} />
        )
      }
    </div>
  );
}

export default Channels;