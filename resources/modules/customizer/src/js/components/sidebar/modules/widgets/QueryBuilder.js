import * as React from "react";
import { Handle } from 'react-flow-renderer';
import {connect} from "react-redux";

class QueryBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nodeClasses = "flow-node-api";
    if (this.props.selectedNode === 'change' && this.props.id === this.props.selectedNodeId) nodeClasses += " selected";

    return (
      <div className={nodeClasses}>
        <Handle type="target" position={this.props?.targetPosition ?? 'top'}/>
        <div className="wrapper">
          <div></div>
          <div className="bot-text">{this.props?.data?.label}</div>
          <div className="bot-type">{this.props?.type}</div>
        </div>
        <Handle type="source" position={this.props?.sourcePosition ?? 'bottom'} style={{borderRadius: 0}}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNode: state.copyNodeData.selectedNode,
    selectedNodeId: state.copyNodeData.selectedNodeId
  }
}

QueryBuilder = connect(mapStateToProps)(QueryBuilder)

export default QueryBuilder
