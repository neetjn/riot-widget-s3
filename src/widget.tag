<{{name}}>
  <>
  <h1>Hello World</h1>
  <script>
    this.on('mount', () => {
      console.log('widget mounted!')
    })
  </script>
  <style>
    h1:scope {
      color: red;
    }
  </style>
</{{name}}>
