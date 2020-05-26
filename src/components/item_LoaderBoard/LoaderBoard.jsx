import React from 'react';
import {
    Card
} from 'semantic-ui-react';
import './../../assets/styles/components/loaderBoard.css';


class LoaderBoard extends React.PureComponent
{

    constructor(props) {
        super(props);

        this.state = {
            usersBoard: [
                {
                    id: 0,
                    name: 'defaultName',
                    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
                    answeredQuestions: 6,
                    createdQuestions: 2,
                    ScorePoints: 40,
                    questions: [
                        {
                            key: '1',
                            optionOne: 'Pregunta 1',
                            optionTwo: 'Pregunta 2'
                        }, {
                            key: '2',
                            optionOne: 'Pregunta 1',
                            optionTwo: 'Pregunta 2'
                        },
                    ],
                    answered: [
                        {
                            questionKey: '1',
                            answer: 'optionOne'
                        }
                    ]

                }, {
                    id: 1,
                    name: 'defaultName2',
                    avatar: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
                    answeredQuestions: 8,
                    createdQuestions: 4,
                    ScorePoints: 40
                }
            ]
        };
    }


    render()
    {
        const { usersBoard } = this.state;
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <div className="ui items">
                            {
                            usersBoard.map((e) => (
                                <div key={
                                        e.id
                                    }
                                    className="item">
                                    <div className="image"><img src={
                                            e.avatar
                                        }/></div>
                                    <div className="content">
                                        <div className="header">
                                            {
                                            e.name
                                        }</div>
                                        <div className="meta">Answered questions: {
                                            e.answeredQuestions
                                        }</div>
                                        <div className="description">Created questions: {
                                            e.createdQuestions
                                        }</div>
                                        <div className="extra">Score: {
                                            e.ScorePoints
                                        }</div>
                                    </div>
                                </div>
                            ))
                        } </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}

export default LoaderBoard;
