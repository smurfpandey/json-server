function cleanup() {
    var fs = require('fs')
    var file = 'db.json'
    fs.writeFileSync(file, JSON.stringify({
        contacts: [],
        bookings: []
    }), 'utf-8')
}

cleanup();