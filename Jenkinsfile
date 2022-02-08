pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git clone 'https://github.com/gaelge/gamege'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}