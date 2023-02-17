pipeline{
  agent any

  stages{
      stage('Build'){
          steps{
              echo 'Building...'
          }
      }    
      stage('Test'){
          steps{
              echo 'Testing...'
          }
      }    
      
    
      stage('deploy to S3'){
          steps{
              echo 'Deploying...'
              //bat "set"
              bat "aws configure set region $AWS_REGION"
              bat "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"
              bat "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
              //echo 'Accessing S3 bucket : '
              bat "$BUCKET_NAME"
              bat "aws s3 cp ./ s3://qryummydemo"
              //bat "aws s3 cp C:/Users/gayathri/Downloads/qryummylive-main/index.html s3://qryummydemo"
              //s3Upload(file:'index.html', bucket:'qryummydemo', path:'./index.html')

            

          }
      }
  }
      post{
        success{
              echo 'success'
        }
        failure{
              echo 'failure'
        }
      
      
      }
  
  
}
