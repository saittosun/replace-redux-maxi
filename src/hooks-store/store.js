// jshint esversion: 9

import { useState, useEffect } from "react";

// I'm deliberately using a very generic name here because we'll be able to use to store for all kind of state not just for our products
let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  // I will import  useState hook because my goal here now is that I have some mechanism that could lead to other components to re render and use state has such a mechanism you state allows us to manage a state and whenever we update that state any component that uses useState will re render and you also learned in the react hooks section that if a component uses a custom hook and that custom hook uses you state the component that uses the custom hook will re render when you state in that custom hook will trigger a re render and that's what I'll take advantage of here.
  // globalstate is not created separately for every component that consumes my custom hook. Instead it will be created once when this file is first import that somewhere basically and there after any other file that imports from the same file will also use that same state. And that's one important idea here. We'll share data between all files that import from it and that's not something we did before with custom hooks.There the idea was the opposite that we could share logic but not data. Now we'll share logic and data by managing the data outside off the hook because inside of the hook it would not be shared. It would be exclusive to each component. Each component would get its own data but managing it outside of the hook every file that imports this file or something from that file gets the same shared data.
  // I'm only interested in the second value in the array useState gives me. So I'm not interested in the current state snapshot.
  const setState = useState(globalState)[1];

  // I'm interested in this because whenever this function is called the component that uses my custom hook will re render and we'll need this later to re render our components when something in our state changes.

  // Now I want to add this function (let actions = {}) to my listeners array because listeners should be an array full of functions which I can call to update all components that are using my hook so that I have a list of listeners a list of components that are interested in updates to my global state.

  //That means that every component which uses my custom hook will get its own sets that function which is then added to this shared listeners array.So this array will grow over time the more components we add .

  // This means that this useEffect will now only run for the component that uses my custom hook when that component mounts 
  // this is a closure here the value of setState is captured here(alt ta pushun icinde) for that component. That's using my custom hook and therefore will be the same when a component un mounts as it is when it mounts.
  useEffect(() => {
    listeners.push(setState);
    // cleanup function here so that we remove the listener when the componentUnmounts.
    return () => {
      // So here we can use that(asagidaki) comparison. Even those set state is a function different object. It will be equal to the listener so to the same sad state we registered here when the component mounted.
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);
};