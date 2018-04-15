<{{name}}>
  <h1>Hello World</h1>
  <script>
    this.on('mount', () => {
      console.log('widget mounted!')
    })
  </script>
  <style>
    :scope {
      color: blue;
    }
    h1 {
      font-weight: bold;
    }
  </style>
</{{name}}>
