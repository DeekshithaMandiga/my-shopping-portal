import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        productName:"",
        productPrice: 0,

    };
  }
  render() {
    return (
      <form className="row mb-5 mt-5" onSubmit={ (e) =>{
        e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice));
      }}>
        <div className="mb-3 col-5">
          <label htmlFor="inputname" className="form-label">
            <h2>Product Name</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputname"
            aria-describedby="name"
            name="productName"
            onChange={(e) =>{
                this.setState({productName: e.currentTarget.value});
            }}value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">
            <h2>Price</h2>
          </label>
          <input type="number" className="form-control" id="price" name="productPrice"
          onChange={(e) =>{
            this.setState({productPrice:Number(e.currentTarget.value)});
        }}value={this.state.productPrice}
          
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-2"
          
        >
          Add to cart
        </button>
      </form>
    );
  }
}

export default AddItem;
