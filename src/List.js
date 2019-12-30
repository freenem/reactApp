import React, { Component } from 'react';

class List extends Component {
    number = 1;
  
    render() {
        let data = this.props.data;
        return (
            <div>
                <p style={this.title}>{this.props.title}</p>
                <ul>
                    {data.map((item) => <Item number={this.number++} value={item} key={this.number} />)}
                </ul>
            </div>
        )
    }
  }
  
  class Item extends Component {
    render() {
        return (
            <li style={this.li}>
                <span style={this.num}>[{this.props.number}] </span>
                {this.props.value}
            ]</li>
        );
    }
  }

  export default List;