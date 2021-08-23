import React, { Component } from "react";

import { getStoryData } from "../../services/storyData"
import { getID } from "../../services/fetchID";
import "./SingleNews.css";


class SingleNews extends Component {
    constructor(props) {
        super (props)
        this.state = {
            story: [],
            newsId: []
        }
    }

    // getThatID = () => {
    //     getID()
    //         .then(id => this.setState({newsId: id}))
    // }

    // componentDidMount () {
    //     for (let i = 0; i < 10; i++) {
    //         getStoryData(this.state.newsId[i])
    //         .then(story => {
    //             this.setState({story});
    //         })
    //     }
        
    // }

    render () {
        
        return (
                <li className="title"><span>{this.props.single.title}</span>
                    <ul className="mainUl">
                        <li className="points"><i class="fas fa-heart"></i>  {this.props.single.score} points</li>
                        <li className="user"><i class="fas fa-user"></i>  {this.props.single.by}</li>
                        <li className="time"><i class="far fa-clock"></i>  {this.props.single.time}</li>
                        <li className="comments">{this.props.single.descendants} comments</li>
                    </ul>
                </li>
        )
    }
}

export { SingleNews };