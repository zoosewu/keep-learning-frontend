pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs(nodeJSInstallationName: 'nodejs', configId: '0') {
          sh '''npm ci
npm test
npm run lint'''
        }

      }
    }

    stage('build') {
      steps {
        nodejs('nodejs') {
          sh 'npm build'
        }

      }
    }

  }
}