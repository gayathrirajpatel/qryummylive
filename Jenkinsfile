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
