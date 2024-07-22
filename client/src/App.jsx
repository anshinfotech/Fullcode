import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { getUsersAction } from "./Redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [user, setUser] = useState([]);
  const [displaymessage, setDisplaymessage] = useState("");

  const [newusername, setNewusername] = useState("");

  const allusers = useSelector((state)=>state.users.users)
  const loading = useSelector((state)=>state.users.loading)
  const error = useSelector((state)=>state.users.error)
  const message = useSelector((state)=>state.users.message)
  console.log("ALL USERS",allusers);
  console.log("Loading",loading);
  console.log("Error",error);
  console.log("message",message);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  const deleteData = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:8000/delete-user/${id}`
      );
      console.log(data);
      if (data.data.removedUser) {
        return window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (id) => {
    try {
      const data = await axios.put(`http://localhost:8000/update-user/${id}`, {
        newusername,
      });
      if (data.data.updatedUser) {
        return window.location.reload();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster richColors />
      {allusers && allusers.map((e) => {
        return (
          <>
            <h1>{e.username}</h1>
            <h2>{e.email}</h2>
            <p>{e._id}</p>
            <button onClick={() => deleteData(e._id)}>
              Click me to delete data
            </button>
            <br />
            <input
              type="text"
              placeholder="new updated username"
              value={newusername}
              onChange={(e) => setNewusername(e.target.value)}
            />
            <br />
            <button onClick={() => updateData(e._id)}>
              Click to update Username
            </button>
          </>
        );
      })}
    </>
  );
};

export default App;
