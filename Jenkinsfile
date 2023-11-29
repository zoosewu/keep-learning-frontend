pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs('test') {
          sh '''npm test
npm lint'''
        }

      }
    }

    stage('build') {
      steps {
        nodejs('build') {
          sh 'npm build'
        }

      }
    }

  }
}