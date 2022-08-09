pipeline{
    agent any
    stages{
        stage('Build'){
            steps {
                 echo 'Build'
            }
           
        }
        stage('Test'){
            steps {
                 echo 'Test'
            }
        }
         stage('Integration Test'){
            steps {
                 echo 'Integration Test'
            }
        }
    }
    post{
        always{
            echo 'I am awsome. I run always'
        }
        success{
            echo 'I run when you are Successful'
        }
        failure{
            echo 'I run when you are fail.'
        }
    //    changed{
    //         echo 'I run when you are fail.'
    //     }
    }
    
}