import { Meteor } from 'meteor/meteor';

import { MAILGUN_URL } from './secrets';
import { RewardsCollection } from '../collections/rewards';


Meteor.startup(() =>
{
    process.env.MAIL_URL = MAILGUN_URL;
});