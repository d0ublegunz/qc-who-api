export default (app, db) => {
  app.get('/photo/id/:id', (req, res) => {
    const { id } = req.params;
    db.get(id);
    res.send(id);
  });

  app.post('/photo', (req, res) => {
    const { pic } = req.body;
    console.log('req body: ', req);
    res.send(pic);
  });
};
