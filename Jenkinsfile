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
        sh 'docker build -t gaelge/gamege:1.0.0 .'
      }
    }

    stage('DockerHub') {
      steps {
        // Publication sur le docker hub
        sh 'docker push gaelge/gamege:2.0.0'
      }
    }

    stage('Kubernetes') {
      steps {
        // Déployement avec kubernetes
        sh 'kubectl create deployment my-game --image=gaelge/gamege:1.0.0'
      }
    }
  }
}
