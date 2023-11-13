const express = require('express')
var nodemailer = require('nodemailer');
const app = express()
const port = 3001;

app.use(express.urlencoded());
app.use(express.json());


app.post('/ticket', function(request, response){
    console.log(request.body)  // your JSON
    response.send(request.query);   // echo the result back

     //CREATE EMAIL CONNECTION //endustriyelelektronikProvider @outlook.com // emirhantarik123456
    transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "endustriyelelektronikProvider@outlook.com",
            pass: "emirhantarik123456"
        }
    });

    //SET MAIL OPTIONS
     var mailOptions = {
        from: 'endustriyelelektronikProvider@outlook.com',
        to: 'ttarikozdemirdev@hotmail.com',
        subject: request.body.subject,
        text: "Ad Soyad: " + request.body.name + "E Posta Adresi: " + request.body.email + "Telefon Numarası: " + request.body.phone + "Arıza Türü: " + request.body.select + "Detay" + request.body.detail
      };

      

    //SEND MAIL
     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})