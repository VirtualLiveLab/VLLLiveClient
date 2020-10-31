import React from 'react'

interface Props{
    hoge: number
}

export class Top extends React.Component<Props>{
    render(){
        return (
            <React.Fragment>
                <h1>ここはTopです</h1>
            </React.Fragment>
        )
    }
}