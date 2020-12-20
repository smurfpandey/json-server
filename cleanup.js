function cleanup() {
  const fs = require('fs')
  const file = 'db.json'
  fs.writeFileSync(
    file,
    JSON.stringify({
      contacts: [],
      bookings: [],
    }),
    'utf-8'
  )
}

cleanup()
