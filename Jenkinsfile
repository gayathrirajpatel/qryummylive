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
              bat "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
              //sh 'Accessing S3 bucket : ${bucket-name}'
              bat "aws s3 cp ./index.html s3://qryummylive.com"

            

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
