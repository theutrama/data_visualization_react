import { Component } from "react";
import "./SortingVisualizer.css";
import {quickSort} from "../algorithms/QuickSortAlgorithm"

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortData: []
        }
    }
    
    componentDidMount() {
        const sortData = getInitialData(700);
        this.setState({sortData});
    }

    render() {
        const {sortData} = this.state;
        console.log(sortData)
        return(
            <>
                <button onClick={() => quickSort(sortData)}>QuickSort</button>
                <h1>Sorting</h1>
                <div className="outterDiv">
                    {sortData.map((height, heightIdx) => {
                        return(
                            <div style={{height: height}} key={heightIdx} className="bin">
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}



const getInitialData = (maxHeight) => {
    const data = []
    for(let i = 0; i < 300; i++){
        data.push(getRandomInt(maxHeight));
    }
    return data;
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}