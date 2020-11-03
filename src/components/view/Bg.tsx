import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: [ "#f0f8ff", "#7fffd4", "#ff1493"],
    cross: "dead", // cross or bround
    random: 20,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx : any, particle: any) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 5, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};
export default class Bg extends Component {
  render () {
    return (
        <ParticlesBg type="fountain" config={config} bg={true} />
    )
  }
}
