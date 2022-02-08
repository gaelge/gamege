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

    stage('Docker') {
      steps {
        // 
        sh 'docker build -t gaelge/gamege:1.0.0 .'
      }
    }

    stage('DockerHub') {
      steps {
        // 
        sh 'docker push gaelge/gamege:1.0.0'
      }
    }

    stage('Kubernetes') {
      steps {
        // 
        sh 'kubectl create deployment my-game --image=gaelge/gamege:1.0.0'
      }
    }
  }
}
