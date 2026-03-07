import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./Home";
import Jobs from "./Jobs";
import { Component } from "react";
import RandomJobs from "../component/RandomJobs";
import CatJobs from "../component/CatJobs";
import Login from "./Login";
import Signup from "./Signup";
import SelectedJob from "../component/SelectedJob";
import PrivateRoute from "./PrivateRoute";
import Candidates from "../component/Candidates";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'jobs',
                Component:Jobs,
                children:[{
                    index:true,
                    Component:RandomJobs,  
                },
                {
                    path:':id',
                    Component:CatJobs,
                }
            ]
            },
            {
                path:'selectedJob/:id',
                element:<PrivateRoute>
                    <SelectedJob></SelectedJob>
                </PrivateRoute>,
                loader:()=>fetch('/category.json')
            },
            {
                path:'/candidate',
                Component:Candidates
            }
            
        ]
    },
   {
                path:'login',
                Component:Login
            },
            {
                path:'signup',
                Component:Signup
            }
])