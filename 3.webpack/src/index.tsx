/**
 *入口文件
 */

import *as React from "react";
import * as ReactDom from 'react-dom';
import { Counter } from "./components/counter";

ReactDom.render(
    <Counter initialCount={1}/>,
    document.getElementById('example')
);