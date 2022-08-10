pipeline{
    agent any
    environment{
        scannerHome = tool 'Sonarscanner_net'
        dockerHome = tool 'mydocker' 
        nodeHome = tool 'Nodejs1' 
        PATH = "$dockerHome/bin:$nodeHome/bin:$PATH"
        mavenHome = tool 'MyMaven' 
    }
    stages{
        stage('Checkout'){
            steps {
                  echo 'Starting code check out'
                  git branch: 'jenkins-devops-hello-world-node', url: 'https://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@github.com/ravindrahbtik11/'
                  //git 'https://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@github.com/ravindrahbtik11/jenkins-devops-hello-world-node.git'
                  echo 'Code check out Finished'
            }
        }
        stage('Build'){
            steps {
                 echo 'Building'
                 sh 'npm i'
            }
        }

        stage('test'){
            steps {
                 echo 'test'
                 sh 'npm test'
            }
        }
        //  stage('Integration Test'){
        //     steps {
        //          echo 'Integration Test'
        //     }
        // }
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