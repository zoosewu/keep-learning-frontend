pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh '''npm test
npm lint'''
      }
    }

    stage('build') {
      steps {
        sh 'npm build'
      }
    }

  }
}