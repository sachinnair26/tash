import React, { Component } from "react";
import stringAction from "./stringAction";
import { clickDivAction } from "./clickDivAction";
import { tryAgainAction } from "./clickDivAction";
import "./App.css";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "winter is coming",
      go: false,
      data: [],
      newArray: [],
      result: [],
      showSuccess: "",
      done: false
    };
  }
  componentWillReceiveProps(props) {
    if (!props.clickVal.clickVal.result) {
    } else {
      this.setState({ result: props.clickVal.clickVal.result });
      if (props.clickVal.clickVal.result.length === this.state.arr.length) {
        this.setState({ done: true });
        if (props.clickVal.clickVal.success === true) {
          this.setState({ showSuccess: true });
        } else if (props.clickVal.clickVal.success === false) {
          this.setState({ showSuccess: false });
        }
      } else {
        this.setState({ done: false });
      }
    }
    if (this.props.value !== props.value)
      this.setState({
        newArray: props.value.value,
        arr: props.value.value
      });
  }
  componentDidMount() {
    this.props.stringAction(this.state.sentence);
    this.setState({
      go: true,

      result: []
    });
  }
  onClickWord(p) {
    this.props.clickDivAction(p, this.state.sentence);

    this.setState({
      newArray: this.state.newArray.filter(ele => {
        return ele != p;
      })
    });
  }
  ontryAgain() {
    this.props.stringAction(this.state.sentence);
    this.setState({ route: [] });
    this.props.tryAgainAction();
  }
  render() {
    return (
      <div className="App">
        <h1>Challenge</h1>
        <div className="result">
          {this.state.result.map(i => (
            <div className="single">{i}</div>
          ))}
        </div>
        <hr />{" "}
        {this.state.go ? (
          <div className="desp">
            {this.state.newArray.map((p, index) => (
              <div
                className="single"
                key={index}
                onClick={() => this.onClickWord(p)}
              >
                {p}
              </div>
            ))}
          </div>
        ) : null}
        {this.state.done ? (
          <div className="final">
            {this.state.showSuccess ? (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div
                  style={{
                    backgroundColor: "green",
                    padding: "30px",
                    borderRadius: "20px"
                  }}
                >
                  Success
                </div>
                <div
                  onClick={this.ontryAgain.bind(this)}
                  style={{
                    backgroundColor: "yellow",
                    padding: "10px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                  }}
                >
                  Try Again
                </div>
              </div>
            ) : (
              <div
                onClick={this.ontryAgain.bind(this)}
                style={{
                  backgroundColor: "red",
                  padding: "30px",
                  borderRadius: "20px",
                  cursor: "pointer"
                }}
              >
                try Again
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  value: state.value,
  clickVal: state.clickVal
});
const mapActionsToProps = {
  stringAction: stringAction,
  clickDivAction: clickDivAction,
  tryAgainAction: tryAgainAction
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
//import React, { Component } from "react";
//
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sentence: "winter is coming",
//       newArray: [],
//       result: [],
//       data: []
//     };
//   }
//   componentDidMount() {
//     var newArray = [];
//     var str = this.state.sentence.trim();
//     var data = str.split(" ");
//     console.log(data);
//     while (newArray.length !== data.length) {
//       var rand = data[Math.floor(Math.random() * data.length)];
//       if (newArray.indexOf(rand) === -1) {
//         newArray.push(rand);
//       }
//     }
//     this.setState({ newArray, data });
//   }
//   onClickDiv(p) {
//     this.state.result.push(p);

//     if (this.state.result.length === this.state.data.length) {
//       if (this.state.result.join(" ") === this.state.sentence) {
//         console.log("success");
//       } else {
//         console.log("failure");
//       }
//     }
//     this.setState({
//       newArray: this.state.newArray.filter(ele => {
//         return ele != p;
//       })
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             minHeight: "30px"
//           }}
//         >
//           {this.state.newArray.map(so => (
//             <div
//               onClick={() => this.onClickDiv(so)}
//               style={{
//                 backgroundColor: "violet",
//                 padding: "20px",
//                 borderRadius: "20px"
//               }}
//             >
//               {so}
//             </div>
//           ))}
//         </div>
//         <hr />
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             minHeight: "30px"
//           }}
//         >
//           {this.state.result.map(i => (
//             <div
//               style={{
//                 backgroundColor: "violet",
//                 padding: "20px",
//                 borderRadius: "20px"
//               }}
//             >
//               {i}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
