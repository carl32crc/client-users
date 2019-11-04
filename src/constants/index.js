const api =  {
  port: 8888,
  get apiUrl() { return `http://localhost:${this.port}/api/` }
}
  
export { api }