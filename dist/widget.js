riot.tag2('widget', '<> <h1>Hello World</h1>', 'h1widget,h1[data-is="widget"]{ color: red; }', '', function(opts) {
    this.on('mount', () => {
      console.log('widget mounted!')
    })
});
