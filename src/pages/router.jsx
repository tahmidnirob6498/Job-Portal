import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "./Home";
import Jobs from "./Jobs";
import { Component } from "react";
import RandomJobs from "../component/RandomJobs";
import CatJobs from "../component/CatJobs";
import Login from "./Login";
import Signup from "./Signup";

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