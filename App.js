const parent = React.createElement("div", {id:"parent"}, [
               React.createElement("div", {id:"child1"},[
               React.createElement("h1", {}, "I am an H1 tag"),
               React.createElement("h2", {}, "I am an H2 tag")]),

                React.createElement("div", {id:"child2"},[
                React.createElement("h1", {}, "I am an H1 tag"),
                React.createElement("h2", {}, "I am an H2 tag")])
            ]);

console.log(parent);


const heading = React.createElement("h1", 
{id:"heading", xyz:"abc"}, "Hello World from React");

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

function isAge18(){
    return age>=18;
}