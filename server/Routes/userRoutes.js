const express = require("express");
const { alldata, singleuser, verifyUser, deletedUser, updateUser, loginUser, logoutUser, registerNewUser } = require("../Controller/userController");

const router = express.Router();

router.get("/alldata",alldata);
router.post("/register", registerNewUser);
router.get("/singleuser/:id",singleuser);
router.post("/verify-user",verifyUser);
router.delete("/delete-user/:id",deletedUser);
router.put("/update-user/:id",updateUser);

router.post("/login-user" , loginUser);
router.get("/logout" , logoutUser);

module.exports = router;
