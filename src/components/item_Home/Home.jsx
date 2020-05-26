import React from 'react';
import {
    Card,
    Tab,
    Item,
    Button
} from 'semantic-ui-react';
import { HomeTab } from '../elements';
import Answered from './Answered';
import Unanswered from './Unanswered';
import './../../assets/styles/components/home.css';


class Home extends React.PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            views: [
                'None', 'Home', 'New Question', 'Loader Board'
            ],
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
            ],
            activeItem: 'None',
            panes: ['Unanswered Questions', 'Answered Questions']
        };
    }

    render()
    {
        const { panes, usersBoard } = this.state;
        const { changeItem } = this.props;

        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Tab className="tabCard"
                            menu={ {pointing: true}}
                            panes={ panes.map(e => (HomeTab({
                                    key: e,
                                    title: e,
                                    render: () => (
                                        <>
                                            <Item.Group relaxed className="item-card">
                                                {e === 'Answered Questions' ? ( usersBoard.map((item) => (

                                                    <Answered
                                                        user={item}
                                                        changeItem={changeItem}
                                                    />

                                                ))) : (

                                                    <Unanswered />

                                                 )}
                                            </Item.Group>

                                        </>)})))}/>
                    </Card.Content>
                </Card>
            </Card.Group>
        );
    }
}

export default Home;
