import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);
  const [displaymessage, setDisplaymessage] = useState("");

  const [newusername, setNewusername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (
          await fetch("http://localhost:8000/alldata")
        ).json();
        const allusers = data.alldata;
        const message = data.message;
        setUser(allusers);
        setDisplaymessage(message);
        toast.success(message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
      {user.map((e) => {
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
