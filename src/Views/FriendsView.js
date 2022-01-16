import React, {useState, useEffect} from "react"
import { IoOptions } from "react-icons/io5"
import axios from "axios"
import FriendsBadge from "../Components/friendsBadge"
import profile1 from "../images/david-laid.jpg"
import "../styles/friendsview.css";

const FindFriendsView = () => {
    const [friendsIdList, setFriendsIdList] = useState([])
    const [friendsList, setFriendsList] = useState([])

    const getUserFriends = () => {
        axios("http://localhost:3004/user/1")
        .then((response) => setFriendsIdList(response.data.friends))
        .catch((error) => console.error(error))
    }

    const getFriendsData = () => {
      for(let i = 0; i < friendsIdList.length; i++){
        axios(`http://localhost:3004/user/${i}`)
          .then((response) => friendsList.push(response.data))
          .catch((error) => console.error(error))
      }
    }

    useEffect(() => {
        getUserFriends()
        getFriendsData()
    }, [])

    

  //   for(let i = 0; i < response.data.length; i++){
  //     var curIds = response.data[i].chatMembers
  //     curIds.filter((num) => {
  //         if (num != 1){
  //             listIds.push(num)
  //         }
  //     })
  // }



    console.log(friendsList);
    //friendsList.map(friend, index) <= below
    return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ margin: "40px 0 0 20px" }}> Friends</h2>
            {/* <h1> Discover</h1>
                    <IoOptions size={30}/> */}
          </div>
    
          <div className="friend-container">
            <FriendsBadge
              className="friend-item"
              // key={i}
              // index={i}
              thumbnail={profile1}
              name="Jon Smith"
              age="23"
              tags={["lose weight", "intermediate"]}
            />
          </div>
        </div>
      )
}

export default FindFriendsView; 