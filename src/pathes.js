import Joke from './joke'
import Chess from './chess'
import React from 'react';
import Contact from './contact'
export const pathes = [{path:'/', name:'Home', component: <Joke />},
{path:'/ChessBot/', name:'Chess bot', component: <Chess />},
{path:'/contact/', name:'Contact me', component: <Contact />}];
