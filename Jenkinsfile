pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs('nodejs16.20.2') {
          sh '''npm ci
npm test
npm run lint'''
        }

      }
    }

    stage('build') {
      steps {
        nodejs('nodejs16.20.2') {
          sh 'npm build'
        }

      }
    }

  }
}