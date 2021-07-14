import React from "react";
import {Activity} from "../../../app/models/activity";
import {Button, Card, Image} from "semantic-ui-react";

interface Props {
    activity: Activity
}

export default function ActivityDetails({activity}: Props) {
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Edit' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}