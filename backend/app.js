const express = require('express');
const AWS = require('aws-sdk');
const app = express();
app.use(express.json());

AWS.config.update({ region: 'ap-south-1' }); // Change to your region
const sns = new AWS.SNS();

app.post('/alert', (req, res) => {
  const { message } = req.body;
  const params = {
    Message: message,
    TopicArn: 'arn:aws:sns:ap-south-1:703227779380:DisasterAlerts'
  };

  sns.publish(params, (err, data) => {
    if (err) res.status(500).send(err);
    else res.send("Alert sent successfully!");
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
