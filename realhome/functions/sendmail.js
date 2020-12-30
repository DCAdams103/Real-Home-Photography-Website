const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    let data = JSON.parse(event.body)
    
    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        auth:{
            user:"realhomephotography@zohomail.com",
            pass: "Rwa@56842012"
        }
    });

    transporter.sendMail({
        from: "realhomephotography@zohomail.com",
        to: "Rusty@RHomePhotography.com",
        subject: "Email from website",
        html: `
            <h3>${data.name} from ${data.agency} at ${data.email} says </h3>
            <p>${data.message}</p>
            `
    }, function(error, info) {

        

        if(error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });

}