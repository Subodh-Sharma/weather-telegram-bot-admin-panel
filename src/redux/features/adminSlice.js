import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const adminlogin = createAsyncThunk("admin/login",async({formData,navigate,toast},{rejectWithValue})=>{
    try{
        const response = await api.adminlogin(formData);
        toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top"
        });
        navigate('/home');
        return response.data;
    }catch(err){
        toast({
            title: "Invalid Credentials",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top"
        });
        return rejectWithValue(err.response.data);
    }
})

const adminSlice = createSlice({
    name: "admin",
    initialState:{
        admin:"",
        error:"",
        loading: false,
    },
    reducers:{
        setAdmin:(state,action)=>{
            state.admin = action.payload;
        },
        setAdminLogout:(state,action)=>{
            localStorage.clear();
            state.admin = "";
        }
    },
    extraReducers:{
        [adminlogin.pending]:(state,action)=>{
            state.loading = true;
        },
        [adminlogin.fulfilled]:(state,action)=>{
            state.loading = false;
            localStorage.setItem("profile",JSON.stringify({...action.payload}));
            state.admin = action.payload;
        },
        [adminlogin.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})
export const {setAdmin,setAdminLogout} = adminSlice.actions;
export default adminSlice.reducer;

