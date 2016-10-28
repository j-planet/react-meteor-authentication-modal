/**
 * Created by jj on 10/11/16.
 */

SSR.compileTemplate('resetPassword', Assets.getText('emailTemplates/reset-password-email.html'));

// Note: These are GLOBAL CHANGES!!!
Accounts.emailTemplates.siteName = "CarpStreet";

Accounts.emailTemplates.verifyEmail =
{
    subject()
    {
        return "Please verify your email address.";
    },

    from()
    {
        return "Jenny from CarpStreet <team@carpstreet.com>";
    },

    html( user, url)    // url is the confirmation URL
    {
        let emailData = {
            emailAddress   : user.emails[0].address,
            urlWithoutHash : url.replace( '#/', '' ),
            supportEmail   : "your@email.com"
        };

        return SSR.render('verificationEmail', emailData);
    }
};

Meteor.methods
({
    sendVerificationEmails()
    {
        let userId = Meteor.userId();

        if (userId)
        {
            const unVerifiedEmails = Meteor.user().emails.filter(email => !email.verified).map(email => email.address);

            // grab all unverified email addresses
            unVerifiedEmails.forEach( address => Accounts.sendVerificationEmail( userId,  address) );

            return unVerifiedEmails;
        }
        else
        {
            throw new Meteor.Error('not logged in', 'Please login first');
        }
    }

});
