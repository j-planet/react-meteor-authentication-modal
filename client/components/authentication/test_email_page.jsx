import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { callBackBert } from '../../utilities';


class TestEmailPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('TestEmailPage willMount.');
    }

    sendTestEmail()
    {
        Meteor.call('testEmail', callBackBert);
    }

    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.sendTestEmail.bind(this)}>
                    Send test email
                </button>
            </div>
        );
    }
}

export default TestEmailPage;