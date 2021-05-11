function generateRandomizedObject() {
    return {
      x: Math.floor(Math.random() * 500 + 1),
      y: Math.floor(Math.random() * 500 + 1),
      timestamp: new Date(),
      moistureIndex: Math.floor(Math.random() * 100 + 1)
    }
}

export { generateRandomizedObject }
