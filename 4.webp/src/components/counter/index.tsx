/**
 *../../index.tsx
 */

import * as React from "react";

interface CounterProps {
    initialCount?: number;
}
interface CounterState {
    count?: number;
}
export class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps, state: CounterState) {
        super(props, state);
        this.state = {
            count: this.props.initialCount? this.props.initialCount: 0
        }
    }

    componentDidMount() {

    }
    tick(){
        this.setState({
            count: this.state.count +1
        });
    }
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}