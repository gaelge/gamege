pipeline {
  agent any
    
  stages {

    stage('Build') {
      steps {
        // Construction
        sh 'npm i'
      }
    }  
    
    stage('Test') {
      steps {
        // Testing
        sh 'npm run test'
      }
    }

    stage('Docker') {
      steps {
        // Création de l'image docker
        sh 'npm run test'
        sh 'npm run test'
      }
    }

    stage('DockerHub') {
      steps {
        // Publication sur le docker hub
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
      }
    }

    stage('Kubernetes') {
      steps {
        // Déployement avec kubernetes
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
        sh 'npm run test'
      }
    }
  }
}
