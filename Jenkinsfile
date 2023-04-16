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
              echo 'Accessing S3 bucket : team3-qryummy-qa-env'
              bat "aws s3 cp ./index.html s3://team3-qryummy-qa-env/index.html"   
              bat "aws s3 cp ./home-slide-1.jpg s3://team3-qryummy-qa-env/home-slide-1.jpg"
              bat "aws s3 cp ./style.css s3://team3-qryummy-qa-env/style.css"
            
              //bat "aws s3 cp ./Restaurant-1/about.html s3://qryummydemo/Restaurant-1/about.html"
              bat "aws s3 cp --recursive ./Restaurant-1 s3://team3-qryummy-qa-env/Restaurant-1"
              
              //bat "aws s3 cp C:/Users/gayathri/Downloads/qryummylive-main/index.html s3://qryummydemo"
              //s3Upload(file:'index.html', bucket:'qryummydemo', path:'./index.html')
            emailext body: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'

               slackSend(username : "Team3_JenkinsAdmin" , color: "good" , channel: "team3", message: "Build Successful:  ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", sendAsText: true)


          }
      }

  }
          
  
      post{
        
//          always {

//         }
        success{
              echo 'success'
//                           emailext body: '$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'


        }

        failure{
              echo 'failure'
        }
      
      
      }
          
  
  
}
