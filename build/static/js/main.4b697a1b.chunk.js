(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),i=r(4),u=r(3),c=r(5),l=r(0),o=r.n(l),m=r(7),h=r.n(m);r(15);function d(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),b=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(c.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||r[e]||(r[e]=this.state.xIsNext?"X":"0",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=p(a.squares),s=r.map(function(e,r){var a=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))});return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null,s)))}}]),t}(o.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return e[s]}return null}h.a.render(o.a.createElement(b,null),document.getElementById("root"))},15:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b697a1b.chunk.js.map