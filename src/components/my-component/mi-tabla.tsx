import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'mi-tabla',
  styleUrl: 'mi-tabla.css',
  shadow: true,
})
export class MiTabla {
  @Prop() apiUrl: string;
  @State() data: any[] = [];
  @State() error: string = '';

  componentWillLoad() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      this.data = result.items; // Acceder a la propiedad 'items' del resultado
    } catch (error) {
      this.error = error.message;
    }
  }

  render() {
    if (this.error) {
      return <div class="error-message">{this.error}</div>;
    }
    if (this.data.length === 0) {
      return <div class="loading-message">Loading...</div>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.producto}</td>
              <td>{item.cantidad}</td>
              <td>
                <img src={item.imagen} alt={item.producto} width="50" />
              </td>
              <td>{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
