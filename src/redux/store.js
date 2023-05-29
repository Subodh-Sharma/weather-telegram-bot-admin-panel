import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./features/userSlice";
import AdminReducer from "./features/adminSlice";
// import SettingReducer from "./features/settingSlice";

export default configureStore({
    reducer:{
        admin: AdminReducer,
        user: UserReducer,
        // setting: SettingReducer,
    }
});