import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getAllUsers = createAsyncThunk("user/getallusers",async(_,{rejectWithValue})=>{
    try{
        const response = await api.getAllUsers();
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

export const userStatus = createAsyncThunk("user/status",async({chatId,toast},{rejectWithValue})=>{
    try{
        const response = await api.userStatus(chatId);
        const obj = response.data.find(o => o.chatId === chatId);
        if(obj.status==="block"){
            toast({
                title: "User Blocked.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }else{
            toast({
                title: "User Unblocked.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const deleteUser = createAsyncThunk("user/delete",async({chatId,toast},{rejectWithValue})=>{
    try{
        const response = await api.deleteUser(chatId);
        toast({
            title: "User Deleted.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top"
        });
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data);
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{},
        users:[],
        error:"",
        loading: false
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    },
    extraReducers:{
        [getAllUsers.pending]:(state,action)=>{
            state.loading = true;
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        },
        [userStatus.pending]:(state,action)=>{
            state.loading = true;
        },
        [userStatus.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        },
        [userStatus.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteUser.pending]:(state,action)=>{
            state.loading = true;
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        },
        [deleteUser.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})
export const {setUser} = userSlice.actions;
export default userSlice.reducer;