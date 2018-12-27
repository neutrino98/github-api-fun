import React from 'react'
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";


interface IFindRepositoryProps {
    name: string,
    owner: string,
    onNameChange(event: any): void,
    onOwnerChange(event: any): void,
    onSubmit(event: any): void
}

export default function FindRepository(props: IFindRepositoryProps) {
    return (
        <Card>
            <CardContent>
                <TextField
                    label="Name"
                    value={props.name}
                    onChange={props.onNameChange}
                />
                <TextField
                    label="Owner"
                    value={props.owner}
                    onChange={props.onOwnerChange}
                />
                <Button onClick={props.onSubmit}> Submit</Button>
            </CardContent>
        </Card>
    )
}