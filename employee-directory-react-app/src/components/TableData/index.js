import React from "react";



export default class TableData extends React.Component {
    render() {
        return (
            <div>
                {this.props.results}
            </div>
        );
    }
}
