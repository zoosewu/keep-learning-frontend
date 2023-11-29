pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs(nodeJSInstallationName: 'test', configId: '0') {
          sh '''npm ci
npm test
npm run lint'''
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