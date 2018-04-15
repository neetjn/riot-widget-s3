riot.tag2('widget', '<h1>Hello World</h1>', 'widget,[data-is="widget"]{ color: blue; } widget h1,[data-is="widget"] h1{ font-weight: bold; }', '', function(opts) {
    this.on('mount', () => {
      console.log('widget mounted!')
    })
});
