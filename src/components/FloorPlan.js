import React, { Component} from "react";
import { Bath } from "./Rooms/Bath";
import { Bedroom } from "./Rooms/Bedroom";
import { Kitchen } from "./Rooms/Kitchen"
import { LivingRoom } from "./Rooms/LivingRoom";


export const FloorPlan = ()=> {
    return (
        <div>
        <Bedroom bedNum = "1"/> 
        <Kitchen />
        <Bath size="Full" />
        <Bedroom bedNum = "2"/>
        <LivingRoom />
        <Bath size="Half" />
        <Bedroom bedNum = "3" />
        </div>
        )
}

