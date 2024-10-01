//import { tabla } from "./modulos.js";


function insertaTabla(){
    const tabla1 = document.getElementById('contenidos');
    tabla1.innerHTML = '';

    const row = document.createElement('table');
    row.innerHTML = 
    `<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOMBRE</th>
      <th scope="col">APELLIDO</th>
      <th scope="col">NUMERO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>JESÚS</td>
      <td>NAVAS</td>
      <td>16</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>LUCAS</td>
      <td>OCAMPOS</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ISAAC</td>
      <td>ROMERO</td>
      <td>7</td>
    </tr>
  </tbody>`
  tabla1.appendChild(row);
}