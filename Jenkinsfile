pipeline {
  agent any
    
  stages {

    stage('Build') {
      steps {
        // 
        sh 'npm i'
      }
    }  
    
    stage('Test') {
      steps {
        // 
        sh 'npm run test'
      }
    }

    stage('Deployment on minikube') {
      steps {
        // 
        sh 'ls'
      }
    }
  }
}