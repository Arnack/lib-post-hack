import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import ReactMarkdown from 'react-markdown'

export const TextBlock = ({ title, description, colorScheme }) => {
    return (
        <Card
            className="my-2"
            color={colorScheme ? colorScheme : "primary"}
            outline
            style={{
                // width: '18rem'
                minHeight: "160px"
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardText>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </CardText>
            </CardBody>
        </Card>
    )
}

