import React from 'react';
import {
    Card,
    Tab,
    Item,
    Button
} from 'semantic-ui-react';

class Answered extends React.PureComponent {


    changeItem = () => {
        const { changeItem } = this.props;
        changeItem && changeItem('None');
    }

    render() {

        const { user} = this.props;

        return (
            <>
                <Item>
                    <Item.Image size='small' src={user.avatar} />

                    <Item.Content >
                        <Item.Header>{user.name} asks: </Item.Header>
                        <Item.Description>
                            <h3>Would you rather ...</h3>
                            <p>...write javascri...</p>
                            <Button basic color='teal'
                            onClick={
                                this.changeItem
                            }
                            >View Poll</Button>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </>
        )
    }
}

export default Answered;
