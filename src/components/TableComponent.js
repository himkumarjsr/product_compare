import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class TableComponent extends React.Component {
  removeProduct = product => {
    this.props.removeProduct(product);
  };

  render() {
    return (
      <Col md={{ span: 10, offset: 1 }}>
        <Table hover className="tableProducts">
          <thead>
            <tr>
              <th>Name</th>
              {this.props.products.map(product => {
              return (
                  <td key={product.id}>{product.name}</td>
              );
            })}
            </tr>
            <tr>
              <th>Price</th>
              {this.props.products.map(product => {
              return (
                  <td key={product.id}>{product.price}</td>
              );
            })}
            </tr>
            <tr>
              <th>Size</th>
              {this.props.products.map(product => {
              return (
                  <td key={product.id}>{product.size}</td>
              );
            })}
            </tr>
          </thead>
          {/* <tbody>
            {this.props.products.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.calories}</td>
                  <td>{product.colour}</td>
                  <td>{product.quantity}</td>
                </tr>
              );
            })}
          </tbody> */}
        </Table>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { removeProduct }
)(TableComponent);
