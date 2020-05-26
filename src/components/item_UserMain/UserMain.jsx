import React from 'react';
import {
    Card,
    Image,
    Form,
    Progress,
    Button
} from 'semantic-ui-react';
import './../../assets/styles/components/userMain.css';


class UserMain extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeResult: true
        };
    }

    close = () => this.setState({ activeResult: false })



    render() {

        const { activeResult } = this.state;

        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image circular size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'/>
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>asks:</Card.Meta>
                        {
                            activeResult ? (
                            <>
                                <Card.Description>
                                    <strong>Would You Rather ...</strong>
                                </Card.Description>
                                <Form.Group grouped>
                                    <Form.Field label='This one' control='input' type='radio' name='htmlRadios'/>
                                    <Form.Field label='That one' control='input' type='radio' name='htmlRadios'/>
                                </Form.Group>
                            </>
                        ) : (
                            <>
                                <Card.Description>
                                    <strong>Results</strong>
                                </Card.Description>
                                <div className="item-result">
                                    <div className="insign">
                                        <p>You choose this!</p>
                                    </div>
                                    <div className="item-title">
                                        <p>Would you rather
                                            <span>aqui va la pregunta?</span>
                                        </p>
                                    </div>
                                    <div className="item-progressBar">
                                        <Progress percent={100}
                                            success>
                                            The progress was successful
                                        </Progress>
                                    </div>
                                </div>
                                <br/>
                                <div className="item-result">
                                    <div className="item-title">
                                        <p>Would you rather
                                            <span>aqui va la pregunta2?</span>
                                        </p>
                                    </div>
                                    <div className="item-progressBar">
                                        <Progress percent={100}
                                            success>
                                            The progress was successful
                                        </Progress>
                                    </div>
                                </div>
                            </>
                        )
                    } </Card.Content>
                    {
                    activeResult && (

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button onClick={this.close} color='teal'>Submit</Button>
                            </div>
                        </Card.Content>

                    )
                } </Card>
            </Card.Group>
        );
    }
}

export default UserMain;
