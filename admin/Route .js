// শুধু admin এর জন্য
app.post('/api/edit-service', isAdmin, (req, res) => {
  // সার্ভিস এডিট করার লজিক
});

app.delete('/api/delete-service/:id', isAdmin, (req, res) => {
  // সার্ভিস ডিলিট করার লজিক
});
