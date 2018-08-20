//insert new entry
db.doners.insert({
    name: 'bala',
    email: 'test@test.com',
    amount: 50
})


// aggregate results
db.doners.aggregate(
    [
      {
        $group:
          {
            _id: null,
            totalAmount: { $sum: "$amount" },
            count: {$sum: 1}
          }
      }
    ]
 )