import boto3

def lambda_handler(event, context):
    sns = boto3.client('sns')
    sns.publish(
        TopicArn='arn:aws:sns:ap-south-1:YOUR_ACCOUNT_ID:DisasterAlerts',
        Message='🚨 Earthquake Detected in Delhi!',
        Subject='Disaster Alert'
    )
    return {'status': 'Alert Sent'}
