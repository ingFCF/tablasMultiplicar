import React from 'react'



function App() {
document.title = 'Tablas de Multiplicar'

  let numero=prompt("Que tabla deceas:");

  function name() {
    document.write("<table border>")
    for (var i = 1; i <11; i++){
    document.write("<tr>");
    document.write("<td>"+numero+"</td>");
    document.write("<td>x</td>");
    document.write("<td>"+i+"</td>");
    document.write("<td>=</td>");
    document.write("<td>"+numero * i+"</td>");
    document.write("</tr>");
    
  }
  document.write("</table>");
    
  }

  return (
    <div className="App">
      <div>
        {
          name()
        }
      </div>
    </div>
  );
}

export default App;
