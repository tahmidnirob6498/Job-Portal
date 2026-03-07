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
import WrongPath from "../component/WrongPath";
import Loading from "../component/Loading";
import { Suspense } from "react";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                index:true,
                element:<Suspense fallback={<Loading></Loading>}>
                    <Home></Home>
                </Suspense>
            },
            {
                path:'jobs',
                element:<Suspense fallback={<Loading></Loading>}>
                    <Jobs></Jobs>
                </Suspense>,
                children:[{
                    index:true,
                    element:<Suspense fallback={<Loading></Loading>}>
                        <RandomJobs></RandomJobs>
                    </Suspense>,  
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
                loader:()=>fetch('/category.json'),
                hydrateFallbackElement:<Loading></Loading>

            },
            {
                path:'/candidate',
                element:<Suspense fallback={<Loading></Loading>}>
                    <Candidates></Candidates>
                </Suspense>
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
            },
            {
                path:'*',
                Component:WrongPath
            }
])