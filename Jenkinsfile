pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs16.20.2', configId: '0') {
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