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
              bat "set"
              bat "aws configure set region $AWS_REGION"
              bat "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"
              bat "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
              echo 'Accessing S3 bucket : qryummydemo'
              bat "aws s3 cp ./index.html ./home-slide-1.jpg ./style.css s3://qryummydemo"
            
              //bat "aws s3 cp ./Restaurant-1/about.html s3://qryummydemo/Restaurant-1/about.html"
              bat "aws s3 cp --recursive ./Restaurant-1 s3://qryummydemo/Restaurant-1"
              
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
