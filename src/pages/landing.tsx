import React, {Component} from 'react';

interface Props {

}

interface State {

}

export default class Landing extends Component<Props, State> {
    constructor(props: Props){
        super(props);

        //set State and binding here
    }

    render() {
        return(
            <div>
                <h1>Landing page here</h1>
            </div>
        )
    }
}