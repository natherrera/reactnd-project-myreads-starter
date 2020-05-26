import React from 'react';
import {
    Card,
    Form
} from 'semantic-ui-react';
import './../../assets/styles/components/newQuestion.css';


class NewQuestion extends React.PureComponent
{
    state = {
        values: {
            questionOne: '',
            questionTwo: ''
        }
    };

    render()
    {

        return (
            <Form id='questions-form' onSubmit={ this.onQuestionsSubmit }>
            <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>Create a new question!</Card.Header>
                    <Card.Meta>Complete the question</Card.Meta>
                    <Card.Description>

                            <strong>Would You Rather ...</strong>

                            <Form.Field
                                fluid
                                control={ Form.Input }
                                id="questionOne"
                                placeholder='Question one'
                                onChange={ this.onInputChange }
                                value={ this.state.values.questionOne }
                                required
                            />

                            <strong>or</strong>

                            <Form.Field
                                fluid
                                control={ Form.Input }
                                id="questionTwo"
                                placeholder='Question teo'
                                onChange={ this.onInputChange }
                                value={ this.state.values.questionTwo }
                                required
                            />

                    </Card.Description>

                </Card.Content>
                <Card.Content extra>

                    <Form.Button
                        fluid
                        color='teal'
                        type='submit'
                    >
                        Submit
                    </Form.Button>

                </Card.Content>
            </Card>
        </Card.Group>
        </Form>
        );
    }
}

export default NewQuestion;
