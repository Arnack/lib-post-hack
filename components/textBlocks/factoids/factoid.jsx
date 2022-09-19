import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export const Factoid = ({ title, subtitle, colorScheme }) => {

    return (
        <Card
            className="my-2"
            color={colorScheme ? colorScheme : "secondary"}
            inverse
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
                    {subtitle}
                </CardText>
            </CardBody>
        </Card>
    )
}